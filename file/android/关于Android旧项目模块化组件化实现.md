# 0x00 前言

很多公司都喊起了模块化、组件化、插件化、热更新的口号。

没用过，有点心慌；想用一下，但是上来就是四个名词更TM心慌，都是咋个意思？

个人想法，为了理解方便，把它们分门别类一下：

**模块化、组件化主要是提升开发体验**

**插件化、热更新主要是提升用户体验**

这两类可以分开学习，

这里我们就先学习下模块化、组件化。

# 0x01 为什么学

学习新东西是有成本的，这是个功利的时代，

我们很在意它能不能保本，如果能捞点就更好了。

很多时候项目你以为是这样的：

![image-20191126112252677](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/moudle-1.png)



但实际是这样的：

![image-20191126112410109](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/moudle-2.png)



随着项目功能越来越丰富，代码越来越臃肿，

带来的一个显著问题是编译时间变长。

因为一点的改动都会造成一次全局的编译。

如果实现模块化，每次只编译自己负责的模块岂不是很好？

虽然说是各自负责模块，但是模块界限并不清晰，难免越界。

所以我们渴望项目架构做出调整。

经常我们实现初步模块化架构可能如图：



![image-20191126114419704](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/moudle-3.png)

这只是最基本的模块化结构图。

对了，我们开头说了模块化/组件化，但是现在一直提的只是模块化。

**怎么才算组件化？**

**我觉得组件化是更细粒度的模块化。**

**模块是一组功能相关业务模块，比如动态模块有动态列表，动态详情，发表动态等一组功能**

**组件是功能单一模块，比如动态和聊天都可以发送视频类型，取出视频播放这一功能作为组件**

**组件可以单独抽取出来作为SDK，将来为公司其他项目直接引入可用**

所以现在我们心中的模块化组件化结构图可能是这样的：

![image-20191127101901377](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/moudle-4.png)



# 0x02 结构调整

在我看来模块化/组件化第一步就是先结构调整。

而结构调整的第一步是创建相关moudle。

## 创建moudle

我这里创建的moudle都是选择`android library`。

创建好所需的moudle，按结构图添加好依赖关系。

每个moudle都有一个`build.gradle`文件。

我们要保证每个`build.gradle`中的

`compileSdkVersion`、`minSdkVersion`、`targetSdkVersion`、`buildToolsVersion`值都相同，

不然可能会有冲突。

可以在项目根目录新建文件`common_config.gradle`，添加内容：

```groovy
project.ext {
    compileSdkVersion = 28
    minSdkVersion = 21
    targetSdkVersion = 21
    buildToolsVersion = "29.0.2"
}
```

然后在每个`build.gradle`文件中添加引用：

```groovy
apply from: "${rootProject.rootDir}/common_config.gradle"
```

接下来为各个属性使用统一的值：

```groovy
buildToolsVersion project.ext.buildToolsVersion
compileSdkVersion project.ext.compileSdkVersion
minSdkVersion project.ext.minSdkVersion
targetSdkVersion project.ext.targetSdkVersion
```

这样以后修改相关属性值只需要修改一次即可。

到这一步，从新编译尝试运行项目。

修复遇到的问题，确保现在在空壳moudle情况下可以正常运行。

开始为后面操作做准备。

## 代码拆分

上面创建了moudle，但是里面还是空的。这一步来填内容。

按照结构图开始像择菜一样择代码，把择出来的代码放到相应moudle中。

但凡项目稍微大点，这都是一个痛苦且漫长的过程。

择完代码后，业务moudle之间没有依赖关系，导致无法相互调用。

**如果遇到组件之间的跳转代码飘红的地方暂时先注释掉。**

**如果遇到组件之间的数据通信飘红地方也先注释掉。**

**如果出现moudle无法使用它所依赖moudle已经添加依赖库中类的情况下，**

**可能是你的依赖库使用的是`implementation`，改为`api`即可。**

这俩的区别是：

你在A moudle中用`implementation`添加的依赖，依赖的类库只能在A 本moudle中使用。

如果其他moudle引用了A moudle，其他moudle要使用A中依赖的类库，需要使用`API`声明。

譬如：

```groovy
    api 'com.squareup.retrofit2:retrofit:2.5.0'
    api 'com.squareup.retrofit2:converter-gson:2.0.2'
    //rxjava
    api 'io.reactivex.rxjava2:rxandroid:2.0.1'
    //二维码
    api 'com.google.zxing:core:3.3.0'
```

## 适时下沉

不要为了图方便一口气把所有文件都下沉到common。

