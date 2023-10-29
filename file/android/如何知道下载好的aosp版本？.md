下载源码时执行的是

```
repo init -u git://mirrors.ustc.edu.cn/aosp/platform/manifest

```

没有写上分支然后就直接同步了，下载完了不知道版本是多少。
在

```
找到 build/make/core/version_defaults.mk文件打开
搜索 PLATFORM_SDK_VERSION
找到了   PLATFORM_SDK_VERSION := 25
sdk版本知道了晓得原来是最新的7.1
```