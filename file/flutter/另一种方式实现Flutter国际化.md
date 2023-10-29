# 0x00 前言

看了一下Flutter国际化实现，看的是Intl库。

看资料过程发现需要使用命令行生成什么arb文件。

然后还有几个其他不明所以的文件。

看的一愣一愣的，遂放弃。

印象中不论flutter_localization还是Intl都是需要

在`MaterialApp`中声明**localizationsDelegates**和**supportedLocales**。

既然这是每个库的共性，那索性进去看看里面大概实现是如何的。

# 0x01流程分析

流程开始前先看下大概流程图：

![flutter国际化](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/flutter%E5%9B%BD%E9%99%85%E5%8C%96.jpg)

接下来进入源码分析阶段：

## 第一阶段：MaterialApp

**localizationsDelegates**和**supportedLocales**首先被`MaterialApp`接收，

但它是一个`StatefulWidget`，自己并不处理，交给对应`State`(`_MaterialAppState`)。

在`_MaterialAppState`中，对`localizationsDelegates`和`DefaultMaterialLocalizations.delegate`、`DefaultCupertinoLocalizations.delegate`进行了合并处理，并将合并后的`Iterable`继续传递：

```dart
  Iterable<LocalizationsDelegate<dynamic>> get _localizationsDelegates sync* {
    if (widget.localizationsDelegates != null)
      yield* widget.localizationsDelegates;
    yield DefaultMaterialLocalizations.delegate;
    yield DefaultCupertinoLocalizations.delegate;
  }
```

然后`supportedLocales`没有处理，和`Iterable`同样在`build`方法中传入到`WidgetsApp`中。

## 第二阶段：WidgetsApp

发现`WidgetsApp`也是一个`StatefulWidget`，

所以直接进入对应`State`(`_WidgetsAppState`)的`build`中，

查看`supportedLocales`和`localizationsDelegates`是否有处理:

```
  Iterable<LocalizationsDelegate<dynamic>> get _localizationsDelegates sync* {
    if (widget.localizationsDelegates != null)
      yield* widget.localizationsDelegates;
    yield DefaultWidgetsLocalizations.delegate;
  }
```

发现这里又一次进行了合并返回新的`Iterable`。

而`supportedLocales`没有继续传递了，

而是把`locale`和`supportedLocales`处理后返回一个`appLocale`和`Iterable`传递给`Localizations`:

```dart
Localizations(
              locale: appLocale,
              delegates: _localizationsDelegates.toList(),
              child: title,
            )
```

这里返回`appLocale`的逻辑大概是

**如果最开始设置了`locale`那么根据`locale`和`supportedLocales`返回一个传递。**

**如果没有设置则根据系统支持(`WidgetsBinding.instance.window.locales`)和`supportedLocales`返回一个。**

具体细节参考源码

## 第三阶段：Localizations

进入`Localizations`发现其仍然是一个`StatefulWidget`。

直接去其对应的`_LocalizationsState`中`build`查看是否对

`locale`和`delegates`有处理过：

```dart
  @override
  Widget build(BuildContext context) {
    if (_locale == null)
      return Container();
    return Semantics(
      textDirection: _textDirection,
      child: _LocalizationsScope(
        key: _localizedResourcesScopeKey,
        locale: _locale,
        localizationsState: this,
        typeToResources: _typeToResources,
        child: Directionality(
          textDirection: _textDirection,
          child: widget.child,
        ),
      ),
    );
  }
```

在这里我们看到并没有把传过来的参数继续传递。

就目前情况来看如果继续传递是传递给`_LocalizationsScope`的。

但是其接收的嫌疑参数只有`_locale`、`this`、`_typeToResources`。

下面分别看看这三个参数有什么含义，

`this`就是`_LocalizationsState`自身，

我们发现`_locale`和`_typeToResources`赋值是在`load`函数进行的：

