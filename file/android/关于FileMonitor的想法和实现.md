# 0x00 前言

Android为我们提供了很多好用的工具，以便我们能从各个角度来分析查找出App中的缺陷。

比如UI优化的Hierarchy Viewer、方法检测的TraceView、内存泄漏的Mat。

但是发现Android常用的工具里面对IO操作分析监控工具比较少，或者说没有？

已知的检测IO的StrictMode也只能检测主线程的磁盘操作，对于IO的分析及优化是不能达到的。

所以就萌生了自己实现一个IO监控工具的想法。
<!-- more -->

# 0x01 目标

有了想法，但也不要着急去做，首先要去细化要实现什么样的功能？

这里IO监控暂时只想监控文件IO，不包括sqlite。

想实现：

- 监控文件的打开、读写、关闭状态、次数及耗时。
- 当前操作文件的线程、进程及堆栈信息
- 当前文件路径

# 0x02 尝试

## 文件IO流程简单分析

很多多黑科技的实现不过是**动态代理**的具体应用。

要做文件IO监控，首先查看文件从Java到Native的流程。

看看能不能从中找到hook点。

我们知道文件的操作都是通过流来完成，

所以我随便点开了个`FileOutputStream`源码，看看里面`write`方法如何实现的：

![image-20191102175146704](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/%E6%96%87%E4%BB%B6%E7%9B%91%E6%8E%A7-write%E6%96%B9%E6%B3%95.png)

让人蛋疼的情况出现了，这刚走一步，就出现了框架类`IoBridge`，通过应用层不能继续深入源码了。

所以只能通过Android源码里去分析，源码位置为：

`E:\AndroidSource\Android-8.0.0_r9\libcore\luni\src\main\java\libcore\io\IoBridge.java`

其`write`方法为：

```java
    public static void write(FileDescriptor fd, byte[] bytes, int byteOffset, int byteCount) throws IOException {
        Arrays.checkOffsetAndCount(bytes.length, byteOffset, byteCount);
        if (byteCount == 0) {
            return;
        }
        try {
            while (byteCount > 0) {
                int bytesWritten = Libcore.os.write(fd, bytes, byteOffset, byteCount);
                byteCount -= bytesWritten;
                byteOffset += bytesWritten;
            }
        } catch (ErrnoException errnoException) {
            throw errnoException.rethrowAsIOException();
        }
    }
```

这里的核心部分就是`Libcore.os.write(fd, bytes, byteOffset, byteCount);`

进去看看这个`Libcore`的实现：

```java
public final class Libcore {
    private Libcore() { }

    /**
     * Direct access to syscalls. Code should strongly prefer using {@link #os}
     * unless it has a strong reason to bypass the helpful checks/guards that it
     * provides.
     */
    public static Os rawOs = new Linux();

    /**
     * Access to syscalls with helpful checks/guards.
     */
    public static Os os = new BlockGuardOs(rawOs);
}
```

可以看到`LibCore`的实现非常简单，所以可以确定干货都在`OS`里面。

这个`OS`其实是个接口，里面定义了所有对于文件操作，方法比较多，这里随便找几个方法看看：

```java
public interface Os {
    public FileDescriptor accept(FileDescriptor fd, SocketAddress peerAddress) throws ErrnoException, SocketException;
    public void chmod(String path, int mode) throws ErrnoException;
    public int pread(FileDescriptor fd, ByteBuffer buffer, long offset) throws ErrnoException, InterruptedIOException;
    public int pread(FileDescriptor fd, byte[] bytes, int byteOffset, int byteCount, long offset) throws ErrnoException, InterruptedIOException;
    public int pwrite(FileDescriptor fd, ByteBuffer buffer, long offset) throws ErrnoException, InterruptedIOException;
    public int pwrite(FileDescriptor fd, byte[] bytes, int byteOffset, int byteCount, long offset) throws ErrnoException, InterruptedIOException;
    public int read(FileDescriptor fd, ByteBuffer buffer) throws ErrnoException, InterruptedIOException;
    public int read(FileDescriptor fd, byte[] bytes, int byteOffset, int byteCount) throws ErrnoException, InterruptedIOException;
    public void rename(String oldPath, String newPath) throws ErrnoException;
    public int write(FileDescriptor fd, ByteBuffer buffer) throws ErrnoException, InterruptedIOException;
    public int write(FileDescriptor fd, byte[] bytes, int byteOffset, int byteCount) throws ErrnoException, InterruptedIOException;
    public int writev(FileDescriptor fd, Object[] buffers, int[] offsets, int[] byteCounts) throws ErrnoException, InterruptedIOException;
}

```

既然`OS`是接口，那自然就有实现类，看下它的继承关系图：

![image-20191102181510086](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/%E6%96%87%E4%BB%B6%E7%9B%91%E6%8E%A7-OS%E7%BB%A7%E6%89%BF%E5%9B%BE.png)

其中`Linux`里面是`native`方法，调用JNI层。

刚才看到`Libcore`的`os`是这样的：

