# 0x00 前言

在我们使用Provider监听数据更新时，

通常会使用`Provider.of<T>(context).xxx`来获取数据填充给相应的Widget，

比如：`Text("${Provider.of<User>(context).name}")`

但是这会带来严重的Widget刷新性能问题。

因为这里的`context`实际是Widget所对应的Element对象。

而这个`context`一般来自函数`Widget build(BuildContext context)`的参数，

所以一旦传入了`context`，

**在数据变更时，该Widget作为根节点的Widget树中，所有StatefulWidget都会被重新构建。**

**也就是说我本来只想刷新使用该监听数据的Widget，结果却导致了相关Widget树的rebuild。**

如果我们只想刷新使用该数据的Widget该怎么办？

Provider已经为我们提供了相关方法。

# 0x01 Consumer

## 一般操作

其实上面操作之所以会导致Widget树的rebuild，是因为使用的`context`范围较大的缘故。

如果我们只使用监听数据的Widget所对应的`context`不就好了吗？

确实是这样的！

如何获取Widget对应的`context`？

放在平时，我们一般的操作是为监听数据单独创建一个自定义Widget，

从而得到该Widget的`context`：

```dart
import 'package:flutter/widgets.dart';
import 'package:flutter_t4/bean/user.dart';
import 'package:provider/provider.dart';

class UserWidget extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _State();
}

class _State extends State<UserWidget> {
  @override
  Widget build(BuildContext context) {
    return Text("${Provider.of<User>(context).name}");
  }
}

```

## 源码分析

每监听一个数据就要自定义一个Widget是比较麻烦的事情。

Provider想到了这一点，为我们提供了`Consumer`。

看一下该类源码：

```dart
class Consumer<T> extends SingleChildStatelessWidget {
  /// {@template provider.consumer.constructor}
  /// Consumes a [Provider<T>]
  /// {@endtemplate}
  Consumer({
    Key key,
    @required this.builder,
    Widget child,
  })  : assert(builder != null),
        super(key: key, child: child);

  /// {@template provider.consumer.builder}
  /// Build a widget tree based on the value from a [Provider<T>].
  ///
  /// Must not be `null`.
  /// {@endtemplate}
  final Widget Function(BuildContext context, T value, Widget child) builder;

  @override
  Widget buildWithChild(BuildContext context, Widget child) {
    return builder(
      context,
      Provider.of<T>(context),
      child,
    );
  }
}
```

这是一个泛型类，

构造函数有一个必须参数`builder`，这是一个函数类型参数，返回Widget类型

`builder`函数有三个参数：

`BuildContext context` 指的是该Widget对应的Element，

`T value` 指的是要监听的值，

`Widget child` 指的是子widget，

`builder`函数由`buildWithChild`函数调用，

那`buildWithChild`又是什么东西？我们只认识`build`函数的。

没办法，进父类`SingleChildStatelessWidget`去看看：

```dart
abstract class SingleChildStatelessWidget extends StatelessWidget
    implements SingleChildWidget {
  /// Creates a widget that has exactly one child widget.
  const SingleChildStatelessWidget({Key key, Widget child})
      : _child = child,
        super(key: key);

  final Widget _child;

  /// A [build] method that receives an extra `child` parameter.
  ///
  /// This method may be called with a `child` different from the parameter
  /// passed to the constructor of [SingleChildStatelessWidget].
  /// It may also be called again with a different `child`, without this widget
  /// being recreated.
  Widget buildWithChild(BuildContext context, Widget child);

  @override
  Widget build(BuildContext context) => buildWithChild(context, _child);

  @override
  SingleChildStatelessElement createElement() {
    return SingleChildStatelessElement(this);
  }
}
```

可以看到原来这是一个`StatelessWidget`，

而且从这里我们也看到了熟悉的`build`函数，

它没有自己实现，直接调用了`buildWithChild`。

而`buildWithChild`调用`builder`，交给我们来实现。

这里我们注意一点，从`Consumer`构造函数传入的`child Widget`，

在这里赋值给了`_child`，而后通过`buildWithChild`给返回了。

这说明在调用`build`函数时，没有造成子Widget树的rebuild，

rebuild的只有该Widget自身，大大提高了UI刷新效率。

也可以说**Consumer对child Widget进行了缓存**。

示例中我们只监听了`User`，可以这样实现：

```dart
Consumer<User>(builder: (context, data, child) {
              return Text("${data.name}");
            }),
```



现在可以说相比之前有了很大进步，

是不是可以就此止步，开心的使用`Consumer`了？

事实上我就是这么做的，直到看了`Selector`源码。

上面我们实现了当`User`发生变化时刷新其对应的Widget。

但是有没有想过如果是一个复杂的类，有几十个属性，

而这个Widget只显示某一条属性（name），那么其他几十条属性变化造成的刷新都是非必须的。

这在无形中也造成了性能问题。

