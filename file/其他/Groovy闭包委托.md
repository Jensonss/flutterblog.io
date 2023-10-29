# 0x00 前言

Groovy中闭包是一个重要的知识点。

Gradle中也大量使用闭包功能，

所以了解闭包是一个绕不过去的坎。

# 0x01 闭包介绍

什么是闭包？

**直观的说，闭包就是一个代码块。**

大括号括起来的代码块，但不是Java中的代码块。

这是一个闭包：

```groovy
def f1 = { println "this is closure" }
```

这也是一个闭包：

```groovy
def f2 = { x -> println "x=$x" }
```

这还是一个闭包：

```groovy
class ClosureTest {
    def play(closure) {
        closure()
    }
}

new ClosureTest().play() {//闭包
    println "play invoked"
}
```

有没有发现这货和Lambda表达式还真像。

像就对了，因为闭包源于Lambda，但又高于Lambda。

通过上面例子可以发现，

**闭包就像一个寄生虫，它须要依附于变量或方法，不能作为代码块单独存在。**

上面方法依附可以提取出为变量依附：

```groovy
def playClosure = { println "play invoked" }
new ClosureTest().play(playClosure)
```

调用闭包时就像调用方法一样，加上括号和参数就行了。

刚才说闭包高于Lambda，高在哪里了？

高在了闭包支持方法分发。

# 0x02 闭包委托

上面说的方法分发，也就是本节的委托。

闭包内有三个属性：`thisObject`，`owner`，`delegate`。

闭包内我们难免会调用其他方法，

那么闭包外部不同地方有了相同方法时，闭包怎么知道该调用哪些方法呢？

这三个属性就用于确定由哪个对象来处理闭包内的方法。

**`thisObject`：该属性指向的是定义该闭包所在的类或对象**

**`owner`：该属性和`thisObject`相似，但是如果闭包嵌套闭包时，内部闭包`owner`指向外部闭包**

**`delegate`该属性默认初始化为`owner`的值。就是说它俩是一样的。**

**但是我们可以给`delegate`从新赋值来更改委托。**

下面看下实操：

```groovy
def testClouser = {
    println "testClouser thisObject:" + thisObject
    println "testClouser owner:" + owner
    println "testClouser delegate:" + delegate
}
testClouser.call()
//testClouser thisObject:t12@57cf54e1
//testClouser owner:t12@57cf54e1
//testClouser delegate:t12@57cf54e1
```

通过打印可以看到这三个属性值都是一个t12的实例对象。

这里的t12是我创建的t12.groovy文件。

编译后该文件会对应一个t12.class。

这个闭包直接定义在文件里，所以三个属性值默认都是定义该闭包类t12的对象。

再看一个例子：

```groovy
class Test1 {
    def static closureTest = {
        println "closureTest this:" + thisObject
        println "closureTest owner:" + owner
        println "closureTest delegate:" + delegate
    }
}

Test1.closureTest()
//closureTest this:class Test1
//closureTest owner:class Test1
//closureTest delegate:class Test1
```

这次闭包定义在了类Test1内部，而且声明了static。

打印出来的时候三个属性值都是指向定义该类Test1的，

再看一个例子：         

```groovy
class Test1 {
    def outerClosure = {
        println "outerClosure thisObject:" + thisObject
        println "outerClosure owner:" + owner
        println "outerClosure delegate:" + delegate
        def innerClosure = {
            println "innerClosure thisObject:" + thisObject
            println "innerClosure owner:" + owner
            println "innerClosure delegate:" + delegate
        }
        innerClosure()
    }
}

new Test1().outerClosure()
//outerClosure thisObject:Test1@32502377
//outerClosure owner:Test1@32502377
//outerClosure delegate:Test1@32502377
//innerClosure thisObject:Test1@32502377
//innerClosure owner:Test1$_closure1@36916eb0
//innerClosure delegate:Test1$_closure1@36916eb0
```

通过打印可以看到外部闭包三个属性值都执行了Test1实例。

