### 协程介绍

#### 协程支持添加

Kotlin基础库中没有包含协程库，所以使用协程库需要单独添加。

Android项目添加协程支持：

- 项目的build.gradle文件中添加协程版本

  ```groovy
  buildscript {
      ext.kotlin_version = '1.3.20'
      ext.anko_version = '0.10.8'
      ext.coroutine_version = '1.1.1'
      repositories {
          jcenter()
          google()
      }
      dependencies {
          classpath 'com.android.tools.build:gradle:3.1.3'
          classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
      }
  }
  ```

  

- 在模块中添加协程库依赖

  ```groovy
  dependencies {
      implementation fileTree(dir: 'libs', include: ['*.jar'])
      implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version"
      implementation "org.jetbrains.kotlinx:kotlinx-coroutines-core:$coroutine_version"
      implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:$coroutine_version"
  }
  ```

  

#### 协程启动方式

##### runBlocking()

一般用在main方法和单元测试。阻塞线程直到协程运行完毕。

```kotlin
fun main() = runBlocking {
}
```

##### launch()

只返回Job对象，无法自定义返回对象。

```kotlin
    val job = GlobalScope.launch {
    }
```

##### async()

返回Deferred<T>泛型对象，允许自定义返回对象，适用于带返回结果的请求。

```kotlin
 val deff = GlobalScope.async<People> {
        val p = People()
        return@async p
    }
```



### 协程生命周期

协程和线程一样是有生命周期的，

协程这里介绍6种生命周期及状态(《Learning Concurrency in Kotlin》一书中说有5中，而《mastering-high-performance-kotlin》和《hands-design-patterns-kotlin》两本书中介绍说有6种，多出`Completing `：Waiting to finish executing children before completing )

Deferred继承于Job，所以其生命周期是一致的。

#### NEW

创建job对象但没有执行。

正常情况使用launch创建job后自动运行了，
要让其不自动运行可使用 ：` CoroutineStart.LAZY`，

##### 如何运行延迟的Job：

通过 `start()`或`join()`方法执行job：

```kotlin
val job = GlobalScope.launch(start = CoroutineStart.LAZY) {
}
job.start()
//job.join()
```

#### Active

调用`start()`方法后处于Active状态。

#### Cancelling

调用cancel()方法后，但是没有取消完成，取消是需要时间的，该状态介于Active和Cancelled，可以认为这是一个瞬时状态。

##### 如何取消Job：

| job.cancel()                              |                                                        |
| ----------------------------------------- | ------------------------------------------------------ |
| job.cancel(cause = Exception("Timeout!")) |                                                        |
| job.cancelAndJoin()                       | 像名字说的那样，取消运行并且阻塞当前协程直到完成取消。 |

#### Cancelled

完成取消，成功取消的Job也可以看成是Completed

#### Completeing

Deferred获得结果完成计算前。

#### Completed

执行完成。

任何已停止的job都可以看成是completed。
它适用于任何正常结束、取消或异常结束情况。
由此可见，cancelled 状态可以看成是completed的一个子状态。

### 挂起函数

`suspend`修饰的方法为挂起函数

挂起函数只能被其他挂起函数调用，不能直接在普通函数中调用，否则编译不过。

挂起函数能直接调用其他挂起函数 比如delay()，不需要再包裹内部协程，使代码整洁、易读。

### 协程上下文

就像Android运行期间有Context上下文，协程运行期间也有上下文叫：`CoroutineContext`。

这是一个接口，有很多实现类。比如CoroutineDispatcher、CoroutineExceptionHandler。

#### Dispatcher

协程可以看成是轻量级线程。一个线程可以运行多个协程，这就需要调度器来负责调度控制。

| 常量使用               | 描述                 |
| ---------------------- | -------------------- |
| Dispatcher.Default     | 默认调度器           |
| Dispatchers.Main       | 适用于Android UI线程 |
| Dispatchers.Unconfined |                      |
| Dispatchers.IO         |                      |



##### CommonPool

commonPool是一个由FrameWork自动创建的计算密集型线程池。它的最大数量是cpu核心数减一。
现在，它作为默认的调度器使用。

要使用默认调度器，只要不设置新的调度器就可以。

##### Unconfined

这个调度器会使协程运行在当前线程，除非到达了第一个挂起点。
挂起后，会在挂起时调用的挂起计算所使用的线程中恢复协程。