```dart
  @override
  void initState() {
    super.initState();
    load(widget.locale);
  }

void load(Locale locale) {
    final Iterable<LocalizationsDelegate<dynamic>> delegates = widget.delegates;
    if (delegates == null || delegates.isEmpty) {
      _locale = locale;
      return;
    }

    Map<Type, dynamic> typeToResources;
    final Future<Map<Type, dynamic>> typeToResourcesFuture = _loadAll(locale, delegates)
      .then<Map<Type, dynamic>>((Map<Type, dynamic> value) {
        return typeToResources = value;
      });

    if (typeToResources != null) {
      // All of the delegates' resources loaded synchronously.
      _typeToResources = typeToResources;
      _locale = locale;
    } else {
      // - Don't rebuild the dependent widgets until the resources for the new locale
      // have finished loading. Until then the old locale will continue to be used.
      // - If we're running at app startup time then defer reporting the first
      // "useful" frame until after the async load has completed.
      RendererBinding.instance.deferFirstFrame();
      typeToResourcesFuture.then<void>((Map<Type, dynamic> value) {
        if (mounted) {
          setState(() {
            _typeToResources = value;
            _locale = locale;
          });
        }
        RendererBinding.instance.allowFirstFrame();
      });
    }
  }
```

可以看到在State初始化时执行了`load`。

函数大概意思就是把`widget.locale`赋值给`_locale`，

遍历`delegates`,由于每个`delegate`都继承**LocalizationsDelegate**并实现了

`bool isSupported(Locale locale)`

`Future<T> load(Locale locale)`

`bool shouldReload(covariant LocalizationsDelegate<T> old)`

三个方法。

遍历时调用`delegate.load()`返回泛型**Future<T>**实例。

把**T**类型作为`key`，**T**实例作为`value`存入`Map<Type, dynamic>`返回赋值给`_typeToResources`。

## 第四阶段：_LocalizationsScope

上面已经了解了三个嫌疑参数的含义。

接下来看看`_LocalizationsScope`，它继承了`InheritedWidget`。

根据以前对`InheritedWidget`的分析，

`_LocalizationsScope`对应`InheritedElement`的被存储到`_inheritedWidgets`中。

我们应该通过`_LocalizationsScope`.of`方法返回该`Widget`进而拿到相关数据。

但是这是一个隐藏类，我们不能使用。

但是通过搜索发现`Localizations`中有如下方法：

```dart
  static T of<T>(BuildContext context, Type type) {
    assert(context != null);
    assert(type != null);
    final _LocalizationsScope scope = context.dependOnInheritedWidgetOfExactType<_LocalizationsScope>();
    return scope?.localizationsState?.resourcesFor<T>(type);
  }
```

这里的`Type`为泛型T的类型，

虽然`_LocalizationsScope`我们不能使用，但是`Localizations`已经为我们封装了现成可用方法。

在分析Provider源码时说过，关于`InheritedWidget`主要掌握三个地方：

保存数据、更新数据和获取数据。

数据保存流程刚才已经分析完了，

假设更新数据由切换系统语言自动触发，我们无需操作。

那么我们只要获取数据就好了，这里通过`Localizations.of`也已经完成。

## 第五阶段：如何实现多语言

流程分析完了，但是系统是如何提供多语言呢？

上面说了自定义Delegate要继承`LocalizationsDelegate<T>`重新三个方法。

其中`Future<T> load(Locale locale)`根据不同`locale`加载不同的资源**T**。

通过`_MaterialLocalizationsDelegate`类，我们看下具体实现：

```dart
class _MaterialLocalizationsDelegate extends LocalizationsDelegate<MaterialLocalizations> {
  const _MaterialLocalizationsDelegate();

  @override
  bool isSupported(Locale locale) => locale.languageCode == 'en';

  @override
  Future<MaterialLocalizations> load(Locale locale) => DefaultMaterialLocalizations.load(locale);

  @override
  bool shouldReload(_MaterialLocalizationsDelegate old) => false;

  @override
  String toString() => 'DefaultMaterialLocalizations.delegate(en_US)';
}
```

其中`DefaultMaterialLocalizations.load(locale)`为：

```dart
  static Future<MaterialLocalizations> load(Locale locale) {
    return SynchronousFuture<MaterialLocalizations>(const DefaultMaterialLocalizations());
  }
```

这里的`DefaultMaterialLocalizations`为`MaterialLocalizations`子类，

以`SynchronousFuture`方式返回。

看看 `DefaultMaterialLocalizations`部分代码：

```
  @override
  String get invalidDateFormatLabel => 'Invalid format.';

  @override
  String get invalidDateRangeLabel => 'Invalid range.';

  @override
  String get dateOutOfRangeLabel => 'Out of range.';

  @override
  String get saveButtonLabel => 'SAVE';

  @override
  String get datePickerHelpText => 'SELECT DATE';

  @override
  String get dateRangePickerHelpText => 'SELECT RANGE';