而内部闭包的`thisObject`指向了定义该闭包所在类Test1实例。

`owner`和`delegate`指向了外部闭包。

通过三个例子证明了上面三个属性含义的准确性。



# 0x03 闭包委托模式

上面介绍了闭包委托三个属性含义，

但是我们仍然不知道闭包内方法调用具体如何分发的。

**默认情况下闭包委托顺序为`thisObject`->`owner`->`delegate`。**

就是说闭包内方法调用时，默认先从`thisObject`指向类/对象中寻找，如果找到了则调用。

如果没有找到，路由到`owner`，由`owner`指向类/对象中寻找，如果找到了则调用。

如果没有找到，路由到`delegate`，由其指向类/对象寻址，如果找到了则调用，否则抛出异常。

实操一下：

```groovy
class Example {

    def str1 = "hello"
    def outerClosure = {
        def str2 = "groovy"
        def innerClosure = {
            println str1
            println str2
        }
        innerClosure()
    }

    def foo(closure) {
        Closure closur = closure
        closur.delegate = new Handler()
        closur.resolveStrategy = Closure.OWNER_FIRST
        closur()
    }
}

new Example().outerClosure()
//hello
//groovy
```

打印结果不用想就知道是什么了。

可以看到str1变量定义在了类内部，

str2变量定义在了外部闭包中，

当在内部闭包打印两个变量时，

先由`thisObject`指向当前类Example的对象处理，找打了str1。

但是`thisObject`没有找到str2，所以交由`owner`处理。

`owner`指向外部闭包，而str2刚好定义在外部闭包，找到并打印处理。

到这里一切都还说得通，但是如何证明`delegate`呢？

代码改进一下：

```groovy
class Handler {
    def str2 = "Handler"
}

class Example {
    def str1 = "hello"
    def outerClosure = {
        def innerClosure = {
            delegate = new Handler()
            println str1
            println str2
        }
        innerClosure()
    }
}
new Example().outerClosure()
//hello
//Handler
```

这里我把str2从外部闭包中去掉，

新建Handler类，里面定义了str2。

常理来说在一个类闭包中直接使用另一个类的变量是怎么都说不过去的。

所以我在内部闭包中加了一句`delegate = new Handler()`。

回想下上面对`delegate`属性解释。

默认`delegate`和`owner`是一样的值，但是我现在给从新赋值了。

`delegate`指向了Handler。

`thisObject`和`owner`处理不了的，由`delegate`指向的Handler来处理。

所以打印了 hello Handler。

上面的顺序一直按默认顺序委托的。

有没有办法改变委托顺序呢？

**Groovy已经为我们提供了改变委托策略：**

**`Closure.OWNER_FIRST` 默认策略。**

**如果属性或方法存在`owner`指向类/对象中，那么由`owner`处理，如果不在，交由`delegate`处理**

**`Closure.DELEGATE_FIRST` 颠倒了默认策略：优先交由`delegate` ，然后才是`owner`**

**`Closure.OWNER_ONLY` 只交给`owner`处理，`delegate` 会被忽略**

**`Closure.DELEGATE_ONLY` 只交给`delegate`处理，`owner`会被忽略**

**`Closure.TO_SELF` 只交给当前闭包自己处理，不是`owner`和`delegate`，**

**可以被用于当开发人员需要使用先进的元数据编程技术和希望实现一个自定义的选择策略时。**

**当我们实现了自己的 Closure 子类时，他才是有意义的。**



源码中只提供了这几种策略模式。

而网上很多资源也都是根据这几种模式做了简单介绍。

但是看完这些介绍我反而更疑惑了。

1、为什么只有`Closure.OWNER_FIRST`和`Closure.DELEGATE_FIRST`，

却没有`Closure.THISOBJECT_FIRST`？

2、`Closure.OWNER_ONLY` 只交给`owner`处理，`delegate` 会被忽略，那么`thisObject`呢？



实践出真知，我们先试试这两个only模式。

