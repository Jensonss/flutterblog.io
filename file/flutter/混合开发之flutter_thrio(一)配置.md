本文针对的是新版的**kts**的**gralde**文件。

创建一个普通Android项目。

# 创建flutter_module

打开刚创建的项目的**terminal**，使用命令行创建一个flutter_module。

因为直接的**new module**里没有Flutter选项。

`flutter create -t module --org com.example flutter_module`。

# 给flutter_module添加依赖

```yaml
  get: ^4.6.5
  flutter_thrio: ^4.6.2
  flutter_jsonable: ^1.2.0
```

# 给Android添加flutter_module依赖

## 配置settings.gradle.kts

**repositories**使用如下国内代理：

```kotlin
        maven { setUrl("https://maven.aliyun.com/nexus/content/groups/public") }
        maven { setUrl("https://maven.aliyun.com/repository/public") }
        maven { setUrl("https://maven.aliyun.com/repository/google") }
        maven { setUrl("https://maven.aliyun.com/repository/jcenter") }
        maven { setUrl("https://maven.aliyun.com/repository/central") }
        maven { setUrl("https://maven.aliyun.com/nexus/content/repositories/jcenter/") }
        maven { setUrl("https://download.flutter.io") }
        maven { setUrl("https://storage.googleapis.com/download.flutter.io") }
        maven { setUrl("https://jitpack.io") }
```

下面添加如下代码：

```kotlin
include(":app")
include (":flutter_module")
project(":flutter_module").projectDir = File(settingsDir, "flutter_module")                                                                 // new
apply { "/Users/jenson/Library/flutter/packages/flutter_tools/gradle/app_plugin_loader.gradle" }
apply { from("flutter_settings.gradle") }
```

## 创建flutter_settings.gradle

```groovy
setBinding(new Binding([gradle: this]))
evaluate(new File(settingsDir, 'flutter_module/.android/include_flutter.groovy'))
```

之所以要单独创建一个gradle文件是因为这两行代码在kts文件里没找到对应的代替方法。

## 配置app下的build.gradle.kts

```kotlin
    implementation (project(":flutter"))
    implementation (project(":flutter_thrio"))
```

# 编译出现namespace问题

哪个模块出现问题就给哪个模块下的**build.gradle**添加

```groovy
if (project.android.hasProperty('namespace')) {
    namespace 'com.foxsofter.flutter_thrio'
}
```

点击同步后如果没有问题，接下来可以初始化thrio。

# flutter_thrio初始化

## flutter端初始化

**main.dart**文件

```dart
import 'app.dart' as app;

void main() => app.main();
```

**app.dart**文件：

```dart
import 'package:flutter/material.dart';
import 'package:flutter_thrio/flutter_thrio.dart';
import 'login/module.dart';
import 'module.dart';

void main() => runApp(const MainApp());

class MainApp extends StatefulWidget {
  const MainApp({super.key, String entrypoint = 'main'})
      : _entrypoint = entrypoint;

  final String _entrypoint;

  @override
  _MainAppState createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  @override
  void initState() {
    super.initState();
    ThrioModule.init(RootModule(), entrypoint: widget._entrypoint,
        onModuleInitStart: (url) {
      ThrioLogger.i('module start init: $url');
    });
  }

  @override
  Widget build(BuildContext context) => NavigatorMaterialApp(
        // transitionPage: const NavigatorHome(showRestartButton: true),
        transitionPage: Container(),
        builder: (context, child) => Container(
          child: child,
        ),
        theme: ThemeData(
          pageTransitionsTheme: const PageTransitionsTheme(builders: {
            TargetPlatform.iOS: CupertinoPageTransitionsBuilder(),
            TargetPlatform.android: CupertinoPageTransitionsBuilder(),
          }),
        ),
      );
}
```

在**initState**中初始化**ThrioModule**：

```dart
 ThrioModule.init(RootModule(), entrypoint: widget._entrypoint,
        onModuleInitStart: (url) {
      ThrioLogger.i('module start init: $url');
    });
```

这里的**RootModule**为根module，

里面注册所有模块的的module：

```dart
import 'package:flutter_thrio/flutter_thrio.dart';
import 'login/module.dart' as login;

class RootModule
    with
        ThrioModule,
        ModuleJsonDeserializer,
        ModuleJsonSerializer,
        ModuleParamScheme {
  @override
  void onModuleRegister(ModuleContext moduleContext) {
    navigatorLogEnabled = true;
    registerModule(login.Module(), moduleContext);
  }
}
```

我这里只有login模块，所以只注册了注册模块module。

注册模块下的module如果没有子module，只有页面，则为每个页面创建一个页面module，将页面module注册到注册模块module下,

首先看下注册模块module：