`public static Os os = new BlockGuardOs(rawOs);`

所以`Libcore.os.write`方法其实调用的是`BlockGuardOs`中的方法，进去看看内容：

```java
    @Override public int write(FileDescriptor fd, ByteBuffer buffer) throws ErrnoException, InterruptedIOException {
        BlockGuard.getThreadPolicy().onWriteToDisk();
        return os.write(fd, buffer);
    }
```

这里又调用了`os.write`方法。

这个`os`变量就是`public static Os os = new BlockGuardOs(rawOs);`中的`rawOs`。

也就是说从这开始进入`native`方法了，看下实现：

```java
public int write(FileDescriptor fd, ByteBuffer buffer) throws ErrnoException, InterruptedIOException {
        final int bytesWritten;
        final int position = buffer.position();
        if (buffer.isDirect()) {
            bytesWritten = writeBytes(fd, buffer, position, buffer.remaining());
        } else {
            bytesWritten = writeBytes(fd, NioUtils.unsafeArray(buffer), NioUtils.unsafeArrayOffset(buffer) + position, buffer.remaining());
        }

        maybeUpdateBufferPosition(buffer, position, bytesWritten);
        return bytesWritten;
    }
    public int write(FileDescriptor fd, byte[] bytes, int byteOffset, int byteCount) throws ErrnoException, InterruptedIOException {
        // This indirection isn't strictly necessary, but ensures that our public interface is type safe.
        return writeBytes(fd, bytes, byteOffset, byteCount);
    }
    private native int writeBytes(FileDescriptor fd, Object buffer, int offset, int byteCount) throws ErrnoException, InterruptedIOException;
    public native int writev(FileDescriptor fd, Object[] buffers, int[] offsets, int[] byteCounts) throws ErrnoException, InterruptedIOException;

```

通过`write`调用了`native`方法的`writeBytes`。

至此，流程就简单分析完了。

## 寻找hook点

Java层流程分析完了，接下来就是在Java层寻找hook点。

如果没有合适点，再去寻找Native层。

因为我们要统计open、close、read、write四个地方。

所以一个不错的方案是自定义一个类`BlockGuardOSProxy`继承`ForwardingOs`,实现我们需要的方法，

然后找个合适的点，用我们的类替换掉系统的类，当对文件IO操作时，会回调到我们类重写的方法。

在我们的方法中添加相关分析，然后继续调用系统层，让流程继续，这是代理思想。

可以看下时序图：

![image-20191102185450269](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/%E6%96%87%E4%BB%B6%E7%9B%91%E6%8E%A7-%E5%8E%9F%E6%97%B6%E5%BA%8F%E5%9B%BE.png)



刚才我们看到`Libcore`中`os`变量是`public`的。

所以我们可以把这个`os`变量变成我们的`BlockGuardOSProxy`。然后在我们方法里面调用`BlockGuardOs`。

这样既拦截了我们想要的方法，又不会影响流程。这样最新流程就是这样的：

![image-20191102185845650](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/%E6%96%87%E4%BB%B6%E7%9B%91%E6%8E%A7-%E6%96%B0%E6%97%B6%E5%BA%8F%E5%9B%BE.png)



## 如何修改

经过上面的分析，已经基本找到了hook点。接下来如何修改呢？

```java
Libcore.os = BlockGuardOSProxy(Libcore.os)
```

在`Application`方法里加上这样一句应该就可以完成替换了。

其余的工作只要在`BlockGuardOSProxy`处理就好了。

但是现在又要面临一个问题，就是`Libcore`和`ForwardingOs`这些类在应用层不存在不能编译通过。

看看源码结构图：

![image-20191102190806076](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/%E6%96%87%E4%BB%B6%E7%9B%91%E6%8E%A7-libcore%E4%BB%A3%E7%A0%81%E6%88%AA%E5%9B%BE.png)

通过源码结构图发现里面有`src`目录，这分明也是一个小项目类型。

所以这里面的代码应该是独立能编译的。

既然都是java代码那我们也就可以打成一个jar包。

jar包有了，放到我们的项目libs下就可以了。

不过其实不用我们自己动手打包，网上有现成的，也可以从自己ROM中提取，位置是：

`/system/framework/core-libart.jar`

至此，文件IO监控已经完成，我们只使用了简单的静态代理。

# 0x03 测试

很多时候很多数据是需要缓存的，

一般的缓存不是存sqlite就是File缓存。

而对于不涉及隐私安全的，使用File缓存可以得到更好的性能。

比如微博每条动态，谁都可以看，所以缓存时使用File缓存也可以。

我们自定义一个数据类：

```kotlin
data class WBItem(var textContent: String? = null,
                  var imgUrl: String? = null,
                  var good: Int = 0) : Serializable
```

对象序列化使用`ObjectOutputStream`，现在我们把200条信息缓存到本地File：