首先看看`Closure.DELEGATE_ONLY`：

```groovy
class Handler {
    def str2 = "Handler"
}

class Example {
    def str1 = "hello"
    def outerClosure = {
        def innerClosure = {
            delegate = new Handler()
            resolveStrategy = DELEGATE_ONLY
            println str1
            println str2
        }
        innerClosure()
    }
}

new Example().outerClosure()
//Caught: groovy.lang.MissingPropertyException: No such property: str1 for class: Handler
```

上面代码并不能执行成功，

异常显示str1在Handler类中找不到。

innerClosure中`thisObject`指向的是Example类对象。

如果`thisObject`执行的话，那么是可以找到str1的。

所以可以确定

**`Closure.DELEGATE_ONLY` 将只执行`delegate`，`thisObject`和`owner`将不被执行。**

再来看看`Closure.OWNER_ONLY`：

```groovy
class Handler {
    def str2 = "Handler"
}

class Example {
    def str1 = "hello"
    def outerClosure = {
        def innerClosure = {
            delegate = new Handler()
            resolveStrategy = OWNER_ONLY
            println str1
            println str2
        }
        innerClosure()
    }
}
new Example().outerClosure()
//hello
//Caught: groovy.lang.MissingPropertyException: No such property: str2 for class: Example
```

上面代码也不能执行成功。

异常显示从Example类中找不到str2，但是找到了str1。

上面我们了解了内部闭包的`owner`指向外部闭包。

但是外部闭包并没有str1，怎么会成功打印呢？

最初我也是被这块困扰的，这有点类似`类的双亲委派机制`。

所以我们别忘了，`owner`指向了外部闭包，所以str1交由外部闭包来处理。

外部闭包路由属性和方法时，

默认又按`thisObject`->`owner`->`delegate`顺序来查找的。

而外部闭包的`thisObject`指向Example类，所以它最终是能找到str1的。

轮到str2时，内部闭包和外部闭包都找不到，所以抛出异常。

目前可以确定

**当嵌套闭包时，内部闭包有机会让`owner`执行时(包含`Closure.OWNER_ONLY`)，**

**那么它就会路由到它的外部闭包。**

**如此层层外翻，直到路由到最外层闭包，**

**如果还是不能找到则抛出异常，任意一处路由到了指定方法/属性，则终止。**

我们再修改下代码，来验证下我的猜想：

```groovy
class Handler {
    def str2 = "Handler"
}

class Example {
    def str1 = "hello"
    def outerClosure = {
        delegate = new Handler()
        def innerClosure = {
            resolveStrategy = OWNER_ONLY
            println str1
            println str2
        }
        innerClosure()
    }
}
new Example().outerClosure()
//hello
//Handler
```

很简单的修改，

只把内部闭包的`delegate`修改移动到了外部闭包。

因为内部闭包设置了`OWNER_ONLY`策略，导致设置了`delegate`也无用。

现在移动到外部闭包。

按照上面的想法，

外部闭包会默认执行`thisObject`->`owner`->`delegate`顺序来查找str2。

当执行到`delegate`时交给了Handler来处理找到了str2。

所以打印了Handler，而没有抛出异常，这也证实了上面的猜想。



这几次实践解答了上面问题2的疑惑。

**但是问题1的为什么没有`Closure.THISOBJECT_FIRST`模式呢？**

**关于这个问题，**

**我的想法是`Closure.OWNER_FIRST`间接实现了`Closure.THISOBJECT_FIRST`的功能。**

**当只有一层闭包时，`thisObject`和`owner`指向是一样的。**

**当有嵌套闭包时，`owner`指向包裹它的外层闭包，**

**层层外翻，最终也会指向到`thisObject`所指向的类/对象。**

**同理`Closure.OWNER_ONLY`也间接实现了`Closure_THISOBJECT_ONLY`的功能。**

**可能出于这个原因，没有设置`Closure_THISOBJECT_ONLY`和`Closure.THISOBJECT_FIRST`。**