##### Single thread context

这个调度器确保在任何时候，协程都运行在一个指定线程。
可使用`newSingleThreadContext(name="xxx")`创建该调度器：

```kotlin
private val single = newSingleThreadContext("single")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        GlobalScope.launch(context = single) {
        }
    }
```



##### Thread pool

这个调度器持有一个线程池，开始和恢复的协程都会运行在线程池中可用的线程。
运行时环境负责决定哪个线程可用，也决定如何分配负载，作为程序员的我们不需要考虑其他工作。

```kotlin
private val dispatcher = newFixedThreadPoolContext(4, "myPool")

   override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        GlobalScope.launch(context = dispatcher) {
        }
    }
```



#### 异常处理

有代码的地方就有异常，Kotlin协程出现异常时并不会导致其所在线程整体崩溃，其影响范围只是出现异常所在协程本身。

关于异常Job和Deferred有不同的处理方式：`Job直接抛出异常，而Deferred则吞噬异常`，由于异常吞噬所以如果没有良好的异常处理手段，异常信息不会抛出到log造成难以调试的结果。

##### Deferred吞噬异常

Job：

```kotlin
 val job = GlobalScope.launch {
        TODO()
    }
```

直接抛出异常：

Exception in thread "DefaultDispatcher-worker-1" kotlin.NotImplementedError: An operation is not implemented.

Deferred：

```kotlin
    val deff = GlobalScope.async<People> {
        TODO()
    }
```

则执行成功：Process finished with exit code 0，其异常信息被封装在返回值中而不会被捕获并打印出来。

##### Deferred抛出异常

通过Deferred的 await() 方法可以使其直接抛出异常：

```Kotlin
val deff = GlobalScope.async<People> {
        TODO()
    }
 deff.await()
```

##### getCancellationException()获取异常信息

取消一个job后，可以通过getCancellationException()方法获取cancel信息。
这个函数会返回CancellationException，如果设置了的话，通过它可以获取造成cancel异常的原因。

代码如下：

```kotlin
job.cancel(cause = Exception("Tired of waiting"))//设置cancel的异常信息
val cancellation = job.getCancellationException()
cancellation.cause // Exception("Tired of waiting")
```

##### invokeOnCompletion()获取异常信息

通过调用job的invokeOnCompletion()方法，获取异常信息。

```kotlin
 GlobalScope.launch {
        TODO("没有实现")
    }.invokeOnCompletion { cause: Throwable? -> cause?.let { println(cause.message) } }
```



##### 设置CoroutineExceptionHandler

协程上下文另一个重要用途是定义未捕获异常行为。可以通过CoroutineExceptionHandler创建这种上下文。

```kotlin
val exceptionHandler = CoroutineExceptionHandler { _: CoroutineContext, throwable: Throwable ->
        println("Job cancelled due to ${throwable.message}")
    }
GlobalScope.launch(context = exceptionHandler) {
        TODO("Not Implemented!")
}
```



#### 混合上下文

上面可以知道通过设置协程的`context`参数可以设置调度器和异常处理。但是如果两者都想设置怎么办，设置完了之后又想从中移除某个又如何？

Kotlin为我们提供了`Combining contexts`和`Separating contexts`,可以说是考虑很周到了。

##### 组合上下文

使用+操作符组合多个context为一个多功能混合context：

比如设置一个单线程调度器和异常处理：

```kotlin
    val singleThreadContext = newSingleThreadContext("single")
    val exceptionHandlerContext = CoroutineExceptionHandler { _: CoroutineContext, throwable: Throwable ->
        println("Job cancelled due to ${throwable.message}")
    }
//使用+号 Combining contexts
    val context = singleThreadContext + exceptionHandlerContext
    GlobalScope.launch(context = context) {
        TODO("Not Implemented!")
    }
```



##### 分离上下文

通过`CoroutineContext.minusKey`移除指定上下文：

```Kotlin
    //接上面内容
    val lastContext = context.minusKey(singleThreadContext.key)

```



### 协程间通信--Channel

由于共享内存状态，所以多线程是比较难理解也比较容易出错的地方，为此Kotlin提供了Channel代替共享内存帮助我们编写协程高并发代码。