```

**子类重写了父类变量，也就是说可以根据不同的`Locale`返回不同的资源**T**。**

# 0x02 实现国际化

上面介绍了相关流程，

接下来看看如何从另一种方式实现国际化

## 创建资源T

通过上面我们知道`LocalizationsDelegate<T>`带有泛型的。

那我们就先实现这个泛型类：

```dart
class MyLocalization{

}
```

我们要在该类中添加我们app要支持的语言：

```dart
  ///支持的Locales
  static List<Locale> get supportedLocales {
    return const <Locale>[
      Locale.fromSubtags(languageCode: 'zh'),
      Locale.fromSubtags(languageCode: 'en'),
    ];
  }
```

然后封装能获取`MyLocalization`的方法：

```dart
  static MyLocalization of(BuildContext context) {
    return Localizations.of<MyLocalization>(context, MyLocalization);
  }
```

上面说了根据不同的`Locale`返回不同的资源**T**，

所以我们这里`MyLocalization`要抽象化，提供未实现的属性，完整代码为：

```dart
abstract class MyLocalization {
  ///支持的Locales
  static List<Locale> get supportedLocales {
    return const <Locale>[
      Locale.fromSubtags(languageCode: 'zh'),
      Locale.fromSubtags(languageCode: 'en'),
    ];
  }

  static MyLocalization of(BuildContext context) {
    return Localizations.of<MyLocalization>(context, MyLocalization);
  }

  String get title;

  String get app_name;
}
```

由于我们支持了中文和英文，所以还要有2个`MyLocalization`的实现类：

`EnLocalization`和`CnLocalization`，代码实现为：

```dart
class EnLocalization extends MyLocalization {
  @override
  String get title => "international";

  @override
  String get app_name => "test international";
}

class CnLocalization extends MyLocalization {
  @override
  String get title => "国际化";

  @override
  String get app_name => "测试国际化";
}
```

**注意：以后所有需要国际化的文本首先声明在`MyLocalization`然后在其子类予以实现即可。**

## 创建delegate

接下来创建自定义`MyDelegate`:

```dart
class MyDelegate extends LocalizationsDelegate<MyLocalization> {
  static MyDelegate delegate = MyDelegate();

  const MyDelegate();

  @override
  bool isSupported(Locale locale) {
    if (locale != null) {
      for (var supportedLocale in MyLocalization.supportedLocales) {
        if (supportedLocale.languageCode == locale.languageCode) {
          return true;
        }
      }
    }
    return false;
  }

  @override
  Future<MyLocalization> load(Locale locale) {
    if (locale.languageCode == 'en') {
      return SynchronousFuture<MyLocalization>(EnLocalization());
    } else if (locale.languageCode == 'zh') {
      return SynchronousFuture<MyLocalization>(CnLocalization());
    }
    return SynchronousFuture<MyLocalization>(CnLocalization());
  }

  @override
  bool shouldReload(LocalizationsDelegate<MyLocalization> old) => false;
}
```

`isSupported`中根据参数`locale`和`MyLocalization.supportedLocales`进行比较判断是否支持此`locale`

`load`根据不同的`locale.languageCode`创建不同的语言资源。

## 添加Delegate

在`MaterialApp`中添加`localizationsDelegates`和`supportedLocales`：

```
 MaterialApp(
        localizationsDelegates: [
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
          MyDelegate.delegate,
        ],
        supportedLocales: MyLocalization.supportedLocales,
        home: TestKeyPage(),
      )
```

## 使用

通过`MyLocalization.of(context).title`直接使用即可。

## 优化

在`load`方法中如果语言较多时，要写很多硬性诸如`zh`、`en`等比较

而且每次都要从新创建`xxLocalization`，性能不好。

所以在`MyLocalization`添加静态变量：

```dart
  static Map<String, MyLocalization> localizations = {
    'zh': CnLocalization(),
    'en': EnLocalization(),
  };
```

`load`修改为：

```dart
  @override
  Future<MyLocalization> load(Locale locale) {
    if (MyLocalization.localizations.containsKey(locale.languageCode)) {
      return SynchronousFuture(
          MyLocalization.localizations[locale.languageCode]);
    } else {
      return SynchronousFuture(MyLocalization.localizations['zh']);
    }
  }
```

这样减少了过多的if else判断和硬性编码，也减少了每次创建`xxLocalization`对象。