# 0x00 前言

状态管理对于Flutter这种响应式编程来说是很重要的。

对于要入手状态管理框架，**scoped_model**是一个不错的选择。

因为这个框架只有一个文件，6个类。

学起来比较容易上手。

这里首先看一下如何使用，然后在对其进行源码分析。

# 0x01 使用

**scoped_model**使用起来非常简单，因为它只有6个类。

`Model`：我们的数据类继承该类，在数据变化需要通知其他使用该属性的Widget刷新时调用`notifyListeners`即可。

`ScopedModel`：用作root widget，可以看做为我们提供数据的容器。

`ScopedModelDescendant`：Descendant是后裔，子孙的意思。

上面有提供数据的root widget。这个自然就是获取`Model`的widget。

`_InheritedModel`：是`ScopedModel`可以被后裔获取的关键。

`ModelFinder`：过时类，使用`ScopedModel.of`方法获取`Model`即可。

`ScopedModelError`：错误类，获取不到`ScopedModel`时抛出该异常。

可以看到后面三个是内部类、过时类和错误信息类。

所以使用时，我们只需要使用前3个类。

分析完这让我们使用更简单专注了。

## 创建Model类



```dart
class UserInfoByScoped extends Model {
  String username;

  UserInfoByScoped.empty() {
    username = "Jenson";
  }

  void update(String name) {
    username = name;
    notifyListeners();
  }
}
```

**在你认为所有属性变更需要通知其他使用该属性地方的Widget时，调用`notifyListeners`。**

## 添加ScopedModel

添加`ScopedModel`在Root Widget。

```dart
Widget useScoped() {
  return ScopedModel<UserInfoByScoped>(
      model: UserInfoByScoped.empty(),
      child: MaterialApp(
        home: ScopedHomePage(),
      ));
}
```

## 添加ScopedModelDescendant

```dart
ScopedModelDescendant<UserInfoByScoped>(
              builder: (context, child, model) {
            return Text(model.username);
          })
```

## 获取Model并更新

```dart
RaisedButton(
            onPressed: () {
              var name = "Jenson " + DateTime.now().toString();
              ScopedModel.of<UserInfoByScoped>(context).update(name);
            },
            child: Text("改变名称"),
          )
```



## 多个moudle情况

### ScopedModel嵌套

首先声明多个**moudle**：

```dart
class UserInfoByScoped extends Model {
  String username;

  UserInfoByScoped.empty() {
    username = "Jenson";
  }

  void update(String name) {
    username = name;
    notifyListeners();
  }
}

class Card extends Model {
  List<String> goods = [];

  void add(String good) {
    goods.add(good);
    notifyListeners();
  }

  void remove(String good) {
    goods.remove(good);
    notifyListeners();
  }
}
```

其次为了让后裔能获取多个moudle，但是每个**ScopedModel**只支持一个moudle。

所以可以在root widget嵌套多个**ScopedModel**：

```dart
Widget useScoped() {
  return ScopedModel<UserInfoByScoped>(
      model: UserInfoByScoped.empty(),
      child: ScopedModel<Card>(
          model: Card(),
          child: MaterialApp(
            home: ScopedHomePage(),
          )));
}
```

使用时仍然使用`ScopedModelDescendant`。

但是`ScopedModelDescendant`也只支持获取一个moudle，

如果一个Widget使用到多个moudle，

可以使用`ScopedModel.of<Card>(context)`和`ScopedModel.of<UserInfoByScoped>`分别获取需要的moudle。

最后在Widget处组装：

```dart
var cards = ScopedModel.of<Card>(context);
var name =ScopedModel.of<UserInfoByScoped>(context).username;
Text("$name的购物车清单：${cards.toString()}");
```

### 多moudle混入方式

多moudle混入方式就是根据不同的业务声明不同的**mixin**类：

