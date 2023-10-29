# 0x00 前言

上一节讲了安装包优化，本节说下稳定性优化方面入手点。

相比于电量和网络，稳定性可视性更高，什么是可视性？就是用户的感知程度！

电量多耗了百分之几和网络流量多跑了几兆，可能用户并不会注意到，但是一旦发生ANR或者Crash，用户基本是

必感知的，而且每一次的感知都会降低对你的APP的忍耐度，一旦忍耐度耗光，你的APP也就要该卸载了。

因为稳定性是个很宽泛的话题，影响因素也很多，譬如内存的不合理利用造成频繁GC，导致OOm等都可以算是稳定性范围，但是这里我们只讨论2个场景：ANR和Crash。

# 0x01 ANR

## ANR介绍

什么是ANR？Application Not Response，应用无响应。

要解决ANR，首先要知道什么原因引起的ANR才好入手，主要有一下几种类型：

-  KeyDispatchTimeout ：输入事件5s未完成
-  BroadcastTimeout ：广播10s未完成
-  BroadcastTimeout ：服务20s未完成

**其实这几个方面的根本原因就是在主线程做了耗时操作，在处理ANR时可以使用traceview查看方法耗时以便修复。**

<!--more-->

## ANR分析

 在Android系统上，如果发生ANR，Logcat会产生对应的日志和一个trace文件，

分析ANR原因主要是分析这两个信息。 

### Logcat

从网上找了段anr的Logcat信息看下：

```
07-20 15:36:58.711  1000  1520  1597 E ActivityManager: ANR in com.xxxx.moblie (com.xxxx.moblie/.ui.MainActivity) (进程名)
07-20 15:36:58.711  1000  1520  1597 E ActivityManager: PID: 1480 (进程pid)
07-20 15:36:58.711  1000  1520  1597 E ActivityManager: Reason: Input dispatching timed out (AppWindowToken{da8f666 token=Token{5501f51 ActivityRecord{15c5c78 u0 com.xxxx.moblie/.ui.MainActivity t3862}}}, Waiting because no window has focus but there is a focused application that may eventually add a window when it finishes starting up.)
07-20 15:36:58.711  1000  1520  1597 E ActivityManager: Load: 0.0 / 0.0 / 0.0 (Load表明是1分钟,5分钟,15分钟CPU的负载)
07-20 15:36:58.711  1000  1520  1597 E ActivityManager: CPU usage from 20ms to 20286ms later (2018-07-20 15:36:36.170 to 2018-07-20 15:36:56.436):
07-20 15:36:58.711  1000  1520  1597 E ActivityManager:   42% 6774/pressure: 41% user + 1.4% kernel / faults: 168 minor
07-20 15:36:58.711  1000  1520  1597 E ActivityManager:   34% 142/kswapd0: 0% user + 34% kernel
07-20 15:36:58.711  1000  1520  1597 E ActivityManager:   31% 1520/system_server: 13% user + 18% kernel / faults: 58724 minor 1585 major
07-20 15:36:58.711  1000  1520  1597 E ActivityManager:   13% 29901/com.ss.android.article.news: 7.7% user + 6% kernel / faults: 56007 minor 2446 major
07-20 15:36:58.711  1000  1520  1597 E ActivityManager:   13% 32638/com.android.quicksearchbox: 9.4% user + 3.8% kernel / faults: 48999 minor 1540 major
07-20 15:36:58.711  1000  1520  1597 E ActivityManager:   11% (CPU的使用率)1480/com.xxxx.moblie: 5.2%(用户态的使用率) user + (内核态的使用率) 6.3% kernel / faults: 76401 minor 2422 major
07-20 15:36:58.711  1000  1520  1597 E ActivityManager:   8.2% 21000/kworker/u16:12: 0% user + 8.2% kernel
07-20 15:36:58.711  1000  1520  1597 E ActivityManager:   0.8% 724/mtd: 0% user + 0.8% kernel / faults: 1561 minor 9 major
07-20 15:36:58.711  1000  1520  1597 E ActivityManager:   8% 29704/kworker/u16:8: 0% user + 8% kernel
07-20 15:36:58.711  1000  1520  1597 E ActivityManager:   7.9% 24391/kworker/u16:18: 0% user + 7.9% kernel
07-20 15:36:58.711  1000  1520  1597 E ActivityManager:   7.1% 30656/kworker/u16:14: 0% user + 7.1% kernel
07-20 15:36:58.711  1000  1520  1597 E ActivityManager:   7.1% 9998/kworker/u16:4: 0% user + 7.1% kernel
```

从上面Logcat信息中，可以提取到几个关键信息，：

·ANR IN：发生ANR的具体类。

·PID：发生ANR的进程，系统在此时会生成trace文件，当前的时间点也是发生ANR的具体时间，以及生成trace文件的时间。

·Reason：当前ARN的类型以及导致ANR的原因。

·CPU usage：CPU的使用情况，在日志中CPU usage有两个时间点，第一个是发生ANR前的CPU使用情况，第二个是发生ANR后的CPU使用情况。

从Logcat中除了能看出在哪个类发生ANR以及ANR的类型，具体的原因主要还是看CPU的使用情况

如果CPU使用少，说明主线程可能阻塞，如果IOwait很高，说明可能是由于主线程进行耗时的I/O操作造成的。