不要抱着反正下沉到common，我的moudle也能正常使用的心态。

做人要有节操。

## anko问题

对于多个moudle公用的布局，我把它们下沉到common模块中。

但是业务moudle通过anko直接使用id进行操作时是没有问题的。

但是一旦编译运行就出现unresolve。

所以只能通过手动方式获取：

```kotlin
private val titleView by lazy { find<TextView>(R.id.titleView) }
```



经过这一阶段的处理，你的App应该可以运行起来。

同一个moudle之间可以跳转、数据传递。

剩下的慢慢处理。

# 0x03 模块间跳转

上面说了模块之间的跳转飘红注释掉。

这里我们来处理模块间跳转。

上面模块间跳转所以会出错是因为使用了`显示跳转`，

强依赖关系，而模块之前是没有关系的，导致飘红。

那么如何实现模块之间正确跳转呢？

## 隐式跳转

隐式跳转，

一种方式通过`action`跳转，

首先要在`AndroidManifest`中对应actvity设置`IntentFilter`：

```xml
<intent-filter>
     <action android:name="top.jenson.setting.activity.about"/>
     <category android:name="android.intent.category.DEFAULT"/>
</intent-filter>
```

然后在其他moudle使用如下跳转：

```kotlin
startActivity(Intent("top.jenson.setting.activity.setting"))
```



还可以通过另一种方式隐式跳转：包名+Activity全路径形式：

```kotlin
val intent = Intent()
intent.setClassName("模块包名", "activity类全名称")
intent.component = ComponentName("模块包名", "activity类全名称")
startActivity(intent)
```



隐式跳转并不理想，因为如果其他模块负责人把相关信息修改了。

有可能会导致你的跳转异常崩溃。

尽管你可以通过`intent.resolveActivity(activity!!.packageManager)`来判断。

但是显然这是比较麻烦且不友好的。况且获取Fragment你要怎么办？

## 路由跳转

隐式跳转用着不舒服？还可以使用路由跳转。

Android路由框架还是蛮多的，`activityRouter`、`deepLink`、`ARouter`等等。

根据情况选择自己熟悉的框架即可。这里我使用`ARouter`。

### 添加依赖

在`build.gradle`中添加：

下面是Kotlin方式

```groovy
apply plugin: 'kotlin-kapt'

kapt {
    arguments {
        arg("AROUTER_MODULE_NAME", project.getName())
    }
}

dependencies {
    api 'com.alibaba:arouter-api:1.4.1'
    kapt 'com.alibaba:arouter-compiler:1.2.2'
   
}
```