```dart
mixin UserInfoByScoped on Model {
  String username = "Jenson";

  void update(String name) {
    username = name;
    notifyListeners();
  }
}

mixin Card on Model {
  List<String> goods = [];

  void add(String good) {
    goods.add(good);
    notifyListeners();
  }

  void remove(String good) {
    goods.remove(good);
    notifyListeners();
  }
}
```

**注意这里的业务moudle一定要使用`mixin`修饰而不是`class`。**

**如果使用`class`修饰，那么就需要`class Card  extends Model`。**

**但是当**AppMoudle**在`mixin Card`时会出现如下异常：**

**The class 'xxx' can't be used as a mixin because it extends a class other than Object.**



最后声明一个全局的**AppMoudle**，继承moudle且混入其他业务moudle：

```dart
class AppMoudle extends Model with Card, UserInfoByScoped {}

```

在root widget使用：

```dart
Widget useScoped() {
  return ScopedModel<AppMoudle>(
      model: AppMoudle(),
      child: MaterialApp(
        home: ScopedHomePage(),
      ));
}
```

在后裔widget获取：

```dart
Column(
        children: [
          ScopedModelDescendant<AppMoudle>(builder: (context, child, model) {
            return Text(model.username);
          }),
          RaisedButton(
            onPressed: () {
              var name = "Jenson " + DateTime.now().toString();
              ScopedModel.of<AppMoudle>(context).update(name);
            },
            child: Text("改变名称"),
          ),
          ScopedModelDescendant<AppMoudle>(builder: (context, child, model) {
            return Text(model.goods.toString());
          }),
          RaisedButton(
            onPressed: () {
              var name = "Jenson " + DateTime.now().toString();
              ScopedModel.of<AppMoudle>(context).add(name);
            },
            child: Text("改变名称"),
          ),
        ],
      )
```

# 0x02 分析



## Model源码

`Model`继承`Listenable`并实现了`addListener`，`removeListener`。

当我们数据有更新时调用`notifyListeners`通知监听的Widget刷新。

这里的Widget是指`AnimatedBuilder`。

这在`ScopedModel`中有体现。

看下Model源码：

```dart
abstract class Model extends Listenable {
  final Set<VoidCallback> _listeners = Set<VoidCallback>();
  int _version = 0;
  int _microtaskVersion = 0;

  /// [listener] will be invoked when the model changes.
  @override
  void addListener(VoidCallback listener) {
    _listeners.add(listener);
  }

  /// [listener] will no longer be invoked when the model changes.
  @override
  void removeListener(VoidCallback listener) {
    _listeners.remove(listener);
  }

  /// Returns the number of listeners listening to this model.
  int get listenerCount => _listeners.length;

  /// Should be called only by [Model] when the model has changed.
  @protected
  void notifyListeners() {
    // We schedule a microtask to debounce multiple changes that can occur
    // all at once.
    if (_microtaskVersion == _version) {
      _microtaskVersion++;
      scheduleMicrotask(() {
        _version++;
        _microtaskVersion = _version;

        // Convert the Set to a List before executing each listener. This
        // prevents errors that can arise if a listener removes itself during
        // invocation!
        _listeners.toList().forEach((VoidCallback listener) => listener());
      });
    }
  }
}
```

## ScopedModel源码

`ScopedModel`的`build`方法中使用了`AnimatedBuilder`。

```dart
class ScopedModel<T extends Model> extends StatelessWidget {
  /// The [Model] to provide to [child] and its descendants.
  final T model;

  /// The [Widget] the [model] will be available to.
  final Widget child;

  ScopedModel({@required this.model, @required this.child})
      : assert(model != null),
        assert(child != null);

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: model,
      builder: (context, _) => _InheritedModel<T>(model: model, child: child),
    );
  }
  static T of<T extends Model>(
    BuildContext context, {
    bool rebuildOnChange = false,
  }) {
    final Type type = _type<_InheritedModel<T>>();

    Widget widget = rebuildOnChange
        ? context.inheritFromWidgetOfExactType(type)
        : context.ancestorWidgetOfExactType(type);

    if (widget == null) {
      throw new ScopedModelError();
    } else {
      return (widget as _InheritedModel<T>).model;
    }
  }

  static Type _type<T>() => T;
}
```

