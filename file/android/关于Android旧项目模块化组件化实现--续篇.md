# 0x00 前言

经过[关于Android旧项目模块化组件化实现]( /flutterblog.io/#/markdown_page?type=android&name=关于Android旧项目模块化组件化实现 )

实现模块化后。

在执行sync时，发现`dynamic moudle`其他兄弟模块也都执行了从新编译，

可以看到其他moudle也都执行了相应task：

```txt
Executing tasks: [clean, :user:generateDebugSources, :feed:generateDebugSources, :setting:generateDebugSources, :lost:generateDebugSources, :app:generateDebugSources, :chat:generateDebugSources, :dynamic:generateDebugSources, :common:generateDebugSources] in project D:\AndroidStudioProjects\PetsHome

> Task :clean UP-TO-DATE
> Task :app:clean
> Task :chat:clean
> Task :common:clean
> Task :dynamic:clean
> Task :feed:clean
> Task :lost:clean
> Task :setting:clean
> Task :user:clean
> Task :common:preBuild UP-TO-DATE
> Task :common:preDebugBuild UP-TO-DATE
> Task :user:preBuild UP-TO-DATE
> Task :user:preDebugBuild UP-TO-DATE
> Task :common:packageDebugRenderscript NO-SOURCE
> Task :user:checkDebugManifest
> Task :user:generateDebugBuildConfig
> Task :user:prepareLintJar UP-TO-DATE
> Task :user:prepareLintJarForPublish UP-TO-DATE
> Task :common:compileDebugAidl NO-SOURCE
> Task :user:compileDebugAidl NO-SOURCE
> Task :user:compileDebugRenderscript NO-SOURCE
> Task :user:generateDebugSources
> Task :feed:preBuild UP-TO-DATE
> Task :feed:preDebugBuild UP-TO-DATE
> Task :feed:compileDebugAidl NO-SOURCE
> Task :feed:checkDebugManifest
> Task :feed:compileDebugRenderscript NO-SOURCE
> Task :feed:generateDebugBuildConfig
> Task :feed:prepareLintJar UP-TO-DATE
> Task :feed:prepareLintJarForPublish UP-TO-DATE
> Task :feed:generateDebugSources
> Task :setting:preBuild UP-TO-DATE
> Task :setting:preDebugBuild UP-TO-DATE
> Task :setting:compileDebugAidl NO-SOURCE
> Task :setting:checkDebugManifest
> Task :setting:compileDebugRenderscript NO-SOURCE
> Task :setting:generateDebugBuildConfig
> Task :setting:prepareLintJar UP-TO-DATE
> Task :setting:prepareLintJarForPublish UP-TO-DATE
> Task :setting:generateDebugSources
> Task :lost:preBuild UP-TO-DATE
> Task :lost:preDebugBuild UP-TO-DATE
> Task :lost:compileDebugAidl NO-SOURCE
> Task :lost:checkDebugManifest
> Task :lost:compileDebugRenderscript NO-SOURCE
> Task :lost:generateDebugBuildConfig
> Task :lost:prepareLintJar UP-TO-DATE
> Task :lost:prepareLintJarForPublish UP-TO-DATE
> Task :lost:generateDebugSources
> Task :app:preBuild UP-TO-DATE
> Task :app:preDebugBuild UP-TO-DATE
> Task :app:compileDebugAidl NO-SOURCE
> Task :app:checkDebugManifest
> Task :app:compileDebugRenderscript NO-SOURCE
> Task :app:generateDebugBuildConfig
> Task :app:prepareLintJar UP-TO-DATE
> Task :app:prepareLintJarForPublish UP-TO-DATE
> Task :app:generateDebugSources
> Task :chat:preBuild UP-TO-DATE
> Task :chat:preDebugBuild UP-TO-DATE
> Task :chat:compileDebugAidl NO-SOURCE
> Task :chat:checkDebugManifest
> Task :chat:compileDebugRenderscript NO-SOURCE
> Task :chat:generateDebugBuildConfig
> Task :chat:prepareLintJar UP-TO-DATE
> Task :chat:prepareLintJarForPublish UP-TO-DATE
> Task :chat:generateDebugSources
> Task :dynamic:preBuild UP-TO-DATE
> Task :dynamic:preDebugBuild UP-TO-DATE
> Task :dynamic:compileDebugAidl NO-SOURCE
> Task :dynamic:checkDebugManifest
> Task :dynamic:compileDebugRenderscript NO-SOURCE
> Task :dynamic:generateDebugBuildConfig
> Task :dynamic:prepareLintJar UP-TO-DATE
> Task :dynamic:prepareLintJarForPublish UP-TO-DATE
> Task :dynamic:generateDebugSources
> Task :common:checkDebugManifest
> Task :common:compileDebugRenderscript NO-SOURCE
> Task :common:generateDebugBuildConfig
> Task :common:prepareLintJar UP-TO-DATE
> Task :common:prepareLintJarForPublish UP-TO-DATE
> Task :common:generateDebugSources

BUILD SUCCESSFUL in 0s
41 actionable tasks: 24 executed, 17 up-to-date

```



也就是说目前只成功独立运行了`dynamic moudle`。并没有实现独立编译功能。

所以对于指望独立编译以达到节省时间来说，还要继续研究。



# 0x01 分析

在独立运行`dynamic moudle`时，并没有使用到其他兄弟模块，它们依旧参与了编译过程。

问题出在了哪里？

每个Android  studio创建的项目，

根目录下有个`setting.gradle`，每个moudle又有各自的`build.gradle`。

在`setting.gradle`囊括了所有的moudle。

如果独立运行时，不导入无关兄弟moudle，又会怎样？

修改内容如下：

```groovy
// include ':app', ':dynamic', ':chat', ':user', ':setting', ':feed', ':lost', ':common'
//修改为
include  ':dynamic', ':common'
```

执行sync，打印内容为：

```txt
Executing tasks: [:dynamic:generateDebugSources, :common:generateDebugSources] in project D:\AndroidStudioProjects\PetsHome

:dynamic
> Task :common:preBuild UP-TO-DATE
> Task :common:preDebugBuild UP-TO-DATE
> Task :dynamic:preBuild UP-TO-DATE
> Task :dynamic:preDebugBuild UP-TO-DATE
> Task :common:packageDebugRenderscript NO-SOURCE
> Task :dynamic:checkDebugManifest UP-TO-DATE
> Task :dynamic:generateDebugBuildConfig UP-TO-DATE
> Task :dynamic:prepareLintJar UP-TO-DATE
> Task :dynamic:prepareLintJarForPublish UP-TO-DATE
> Task :common:checkDebugManifest UP-TO-DATE
> Task :common:compileDebugAidl NO-SOURCE
> Task :dynamic:compileDebugAidl NO-SOURCE
> Task :dynamic:compileDebugRenderscript NO-SOURCE
> Task :dynamic:generateDebugSources UP-TO-DATE
> Task :common:compileDebugRenderscript NO-SOURCE
> Task :common:generateDebugBuildConfig UP-TO-DATE
> Task :common:prepareLintJar UP-TO-DATE
> Task :common:prepareLintJarForPublish UP-TO-DATE
> Task :common:generateDebugSources UP-TO-DATE

BUILD SUCCESSFUL in 0s
8 actionable tasks: 8 up-to-date
```

可以看到要减少编译，我们需要**动态包含/取消无关moudle**。

# 0x02 修改

声明一个`aloneMoudle`表示要独立编译的模块

声明一个`commonMoudle`表示公共模块，

声明一个`logicMoudles`表示业务模块数组列表

如果`aloneMoudle`不为空，那么从`logicMoudles`取出模块和`commonMoudle`一起include。

内容修改为：

```groovy
def aloneMoudle = ':dynamic'
def commonMoudle = ':common'
def logicMoudles = [':app', ':dynamic', ':chat', ':user', ':setting', ':feed', ':lost']

if (aloneMoudle != null) {
    def index = logicMoudles.indexOf(aloneMoudle)
    include logicMoudles[index], commonMoudle
} else {
    include ':app', ':dynamic', ':chat', ':user', ':setting', ':feed', ':lost', ':common'
}
```

修改完成后，执行sync。没有报错，且只执行了dynamic和common相关task。

但是现在要独立编译运行某个模块，

除了要修改`setting.gradle`中`aloneMoudle`为相应模块名称。

还要修改`common_config.gradle`中`isDebug=true`。

最后修改对应模块的`build.gradle`，添加ApplicationId:

```groovy
        if (project.ext.isDebug) {
            applicationId "top.jenson.pet"
        }
```

这显然比较麻烦的。步骤多了就容易出错。

# 0x03 改进

三步嫌麻烦，一步到位最好。

每个`build.gradle`对应一个project。

`setting.gradle`对应setting

目前的情况是，

`common_config.gradle`可以获取到project作用域，却获取不到setting作用域。

而project和setting互相无法作用。

如果要一步到位，需要`common_config.gradle`、`build.gradle`和`setting.gradle`都能获取的一个作用域。

而`gradle.properties`就是这三个地方都能访问的域。

## 修改gradle.properties

在该文件中添加内容：

```
aloneMoudle=:app
```

## 修改settings.gradle

该文件内容修改为：

```groovy
def commonMoudle = ':common'
def mainMoudle = ':app'
def logicMoudles = [':dynamic', ':chat', ':user', ':setting', ':feed', ':lost']

if (aloneMoudle == mainMoudle) {
    println "编译主模"
    include ':app', ':dynamic', ':chat', ':user', ':setting', ':feed', ':lost', ':common'
} else {
    println "单独编译模块：$aloneMoudle"
    def index = logicMoudles.indexOf(aloneMoudle)
    include logicMoudles[index], commonMoudle
}
```

这里目前分为业务逻辑模块、基础模块和主模块。

获取`aloneMoudle`，

如果和主模块名称一致，那么说明这里不是独立编译，常规编译所有模块。

如果和主模块名称不一致，说明要独立编译，那么只编译该模块和其依赖模块，兄弟模块不引入。



## 修改common_config

添加属性`isAloneMoudle`：

```
isAloneMoudle = (aloneMoudle == ':app' ? false : true)
```

如果`gradle.properties`中设置的`aloneMoudle`名称和主模块一致，

表示不能作为独立编译`isAloneMoudle=false`，

否则表示将要独立编译`isAloneMoudle=true`。



修改原`setAndroidConfig extension.android`

为`setAndroidConfig extension, extension.android`。

改为接收2个参数。



在`setAndroidConfig`闭包中，

添加是否把当前模块作为主模块的判断：

```groovy
def isAsMainMoudle = isAloneMoudle && aloneMoudle.contains(pro.name)
```

意思是上面确定了将要作为独立编译，

并且独立编译模块名称和当前project名称一致，本模块才作为主模块。

添加`sourceSets`设置：

```groovy
            if (isAsMainMoudle) {
                extension.sourceSets {
                    main() {
                        jniLibs.srcDirs = ['libs']
                        if (project.ext.isAloneMoudle) {
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
            }
```

在闭包`defaultConfig`中添加：

```groovy
if (isAsMainMoudle) {
      applicationId "top.jenson.pet"
}
```



之前的`isDebug`变量去掉，修改后的全部内容为：

```groovy
project.ext {

    isAloneMoudle = (aloneMoudle == ':app' ? false : true)
    println "isAloneMoudle:$isAloneMoudle"

    setAppDefaultConfig = {
        extension ->
            println "@@${extension}"
            extension.apply plugin: 'com.android.application'
            extension.apply plugin: 'kotlin-android'
            extension.apply plugin: 'kotlin-android-extensions'
            extension.apply plugin: 'kotlin-kapt'
//            extension.description "app"
            setAndroidConfig extension, extension.android
            setDependencies extension.dependencies
    }

    setLibDefaultConfig = {
        extension ->
            extension.apply plugin: 'com.android.library'
            extension.apply plugin: 'kotlin-android'
            extension.apply plugin: 'kotlin-android-extensions'
            extension.apply plugin: 'kotlin-kapt'
//            extension.description "library"
            setAndroidConfig extension, extension.android
            setDependencies extension.dependencies
    }


    setAndroidConfig = {
        pro, extension ->
            extension.compileSdkVersion = 28
            extension.buildToolsVersion = "29.0.2"
            println "aloneMoudle=$aloneMoudle"
            println "pro.name=$pro.name"
            def isAsMainMoudle = isAloneMoudle && aloneMoudle.contains(pro.name)
            println "isAsMainMoudle:$isAsMainMoudle"
            extension.defaultConfig {
                if (isAsMainMoudle) {
                    applicationId "top.jenson.pet"
                }
                kapt {
                    arguments {
                        arg("AROUTER_MODULE_NAME", extension.project.getName())
                    }
                }
                minSdkVersion = 21
                targetSdkVersion = 21
                testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
            }
            if (isAsMainMoudle) {
                extension.sourceSets {
                    main() {
                        jniLibs.srcDirs = ['libs']
                        if (project.ext.isAloneMoudle) {
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





## 修改build.gradle

修改所有业务模块下的`build.gradle`：

```groovy
//project.ext.setLibDefaultConfig project
//改为动态设置
if (project.ext.isAloneMoudle) {
    project.ext.setAppDefaultConfig project
} else {
    project.ext.setLibDefaultConfig project
}
```



基础模块的`build.gradle`固定位`project.ext.setLibDefaultConfig project`就好。





# 0x04 结尾

经过上面的修改。

在给业务模块添加好独立入口代码后。



**只要在`gradle.properties`改为想要独立运行的模块。**

**后面流程自动执行：**

然后`settings.gradle`会根据你设置的名称，找到该模块和基础模块引入，其他不引入。

这样只会编译指定模块和其依赖模块(这里只有common)。

每个模块编译时都会用到`common_config`。

编译dynamic模块时，

执行到

`isAloneMoudle = (aloneMoudle == ':app' ? false : true)`

返回true。

执行到闭包

`setAndroidConfig`时

`def isAsMainMoudle = isAloneMoudle && aloneMoudle.contains(pro.name)`

返回true。

然后就会给该模块添加`applicationId`。

同时设置编译源码位置`sourceSets`。