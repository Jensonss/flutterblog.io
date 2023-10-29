# 0x00 前言

Flutter项目真机运行时出现`couldn't find "libflutter.so"异常信息。

造成启动就崩溃。

# 0x00 分析

之前是可以正常运行的，在添加极光IM后修改了NDK架构类型支持就有了这个问题。

所以可以基本确定是CPU架构类型支持修改的问题。

先看下各CPU架构类型及支持范围：

![cpu arm图](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/cpu%20arm.webp)

我在修改NDK类型时，把`arm64-v8a`写成了`armeabi-v8a`，导致cpu架构类型的不支持。

当我们修改了NDK配置后，记住即时点击`sync`同步，

如果出现CPU架构不支持，在Running Device地方会给出提示信息。

比如这里的模拟器只支持x86和x86_64，但是我的app只配置了arm64-v8a。

这种情况下运行的app是闪退的，要及时修改配置。

![image-20200320151730809](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200320151730809.png)