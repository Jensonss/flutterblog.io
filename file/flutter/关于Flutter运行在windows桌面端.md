# 0x00 前言

Flutter除了移动端，还能运行在桌面(win,osx,linux)。

本节以Windows为例，记录Flutter项目运行流程。

# 0x01 安装Visual Studio

安装Visual Studio时选择工作负载时选择**使用C++的桌面开发**。

同时在单个组件中把**win10 SDK**的几个选项勾上。

如图：

![image-20200611171253015](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200611171253015.png)



# 0x02 切换分支

我们开发使用的分支一般是**stable**稳定分支，而**Flutter desktop**是新特性，

在稳定分支是不存在的，所以需要切换到**master**。

如果**Flutter desktop**已经是**stable**了，则忽略此步。

使用`flutter channel`查看当前分支

使用`flutter channel master`切换到master

使用`flutter upgrade`升级

使用`flutter doctor`检查环境

其中使用`flutter doctor`检查时确保Visual Studio环境是绿色的，如下图：

![image-20200611171839342](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200611171839342.png)

# 0x03 下载

克隆**flutter-desktop-embedding**：`git clone https:``//github.com/google/flutter-desktop-embedding`

我这里直接在**flutter安装目录下执行克隆**

# 0x04 设置可用

进入桌面端测试例子目录：`D:\flutter\flutter-desktop-embedding\testbed`。

执行`flutter config --enable-windows-desktop`

huo`flutter config --enable-linux-desktop`

或`flutter config --enable-macos-desktop`。

# 0x05 运行

执行`flutter run`运行该例子到桌面端。

启动后的桌面端如图：

![image-20200611172752189](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200611172752189.png)

# 0x06 异常

如果出现Unable to find suitable Visual Studio toolchain. Please run `flutter doctor` for more details.

说明你的Visual Studio安装有问题。

解决方案参考：https://stackoverflow.com/questions/60334570/unable-to-find-suitable-visual-studio-toolchain-please-run-flutter-doctor-for