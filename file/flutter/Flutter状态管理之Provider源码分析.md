# 0x00 前言

Flutter在做全局状态管理时，没有提供像Android中Application类来保存全局状态。

好在还有框架可以使用，目前谷歌官方推荐使用Provider管理全局状态。

所以花了点时间看了下源码大概实现流程。



要了解Provider大概原理，个人觉得从以下三点入手即可：

1、什么时候，如何存储data？存到哪里去了？

2、如何取出data使用？

3、如何刷新data以及为何刷新data也就刷新了widget？

后面的源码分析会从这三点入手贯穿整个使用流程。

当然在分析源码前看下简单的使用方法。

# 0x01 使用

## 添加依赖

```yaml
provider: ^4.0.0
```

最新版从[pub获取](https://pub.dev/packages/provider)

## 继承ChangeNotifier

把自己创建的数据类继承`ChangeNotifier`，

想监听哪些属性改变时进行刷新，则创建set方法，

并在方法中调用`notifyListeners`：

```dart
class UserBean with ChangeNotifier {
  String avatarUrl;
  String name;
  String token;
  String mobile;
  String pwd;
  String id;

  UserBean([
    this.id,
    this.name,
    this.mobile,
    this.pwd,
    this.token,
    this.avatarUrl,
  ]);

  void setData(
      {String name,
      String mobile,
      String pwd,
      String token,
      String avatarUrl,
      String id,
      bool isSaveDB = true}) async {
    this.name = name;
    this.mobile = mobile;
    this.pwd = pwd;
    this.token = token;
    this.avatarUrl = avatarUrl;
    this.id = id;
    print("mobile=$mobile");
    notifyListeners();
    if (isSaveDB) {
      int id = await UserProvider.dao.update(this);
      print("id=$id");
    }
  }
}
```

## 配置MultiProvider

由于我的所有页面都可能会检测登录状态，

所以我把`MultiProvider`配置到了`main`入口处。

我暂时只想管理`UserBean`，所以只配置了这一个类：

```dart
void main() => runApp(MyApp());

/// app入口
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // 创建路由对象
    final router = Router();
    // 配置路由集Routes的路由对象
    Routes.configureRoutes(router);
    // 指定Application的路由对象
    FindCatApp.router = router;
	//配置MultiProvider
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => UserBean()),//
      ],
      child: MaterialApp(
        onGenerateRoute: FindCatApp.router.generator,
        localizationsDelegates: [
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
          CatLocalizationsDelegate()
        ],
        supportedLocales: [const Locale('en', 'US'), const Locale('zh', 'CN')],
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: HomePage(),
      ),
    );
  }
}
```



## 获取(更新)数据

配置完成后可以通过`Provider.of<UserBean>(context)`获取数据来判断用户状态。

如果要更新状态，通过调用`Provider.of<UserBean>(context).setData`即可。



最简单的使用大概就是这样，

下面开始进入源码分析。

# 0x02 分析



<img src="https://jenson-1258324340.cos.ap-beijing.myqcloud.com/Provider%E6%B5%81%E7%A8%8B.jpeg" alt="Provider流程" style="zoom:300%;" />

后面的分析都是本着一个新手对一切都是未知的角度来分析，

不会提前把一些知识点讲出来，以便提供一个最客观的视角。

这里把前言中的三点概括为`data存储流程`，`data取出流程`，`data刷新流程`。

下面分别看看各流程是如何执行的。

## data存储流程

通过上面的简单使用，你应该已经知道配置数据发生在

使用`MultiProvider`时，我们提供的`providers`构造函数参数。

我这里的`providers`使用的是`ChangeNotifierProvider`，

它使用构造函数参数`create`带走了我的`UserBean`。

看下它的构造函数：

```dart
  ChangeNotifierProvider({
    Key key,
    @required Create<T> create,
    bool lazy,
    Widget child,
  }) : super(
          key: key,
          create: create,
          dispose: _dispose,
          lazy: lazy,
          child: child,
        );
```

这里的`create`是`Create<T>`。

它是个函数类型参数：`typedef Create<T> = T Function(BuildContext context);`

可以看到它提供一个`context`，然后返回一个`T`。

这里的`context`返回给你是为了让你创建`widget`用的。

目前我们知道我的`UserBean`被`create`携带。

我们要做的就是盯住它走向哪里。

这里并没有属性接收它，直接传给了`super`。



别手软，点进去。

然后来到了`ListenableProvider<T extends Listenable>`类中：

```dart
  ListenableProvider({
    Key key,
    @required Create<T> create,
    Dispose<T> dispose,
    bool lazy,
    Widget child,
  })  : assert(create != null),
        super(
          key: key,
          startListening: _startListening,
          create: create,
          dispose: dispose,
          debugCheckInvalidValueType: kReleaseMode
              ? null
              : (value) {
                  if (value is ChangeNotifier) {
                    // ignore: invalid_use_of_protected_member
                    assert(!value.hasListeners, '''
The default constructor of ListenableProvider/ChangeNotifierProvider
must create a new, unused Listenable.

If you want to reuse an existing Listenable, use the second constructor:

- DO use ChangeNotifierProvider.value to provider an existing ChangeNotifier:

MyChangeNotifier variable;
ChangeNotifierProvider.value(
  value: variable,
  child: ...
)

- DON'T reuse an existing ChangeNotifier using the default constructor.

MyChangeNotifier variable;
ChangeNotifierProvider(
  create: (_) => variable,
  child: ...
)
''');
                  }
                },
          lazy: lazy,
          child: child,
        );
```

仍然没有赋值给属性，而是又调用了`super`。

难道它的存在感这么低？

不管它，点进去，继续看。



进入了`InheritedProvider<T>`类:

```dart
  InheritedProvider({
    Key key,
    Create<T> create,
    T update(BuildContext context, T value),
    UpdateShouldNotify<T> updateShouldNotify,
    void Function(T value) debugCheckInvalidValueType,
    StartListening<T> startListening,
    Dispose<T> dispose,
    bool lazy,
    Widget child,
  })  : _lazy = lazy,
        _delegate = _CreateInheritedProvider(
          create: create,
          update: update,
          updateShouldNotify: updateShouldNotify,
          debugCheckInvalidValueType: debugCheckInvalidValueType,
          startListening: startListening,
          dispose: dispose,
        ),
        super(key: key, child: child);
```

可以看到这里虽然没有直接赋值给属性，

但是把它包裹在了`_delegate`属性里面了。

而且在`super`里面没有在传递`create`。

既然数据通过`_delegate`能拿到，

那就放眼望去，看看谁要使用它，

类里面没有找到谁要调用该属性了。

别慌，看下源码：

```dart
class InheritedProvider<T> extends SingleChildStatelessWidget {
  /// Creates a value, then expose it to its descendants.
  ///
  /// The value will be disposed of when [InheritedProvider] is removed from
  /// the widget tree.
  InheritedProvider({
    Key key,
    Create<T> create,
    T update(BuildContext context, T value),
    UpdateShouldNotify<T> updateShouldNotify,
    void Function(T value) debugCheckInvalidValueType,
    StartListening<T> startListening,
    Dispose<T> dispose,
    bool lazy,
    Widget child,
  })  : _lazy = lazy,
        _delegate = _CreateInheritedProvider(
          create: create,
          update: update,
          updateShouldNotify: updateShouldNotify,
          debugCheckInvalidValueType: debugCheckInvalidValueType,
          startListening: startListening,
          dispose: dispose,
        ),
        super(key: key, child: child);

  /// Expose to its descendants an existing value,
  InheritedProvider.value({
    Key key,
    @required T value,
    UpdateShouldNotify<T> updateShouldNotify,
    StartListening<T> startListening,
    bool lazy,
    Widget child,
  })  : _lazy = lazy,
        _delegate = _ValueInheritedProvider(
          value: value,
          updateShouldNotify: updateShouldNotify,
          startListening: startListening,
        ),
        super(key: key, child: child);

  InheritedProvider._constructor({
    Key key,
    _Delegate<T> delegate,
    bool lazy,
    Widget child,
  })  : _lazy = lazy,
        _delegate = delegate,
        super(key: key, child: child);

  final _Delegate<T> _delegate;
  final bool _lazy;

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    _delegate.debugFillProperties(properties);
  }

  @override
  _InheritedProvderElement<T> createElement() {
    return _InheritedProvderElement<T>(this);
  }

  @override
  Widget buildWithChild(BuildContext context, Widget child) {
    return _DefaultInheritedProviderScope<T>(
      owner: this,
      child: child,
    );
  }
}
```

我们看到`InheritedProvider<T>`继承了`SingleChildStatelessWidget`。

既然继承了`Widget`，总归要调用`build`吧：

我们发现只有`buildWithChild`，没有我们想要的方法，

没关系，去`SingleChildStatelessWidget`里面看看，

我有理由怀疑它继承了`StatelessWidget`：

```dart
/// Its [build] method must **not** be overriden. Instead use [buildWithChild].
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

果不其然，它自己添加了`buildWithChild`，让继承自`StatelessWidget`的

`build`方法直接调用了`buildWithChild`方法，

这样它的子类通过实现`buildWithChild`方法达到间接实现`build`。

所以我能在子类中不用`buildWithChild`这个方法，再次重写`build`吗?

我劝你善良，类开头注释已经说了：

`/// Its [build] method must **not** be overriden. Instead use [buildWithChild].`



既然系统调用`build`方法时调用了`buildWithChild`，

那我们返回`InheritedProvider<T>`看看该方法实现：

```dart
  @override
  Widget buildWithChild(BuildContext context, Widget child) {
    return _DefaultInheritedProviderScope<T>(
      owner: this,
      child: child,
    );
  }
```

这里的widget返回的是`_DefaultInheritedProviderScope<T>`类型。

重要的一点`owner`参数中，传了`this`，`InheritedProvider<T>`把自己搭进去了。

所以通过`InheritedProvider<T>`实例，间接拿到`_delegate`属性，进而取得我的数据。。

想想就开心，因为很可能找对了路子。







进去`_DefaultInheritedProviderScope<T>`类看看：

```dart
class _DefaultInheritedProviderScope<T> extends InheritedWidget {
  _DefaultInheritedProviderScope({
    this.owner,
    @required Widget child,
  }) : super(child: child);

  final InheritedProvider<T> owner;

  @override
  bool updateShouldNotify(InheritedWidget oldWidget) {
    return false;
  }

  @override
  _DefaultInheritedProviderScopeElement<T> createElement() {
    return _DefaultInheritedProviderScopeElement<T>(this);
  }
}
```

这个类没有什么逻辑，甚至作为`Widget`，都没有`build`方法。

然后查看了下`Widget`源码，原来还真没有，

**`build`方法是在子类`StatelessWidget`、`StatefullWidget`中添加的。**

那重点就放在了`createElement`。

因为这个返回值`_DefaultInheritedProviderScopeElement<T>(this)`里面传递了

`_DefaultInheritedProviderScope<T>`实例，

通过该实例能得到属性`owner`，而`owner`是`InheritedProvider<T>`实例，

通过`InheritedProvider<T>`进一步拿到`_delegate`。

路径我们找到了

**但是`createElement`什么时候调用呢？**

### runapp启动粗略分析

这个问题先弄清楚才好往下看，不骗你，真的。

不知道该怎么进行的时候就从`runApp`开始试试：

```dart
void runApp(Widget app) {
  WidgetsFlutterBinding.ensureInitialized()
    ..scheduleAttachRootWidget(app)
    ..scheduleWarmUpFrame();
}
```

我们只看处理`Widget app`地方，进去`scheduleAttachRootWidget`看看：

```dart
  @protected
  void scheduleAttachRootWidget(Widget rootWidget) {
    Timer.run(() {
      attachRootWidget(rootWidget);
    });
  
```

`attachRootWidget`看名字是把rootWidget添加到控件树，继续进去：

```dart
  void attachRootWidget(Widget rootWidget) {
    _renderViewElement = RenderObjectToWidgetAdapter<RenderBox>(
      container: renderView,
      debugShortDescription: '[root]',
      child: rootWidget,
    ).attachToRenderTree(buildOwner, renderViewElement);
  }
```

上面`RenderObjectToWidgetAdapter<RenderBox>`包裹了`rootWidget`后，调用渲染树：

```dart
  /// Used by [runApp] to bootstrap applications.
  RenderObjectToWidgetElement<T> attachToRenderTree(BuildOwner owner, [ RenderObjectToWidgetElement<T> element ]) {
    if (element == null) {
      owner.lockState(() {
        element = createElement();
        assert(element != null);
        element.assignOwner(owner);
      });
      owner.buildScope(element, () {
        element.mount(null, null);
      });
      // This is most likely the first time the framework is ready to produce
      // a frame. Ensure that we are asked for one.
      SchedulerBinding.instance.ensureVisualUpdate();
    } else {
      element._newWidget = this;
      element.markNeedsBuild();
    }
    return element;
  }
```

首次初始化时，`element`为空，所以会调用`createElement()`。

然后后面紧跟着执行` owner.buildScope`,

调用`element.mount(null, null);`：

```dart
 @override
  void mount(Element parent, dynamic newSlot) {
    assert(parent == null);
    super.mount(parent, newSlot);
    _rebuild();
  }
```

这里的`super.mount`函数会一直调用到`Element`的`mount`。

这里的`rebuild`开始执行控件树构建：

```dart
  void _rebuild() {
    try {
        //这里的widget是RenderObjectToWidgetAdapter<RenderBox>
      _child = updateChild(_child, widget.child, _rootChildSlot);
      assert(_child != null);
    } catch (exception, stack) {
      final FlutterErrorDetails details = FlutterErrorDetails(
        exception: exception,
        stack: stack,
        library: 'widgets library',
        context: ErrorDescription('attaching to the render tree'),
      );
      FlutterError.reportError(details);
      final Widget error = ErrorWidget.builder(details);
      _child = updateChild(null, error, _rootChildSlot);
    }
  }
```

继续看`updateChild(_child, widget.child, _rootChildSlot)`：

```dart
  @protected
  Element updateChild(Element child, Widget newWidget, dynamic newSlot) {
    assert(() {
      if (newWidget != null && newWidget.key is GlobalKey) {
        final GlobalKey key = newWidget.key;
        key._debugReserveFor(this);
      }
      return true;
    }());
    if (newWidget == null) {
      if (child != null)
        deactivateChild(child);
      return null;
    }
    if (child != null) {
      if (child.widget == newWidget) {
        if (child.slot != newSlot)
          updateSlotForChild(child, newSlot);
        return child;
      }
      if (Widget.canUpdate(child.widget, newWidget)) {
        if (child.slot != newSlot)
          updateSlotForChild(child, newSlot);
        child.update(newWidget);
        assert(child.widget == newWidget);
        assert(() {
          child.owner._debugElementWasRebuilt(child);
          return true;
        }());
        return child;
      }
      deactivateChild(child);
      assert(child._parent == null);
    }
      //类似于Android中的View.inflate
    return inflateWidget(newWidget, newSlot);
  }
```

这方法中只看最后`inflateWidget(newWidget, newSlot);`，

这里类似于`View.inflate`，

不过`View.inflate`是把xml控件转成`View Tree`，

而这里是把`widget`转成`Element`。

看看`inflateWidget`实现：

```dart
  @protected
  Element inflateWidget(Widget newWidget, dynamic newSlot) {
    assert(newWidget != null);
    final Key key = newWidget.key;
    if (key is GlobalKey) {
      final Element newChild = _retakeInactiveElement(key, newWidget);
      if (newChild != null) {
        assert(newChild._parent == null);
        assert(() {
          _debugCheckForCycles(newChild);
          return true;
        }());
        newChild._activateWithParent(this, newSlot);
        final Element updatedChild = updateChild(newChild, newWidget, newSlot);
        assert(newChild == updatedChild);
        return updatedChild;
      }
    }
      //调用了widget的createElement方法。
      //newWidget是myApp
    final Element newChild = newWidget.createElement();
    assert(() {
      _debugCheckForCycles(newChild);
      return true;
    }());
    newChild.mount(this, newSlot);
    assert(newChild._debugLifecycleState == _ElementLifecycle.active);
    return newChild;
  }
```

看这一行`Element newChild = newWidget.createElement();`,

由于`newWidget`是`myapp`实例，

也就是`StatelessWidget`，而它创建了`StatelessElement`。

所以下面的`newChild.mount(this, newSlot);`

其实调用的是`StatelessElement`的`mount`函数，

但是`StatelessElement`没有重写该函数，

所以调用了其父类`ComponentElement`的`mount`函数：

```dart
  @override
  void mount(Element parent, dynamic newSlot) {
    super.mount(parent, newSlot);
    assert(_child == null);
    assert(_active);
    _firstBuild();
    assert(_child != null);
  }
```

该函数中调用了`_firstBuild`:

```dart
  void _firstBuild() {
    rebuild();
  }
  
    void rebuild() {
   //***省略断言      
    performRebuild();
    assert(() {
      assert(owner._debugCurrentBuildTarget == this);
      owner._debugCurrentBuildTarget = debugPreviousBuildTarget;
      return true;
    }());
    assert(!_dirty);
  }
```

在`rebuild`中调用了`performRebuild`：

```dart
  @override
  void performRebuild() {
    if (!kReleaseMode && debugProfileBuildsEnabled)
      Timeline.startSync('${widget.runtimeType}',  arguments: timelineWhitelistArguments);

    assert(_debugSetAllowIgnoredCallsToMarkNeedsBuild(true));
    Widget built;
    try {
       //调用当前widget.build
        //比如statelesswidget.build,
      built = build();
      debugWidgetBuilderValue(widget, built);
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
    } finally {
      // We delay marking the element as clean until after calling build() so
      // that attempts to markNeedsBuild() during build() will be ignored.
      _dirty = false;
      assert(_debugSetAllowIgnoredCallsToMarkNeedsBuild(false));
    }
    try {
        //向下遍历
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

可以看到这里调用了`build`方法。

目前这是在`myapp`的`StatelessWidget`实例中调用`build`方法，

这样目前完成了一个很粗糙的`widget.build`调用。

那`myapp`中的很多其他`widget`怎么办呢?

当然通过`_child = updateChild(_child, built, slot)`继续遍历执行啊。

不过这里的`built`是我们配置的`MultiProvider`了。

总结一下执行步骤：

1、`scheduleAttachRootWidget`

2、`RenderObjectToWidgetAdapter<RenderBox>.attachToRenderTree()`

3、`RenderObjectToWidgetElement<T>.mount(null, null)`

4、`RenderObjectToWidgetElement<T>._rebuild()`

5、`Element.updateChild(Element child, Widget newWidget, dynamic newSlot)`

6、`Element.inflateWidget(Widget newWidget, dynamic newSlot)`

7、`newWidget.createElement()`

8、`newChild.mount(this, newSlot)`

9、`ComponentElement.mount(Element parent, dynamic newSlot)`

10、`ComponentElement._firstBuild()`

11、`Element.rebuild()`

12、`ComponentElement.performRebuild()`

13、`Widget build()`

**这里的`build`是`ComponentElement`调用`performRebuild`方法时，该方法里面调用的`build`，**

**所以这里的`build`方法其实是`ComponentElement`定义的一个抽象方法，**

**该抽象方法，在`StatefulElement`被实现为`state.build(this)`，**

**在`StatelessElement`被实现为`widget.build(this)`。**

**而我们只是实现这块的`build`内容返回`widget`。**

**可见`widget`只是`Element`配置文件，`widget`很多方法调用受`Element`控制。**

14、从新执行步骤5的`updateChild`，进行子控件遍历。

了解了这些，我们继续往下看。

上面我们讲到这里：

```dart
  @override
  _DefaultInheritedProviderScopeElement<T> createElement() {
    return _DefaultInheritedProviderScopeElement<T>(this);
  }
```

然后就不知道`createElement`如何调用了。

从上面步骤7可以知道：

当我们在`inflate`  widget `_DefaultInheritedProviderScope<T>`时，

用该实例调用`createElement`，

然后创建并返回了`_DefaultInheritedProviderScopeElement<T>`实例`newChild`,

然后步骤8，通过步骤7创建的`newChild`调用`mount`函数，

`_DefaultInheritedProviderScopeElement<T>`本身没有实现`mount`，

但是通过混入方式继承了`_InheritedProviderScopeMixin<T>`。

这里有实现`mount`：

```dart
  @override
  void mount(Element parent, dynamic newSlot) {
    _providerCount++;
    if (_providerCount == 1) {
      _startWatchingScheduler();
    }
    super.mount(parent, newSlot);
  }
```

通过`super.mount`，进入了`ComponentElement`的`mount`实现：

```dart
  @override
  void mount(Element parent, dynamic newSlot) {
    super.mount(parent, newSlot);
    assert(_child == null);
    assert(_active);
    _firstBuild();
    assert(_child != null);
  }
```

再次通过`super.mount`，进入`Element`的`mount`基类实现：

```dart
  @mustCallSuper
  void mount(Element parent, dynamic newSlot) {
    _parent = parent;
    _slot = newSlot;
    _depth = _parent != null ? _parent.depth + 1 : 1;
    _active = true;
    if (parent != null) // Only assign ownership if the parent is non-null
      _owner = parent.owner;
    if (widget.key is GlobalKey) {
      final GlobalKey key = widget.key;
      key._register(this);
    }
    _updateInheritance();
    assert(() {
      _debugLifecycleState = _ElementLifecycle.active;
      return true;
    }());
  }
```

看下`_updateInheritance()`实现：

```dart
  void _updateInheritance() {
    assert(_active);
    _inheritedWidgets = _parent?._inheritedWidgets;
  }
```

**`_updateInheritance`这个方法其实是保存并下发你的全局数据的方法。**

该方法具体实现在`ComponentElement`中：

```dart
  @override
  void _updateInheritance() {
    assert(_active);
    final Map<Type, InheritedElement> incomingWidgets = _parent?._inheritedWidgets;
    if (incomingWidgets != null)
      _inheritedWidgets = HashMap<Type, InheritedElement>.from(incomingWidgets);
    else
      _inheritedWidgets = HashMap<Type, InheritedElement>();
    _inheritedWidgets[widget.runtimeType] = this;
  }
```

这里首先判断父`Element`的`_inheritedWidgets`是否有值，

如果有值则根据既有值转化一个新的的`_inheritedWidgets`，

如果没有值则创建一个新的空的`_inheritedWidgets`。

最后保存当前值：` _inheritedWidgets[widget.runtimeType] = this;`

这个操作发生在`Element`子类``_DefaultInheritedProviderScopeElement<T>`中。

这里的保存当前值是指：

`_DefaultInheritedProviderScope<T>`的`rumtimeType`作为`key`，

`_DefaultInheritedProviderScopeElement<T>`实例作为`value`。

看下截图：

![image-20200118164531001](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200118164531001.png)



你可能有疑问，因为这并不是我开始的`UserBean`。

别慌，其实通过`_DefaultInheritedProviderScopeElement<T>`就能拿到你的数据。

在取出流程中将会看到具体操作。



## data取出流程

看完了存储流程，下面来看看如何取出数据的。

由于平时使用`Provider.of<UserBean>(context)`这种操作比较多，

所以从这里的源码作为入口：

```dart
  static T of<T>(BuildContext context, {bool listen}) {
    assert(
      T != dynamic,
      '''
Tried to call Provider.of<dynamic>. This is likely a mistake and is therefore
unsupported.

If you want to expose a variable that can be anything, consider changing
`dynamic` to `Object` instead.
''',
    );
    assert(!(listen == true && !isWidgetTreeBuilding), '''
Tried to listen to a value exposed with provider, from outside of the widget tree.
''');

    InheritedContext<T> inheritedElement;

    if (context.widget is _DefaultInheritedProviderScope<T>) {
      // An InheritedProvider<T>'s update tries to obtain a parent provider of
      // the same type.
      context.visitAncestorElements((parent) {
        inheritedElement = parent.getElementForInheritedWidgetOfExactType<_DefaultInheritedProviderScope<T>>()
            as _DefaultInheritedProviderScopeElement<T>;
        return false;
      });
    } else {
      inheritedElement = context.getElementForInheritedWidgetOfExactType<_DefaultInheritedProviderScope<T>>()
          as _DefaultInheritedProviderScopeElement<T>;
    }

    if (inheritedElement == null) {
      throw ProviderNotFoundException(T, context.widget.runtimeType);
    }

    if (listen ?? isWidgetTreeBuilding) {
      context.dependOnInheritedElement(inheritedElement as InheritedElement);
    }

    return inheritedElement.value;
  }

```

参数的`context`一般就是我们使用`Provider.of<UserBean>`时，所在的widget对应的`Element`。

```dart
BuildContext get context => _element
```

这个一般不会是`_DefaultInheritedProviderScope<T>`。

所以会通过 `else`方法来取值。

看看`Element`中该方法实现：

```dart
  @override
  InheritedElement getElementForInheritedWidgetOfExactType<T extends InheritedWidget>() {
    assert(_debugCheckStateIsActiveForAncestorLookup());
    final InheritedElement ancestor = _inheritedWidgets == null ? null : _inheritedWidgets[T];
    return ancestor;
  }
```

这里直接使用泛型`T`作为key了，

而调用该方法地方的`T`指的是`_DefaultInheritedProviderScope<T>`，

在使用时，我们又指定了`<UserBean>`。

所以实际通过`_inheritedWidgets[_DefaultInheritedProviderScope<UserBean>]`来取值。

想当然的能取到值了。

取出`InheritedElement`值 使用`as`转成`_DefaultInheritedProviderScopeElement<T>`。

最后直接通过`inheritedElement.value`来取值了。

所以这算完事了吗？

其实这才刚开始。

刚才使用的`inheritedElement`是`InheritedContext<T>`类型。

看下它的`value`：

```dart
T get value;
```

这是一个抽象的。

它的实现在`_InheritedProviderScopeMixin<T>`类中：

```dart
  @override
  T get value => _delegateState.value;
```

这个类又是`mixin`类型的，意思是只能其他类通过`with`方式实现？

没关系先不管了，只要知道`_DefaultInheritedProviderScopeElement<T>` with 它就行了。

这个类在上面有接触过。

上面的`_delegateState.value` 中`_delegateState`其实就是

`_DefaultInheritedProviderScopeElement<T>` 的属性：

```dart
@override
_DelegateState<T, _Delegate<T>> _delegateState;
```

这个属性在`_mountDelegate`调用时才进行赋值的：

```dart
  @override
  void _mountDelegate() {
    _delegateState = widget.owner._delegate.createState()..element = this;
  }
```

什么时候又会调用该方法呢？

这是一个重写方法，抽象方法在那个`_InheritedProviderScopeMixin<T>`方法中：

```dart
mixin _InheritedProviderScopeMixin<T> on InheritedElement implements InheritedContext<T> {
  void _mountDelegate();
  
  @override
  void performRebuild() {
    if (_firstBuild) {
      _firstBuild = false;
      _mountDelegate();
    }
    super.performRebuild();
  }
}
```

顺便看到了该方法是在`performRebuild()`中调用。

只有首次构建时候调用一次。

这里的`performRebuild`相当于上面步骤12、`ComponentElement.performRebuild()`。

经过上面步骤完成了`_delegateState`的赋值。

下面看下`_delegateState.value`的获取：

```dart
class _CreateInheritedProviderState<T> extends _DelegateState<T, _CreateInheritedProvider<T>> {
  T _value;

  @override
  T get value {
      //首次执行时_didInitValue=false,所以进入执行
    if (!_didInitValue) {
      _didInitValue = true;
      if (delegate.create != null) {
        assert(debugSetInheritedLock(true));
        _value = delegate.create(element);
        assert(debugSetInheritedLock(false));

        assert(() {
          delegate.debugCheckInvalidValueType?.call(_value);
          return true;
        }());
      }
      if (delegate.update != null) {
        _value = delegate.update(element, _value);

        assert(() {
          delegate.debugCheckInvalidValueType?.call(_value);
          return true;
        }());
      }
    }

    element._isNotifyDependentsEnabled = false;
    _removeListener ??= delegate.startListening?.call(element, _value);
    element._isNotifyDependentsEnabled = true;
    assert(delegate.startListening == null || _removeListener != null);
    return _value;
  }

}
```

可以看到`_CreateInheritedProviderState<T>`提供了存储值的最终地方`T _value`。

同时提供了获取值方法`T get value`。

首次进入时`_didInitValue=false`，

所以必定执行`if`语句块，

至于`delegate.create`我们早就设置过了，不会为空。

所以会执行`delegate.create(element)`返回值赋给`_value`并返回。

如果不是第一次获取值了，则不再执行`if`语句块，

而是直接返回内容。

通过这里我们知道了 `_value`只有首次调用时才会执行`create`函数予以返回。

现在明白了为什么这块很多名字都叫`delegate`了。

这块是延迟加载机制实现的。



至此，数据取出流程分析完了。



## data刷新流程

分析完了数据存储和取出流程，

下面该分析数据更新时为什么会自动刷新Widget了。

这里从`UserBean`的`notifyListeners`看起：

```dart
  @protected
  @visibleForTesting
  void notifyListeners() {
    assert(_debugAssertNotDisposed());
    if (_listeners != null) {
      final List<VoidCallback> localListeners = List<VoidCallback>.from(_listeners);
      for (VoidCallback listener in localListeners) {
        try {
          if (_listeners.contains(listener))
            listener();
        } catch (exception, stack) {
          FlutterError.reportError(FlutterErrorDetails(
            exception: exception,
            stack: stack,
            library: 'foundation library',
            context: ErrorDescription('while dispatching notifications for $runtimeType'),
            informationCollector: () sync* {
              yield DiagnosticsProperty<ChangeNotifier>(
                'The $runtimeType sending notification was',
                this,
                style: DiagnosticsTreeStyle.errorProperty,
              );
            },
          ));
        }
      }
    }
  }
```

这里知识遍历了`localListeners`并进行了函数调用。

`localListeners`里面保存的就是函数类型`VoidCallback`。

现在陷入死胡同了，因为这里只有调用，不知道什么时候添加的监听。。

**回头想想，之所以调用监听，**

**是因为数据刷新了，我需要使用该数据的控件即时知道。**

**所以监听应该在使用该数据的地方。**

不过这里还是从配置数据开始看一下。

说到配置数据又要回去看`ChangeNotifierProvider<T extends ChangeNotifier>`了，

不过里面没有找到相关调用，

进去父类`ListenableProvider<T extends Listenable>`:

```dart
class ListenableProvider<T extends Listenable> extends InheritedProvider<T> {
  /// Creates a [Listenable] using [create] and subscribes to it.
  ///
  /// [dispose] can optionally passed to free resources
  /// when [ListenableProvider] is removed from the tree.
  ///
  /// [create] must not be `null`.
  ListenableProvider({
    Key key,
    @required Create<T> create,
    Dispose<T> dispose,
    bool lazy,
    Widget child,
  })  : assert(create != null),
        super(
          key: key,
          startListening: _startListening,
          create: create,
          dispose: dispose,
          debugCheckInvalidValueType: kReleaseMode
              ? null
              : (value) {
                  if (value is ChangeNotifier) {
                    // ignore: invalid_use_of_protected_member
                    assert(!value.hasListeners, '''
The default constructor of ListenableProvider/ChangeNotifierProvider
must create a new, unused Listenable.

If you want to reuse an existing Listenable, use the second constructor:

- DO use ChangeNotifierProvider.value to provider an existing ChangeNotifier:

MyChangeNotifier variable;
ChangeNotifierProvider.value(
  value: variable,
  child: ...
)

- DON'T reuse an existing ChangeNotifier using the default constructor.

MyChangeNotifier variable;
ChangeNotifierProvider(
  create: (_) => variable,
  child: ...
)
''');
                  }
                },
          lazy: lazy,
          child: child,
        );

  /// Provides an existing [Listenable].
  ListenableProvider.value({
    Key key,
    @required T value,
    UpdateShouldNotify<T> updateShouldNotify,
    Widget child,
  }) : super.value(
          key: key,
          value: value,
          updateShouldNotify: updateShouldNotify,
          startListening: _startListening,
          child: child,
        );

}
```

上面有个`_startListening`静态函数，

函数中调用了` value?.addListener(e.markNeedsNotifyDependents);`

这里有可能就是添加数据监听器地方。

但是`_startListening`没有在该类直接调用，

而是传递给了父类，点进去看看：

```dart
  InheritedProvider({
    Key key,
    Create<T> create,
    T update(BuildContext context, T value),
    UpdateShouldNotify<T> updateShouldNotify,
    void Function(T value) debugCheckInvalidValueType,
    StartListening<T> startListening,
    Dispose<T> dispose,
    bool lazy,
    Widget child,
  })  : _lazy = lazy,
        _delegate = _CreateInheritedProvider(
          create: create,
          update: update,
          updateShouldNotify: updateShouldNotify,
          debugCheckInvalidValueType: debugCheckInvalidValueType,
          startListening: startListening,
          dispose: dispose,
        ),
        super(key: key, child: child)
```

传递过来的`startListening`被包裹到了`_CreateInheritedProvider`：

```dart
class _CreateInheritedProvider<T> extends _Delegate<T> {
  _CreateInheritedProvider({
    this.create,
    this.update,
    UpdateShouldNotify<T> updateShouldNotify,
    this.debugCheckInvalidValueType,
    this.startListening,
    this.dispose,
  })  : assert(create != null || update != null),
        _updateShouldNotify = updateShouldNotify;

  final Create<T> create;
  final T Function(BuildContext context, T value) update;
  final UpdateShouldNotify<T> _updateShouldNotify;
  final void Function(T value) debugCheckInvalidValueType;
  final StartListening<T> startListening;
  final Dispose<T> dispose;

  @override
  _CreateInheritedProviderState<T> createState() => _CreateInheritedProviderState();
}
```

这里虽然赋值给属性`startListening`，但是没有调用地方。

进去`_CreateInheritedProviderState`看看：

```dart
  T _value;
  _CreateInheritedProvider<T> _previousWidget;

  @override
  T get value {
    if (!_didInitValue) {
      _didInitValue = true;
      if (delegate.create != null) {
        assert(debugSetInheritedLock(true));
        _value = delegate.create(element);
        assert(debugSetInheritedLock(false));

        assert(() {
          delegate.debugCheckInvalidValueType?.call(_value);
          return true;
        }());
      }
      if (delegate.update != null) {
        _value = delegate.update(element, _value);

        assert(() {
          delegate.debugCheckInvalidValueType?.call(_value);
          return true;
        }());
      }
    }

    element._isNotifyDependentsEnabled = false;
    _removeListener ??= delegate.startListening?.call(element, _value);
    element._isNotifyDependentsEnabled = true;
    assert(delegate.startListening == null || _removeListener != null);
    return _value;
  }
```

在`_CreateInheritedProviderState`类中发现

在获取数据`value`的`get`方法中调用了`delegate.startListening?.call(element, _value);`。

`call`函数第二个参数就是我们全局管理的数据。

而在静态的`startListening`函数中，第二个参数`Listenable value`：

```dart
  static VoidCallback _startListening(
    InheritedContext<Listenable> e,
    Listenable value,
  ) {
    value?.addListener(e.markNeedsNotifyDependents);
    return () => value?.removeListener(e.markNeedsNotifyDependents);
  }
```

**看下这行代码`value?.addListener(e.markNeedsNotifyDependents);`。**

**相当于调用了`userBean?.addListener`。**

**所以每个使用全局数据的地方都会为其添加一个监听**

那么`e.markNeedsNotifyDependents`是什么呢？

这个`e`是`_InheritedProviderScopeMixin<T>`。

`markNeedsNotifyDependents`方法为：

```dart
  @override
  void markNeedsNotifyDependents() {
    if (!_isNotifyDependentsEnabled) return;

    markNeedsBuild();
    _shouldNotifyDependents = true;
  }
```

**这里把`_shouldNotifyDependents`设置为true。**

**表示我这个全局数据更新了，应该通知所有依赖它的widget**



这里调用了`markNeedsBuild`，表示自己要重建，

```dart
  void markNeedsBuild() {
    assert(_debugLifecycleState != _ElementLifecycle.defunct);
    if (!_active)
      return;
      //去掉大部分断言
    if (dirty)
      return;
    _dirty = true;
    owner.scheduleBuildFor(this);
  }
```

该方法中标记`dirty=true`表示需要重建。这样绘制下一帧时重建该widget。

然后调用`scheduleBuildFor`，

```dart
  void scheduleBuildFor(Element element) {
    if (element._inDirtyList) {
      _dirtyElementsNeedsResorting = true;
      return;
    }
    if (!_scheduledFlushDirtyElements && onBuildScheduled != null) {
      _scheduledFlushDirtyElements = true;
      onBuildScheduled();
    }
    _dirtyElements.add(element);
    element._inDirtyList = true;
    assert(() {
      if (debugPrintScheduleBuildForStacks)
        debugPrint('...dirty list is now: $_dirtyElements');
      return true;
    }());
  }
```

这是计划重建，重建前把标记为`dirty`的`element`加入到`_dirtyElements`。

还调用了`onBuildScheduled()`。

这是一个函数类型属性`VoidCallback onBuildScheduled;`。

它在`WidgetsBinding`调用`initInstances`时赋值：

```dart
  void initInstances() {
    super.initInstances();
    _instance = this;
    // Initialization of [_buildOwner] has to be done after
    // [super.initInstances] is called, as it requires [ServicesBinding] to
    // properly setup the [defaultBinaryMessenger] instance.
    _buildOwner = BuildOwner();
      //赋值
    buildOwner.onBuildScheduled = _handleBuildScheduled;
    window.onLocaleChanged = handleLocaleChanged;
    window.onAccessibilityFeaturesChanged = handleAccessibilityFeaturesChanged;
    SystemChannels.navigation.setMethodCallHandler(_handleNavigationInvocation);
    FlutterErrorDetails.propertiesTransformers.add(transformDebugCreator);
  }
```

所以`onBuildScheduled`指向的是`_handleBuildScheduled`：

```dart
  void _handleBuildScheduled() {
    // If we're in the process of building dirty elements, then changes
    // should not trigger a new frame.

    ensureVisualUpdate();
  }
```

在`ensureVisualUpdate`方法中调用了`scheduleFrame`。

而`scheduleFrame`中调用了`window.scheduleFrame()`执行新一帧的刷新。



上面`markNeedsBuild`是在`_DefaultInheritedProviderScopeElement<T>`中，

如果重建，会调用旗下方法`build`：

```dart
  @override
  Widget build() {
    if (_isLazy(widget) == false) {
      value; // this will force the value to be computed.
    }
    _delegateState.build();
    if (_shouldNotifyDependents) {
      _shouldNotifyDependents = false;
      notifyClients(widget);
    }
    return super.build();
  }
```

**可以看到如果`_shouldNotifyDependents`为true，**

**会调用` notifyClients(widget)`。**

**这里会通知使用该全局数据的控件：**

```dart
  @override
  void notifyClients(InheritedWidget oldWidget) {
    assert(_debugCheckOwnerBuildTargetExists('notifyClients'));
    for (Element dependent in _dependents.keys) {
      assert(() {
        // check that it really is our descendant
        Element ancestor = dependent._parent;
        while (ancestor != this && ancestor != null)
          ancestor = ancestor._parent;
        return ancestor == this;
      }());
      // check that it really depends on us
      assert(dependent._dependencies.contains(this));
      notifyDependent(oldWidget, dependent);
    }
  }
```

看下`notifyDependent(oldWidget, dependent)`：

```dart
  @protected
  void notifyDependent(covariant InheritedWidget oldWidget, Element dependent) {
    dependent.didChangeDependencies();
  }
```

看下这里调用了`dependent.didChangeDependencies();`。

这个`dependent`就是你使用全局数据widget所对应的`Element`。

看下该实现：

```dart
  @mustCallSuper
  void didChangeDependencies() {
    assert(_active); // otherwise markNeedsBuild is a no-op
    assert(_debugCheckOwnerBuildTargetExists('didChangeDependencies'));
    markNeedsBuild();
  }
```

这里又调用了`markNeedsBuild`，上面介绍了这块设置`dirty`并准备下一帧刷新。

这说明使用该数据的`widget`面临刷新，从而获取最新全局数据。



至此完成了数据更新时即时刷新控件的流程分析。



# 0x03 超精简全局状态管理实现

## 创建保存

在上面存储流程中我们了解到，

实际存储数据的是`Map`类型，

`key`为`Type`类型，但是一般使用`InheritedWidget`实现类的`runtimeType`作为key。

`value`为`InheritedElement`类型，也就是你自定义的`InheritedWidget`所对应的`element`。

绕不开的是需要自定义一个继承自`InheritedWidget`的类，为了便于扩展，使用了泛型：

```dart
class JInherritedWidget<T> extends InheritedWidget {
  final T data;

  JInherritedWidget({this.data, Widget child}) : super(child: child);

  @override
  bool updateShouldNotify(JInherritedWidget oldWidget) {
    return oldWidget.data != data;
  }
}
//顺便定义一个数据类People
class People {
  String name;

  People(this.name);
}
```

这里我直接把`data`放到了widget中，

通过阅读存储流程，应该了解到在构建`InheritedWidget`时候，

系统自动调用了`_updateInheritance`执行了`JInherritedWidget`和`Element`存储。

我们需要做的就是把它用到widget tree中。

目前，我们完成了创建和保存工作。

下面我们看看如何实现数据获取

## 数据获取

`BuildContext`为我们提供了获取`InheritedElement`以及`InheritedWidget`方法。

通过`getElementForInheritedWidgetOfExactType`方法拿到保存在`Map`中的value值即`Element`。

通过`dependOnInheritedElement`，使用`element`得到相应的`Widget`。

拿到`InheritedWidget`转为我们自定义widget，随后即可拿到data：

```dart
  static T of<T>(BuildContext context) {
    InheritedElement element =
        context.getElementForInheritedWidgetOfExactType<JInherritedWidget<T>>();
    return (element.dependOnInheritedElement(element) as JInherritedWidget<T>)
        .data;
  }
```

这就完成了数据的获取。

目前还差数据更新，

## 数据更新

其实如果没有看源码的话，可能数据更新难度最大的部分

（前提是没有给`JInherritedWidget`在包一层、使用Listenable情况下）。

单纯的更新data值是很容易的：

```dart
JInherritedWidget.of<People>(context).name = "jenson ,${i++}";
```

但是我们把值更新了，管理该控件的`JInherritedWidget`不知道你更新了，

使用该数据的控件也不知道你更新了。

**Provider和网上很多例子都是用了`Listenable`，实现了`监听模式`。**

**但是看过源码通过上面data刷新流程会了解到，**

**系统为我们提供了`notifyClients`来通知使用该数据的控件，**

**然后你也可以通过`markNeedsBuild`标记`JInherritedWidget`自身刷新。**

**这里注意一点，通知其他控件要先于标记自身刷新，否则触发异常。**

所以这里添加一个静态更新方法：

```dart
  static void update<T>(BuildContext context) {
    InheritedElement element =
        context.getElementForInheritedWidgetOfExactType<JInherritedWidget<T>>();
    element.notifyClients(
        (element.dependOnInheritedElement(element) as JInherritedWidget<T>));
    element.markNeedsBuild();
  }
```

所有代码只有一个类：

```dart
class JInherritedWidget<T> extends InheritedWidget {
  final T data;

  JInherritedWidget({this.data, Widget child}) : super(child: child);

  static T of<T>(BuildContext context) {
    InheritedElement element =
        context.getElementForInheritedWidgetOfExactType<JInherritedWidget<T>>();
    return (element.dependOnInheritedElement(element) as JInherritedWidget<T>)
        .data;
  }

  static void update<T>(BuildContext context) {
    InheritedElement element =
        context.getElementForInheritedWidgetOfExactType<JInherritedWidget<T>>();
    element.notifyClients(
        (element.dependOnInheritedElement(element) as JInherritedWidget<T>));
    element.markNeedsBuild();
  }

  @override
  bool updateShouldNotify(JInherritedWidget oldWidget) {
    return oldWidget.data != data;
  }
}
```



点击刷新数据是代码：

```dart
          JInherritedWidget.of<People>(context).name = "jenson ,${i++}";
          JInherritedWidget.update<People>(context);
```

使用代码：

```dart
child: UserNameWidget(name: JInherritedWidget.of<People>(context).name)
```

效果如图：

![image-20200119140606347](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200119140606347.png)