`ScopedModel`并没有在自身方法中调用`Model`的`addListener`和`removeListener`。

而是交给了`AnimatedBuilder`去处理，这时我们需要进去看看它是如何处理的。

## AnimatedBuilder源码

`AnimatedBuilder`很简单，只是在`build`方法中直接调用了外部实现的`builder`方法：

```dart
class AnimatedBuilder extends AnimatedWidget {
  const AnimatedBuilder({
    Key key,
    @required Listenable animation,
    @required this.builder,
    this.child,
  }) : assert(animation != null),
       assert(builder != null),
       super(key: key, listenable: animation);

  /// Called every time the animation changes value.
  final TransitionBuilder builder;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return builder(context, child);
  }
}
```

但是我们发现实参`model`在这里以`animation`名称继续向父类传递。

那我们只能从其父类入手：

```dart
abstract class AnimatedWidget extends StatefulWidget {
  /// Creates a widget that rebuilds when the given listenable changes.
  ///
  /// The [listenable] argument is required.
  const AnimatedWidget({
    Key key,
    @required this.listenable,
  }) : assert(listenable != null),
       super(key: key);

  /// The [Listenable] to which this widget is listening.
  ///
  /// Commonly an [Animation] or a [ChangeNotifier].
  final Listenable listenable;

  /// Override this method to build widgets that depend on the state of the
  /// listenable (e.g., the current value of the animation).
  @protected
  Widget build(BuildContext context);

  /// Subclasses typically do not override this method.
  @override
  _AnimatedState createState() => _AnimatedState();

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<Listenable>('animation', listenable));
  }
}

class _AnimatedState extends State<AnimatedWidget> {
  @override
  void initState() {
    super.initState();
    widget.listenable.addListener(_handleChange);
  }

  @override
  void didUpdateWidget(AnimatedWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.listenable != oldWidget.listenable) {
      oldWidget.listenable.removeListener(_handleChange);
      widget.listenable.addListener(_handleChange);
    }
  }

  @override
  void dispose() {
    widget.listenable.removeListener(_handleChange);
    super.dispose();
  }

  void _handleChange() {
    setState(() {
      // The listenable's state is our build state, and it changed already.
    });
  }

  @override
  Widget build(BuildContext context) => widget.build(context);
}
```

由于`AnimatedWidget`是`StatefulWidget`，

所以主要看`_AnimatedState`即可，

我们发现在`initState`方法中调用了`addListener`,

在`dispose`调用了`removeListener`，

传入的函数参数是`_handleChange`：

```
  void _handleChange() {
    setState(() {
      // The listenable's state is our build state, and it changed already.
    });
  }
```

而这只是简单地调用了`setState`，意图rebuilt。

目前为止的流程是使用`ScopedModel`时，会调用`addListener`添加事件监听。

当我们调用`ScopedModel.of<AppMoudle>(context).update(name);`时，

调用了`notifyListeners`，遍历出`VoidCallback`，这里是`_handleChange`调用函数。

调用`setState`后标记当前Element为dirty。

当`BuildOwner`遍历`_dirtyElements`执行`rebuild`时，调用到`performRebuild`：