```kotlin
    private fun writeWBItemWithoutBuffer() {
        thread {
            val dir = Environment.getExternalStorageDirectory()
            val mdir = File("${dir.path}${File.separator}monitor")
            val file1 = File("${mdir.path}${File.separator}wb.cache")
            if (checkFile()) {
                LogUtils.e(file1.path)
                val fos: OutputStream = FileOutputStream(file1)
                val data = arrayListOf<WBItem>()
                val oos = ObjectOutputStream(fos)
                for (i in 0..200) {
                    val wbItem = WBItem().apply {
                        textContent = "这是文本内容--$i"
                        imgUrl = "这是图片url--$i"
                        good = i//点赞数
                    }
                    data.add(wbItem)
                }
                oos.writeObject(data)
                oos.flush()
                oos.close()
                fos.close()
            }
        }
    }
```

打印Log如下：

```
FileWrap(fdInt=59, fd=java.io.FileDescriptor@b5e92d3, 
pid=12323, tid=12371, mode=1, 
path=/storage/emulated/0/monitor/wb.cache, 
openTime=1572695396436, closeTime=1572695396532, 
process=null, thread=Thread-2, 
readCount=0, readBytes=0, readTime=0, 
writeCount=611, writeBytes=11793, writeTime=96, stacktrace=java.io.FileOutputStream.write(FileOutputStream.java:381)
    java.io.ObjectOutputStream$BlockDataOutputStream.drain(ObjectOutputStream.java:1973)
    java.io.ObjectOutputStream$BlockDataOutputStream.setBlockDataMode(ObjectOutputStream.java:1855)
    java.io.ObjectOutputStream.<init>(ObjectOutputStream.java:253)
    top.jenson.filemonitor.MainActivity$writeWBItemWithoutBuffer$1.invoke(MainActivity.kt:116)
    top.jenson.filemonitor.MainActivity$writeWBItemWithoutBuffer$1.invoke(MainActivity.kt:12)
    kotlin.concurrent.ThreadsKt$thread$thread$1.run(Thread.kt:30)
    )
```

其中：

`path`表示操作的文件路径

通过`closeTime`-`openTime`可以计算出文件耗时。

`stacktrace`表示调用堆栈，可以快速定位到问题位置。

`readCount`表示读取次数，我们这里是写对象，自然为0了。

`writeCount`表示写入次数，这里显示611次，200个对象写入这么多次？？？，

后来查证，好像每个对象的每个属性都要被写入一次，再加上系统一些附加的。那就差不多了。

不过这也就说明了200个对象，10多kb文件，写入如此高的次数是需要优化的。

下面看看使用了buffer后的代码实现：

```kotlin
private fun writeWBItemWithBuffer() {
        thread {
            val dir = Environment.getExternalStorageDirectory()
            val mdir = File("${dir.path}${File.separator}monitor")
            val file1 = File("${mdir.path}${File.separator}wb.cache")
            if (checkFile()) {
                LogUtils.e(file1.path)
                val fos: OutputStream = FileOutputStream(file1)
                val data = arrayListOf<WBItem>()
                val bos = ByteArrayOutputStream()
                val oos = ObjectOutputStream(bos)
                for (i in 0..200) {
                    val wbItem = WBItem().apply {
                        textContent = "这是文本内容--$i"
                        imgUrl = "这是图片url--$i"
                        good = i
                    }
                    data.add(wbItem)
                }
                oos.writeObject(data)
                oos.flush()
                bos.writeTo(fos)
                bos.flush()
                bos.close()
                oos.close()
                fos.close()
            }
        }
    }
```

优化后的Log打印如下：

```
FileWrap(fdInt=59, fd=java.io.FileDescriptor@17f3d09, 
pid=12653, tid=12696, mode=1, 
path=/storage/emulated/0/monitor/wb.cache, 
openTime=1572695907143, closeTime=1572695907144, 
process=null, thread=Thread-2, 
readCount=0, readBytes=0, readTime=0, 
writeCount=1, writeBytes=11793, writeTime=1, stacktrace=java.io.FileOutputStream.write(FileOutputStream.java:381)
    java.io.ByteArrayOutputStream.writeTo(ByteArrayOutputStream.java:167)
    top.jenson.filemonitor.MainActivity$writeWBItemWithBuffer$1.invoke(MainActivity.kt:154)
    top.jenson.filemonitor.MainActivity$writeWBItemWithBuffer$1.invoke(MainActivity.kt:12)
    kotlin.concurrent.ThreadsKt$thread$thread$1.run(Thread.kt:30)
```

可以看到优化后的`writeCount=1`。

未优化的耗时计算为：1572695396532-1572695396436=‭96‬

优化后的耗时计算为：1572695907144-1572695907143=1



其实不仅对象序列化，其他的文件缓存也都可以监控并发现问题点。

感谢：

[【个人笔记一】ART系统类的编译解析加载探究]( https://www.twblogs.net/a/5b8aaa392b71775d1ce866c1/zh-cn )

[android 从java到C层文件读取流程]( https://blog.csdn.net/zhu929033262/article/details/51496809 )

[剖析 Android ART Runtime (2) – dex2oat]( https://mssun.me/blog/android-art-runtime-2-dex2oat.html )