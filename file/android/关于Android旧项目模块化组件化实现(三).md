# 0x00 前言

在前面两篇组件化文章中，

通过[关于Android旧项目模块化组件化实现](/flutterblog.io/#/markdown_page?type=android&name=关于Android旧项目模块化组件化实现)实现了模块独立运行，

通过[关于Android旧项目模块化组件化实现--续篇](/flutterblog.io/#/markdown_page?type=android&name=关于Android旧项目模块化组件化实现--续篇)实现了模块独立编译。

但是细细考量下会发现还有很多可以改进的地方。

比如公司项目有多个apk。

各个apk又都涉及了相同组件的使用该怎么办？

这里我提出个概念“组件司有化”。

**所谓“组件司有化”，是指提取组件，使其不局限于app内使用，**

**而是上升到公司高度，使公司内部其他项目都能使用它。**

那么如何实现"组件司有化"？

首先组件/模块打包aar，

其次公司搭建内部maven库，

然后aar上传maven库，

最后依赖maven库添加。

下面看每一步具体如何实现。

# 0x01 组件打包aar

在侧边栏打开`Gradle任务栏`，找到`xx模块/Tasks/build/build`：

![image-20200113114029599](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113114029599.png)

双击执行后在模块的`build/outputs/aar/`目录生成了打包好的aar。

这里生成的了`debug`和`release`两种包：

![image-20200113114052907](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113114052907.png)

如果要生成某一种包，可以在`xx模块/Tasks/other/`下，

找到`assembleDebug`和`assembleRelease`：

![image-20200113114118337](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113114118337.png)

点击即可生成对应类型的aar。



# 0x02 搭建私有maven

## 下载仓库

下载[nexus-repository-oss](https://www.sonatype.com/nexus-repository-oss)。

如果不想直接使用最新类型，

从这里下载[版本列表](https://help.sonatype.com/repomanager3/download/download-archives---repository-manager-3)

## 运行

下载后解压，

通过`cmd`进入目录`C:\Users\Jenson\Downloads\nexus-3.20.0-04-win64\nexus-3.20.0-04\bin`。

执行`nexus.exe /run`启动服务。

出现如下字样表示启动成功：

![image-20200113114404384](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113114404384.png)

执行`http://localhost:8081/`打开服务页面。

## 登录

旧版登录账号密码为admin;admin123。

新版密码改了，账号仍然是`admin`

在解压目录搜索`admin`，出现`admin.password`字样的文件。

或者在目录`C:\Users\Jenson\Downloads\nexus-3.20.0-04-win64\sonatype-work\nexus3`查找。

打开密码文件，复制该文件中字符串登录即可。

参考：[Nexus3 初始密码不再是admin123](https://www.jianshu.com/p/fcb128e34c87)



# 0x03 创建repository

## 介绍

登录后的nexus页面很简单，顶部只有2个tab。

第一个tab页面只有创建好的列表和手动上传两块功能。

![image-20200113115257718](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113115257718.png)

第二个tab页面虽然功能稍多，但是平常也只用到repository：

可以创建新的repository并配置存储目录。

![image-20200113115555754](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113115555754.png)

## 创建

点击创建一个新的存储位置，默认在C盘不太好。

![image-20200113115758053](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113115758053.png)

位置路径分配到D盘：

![image-20200113115915543](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113115915543.png)

点击创建。

创建新的repository：

![image-20200113115950018](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113115950018.png)

这里因为用的maven，所以选择maven2类型：

![image-20200113120027853](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113120027853.png)

![image-20200113120302940](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113120302940.png)

创建好之后列表多了个新的repository：

![image-20200113120345972](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113120345972.png)



# 0x04 aar上传

前面创建好了repository，

创建仓库就是要存储东西的，

上传有手动和自动两种。

## 手动上传

进入upload页面，选择新建的user repository：

![image-20200113120538582](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113120538582.png)



创建之前我们先分析下添加依赖时各个部件名称：

```groovy
implementation 'top.jenson.user:libuser:1.1.4'
//使用冒号分隔，各个部分名称为：
//'groupId:artifactId:version'
```

了解了这三部分可以继续上传了：

![image-20200113121053127](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113121053127.png)

填完后内容：

![image-20200113121132568](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113121132568.png)

上传后有提示信息：

![image-20200113121212906](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113121212906.png)

点击查看页面如下：

![image-20200113121238903](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113121238903.png)



通过browse查看如图：

![image-20200113121359053](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113121359053.png)

至此已经完成了user库的1.0.0版本的手动上传。



## 自动上传

上面手工上传，在库较少情况下还可以，但是随着项目发展，

库越来越多时，每个手动上传就比较蛋疼了。

所以实现自动上传是有必要的。

在项目根目录(以便其他moudle引用)创建`upload_to_maven.gradle`。

首先添加`maven`插件

```groovy
apply plugin: 'maven'
```

然后设置仓库url和账号、密码信息：

```groovy
//定义变量
//设置仓库位置
def RELEASE_REPOSITORY_URL = 'http://127.0.0.1:8081/repository/user/'
//登录账号
def NEXUS_USERNAME = 'admin'
//登录密码
def NEXUS_PASSWORD = 'qqqq'
```

然后就是上传逻辑了，

我们既然依赖了maven插件，它就给我们提供了相应的上传闭包：

```groovy
afterEvaluate { project ->
    println "project=$project.name"
    uploadArchives {
        repositories {
            mavenDeployer {

            }
        }
    }
}
```

我们要做的就是在`mavenDeployer`完成功能。

由于我这里只打算用user模块测试，所以内容填写的是user模块相关：

```groovy
afterEvaluate { project ->
    println "project=$project.name"
    uploadArchives {
        repositories {
            mavenDeployer {
                pom.groupId = 'top.jenson.user'
                pom.artifactId = 'libuser'
                pom.version = '1.1.1'
                pom.packaging = 'aar'
                pom.name = project.name
                repository(url: RELEASE_REPOSITORY_URL) {
                    authentication(userName: NEXUS_USERNAME, password: NEXUS_PASSWORD)
                }
//                snapshotRepository(url: SNAPSHOT_REPOSITORY_URL) {
//                    authentication(userName: NEXUS_USERNAME, password: NEXUS_PASSWORD)
//                }
            }
        }
    }
}
```

全部内容为：

```groovy
apply plugin: 'maven'

def RELEASE_REPOSITORY_URL = 'http://127.0.0.1:8081/repository/user/'
def NEXUS_USERNAME = 'admin'
def NEXUS_PASSWORD = 'qqqq'

afterEvaluate { project ->
    println "project=$project.name"
    uploadArchives {
        repositories {
            mavenDeployer {
                pom.groupId = 'top.jenson.user'
                pom.artifactId = 'libuser'
                pom.version = '1.1.1'
                pom.packaging = 'aar'
                pom.name = project.name

                repository(url: RELEASE_REPOSITORY_URL) {
                    authentication(userName: NEXUS_USERNAME, password: NEXUS_PASSWORD)
                }
//                snapshotRepository(url: SNAPSHOT_REPOSITORY_URL) {
//                    authentication(userName: NEXUS_USERNAME, password: NEXUS_PASSWORD)
//                }

            }
        }
    }
}

```

user模块的build.gradle添加该文件依赖：

```groovy
apply from:"${rootProject.rootDir}/upload_to_maven.gradle"
```

然后在`gradle任务栏`，user模块下找到uploadArchives任务双击执行

![image-20200113124231648](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113124231648.png)



出现如下字样表示上传成功：

![image-20200113124421013](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113124421013.png)



接下里还要去maven库中看看是不是真得存在了：

![image-20200113124554173](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113124554173.png)

可以看到aar文件已经存在已经上传成功了。



## 自动上传优化

上面只是针对user模块使用，所以groupId、artifactId和version都直接写代码里面了。

这里我们进行抽取，以保证各个模块通用：

在需要的模块下创建`gradle.properties`文件，比如user添加内容：

```properties
GROUPID=top.jenson.user
ARTIFACT_ID=libuser
VERSION=1.1.1
```

原本的pom信息直接调用这些变量即可：

```properties
 pom.groupId = GROUPID
 pom.artifactId = ARTIFACT_ID
 pom.version = VERSION
 pom.packaging = 'aar'
 pom.name = project.name
```

gradle文件最终修改为：

```groovy
apply plugin: 'maven'

def RELEASE_REPOSITORY_URL = 'http://127.0.0.1:8081/repository/user/'
def NEXUS_USERNAME = 'admin'
def NEXUS_PASSWORD = 'qqqq'

afterEvaluate { project ->
    println "project=$project.name"
    uploadArchives {
        repositories {
            mavenDeployer {
                println "groupId=$GROUPID, artifactId=$ARTIFACT_ID, version=$VERSION"
                pom.groupId = GROUPID
                pom.artifactId = ARTIFACT_ID
                pom.version = VERSION
                pom.packaging = 'aar'
                pom.name = project.name

                repository(url: RELEASE_REPOSITORY_URL) {
                    authentication(userName: NEXUS_USERNAME, password: NEXUS_PASSWORD)
                }
//                snapshotRepository(url: SNAPSHOT_REPOSITORY_URL) {
//                    authentication(userName: NEXUS_USERNAME, password: NEXUS_PASSWORD)
//                }
            }
        }
    }
}

```

上面添加了打印信息，看下打印日志：

![image-20200113143725884](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113143725884.png)





# 0x05 maven依赖添加

上面已经完成了aar的打包和上传。

我们做了这么多都是为了这一步：使用

接下来我们就希望像使用第三方库一样依赖使用。

创建一个新项目`mavenTest`。

由于我们使用了私有maven库，所以在项目的`build.gradle`添加私有repository：

```groovy
allprojects {
    repositories {
        maven {
            url 'http://127.0.0.1:8081/repository/user/'
        }
        google()
        jcenter()
    }
}
```

在模块下添加依赖：

```groovy
    implementation 'top.jenson.user:libuser:1.1.1@aar'
```

同步之后查看external library：

![image-20200113141159102](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113141159102.png)

可以看到通过新依赖已经成功下载到新项目中，

后面就可以随意使用了。





# 0x06 结尾

你可能好奇`implementation 'top.jenson.user:libuser:1.1.1@aar'`这个是怎么来的？为什么加个aar？

![image-20200113141450534](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200113141450534.png)

在repository中，可以选择要添加的方式。

这里选择了gradle后，下面直接给出了依赖代码。

如果不加aar，好像会查找相应的jar。



> windows下有个巨坑问题就是其他操作都正常情况下，
>
> 每次添加依赖同步时都会出现`Unable to resolve dependency`错误。
>
> 总的来说就是找不到依赖包。
>
> 网上找了一天信息都没有遇到这个问题的。。
>
> 最终通过如下方式应该可以解决：
>
> 第一种入手点是
>
> 启动nexus服务时，系统会弹出通信提示窗口，
>
> 意思是nexus.exe要请求通信，
>
> 给出2个勾选框，1是家里、办公室环境2是机场、咖啡厅
>
> 这里把这两个都勾选上。尤其是1。如果你已经错过这个了，建议从新解压运行。
>
> 第二种入手点是
>
> 找到`C:\Users\Jenson\Downloads\nexus-3.20.0-04-win64\sonatype-work\nexus3\etc\nexus.properties`配置文件。
>
> 把`application-host=0.0.0.0`改为`127.0.0.1`。
>
> 第三种入手点是降级下载旧版,
>
> 比如[这个文章](https://blog.csdn.net/xiaxiayige/article/details/80636091)使用了3.12版本而且可以正常使用。
>
> 你也可以安装这个版本,然后参照文章按步操作。





我当时问题是3.20新版没有勾选家里、办公室环境那个。

最终删除新版安装旧版时又弹窗，然后勾选了。

然后旧版竟然可以用了，接着从新解压新版并运行，此时新版也可以使用了。