```dart
 @override
  void performRebuild() {
    if (!kReleaseMode && debugProfileBuildsEnabled)
      Timeline.startSync('${widget.runtimeType}',  arguments: timelineWhitelistArguments);

    assert(_debugSetAllowIgnoredCallsToMarkNeedsBuild(true));
    Widget built;
    try {
      assert(() {
        _debugDoingBuild = true;
        return true;
      }());
      built = build();
      assert(() {
        _debugDoingBuild = false;
        return true;
      }());
      debugWidgetBuilderValue(widget, built);
    } catch (e, stack) {
      _debugDoingBuild = false;
      built = ErrorWidget.builder(
        _debugReportException(
          ErrorDescription('building $this'),
          e,
          stack,
          informationCollector: () sync* {
            yield DiagnosticsDebugCreator(DebugCreator(this));
          },
        ),
      );
    } finally {
      // We delay marking the element as clean until after calling build() so
      // that attempts to markNeedsBuild() during build() will be ignored.
      _dirty = false;
      assert(_debugSetAllowIgnoredCallsToMarkNeedsBuild(false));
    }
    try {
      _child = updateChild(_child, built, slot);
      assert(_child != null);
    } catch (e, stack) {
      built = ErrorWidget.builder(
        _debugReportException(
          ErrorDescription('building $this'),
          e,
          stack,
          informationCollector: () sync* {
            yield DiagnosticsDebugCreator(DebugCreator(this));
          },
        ),
      );
      _child = updateChild(null, built, slot);
    }

    if (!kReleaseMode && debugProfileBuildsEnabled)
      Timeline.finishSync();
  }
```

其中调用`built = build();`这里的`build`最终回调我们在`ScopedModel`中为 

`AnimatedBuilder`实现的`builder`函数，此时`built`是`_InheritedModel`类型实例。

接下来执行`updateChild`，由于是rebuild，所以`child!=null`。会执行下面的else if代码：

```dart
      if (hasSameSuperclass && child.widget == newWidget) {
        if (child.slot != newSlot)
          updateSlotForChild(child, newSlot);
        newChild = child;
      } else if (hasSameSuperclass && Widget.canUpdate(child.widget, newWidget)) {
        if (child.slot != newSlot)
          updateSlotForChild(child, newSlot);
        child.update(newWidget);
        assert(child.widget == newWidget);
        assert(() {
          child.owner._debugElementWasRebuilt(child);
          return true;
        }());
        newChild = child;
      } else {
        deactivateChild(child);
        assert(child._parent == null);
        newChild = inflateWidget(newWidget, newSlot);
      }
```

在调用` child.update(newWidget);`时，这里的`child`其实是`InheritedElement`，

所以它的`update`实现为：

```dart
  @override
  void update(ProxyWidget newWidget) {
    final ProxyWidget oldWidget = widget;
    assert(widget != null);
    assert(widget != newWidget);
    super.update(newWidget);
    assert(widget == newWidget);
    updated(oldWidget);
    _dirty = true;
    rebuild();
  }
```

这里的流程很简单

通过`super.update(newWidget);`把当前Element的`_widget`设置为`newWidget`。

然后通过`updated(oldWidget);`调用`notifyClients`告知所有通过`ScopedModel.of`方式获取数据的Widget该刷新了。

通过`ScopedModel.of`方式获取数据，除了我们直接使用这种方式，那么就剩下`ScopedModelDescendant`了。

## ScopedModelDescendant源码

ScopedModelDescendant只是帮我们获取到了数据并通过`builder`函数返回给我们`Model`

```dart
class ScopedModelDescendant<T extends Model> extends StatelessWidget {
  /// Called whenever the [Model] changes.
  final ScopedModelDescendantBuilder<T> builder;

  /// An optional constant child that does not depend on the model.  This will
  /// be passed as the child of [builder].
  final Widget child;

  /// An optional constant that determines whether the
  final bool rebuildOnChange;

  /// Constructor.
  ScopedModelDescendant({
    @required this.builder,
    this.child,
    this.rebuildOnChange = true,
  });

  @override
  Widget build(BuildContext context) {
    return builder(
      context,
      child,
      ScopedModel.of<T>(context, rebuildOnChange: rebuildOnChange),
    );
  }
}
```

# 0x03 结尾

scoped_model和使用起来和Provider基本一样。

但是scoped_model实现精简，导致不能像Provider那样精细化控制某一个类乃至某一属性更新才刷新Widget。

像上面实现的那样，当Card更新时，由于scoped_model实现，UserInfoByScoped相关Widget也会刷新，造成性能问题。