通道是并发代码之间安全通信的工具。它们允许并发代码通过发送信息进行通信。
通道可以看成是不同协程间安全发送和接受信息的管道，不管他们运行在哪个线程。

#### 无缓冲通道

##### RendezvousChannel

目前唯一一个无缓冲通道是RendezvousChannel。这个通道实现类没有缓冲，所以调用send()后将会挂起直到接收者使用通道调用receive()。

该类为internal修饰，只有其模块可见，我们只能通过Channel基类创建其实例。

创建实例：

```kotlin
    val channel = Channel<Int>()
    val channel = Channel<Int>(0)
    val channel = Channel<Int>(Channel.RENDEZVOUS)
```



#### 有缓冲通道

##### LinkedListChannel

无限(Int.MAX_VALUE)缓冲的通道。当通道中数据量达到缓冲区大小时，这个通道会挂起发送者代码。

创建实例：

```kotlin
    val channel = Channel<Int>(Channel.UNLIMITED)
```



##### ArrayChannel

缓冲大小介于0到Int.MAX_VALUE-1，当元素数量达到缓冲大小时会挂起sender。
可以通过调用Channel为其设置一个小于Int最大值的正数作为参数来实例化数组通道。
当缓冲满的时候会挂起sender，当有至少一组数据被接受时候会恢复。

创建实例：

```kotlin
    val channel = Channel<Int>(22)
```



##### ConflatedChannel

这是第三种类型的缓冲通道。

这种通道只有一个元素大小的缓冲，当发送一个新元素时，上一个元素就会丢失，发送的元素丢了也没关系。
这也就意味着发送者永远不会被挂起。

创建实例：

```kotlin
    val channel = Channel<Int>(Channel.CONFLATED)
```

#### 发送通道常用方法

##### channel.isClosedForSend

##### channel.isFull 

##### channel.send(1)

##### channel.offer(2)

非挂起函数，允许你在某些情况下通过通道发送元素。
这个offer()函数接受一个元素尝试加入到队列 并返回boolean值或根据通道状态抛出异常。

如果通道关闭，offer()出现异常：

如果缓冲满了，offer会返回false：

如果通道打开并且没有充满，offer()会把元素添加到队列。
这是唯一一种像通道添加元素而又不挂起的方法。

#### 接收通道常用方法

##### channel.isClosedForReceive

##### channel.receive()

##### channel.isEmpty



### Thread Confinement, Actors, and Mutexes

#### Thread Confinement

线程限制意味着限制访问共享状态的所有协程，以便它们在单个线程上执行。
也就是说状态不再是线程间共享的了：只有一个线程允许修改状态。

```kotlin
var counter = 0
val context = newSingleThreadContext("counter")
fun asyncIncrement(by: Int) = async(context) {
    for (i in 0 until by) {
    counter++
    }
}
```



#### Actor

Actor这个东西不太明白如何翻译过来。不过通过源码可以看到：

Actor是协程和Channel的组合体：其返回值是SendChannel，block中有个ReceiveChannel。

其他协程通过返回值的SendChannel发送消息，而后block中的ReceiveChannel接收消息并做处理：

```kotlin
var counter = 0

val sendChannel = GlobalScope.actor<Int> {
    for (i in channel) {
        counter++
    }
}

fun asyncIncrement(by: Int) = GlobalScope.async {
    for (i in 0 until by) {
        sendChannel.send(1)
    }
}

fun main() = runBlocking {
    asyncIncrement(2000)
    asyncIncrement(1000)
    delay(3000)
    println("counter==${counter}")
    delay(2000)
}
```



#### Mutexes

互斥是指一种同步机制，它保证一次只有一个协程可以执行一段代码。

Kotlin互斥最重要的特性是它们没有阻塞：等待执行的协程将暂停，直到它们获得锁并执行代码块为止。 

`withLock`使用：

```kotlin
val mutex = Mutex()
var counter = 0

fun asyncIncrement(by: Int) = GlobalScope.async {
    for (i in 0 until by) {
       mutex.withLock {
           counter++
       }
    }
}

fun main() = runBlocking {
    asyncIncrement(2000)
    asyncIncrement(1000)
    delay(3000)
    println("counter==${counter}")
    delay(2000)
}
```

如果想要更灵活的控制，可以使用`lock() `和`unLock()`。



#### Volatile 

为了强制让更新对其他线程立即可见，我们可以使用注解@Volatile：