那有没有办法只监听类的某一条属性变化，然后刷新Widget呢？

答案是有的，就是我们接下来要讲的`Selector`。

# 0x02 Selector

## 源码分析

看下`Selector`源码：

```dart
class Selector<A, S> extends Selector0<S> {
  /// {@macro provider.selector}
  Selector({
    Key key,
    @required ValueWidgetBuilder<S> builder,
    @required S Function(BuildContext, A) selector,
    ShouldRebuild<S> shouldRebuild,
    Widget child,
  })  : assert(selector != null),
        super(
          key: key,
          shouldRebuild: shouldRebuild,
          builder: builder,
          selector: (context) => selector(context, Provider.of(context)),
          child: child,
        );
}
```

它和`Consumer`一样也是泛型类，不过它有两个泛型参数，

看下构造函数，

`ValueWidgetBuilder<S> builder` 它和`Consumer`中的`builder`一样，通过泛型值返回Widget

`Function(BuildContext, A) selector` 转换器，把A转换成S，也可以理解为属性选择器，选择A类的某一条属性返回。

`ShouldRebuild<S> shouldRebuild` 函数类型参数，根据对比前后两次S值返回bool值表示是否需要rebuild Widget。

`Widget child` 同`Consumer`一样，可以缓存的子Widget。非必须



该类只有一个构造函数，要知道具体逻辑需要深入父类`Selector0`：

```dart
class Selector0<T> extends SingleChildStatefulWidget {
  /// Both `builder` and `selector` must not be `null`.
  Selector0({
    Key key,
    @required this.builder,
    @required this.selector,
    ShouldRebuild<T> shouldRebuild,
    Widget child,
  })  : assert(builder != null),
        assert(selector != null),
        _shouldRebuild = shouldRebuild,
        super(key: key, child: child);

  /// A function that builds a widget tree from `child` and the last result of
  /// [selector].
  ///
  /// [builder] will be called again whenever the its parent widget asks for an
  /// update, or if [selector] return a value that is different from the
  /// previous one using [operator==].
  ///
  /// Must not be `null`.
  final ValueWidgetBuilder<T> builder;

  /// A function that obtains some [InheritedWidget] and map their content into
  /// a new object with only a limited number of properties.
  ///
  /// The returned object must implement [operator==].
  ///
  /// Must not be `null`
  final T Function(BuildContext) selector;

  final ShouldRebuild<T> _shouldRebuild;

  @override
  _Selector0State<T> createState() => _Selector0State<T>();
}
```

可以看到`Selector0`是一个`StatefulWidget`，

不用想，它的主要逻辑肯定在其State里面了，打开看看：

```dart
class _Selector0State<T> extends SingleChildState<Selector0<T>> {
  T value;
  Widget cache;
  Widget oldWidget;

  @override
  Widget buildWithChild(BuildContext context, Widget child) {
    final selected = widget.selector(context);

    var shouldInvalidateCache = oldWidget != widget ||
        (widget._shouldRebuild != null && widget._shouldRebuild.call(value, selected)) ||
        (widget._shouldRebuild == null && !const DeepCollectionEquality().equals(value, selected));
    if (shouldInvalidateCache) {
      value = selected;
      oldWidget = widget;
      cache = widget.builder(
        context,
        selected,
        child,
      );
    }
    return cache;
  }
}
```

可以看到这类只有`buildWithChild`一个方法。

有了`Consumer`经验，可以推断`SingleChildState`一定在其`build`方法中调用了`buildWithChild`。

事实也是如此。

所以我们只要看`buildWithChild`实现即可。

首先调用了`widget.selector(context)`，

`selector`实现方法为`(context) => selector(context, Provider.of(context))`。

这里获取了监听的数据泛型A对应的值，然后根据A拿到S。



然后是一个大表达式，返回`shouldInvalidateCache`值表示是否需要刷新。

当我们首次执行`buildWithChild`时，

`oldWidget`为null，所以`oldWidget != widget`一定为true，

所以一定执行`if`语句块，也就是首次运行必调用`builder`。

与此同时也进行了相关赋值，比如`value`、`oldWidget`、`cache`。



当泛型A对应的监听对象发生变化时，

再次执行`buildWithChild`，此时` oldWidget != widget`返回false。

继续执行后面表达式，

如果我们通过构造函数设置了`_shouldRebuild`，则调用它的实现来比较S的前后变化。

如果没有设置，则使用`DeepCollectionEquality`进行S前后变化比较。

也就是说

**如果是A的其他属性变化引起的`build`，**

**执行到此处时，由于比较返回false，不会执行`builder`函数调用。**

**直接返回`cache`，也就不会造成显示的Widget rebuild。**



示例User使用如下：

```dart
Selector<User, String>(
                builder: (context, data, child) {
                  return Text("$data");
                },
                selector: (context, user) => user.name),
```