但是Logcat不一定保证在发生ANR时可以拿到，并且ANR的原因复杂。这时候我们可以分析traces.txt，

这个文件保存在/data/anr/traces.txt。

### trace.txt

在Android Studio上提供了一个分析trace文件的工具：Analyze Stacktrace。

Analyze Stacktrace可以更直观地分析导致ANR的原因。

Analyze Stacktrace使用方法如下：

1）在Android Studio的工具栏中，选择Analyze→Analyze Stacktrace，打开Analyze Stacktrace工具窗口。

2）将traces.txt中的内容复制到窗口，单击Normalize按钮，生成Thread Dump列表，左边为所有线程列表，

右边为选中线程的具体信息。

3）如果某个线程被标红，说明此线程被堵塞了，然后在右边的详细信息中查看堵塞的具体原因。

## 找出ANR

上面的分析是在ANR出现后我们需要做的，

那么在开发过程中我们如何尽量避免ANR？

通过Android系统提供的工具可以帮助我们及时发现这些问题：

### StrictMode

```kotlin
StrictMode.setThreadPolicy(StrictMode.ThreadPolicy.Builder()
                                       .detectDiskReads()
                                       .detectDiskWrites()
                                       .detectNetwork()
                                       .build())
```

### Traceview



# 0x02 Crash

## Java Crash监控

人无完人，同样我们也不可能一次写出完美的程序。如果异常不能避免，那我们除了做好必要的减少异常措施，还要实现一套良好的异常捕获机制，以便研发人员及时收集异常信息进行修复。

关于未知异常捕获，Android系统为我们提供了一个类：`UncaughtExceptionHandler`。

```java
package com.example.jenson.myapplication;

import android.content.Context;
import android.os.Build;
/**
 * Created by jenson on 2017/9/26.
 */

public class CrashHandler implements Thread.UncaughtExceptionHandler {
    private Thread.UncaughtExceptionHandler mDefaultHandler;
    private static CrashHandler mInstance;
    private Context mContext;

    private CrashHandler() {
    }

    /**
     * 获取CrashHandler实例
     */
    public static synchronized CrashHandler getInstance() {
        if (null == mInstance) {
            mInstance = new CrashHandler();
        }
        return mInstance;
    }

    public void init(Context context) {
        mContext = context;
        mDefaultHandler = Thread.getDefaultUncaughtExceptionHandler();
        //设置该CrashHandler为系统默认的
        Thread.setDefaultUncaughtExceptionHandler(this);
    }


    @Override
    public void uncaughtException(Thread t, Throwable e) {
        if (!handleException(e) && mDefaultHandler != null) {
            //如果自己没处理交给系统处理
            mDefaultHandler.uncaughtException(t, e);
        } else {
            //自己处理
        }

    }

    /**
     * 收集错误信息.发送到服务器
     *
     * @return 处理了该异常返回true, 否则false
     */
    private boolean handleException(Throwable ex) {
        if (ex == null) {
            return false;
        }
        //收集设备参数信息
        //发送到服务器
        return true;
    }
}

```

在Application中调用`CrashHandler.getInstance().init(this)`。

## Native Crash监控

Linux发生Crash时也会生成dump文件，在Linux中，信号量不光是一种常见IPC机制，也负责系统异常和中断。

Android系统基于Linux内核，所以如果我们可以捕捉异常信号并处理相应函数就可以了。

关于Native Crash监控可以参考：

[Android 平台 Native 代码的崩溃捕获机制及实现]( https://cloud.tencent.com/developer/article/1071749 )



# 0x03 提高代码质量

代码质量和稳定性一样，都是很宽泛的话题，市面介绍如何编写高质量代码的书籍也很多。

但是由于程序员之间水平不同、人员变动、项目时间紧凑等原因，导致代码质量下降是难免的。

为了解决这个问题引入**代码审查**和**重构**是十分必要的。

## 代码审查

到了这一步，有一个www问题：when（什么时候审查）、who(谁来审查) 、what(审查什么)

### 何时审查

如果是开发进度中进行审查，可以只审查基础模块、新手代码和修改过的模块。

基础模块譬如公共的网络模块、图片模块等。

关于核心业务模块也是一个审查点。

### 谁来审查

一般来说可以不用固定审查模式，譬如结对审查、模块负责人审查、团队审查可以定期交替执行。

### 审查什么

团队内部在审查之前确定好目标要审查哪些东西？譬如设计思想、代码风格、业务逻辑等。

不要流于形式、漫无目的，这样只会浪费时间，没有实际意义。

关于代码风格，可以使用阿里的java规范插件。

参考http://www.techug.com/post/code-review-2.html

## 代码扫描

静态代码分析是指通过分析或检查源代码的语法、结构、过程、接口等来检查程序的正确性，找出代码隐藏的错误

和缺陷，比如参数类型不匹配、错误的递归、线程安全、非法计算，以及可能出现的空指针引用等。 

Java项目常用静态扫描工具有：Lint、FindBugs、CheckStyle和PMD。

![静态扫描工具对比](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/%E9%9D%99%E6%80%81%E6%89%AB%E6%8F%8F%E5%B7%A5%E5%85%B7%E5%AF%B9%E6%AF%94.png)