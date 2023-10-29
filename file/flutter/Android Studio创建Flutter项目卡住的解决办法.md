# 0x00 前言

最近这些天梯子不好用，导致使用Android Studio创建Flutter工程时一直停留在create project的加载页面，

停留几分钟不带动的。

梯子不知道什么时候才能好，等不及所以只能从Flutter入手。

# 0x01 配置

## Flutter设置到path变量

把Flutter的安装目录的bin添加到path变量中：

```
D:\flutter\flutter\bin
```

## 设置系统变量

为系统变量添加：

key `PUB_HOSTED_URL `，value `https://pub.flutter-io.cn`

key `FLUTTER_STORAGE_BASE_URL`，value `https://storage.flutter-io.cn`

## 设置Flutter doctor

打开cmd，输入`flutter doctor`，

如果有提示`Some Android License not accepted`，

继续输入命令：`flutter doctor --android-licenses`，

在后面的所有提示中全部选择`y`。

# 0x02 结尾

通过上面设置完成后，再次创建Flutter project时大概几秒钟就能创建完成。