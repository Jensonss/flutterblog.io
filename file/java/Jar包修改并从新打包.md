# 前言

今天遇到一个奇葩的问题：某人的一个爬虫项目用到一个jar包，里面涉及登录功能。但是用户名和密码在jar里面固定了，现在账号权限没有了，需要使用新的帐号，所以就要从新打jar。

但是当初做这个项目的人已经消失了，并没有源码，所以我的任务是修改这个jar的内容然后从新打包。

# 步骤

任务很直观，步骤也很明显：

首先生成一个和需要替换的class文件一样的新文件，

然后替换掉旧文件，

最后打包。

下面看看详细的操作步骤，

## 生成新的替换文件

### 使用jd-jui打开jar，找到要修改的类，ctrl+s保存为java文件

![保存java文件](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/modifyjar-savetojava.png)

### Intellij新建一个java项目，注意package要和修改类的包名保持一致

如果要修改文件包名为`com.aa.bb`那么新建的package包名也要一样。

### 如果该类文件依赖其他类，添加该jar包的依赖

![添加依赖](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/modifyjar-dependency.png)

### 如果没有报红则build project，生成新class文件

![新文件](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/modifyjar-newclass.png)



## 替换旧文件

### 解压jar

### 用新生成的class文件替换旧文件

## 打包

### 使用压缩软件压缩为zip，修改后缀名为jar。