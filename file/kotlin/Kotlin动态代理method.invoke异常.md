### 前言

在使用Kotlin做动态代理时候，重写`InvocationHandler`类的`invoke`方法时，

执行`method.invoke`过程中一直出现异常。

异常日志可能有多种情况：

如果没有参数时，信息如下：

**java.lang.IllegalArgumentException: wrong number of arguments
    at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)**

有参数时，信息根据参数类型可能有不同，如下：

**argument 1 has type android.os.IBinder, got java.lang.Object[]**

意思就是参数没有对上。



### 解决

`invoke`方法中第二个参数为可变长参，在Java中使用***...***表示

> Kotlin 的可变参数与 Java 类似，但语法略有不同：
> Kotlin 在该类型之后不会再使用 三个点，而是在参数上使用 `vararg` 修饰符 。
> Kotlin 和 Java 之间的另 一 个区别是，当需要传递的参数己经包装在数组中时，
> 调用该函数的语法 ，在 Java 中，可以按原样传递数组，而 Kotlin 则要求你显式地解
> 包数组，以便每个数组元素在函数中能作为单独的参数来调用 。 

从技术的角度来讲，这个功能被称为展开运算符，而使用的时候，不过是在对应的参数前面放一个`*`:

```kotlin
fun main(args: Array<String〉）｛
	val list = listOf("args:",*args)
	println(list)
}
```



当然使用`*`解包的前提是`args`不为空，

而在动态代理中代码如下：

```kotlin
class ProxyHandler(var target: Any) : InvocationHandler {

    override fun invoke(proxy: Any?, method: Method?, args: Array<out Any>?): Any? {
        Log.e("invoke", "代理开始")
        Log.e("invoke", "代理方法：${method?.name}")
        var result = method?.invoke(target, args)
        Log.e("invoke", "代理结束")
        return result
    }
}
```

可见动态代理中`args`是Nullable的，所以不能直接解包，

这里引入了Elvis运算符`?:`

如果运算符左侧为null则返回右侧，否则返回左侧，

修改后的动态代理代码如下：

```kotlin
class ProxyHandler(var target: Any) : InvocationHandler {

    override fun invoke(proxy: Any?, method: Method?, args: Array<out Any>?): Any? {
        Log.e("invoke", "代理开始")
        Log.e("invoke", "代理方法：${method?.name}")
        var result = method?.invoke(target, *(args ?: emptyArray()))
        Log.e("invoke", "代理结束")
        return result
    }
}
```