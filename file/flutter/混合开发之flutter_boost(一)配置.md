# 创建flutter_module

打开刚创建的项目的**terminal**，使用命令行创建一个flutter_module。

因为直接的**new module**里没有Flutter选项。

`flutter create -t module --org com.example flutter_module`。

# 配置flutter_boost

打开yaml文件添加**flutter_boost**依赖：

```yaml
  flutter_boost:
    git:
      url: 'https://github.com/alibaba/flutter_boost.git'
      ref: '4.4.0'
```

# 配置settings.gradle

文件底部添加如下内容：

```groovy
setBinding(new Binding([gradle: this]))
evaluate(new File(settingsDir, 'flutter_module/.android/include_flutter.groovy'))
include ':flutter_module'
project(':flutter_module').projectDir = new File("${settingsDir}", 'flutter_module')                                                                 // new
apply { "/Users/jenson/Library/flutter/packages/flutter_tools/gradle/app_plugin_loader.gradle" }
```

# 配置app build.gradle

文件添加依赖：

```groovy
    implementation project(':flutter')
    implementation project(':flutter_boost')
```

# 初始化Flutter端

## 创建自定义Binding

```dart
///创建一个自定义的Binding，继承和with的关系如下，里面什么都不用写
class CustomFlutterBinding extends WidgetsFlutterBinding
    with BoostFlutterBinding {}
```

在**runApp**之前调用`CustomFlutterBinding();`。

## FlutterBoostApp

```dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return FlutterBoostApp(
      Routes.routeFactory,
      appBuilder: (home) => MaterialApp(
        home: home,
        builder: (_, __) => home,
      ),
    );
  }
}
```

其中**routes.dart**内容如下：

```dart
import 'package:flutter/cupertino.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_boost/flutter_boost.dart';

import 'main.dart';
import 'one_page.dart';

class Routes {
  static Map<String, FlutterBoostRouteFactory> routerMap = {
    '/': (RouteSettings settings, String? uniqueId) {
      return CupertinoPageRoute(
          settings: settings,
          builder: (_) {
            final map = settings.arguments as Map<String, dynamic>?;
            return const MyHomePage();
          });
    },
    'onepage': (settings, uniqueId) {
      return CupertinoPageRoute(
          settings: settings,
          builder: (_) {
            final map = settings.arguments as Map<String, dynamic>?;
            return const OnePage();
          });
    },
  };

  static Route<dynamic> routeFactory(RouteSettings settings, String? uniqueId) {
    print('settings==$settings');
    FlutterBoostRouteFactory func =
        routerMap[settings.name] as FlutterBoostRouteFactory;
    return func(settings, uniqueId)!;
  }
}
```

# 初始化Android端

## 配置 AndroidManifest.xml

```xml
        <activity
            android:name="io.flutter.embedding.android.FlutterActivity"
            android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|layoutDirection|fontScale|screenLayout|density|uiMode"
            android:hardwareAccelerated="true"
            android:windowSoftInputMode="adjustResize" />
        <activity
            android:name="com.idlefish.flutterboost.containers.FlutterBoostActivity"
            android:configChanges="orientation|keyboardHidden|keyboard|screenSize|locale|layoutDirection|fontScale|screenLayout|density"
            android:hardwareAccelerated="true"
            android:theme="@style/Theme.AppCompat"
            android:windowSoftInputMode="adjustResize"></activity>

        <meta-data
            android:name="flutterEmbedding"
            android:value="2"></meta-data>
```

## Application中初始化boost

```kotlin
class App : Application() {

    override fun onCreate() {
        super.onCreate()
        FlutterBoost.instance().setup(this, object : FlutterBoostDelegate {
            override fun pushNativeRoute(options: FlutterBoostRouteOptions) {
                //这里根据options.pageName来判断你想跳转哪个页面，这里简单给一个
                val intent = Intent(
                    FlutterBoost.instance().currentActivity(),
                    SecondActivity::class.java
                )
                FlutterBoost.instance().currentActivity()
                    .startActivityForResult(intent, options.requestCode())
            }

            override fun pushFlutterRoute(options: FlutterBoostRouteOptions) {
                val intent = FlutterBoostActivity.CachedEngineIntentBuilder(
                    FlutterBoostActivity::class.java
                )
                    .backgroundMode(FlutterActivityLaunchConfigs.BackgroundMode.transparent)
                    .destroyEngineWithActivity(false)
                    .uniqueId(options.uniqueId())
                    .url(options.pageName())
                    .urlParams(options.arguments())
                    .build(FlutterBoost.instance().currentActivity())
                FlutterBoost.instance().currentActivity().startActivity(intent)
            }
        }) { engine: FlutterEngine? -> }
    }
}
```