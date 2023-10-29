# 0x00 前言

在做语言切换的时候要注意你的语言切换是内部切换还是外部切换。

内部切换是系统语言没有改变，单纯在app内的语言切换。

外部切换是指系统语言切换导致的app语言切换。

内部切换，切换后我们需要自己去刷新。

外部切换，系统会自动回调，无需我们实现。

下面分别说说这两种。

# 0x01 外部切换

[另一种方式实现Flutter国际化](/flutterblog.io/#/markdown_page?type=flutter&name=另一种方式实现Flutter国际化)里面的语言切换就是外部切换。

但是我们App是怎么知道系统语言发生变化了呢？

在`runApp`运行的时候回初始化`WidgetsFlutterBinding`:

```dart
void runApp(Widget app) {
  WidgetsFlutterBinding.ensureInitialized()
    ..scheduleAttachRootWidget(app)
    ..scheduleWarmUpFrame();
}
```

其中`ensureInitialized`调用了`WidgetsFlutterBinding()`。

而构造函数调用的时候会调用`initInstances()`：

```dart
  @override
  void initInstances() {
    super.initInstances();
    _instance = this;

    assert(() {
      _debugAddStackFilters();
      return true;
    }());

    // Initialization of [_buildOwner] has to be done after
    // [super.initInstances] is called, as it requires [ServicesBinding] to
    // properly setup the [defaultBinaryMessenger] instance.
    _buildOwner = BuildOwner();
    buildOwner.onBuildScheduled = _handleBuildScheduled;
    window.onLocaleChanged = handleLocaleChanged;
    window.onAccessibilityFeaturesChanged = handleAccessibilityFeaturesChanged;
    SystemChannels.navigation.setMethodCallHandler(_handleNavigationInvocation);
    FlutterErrorDetails.propertiesTransformers.add(transformDebugCreator);
  }
```

注意这里面为`window`设置了一个属性`onLocaleChanged`。

这是一个函数类型，而`handleLocaleChanged`是这样：

```dart
  @protected
  @mustCallSuper
  void handleLocaleChanged() {
    dispatchLocalesChanged(window.locales);
  }

```

其中`window.locales`表示系统使用的语言列表，

当我们修改系统语言时，`window.locales`的变化会回调`handleLocaleChanged`。

```dart
  @protected
  @mustCallSuper
  void dispatchLocalesChanged(List<Locale> locales) {
    for (final WidgetsBindingObserver observer in _observers)
      observer.didChangeLocales(locales);
  }
```

遍历观察者，告知系统语言发生变化，注意处理。

那么`_observers`中的数据是什么时候被添加进去的呢？

[另一种方式实现Flutter国际化](http://www.jenson.top/post/166/)里面有说到`WidgetsApp`,其对应`_WidgetsAppState`。

其`initState`方法为：

```dart
  @override
  void initState() {
    super.initState();
    _updateNavigator();
    _locale = _resolveLocales(WidgetsBinding.instance.window.locales, widget.supportedLocales);
    WidgetsBinding.instance.addObserver(this);
  }
```

可以看到这里添加了Observer。

当执行`observer.didChangeLocales(locales)`时，

其实会调用`_WidgetsAppState`中的`didChangeLocales`：

```dart
  @override
  void didChangeLocales(List<Locale> locales) {
    final Locale newLocale = _resolveLocales(locales, widget.supportedLocales);
    if (newLocale != _locale) {
      setState(() {
        _locale = newLocale;
      });
    }
  }
```

既然调用了`setState`，那么接下来就是调用`build`。

把新的`_locale`向下传递，导致页面根据新的`_locale`获取新的资源显示文本。

这就完成了外部切换。

# 0x02 内部切换

内部切换最直接的方法就是切换语言时，我们执行`MaterialApp`参数`locale`的刷新。

如何切换时刷新`locale`?

当然是把`Locale`加入到状态管理。

以`Provider`为例，

## 创建`Locale`包裹类

```dart
class LocaleWrap with ChangeNotifier {
  Locale locale;


  void update(Locale locale) {
    this.locale = locale;
    notifyListeners();
  }
}
```

## 添加到`MultiProvider`中

```dart
 ChangeNotifierProvider(
            create: (_) =>
                LocaleWrap()..locale = Locale.fromSubtags(languageCode: 'zh'))
```

既然已经把`Locale`纳入了状态管理，接下来要做的就是

## Provider提供locale

`MaterialApp`中使用的`locale`的值需要从`Provider`中获取了：

```dart
Consumer<LocaleWrap>(builder: (ctx, data, child) {
        return MaterialApp(
          onGenerateRoute: FindCatApp.router.generator,
          localizationsDelegates: [
            CatDelegate.delegate,
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
          ],
          locale: data.locale,///使用状态管理提供的Locale
          supportedLocales: BaseLocalization.supportedLocales,
          theme: ThemeData(
            primaryColor: Colors.yellow[700],
          ),
          home: HomePage(),
        );
      })
```

## 切换语言时发送刷新通知

```dart
Provider.of<LocaleWrap>(context, listen: false)
                  .update(Locale.fromSubtags(languageCode: val));
```