# 0x00 前言

刚创建的Flutter project运行时一直卡在assembleDebug，

估计也是梯子不能正常使用原因，因为之前都没有遇到这个问题。

# 0x01 修改

因为打包使用的是Gradle，所以把相关仓库依赖都改为国内阿里云。

修改android moudle中`build.gradle`文件中`repositories`闭包：

```groovy
buildscript {
    ext.kotlin_version = '1.3.50'
    repositories {
        maven{ url 'https://maven.aliyun.com/repository/google' }
        maven{ url 'https://maven.aliyun.com/repository/jcenter' }
        maven{url 'http://maven.aliyun.com/nexus/content/groups/public'}
//        google()
//        jcenter()
    }

    dependencies {
        classpath 'com.android.tools.build:gradle:3.5.0'
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
    }
}

allprojects {
    repositories {
        maven{ url 'https://maven.aliyun.com/repository/google' }
        maven{ url 'https://maven.aliyun.com/repository/jcenter' }
        maven{url 'http://maven.aliyun.com/nexus/content/groups/public'}
//        google()
//        jcenter()
    }
}
```



修改Flutter SDK下的`flutter.gradle`：

安装目录下`D:\flutter\flutter\packages\flutter_tools\gradle`：

```groovy
buildscript {
    repositories {
        //google()
        //jcenter()
		maven{ url 'https://maven.aliyun.com/repository/google' }
        maven{ url 'https://maven.aliyun.com/repository/jcenter' }
        maven{url 'http://maven.aliyun.com/nexus/content/groups/public'}
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.5.0'
    }
}
```





同时如果`gradle-wrapper.properties`使用的版本在你本地没有，修改为本地已有版本：

`distributionUrl=https\://services.gradle.org/distributions/gradle-6.0.1-all.zip`