```dart
import 'package:flutter_module/login/login/login_page.dart';
import 'package:flutter_module/login/login/module.dart';
import 'package:flutter_module/login/register/module.dart';
import 'package:flutter_thrio/flutter_thrio.dart';

class Module
    with
        ThrioModule,
        ModuleJsonDeserializer,
        ModuleJsonSerializer,
        ModuleParamScheme,
        ModulePageBuilder {
  @override
  String get key => 'login';

  @override
  void onModuleRegister(ModuleContext moduleContext) {
    navigatorLogEnabled = true;
    registerModule(RegisterModule(), moduleContext);
    registerModule(LoginModule(), moduleContext);
  }
}
```

可以看到这里又注册了**RegisterModule**和**LoginModule**。

这两个module分别对应注册和登录页面：

```dart
import 'package:flutter_module/login/register/register_page.dart';
import 'package:flutter_thrio/flutter_thrio.dart';

class RegisterModule
    with
        ThrioModule,
        ModuleJsonDeserializer,
        ModuleJsonSerializer,
        ModuleParamScheme,
        ModulePageBuilder {
  @override
  String get key => 'register';

  @override
  void onPageBuilderSetting(ModuleContext moduleContext) {
    pageBuilder = (settings) => RegisterPage(
          moduleContext: moduleContext,
          settings: settings,
        );
  }
}
```

```dart
import 'package:flutter_module/login/login/login_page.dart';
import 'package:flutter_thrio/flutter_thrio.dart';

class LoginModule
    with
        ThrioModule,
        ModuleJsonDeserializer,
        ModuleJsonSerializer,
        ModuleParamScheme,
        ModulePageBuilder {
  @override
  String get key => 'login';

  @override
  void onPageBuilderSetting(ModuleContext moduleContext) {
    pageBuilder = (settings) => LoginPage(
          moduleContext: moduleContext,
          settings: settings,
        );
  }
}
```

通过模块module和页面moudule层层递进，通过重写**key**并进行层层拼接，最后形成路由调用的url。

例如这里注册模块**key**为**login**，注册页面module**key**为**register**，

所以路由为 **/login/register**。

这里的页面继承了**NavigatorStatefulPage**。

## Android端初始化

自定义Application，初始化**ThrioModule**：

```kotlin
class MainApp : FlutterApplication() {
    override fun onCreate() {
        super.onCreate()
        ThrioModule.init(MainModule, this)
    }
}
```

**MainModule**：

```kotlin
package com.example.thrio_test

import android.app.Activity
import com.foxsofter.flutter_thrio.module.*
import com.foxsofter.flutter_thrio.navigator.FlutterIntentBuilder
import com.foxsofter.flutter_thrio.navigator.IntentBuilder
import io.flutter.embedding.android.ThrioFlutterFragmentActivity

object MainModule : ThrioModule(), ModuleIntentBuilder, ModuleJsonSerializer,
    ModuleJsonDeserializer {

    override fun onModuleInit(moduleContext: ModuleContext) {
        navigatorLogEnabled = true
    }

    override fun onIntentBuilderRegister(moduleContext: ModuleContext) {
        setFlutterIntentBuilder(object : FlutterIntentBuilder() {
            override fun getActivityClz(): Class<out Activity> =
                CustomFlutterActivity::class.java
        })

        registerIntentBuilder("/biz1/one", object : IntentBuilder {
            override fun getActivityClz(): Class<out Activity> {
                return OneActivity::class.java
            }
        })
        registerIntentBuilder("/biz1/two", object : IntentBuilder {
            override fun getActivityClz(): Class<out Activity> {
                return TwoActivity::class.java
            }
        })
    }

    override fun onJsonSerializerRegister(moduleContext: ModuleContext) {
//        registerJsonSerializer({ people -> people.toJson() }, People::class.java)
    }

    override fun onJsonDeserializerRegister(moduleContext: ModuleContext) {
//        registerJsonDeserializer({ json -> People(json) }, People::class.java)
    }
}
```

**onIntentBuilderRegister**方法中，

**setFlutterIntentBuilder**表示设置显示**FlutterView**的容器，这里是**CustomFlutterActivity**，

**registerIntentBuilder**表示要跳转的**Activity**，首个参数url表示路由url，第二个参数为目标页面。

**CustomFlutterActivity**：

```kotlin
package com.example.thrio_test

import com.foxsofter.flutter_thrio.channel.ThrioChannel
import io.flutter.embedding.android.ThrioFlutterFragmentActivity
import io.flutter.embedding.engine.FlutterEngine

class CustomFlutterActivity : ThrioFlutterFragmentActivity() {

    private var channel: ThrioChannel? = null

    override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
        super.configureFlutterEngine(flutterEngine)
        engine?.apply {
            channel = ThrioChannel(this, "custom_thrio_channel")
            channel?.setupMethodChannel(flutterEngine.dartExecutor)
        }
    }

    // 当在根部时，重写以拦截是否需要再次点击返回键退出
    //
    override fun shouldMoveToBack(): Boolean {
        return true
    }
}
```

至此使用前的配置已经完成。