如果使用Java方式，及进阶使用参考[Github]( https://github.com/alibaba/ARouter/blob/master/README_CN.md )

### 统一声明path

在Common moudle新建常量类，其中封装各个moudle中使用的path：

```kotlin
class Constant {
    companion object {
        //chat模块
        //common模块
        const val COMMON_BDMapActivity = "/COMMON/BDMapActivity"
        const val COMMON_AddLocationActivity = "/COMMON/AddLocationActivity"
        //dynamic模块
        const val DYNAMIC_AddDynamicActivity = "/DYNAMIC/AddDynamicActivity"
        //feed模块
        const val FEED_NearFeedActivity = "/FEED/NearFeedActivity"
        //lost模块
        const val LOST_FindPetActivity = "/LOST/FindPetActivity"
        //setting模块
        const val SETTING_FeedBackActivity = "/SETTING/FeedBackActivity"
        const val SETTING_AboutActivity = "/SETTING/AboutActivity"
        const val SETTING_SettingActivity = "/SETTING/SettingActivity"
        //user模块
        const val USER_RegistActivity = "/USER/RegistActivity"
        const val USER_LoginActivity = "/USER/LoginActivity"
        const val USER_FindPwdActivity = "/USER/FindPwdActivity"
    }
}
```

### 调用

无参调用使用：

```kotlin
ARouter.getInstance().build(Constant.SETTING_AboutActivity).navigation()
```

如果要携带数据，在`navigation`前通过`with`函数传递：

```java
ARouter.getInstance().build("/test/1")
            .withLong("key1", 666L)
            .withString("key3", "888")
            .withObject("key4", new Test("Jack", "Rose"))
            .navigation();
```

期间遇到两个问题已解决，参考：

[ ARouter::Compiler >>> No module name ]( https://blog.csdn.net/a34927341/article/details/87690451 )

[ arouter there's  no route matched ]( https://blog.csdn.net/weixin_37292229/article/details/93375669 )

## 项目调整

模块间跳转大部分操作就是`actvity启动`和`获取fragment` ，以`activity启动`为例。

跳转可以分为`调用点`和`被调用方`。

`调用点`是指调用跳转的地方，譬如：

```kotlin
val intent = Intent(activity, AboutActivity::class.java)
startActivity(Intent(intent))
```

把调用点直接替换为上面介绍的跳转方法。

`被调用方`是负责响应调用的类，如果涉及数据传递，就需要修改，

为接收数据的变量添加@Autowired注解，譬如：

```kotlin
  @Autowired
  var name;
  @Autowired
  var age;
```

 **ARouter会自动对字段进行赋值，无需主动获取。**

按照上面方式完成所有模块跳转修改，

目前你的项目应该确保模块间页面互相打开是没问题的。

# 0x04 模块间通信

通过上面操作，目前已经完成了模块间跳转功能。

本节开始处理模块间通信问题。

通过结构图可以看到模块之间是没有依赖的。

所以直接通信不现实，那么只能走间接通信。

业务模块都依赖了common moudle。

**我们可以把通信内容(数据类)下沉到common模块，通过事件总线实现通信**

事件总线有一个不好的地方就是每个不同的消息事件都对应成一个数据类。

如果事件很多，我们需要维护的事件类是庞大的。

每次的事件修改，都是对common moudle的修改。

所以**可以单独创建EventMoudle，用来存放事件类，common moudle 依赖它。**



经过上面的一通修改，目前你的App功能应该和调整前一样，各功能正常运行。

但是我们结构调整的最初目标：单独编译还没实现。

# 0x05 独立编译

上面已经通过`common_config.gradle`抽取了四个通用属性。

下面我们要继续抽取。

## 继续抽取build.gradle

我们看到每个moudle都有一个`build.gradle`。

每个文件里面开头都引用了几个插件，除了lib和Application，大体都是一样的：

```groovy
//主moudle
apply plugin: 'com.android.application'
//lib moudle
extension.apply plugin: 'com.android.library'

apply plugin: 'kotlin-android'
apply plugin: 'kotlin-android-extensions'
apply plugin: 'kotlin-kapt'
```

所以在`common_config.gradle`的`ext`域中添加：

```
    //主moudle使用
    setAppDefaultConfig = {
        extension ->
            extension.apply plugin: 'com.android.application'
            extension.apply plugin: 'kotlin-android'
            extension.apply plugin: 'kotlin-android-extensions'
            extension.apply plugin: 'kotlin-kapt'
    }
	//lib moudle使用
    setLibDefaultConfig = {
        extension ->
            extension.apply plugin: 'com.android.library'
            extension.apply plugin: 'kotlin-android'
            extension.apply plugin: 'kotlin-android-extensions'
            extension.apply plugin: 'kotlin-kapt'
    }
    
```

由于在`android{}`和`dependencies{}`中也有很多相同内容，所以把这两个地方也提取出来。

在`common_config.gradle`的`ext`域添加为：

```
    setAndroidConfig = {
        extension ->
            extension.compileSdkVersion = 28
            extension.buildToolsVersion = "29.0.2"
            extension.defaultConfig {
                kapt {
                    arguments {
                        arg("AROUTER_MODULE_NAME", extension.project.getName())
                    }
                }
                minSdkVersion = 21
                targetSdkVersion = 21
                testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
            }
//            extension.dataBinding {
//                enable = true
//            }
    }

    setDependencies = {

    }
```

不管是主moudle还是lib moudle，它们都包含`setAndroidConfig`和`setDependencies`。

所以要把这两个放入前面moudle内容中。

修改后内容为：

```groovy
project.ext {
    setAppDefaultConfig = {
        extension ->
            extension.apply plugin: 'com.android.application'
            extension.apply plugin: 'kotlin-android'
            extension.apply plugin: 'kotlin-android-extensions'
            extension.apply plugin: 'kotlin-kapt'
            setAndroidConfig extension.android
            setDependencies extension.dependencies
    }
    setLibDefaultConfig = {
        extension ->
            extension.apply plugin: 'com.android.library'
            extension.apply plugin: 'kotlin-android'
            extension.apply plugin: 'kotlin-android-extensions'
            extension.apply plugin: 'kotlin-kapt'
            setAndroidConfig extension.android
            setDependencies extension.dependencies
    }

    setAndroidConfig = {
        extension ->
            extension.compileSdkVersion = 28
            extension.buildToolsVersion = "29.0.2"
            extension.defaultConfig {
                kapt {
                    arguments {
                        arg("AROUTER_MODULE_NAME", extension.project.getName())
                    }
                }
                minSdkVersion = 21
                targetSdkVersion = 21
                testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
            }
//            extension.dataBinding {
//                enable = true
//            }
    }

    setDependencies = {
        extension ->
            extension.implementation fileTree(dir: 'libs', include: ['*.jar'])
            extension.implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version"
            extension.implementation 'androidx.appcompat:appcompat:1.0.2'
            extension.implementation 'androidx.core:core-ktx:1.0.2'
            extension.kapt 'com.alibaba:arouter-compiler:1.2.2'
    }
}
```

内容抽取差不之后，需要把每个`build.gradle`中重复的内容移除掉。

同时添加`common_config.gradle`使用：

```groovy
apply from: "${rootProject.rootDir}/common_config.gradle"
project.ext.setAppDefaultConfig project
```

同步项目并运行，为后面做准备。

## 独立编译

现在我的项目动态模块`dynamic`只有Fragment提供给app moudle的MainActivity。

![image-20191127162514819](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/moudle-5.png)

我现在打算独立运行`dynamic`。

首先要添加个标志`isDebug`。如果为true表示我要独立运行，否则作为lib运行。

标志加在`common_config.gradle`中`isDebug = true`。

### 判断是否作为lib

在`dynamic`的`build.gradle`中，根据`isDebug`来判断该moudle是否作为lib:

```groovy
if (project.ext.isDebug) {
    project.ext.setAppDefaultConfig project
} else {
    project.ext.setLibDefaultConfig project
}
```

### 设置applicationId

作为app moudle，需要设置`applicationId`。

在`dynamic`的`build.gradle`中，根据`isDebug`来判断该moudle是否添加`applicationId`:

```groovy
if (project.ext.isDebug) {
            applicationId "top.jenson.pet"
}
```

### 取消被依赖

一个app中，你要当主moudle，就不能作为lib被其他moudle依赖。

所以要根据`isDebug`来判断是否可以被添加依赖。

在app moudle的`build.gradle`中修改：

```
    if (!project.ext.isDebug) {
        implementation project(path: ':dynamic')
    }
```

同步项目，发现已经多出了可以运行的`dynamic`：

![image-20191127164425098](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/moudle-6.png)

运行时提示错误`More than one file was found with OS independent path 'META-INF/rxjava.properties'`。

这是rxjava引起的问题。

在`dynamic`的`build.gradle`中`defaultConfig`添加：

```groovy
        packagingOptions {
            exclude 'META-INF/rxjava.properties'
        }
```

再次运行，发现还是运行不起来。因为没有可运行的activity。

### 添加debug内容

在`dynamic`的`src`下创建`debug`目录。

和`main`目录一样，新建`AndroidManifest.xml`，`java`，`res`。

新建`DynamicListActivity`，包裹Fragment。

在`debug`目录的`AndroidManifest`注册Activity  :

```xml
        <activity android:name="activity.DynamicListActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
```

结构图为：

![image-20191127172530979](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/moudle-7.png)



一般项目都有自定义Application，里面有很多初始化的逻辑。

在`debug`下的`AndroidManifest`，为了避免各种问题，这里也使用以前定义的Application：

```xml
<application
            android:name="top.jenson.common.acitivty.PetApplication"
            android:allowBackup="true"
            android:icon="@mipmap/ic_launcher"
            android:label="@string/app_name"
            android:roundIcon="@mipmap/ic_launcher_round"
            android:supportsRtl="true"
            android:theme="@style/AppTheme"
            android:usesCleartextTraffic="true">
        <activity android:name=".activity.AddDynamicActivity" />
        <activity android:name="activity.DynamicListActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
```



我们在`debug`目录下新建了很多内容，用于为本moudle提供一个入库Activity。

这些内容只在独立编译时才会用到，作为lib时无需使用。

所以在`build.gradle`中配置：

```groovy
    sourceSets {
        main() {
            jniLibs.srcDirs = ['libs']
            if (project.ext.isDebug) {
                manifest.srcFile 'src/debug/AndroidManifest.xml'
                res.srcDirs = ['src/debug/res', 'src/main/res']
            } else {
                manifest.srcFile 'src/main/AndroidManifest.xml'
                resources {
                    exclude 'src/debug/*'
                }
            }
        }
    }
```



运行后如图：

![image-20191127172857836](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/moudle-8.png)

可以看到现在已经没有了app moudle作为主moudle时的底部导航。

因为我这里的Activity只是单纯的包含了Fragment，没有其他逻辑。



目前为止，项目模块化已经基本完成。

以后其他的改动都是在此基础上进行。