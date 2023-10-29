### 前言

最近想找一个看美剧的app，想看《黑袍纠察队》，一连下了几个app看看哪个效果好。

结果无意中发现一个小(你)视(懂)频(得)app，随便点了几下发现都只能试看几十秒。

看完整视频需要付费且价格不便宜(年费300)，爱优腾的年费赶上半价活动也才99/年，

所以付费观看我是拒绝的，就想着能不能破解下。

### 工具

android studio：安装java2smali插件，作为编辑器修改smali

apktool_2.4.0.jar：解压apk

VirtualBox安装Ubuntu，openjdk：作为解压和重打包环境，在win下会有莫名的错误。

debug.keystore：android默认签名文件，用于apk重签名

jarsigner：jdk自带的签名工具

以下app操作都在模拟器中运行，创建一个pad大屏模拟器，没有为啥就是看着爽

### 目标

工具和环境都准备好了，接下来要确认好目标，因为有了目标可以精准查找相应页面进行逻辑修改。

现在视频是需要VIP才能完整播放的，我想不登录注册、没有vip直接播放完整视频：

![不能完整播放](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/ll-play-no-vip-old.png)

同一个视频播放后下次再次播放时会提示“你已经观看过，再次观看需要购买VIP”，我想随便点进来时直接播放就好，不要给我提示：

![播放一次后再次播放提示](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/ll-after-play-no-vip-old.png)

每次播放前都有个7s的视频，这个虽然可以忍受，但是我不想看：

![7s广告](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/ll-play-ad-old%2Cpng.png)

APP现在要申请电话和存储权限，因为缓存关系，存储权限可以给它，但是我都不打算登录注册，电话权限我要去掉：

![电话权限](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/ll-permission-old.png)

所以现在4个目标基本明确了：

- 无需登录和VIP进行全视频播放
- 同一视频可以多次播放
- 去广告
- 去掉电话权限申请

### 实操

4个目标有3个都和播放页面相关，那就先搞前3个目标。

#### 解压apk

进入虚拟机的Ubuntu命令行，执行命令`java -jar apktool_2.4.0.jar d  llsp.apk`

解压后文件如图：

![解压目录](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/ll-unzip.png)

#### 解压的项目导入到android studio

#### 定位播放activity

首先模拟器打开播放页面，adb查看当前播放页面Activity

执行`dumpsys activity`

定位到`ResumedActivity: ActivityRecord activity.PlayVideoActivity`即当前栈顶activity。

#### 阅读smali

在刚刚导入的项目中进入smali文件夹找到`PlayVideoActivity`。

搜索发现除了`PlayVideoActivity`还有很多**PlayVideoActivity$1**类似的文件，其实这些都是`PlayVideoActivity`的内部类。

##### 目标1：播放完整视频

通过之前app播放，当发现你不是VIP时，几十秒后会弹出“此片试看已结束，您可以继续试看其他影片”的字样。

所以第一想法就是这个几十秒的倒计时是app端实现的，我只要把倒计时去掉是不是就可以继续播放了。

> 有时在学会走之前，先要跑起来.
>
> ​										《钢铁侠》Tony Stark

所以有了想法就赶紧去尝试，那么如何快速定位到倒计时及周围的逻辑呢？

这里通过关键字快速定位法，既然有提示“此片试看已结束”了，那就去Activity中看看哪个方法调用了这个地方。

但是smali中字符串是以Unicode方式存储的，所以在搜索前要把字符串转为Unicode码，

“此片试看已结束”转码后的Unicode为"\u6b64\u7247\u8bd5\u770b\u5df2\u7ed3\u675f"。

用这个Unicode码去项目中搜索，发现只有`PlayVideoActivity$1`、`PlayVideoActivity$6`和`PlayVideoActivity$16`三个类中有该字符串的使用。



`PlayVideoActivity$6`代码如下：

```smali
.class Lcom/okappplay/playproject/activity/PlayVideoActivity$6;
.super Landroid/os/Handler;
.source ""


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/okappplay/playproject/activity/PlayVideoActivity;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic ˏ:Lcom/okappplay/playproject/activity/PlayVideoActivity;


# direct methods
.method constructor <init>(Lcom/okappplay/playproject/activity/PlayVideoActivity;)V
    .locals 0

    .line 689
    iput-object p1, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$6;->ˏ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    invoke-direct {p0}, Landroid/os/Handler;-><init>()V

    return-void
.end method


# virtual methods
.method public handleMessage(Landroid/os/Message;)V
    .locals 2

    .line 692
    invoke-super {p0, p1}, Landroid/os/Handler;->handleMessage(Landroid/os/Message;)V

    .line 693
    iget v0, p1, Landroid/os/Message;->what:I

    const/4 v1, 0x1

    if-ne v0, v1, :cond_0

    .line 694
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$6;->ˏ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    const-string v1, "\u6b64\u7247\u8bd5\u770b\u5df2\u7ed3\u675f\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u8bd5\u770b\u5176\u4ed6\u5f71\u7247\uff0c\u6216\u8005\u6210\u4e3a\u4f1a\u5458\u65e0\u9650\u89c2\u770b\u6240\u6709\u5f71\u7247"

    invoke-static {v0, v1}, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ˎ(Lcom/okappplay/playproject/activity/PlayVideoActivity;Ljava/lang/String;)V

    .line 696
    :cond_0
    return-void
.end method

```



`PlayVideoActivity$16`代码如下：

```smali
.class Lcom/okappplay/playproject/activity/PlayVideoActivity$16;
.super Landroid/os/CountDownTimer;
.source ""


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/okappplay/playproject/activity/PlayVideoActivity;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic ˋ:Lcom/okappplay/playproject/activity/PlayVideoActivity;


# direct methods
.method constructor <init>(Lcom/okappplay/playproject/activity/PlayVideoActivity;JJ)V
    .locals 0

    .line 337
    iput-object p1, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$16;->ˋ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    invoke-direct {p0, p2, p3, p4, p5}, Landroid/os/CountDownTimer;-><init>(JJ)V

    return-void
.end method


# virtual methods
.method public onFinish()V
    .locals 2

    .line 346
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$16;->ˋ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    invoke-virtual {v0}, Lcom/okappplay/playproject/activity/PlayVideoActivity;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-virtual {v0}, Landroid/content/res/Resources;->getConfiguration()Landroid/content/res/Configuration;

    move-result-object v0

    iget v0, v0, Landroid/content/res/Configuration;->orientation:I

    const/4 v1, 0x2

    if-ne v0, v1, :cond_0

    .line 347
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$16;->ˋ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-object v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ॱˎ:Lchuangyuan/ycj/videolibrary/video/ExoUserPlayer;

    invoke-virtual {v0}, Lchuangyuan/ycj/videolibrary/video/ExoUserPlayer;->onBackPressed()Z

    .line 349
    :cond_0
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$16;->ˋ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-object v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ˋॱ:Landroid/widget/TextView;

    const/16 v1, 0x8

    invoke-virtual {v0, v1}, Landroid/widget/TextView;->setVisibility(I)V

    .line 350
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$16;->ˋ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-object v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ॱˎ:Lchuangyuan/ycj/videolibrary/video/ExoUserPlayer;

    invoke-virtual {v0}, Lchuangyuan/ycj/videolibrary/video/ExoUserPlayer;->onPause()V

    .line 351
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$16;->ˋ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-object v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ॱˎ:Lchuangyuan/ycj/videolibrary/video/ExoUserPlayer;

    invoke-virtual {v0}, Lchuangyuan/ycj/videolibrary/video/ExoUserPlayer;->onDestroy()V

    .line 352
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$16;->ˋ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-object v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ˎ:Landroid/view/View;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Landroid/view/View;->setVisibility(I)V

    .line 353
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$16;->ˋ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    const-string v1, "\u6b64\u7247\u8bd5\u770b\u5df2\u7ed3\u675f\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u8bd5\u770b\u5176\u4ed6\u5f71\u7247\uff0c\u6216\u8005\u6210\u4e3a\u4f1a\u5458\u65e0\u9650\u89c2\u770b\u6240\u6709\u5f71\u7247"

    invoke-static {v0, v1}, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ˎ(Lcom/okappplay/playproject/activity/PlayVideoActivity;Ljava/lang/String;)V

    .line 354
    return-void
.end method

.method public onTick(J)V
    .locals 3

    .line 340
    const-wide/16 v0, 0x3e8

    div-long v0, p1, v0

    long-to-int v0, v0

    invoke-static {v0}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;

    move-result-object v2

    .line 341
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$16;->ˋ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-object v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ˋॱ:Landroid/widget/TextView;

    invoke-virtual {v0, v2}, Landroid/widget/TextView;->setText(Ljava/lang/CharSequence;)V

    .line 342
    return-void
.end method


```



`PlayVideoActivity$1`代码如下：

```smali
.class Lcom/okappplay/playproject/activity/PlayVideoActivity$1;
.super Ljava/lang/Object;
.source ""

# interfaces
.implements Lchuangyuan/ycj/videolibrary/listener/VideoInfoListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/okappplay/playproject/activity/PlayVideoActivity;->ʼ()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;


# direct methods
.method constructor <init>(Lcom/okappplay/playproject/activity/PlayVideoActivity;)V
    .locals 0

    .line 576
    iput-object p1, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public isPlaying(Z)V
    .locals 0

    .line 638
    return-void
.end method

.method public onLoadingChanged()V
    .locals 0

    .line 593
    return-void
.end method

.method public onPlayEnd()V
    .locals 3

    .line 612
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-object v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ॱˎ:Lchuangyuan/ycj/videolibrary/video/ExoUserPlayer;

    if-eqz v0, :cond_0

    .line 613
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-object v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ॱˎ:Lchuangyuan/ycj/videolibrary/video/ExoUserPlayer;

    invoke-virtual {v0}, Lchuangyuan/ycj/videolibrary/video/ExoUserPlayer;->onBackPressed()Z

    .line 618
    :cond_0
    invoke-static {}, Lcom/okappplay/playproject/AppContext;->ˊ()Lcom/okappplay/playproject/AppContext;

    move-result-object v0

    invoke-virtual {v0}, Lcom/okappplay/playproject/AppContext;->ˎ()Ljava/lang/String;

    move-result-object v0

    const-string v1, "Y"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_2

    .line 619
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    invoke-static {v0}, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ʼ(Lcom/okappplay/playproject/activity/PlayVideoActivity;)Landroid/os/CountDownTimer;

    move-result-object v0

    if-eqz v0, :cond_1

    .line 620
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    invoke-static {v0}, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ʼ(Lcom/okappplay/playproject/activity/PlayVideoActivity;)Landroid/os/CountDownTimer;

    move-result-object v0

    invoke-virtual {v0}, Landroid/os/CountDownTimer;->cancel()V

    .line 622
    :cond_1
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    invoke-virtual {v0}, Lcom/okappplay/playproject/activity/PlayVideoActivity;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    invoke-static {v0}, Lo/ก;->ˎ(Landroid/content/Context;)Lcom/okappplay/playproject/bean/UserBean;

    move-result-object v0

    invoke-virtual {v0}, Lcom/okappplay/playproject/bean/UserBean;->getUserType()Ljava/lang/String;

    move-result-object v0

    invoke-static {v0}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;)I

    move-result v2

    .line 623
    if-gtz v2, :cond_2

    .line 624
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-object v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ˎ:Landroid/view/View;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Landroid/view/View;->setVisibility(I)V

    .line 626
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    const-string v1, "\u6b64\u7247\u8bd5\u770b\u5df2\u7ed3\u675f\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u8bd5\u770b\u5176\u4ed6\u5f71\u7247\uff0c\u6216\u8005\u6210\u4e3a\u4f1a\u5458\u65e0\u9650\u89c2\u770b\u6240\u6709\u5f71\u7247"

    invoke-static {v0, v1}, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ˎ(Lcom/okappplay/playproject/activity/PlayVideoActivity;Ljava/lang/String;)V

    .line 631
    :cond_2
    return-void
.end method

.method public onPlayStart(J)V
    .locals 2

    .line 580
    invoke-static {}, Lcom/okappplay/playproject/AppContext;->ˊ()Lcom/okappplay/playproject/AppContext;

    move-result-object v0

    invoke-virtual {v0}, Lcom/okappplay/playproject/AppContext;->ˎ()Ljava/lang/String;

    move-result-object v0

    const-string v1, "Y"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 581
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-boolean v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ॱˊ:Z

    if-eqz v0, :cond_0

    .line 582
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    const/4 v1, 0x0

    iput-boolean v1, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ॱˊ:Z

    .line 583
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    invoke-static {v0}, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ʼ(Lcom/okappplay/playproject/activity/PlayVideoActivity;)Landroid/os/CountDownTimer;

    move-result-object v0

    invoke-virtual {v0}, Landroid/os/CountDownTimer;->start()Landroid/os/CountDownTimer;

    .line 584
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-object v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ˋॱ:Landroid/widget/TextView;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Landroid/widget/TextView;->setVisibility(I)V

    .line 588
    :cond_0
    return-void
.end method

.method public onPlayerError(Lcom/google/android/exoplayer2/ExoPlaybackException;)V
    .locals 2
    .param p1    # Lcom/google/android/exoplayer2/ExoPlaybackException;
        .annotation build Landroid/support/annotation/Nullable;
        .end annotation
    .end param

    .line 597
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-boolean v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ᐝॱ:Z

    if-nez v0, :cond_0

    .line 598
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-object v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ʽ:Landroid/widget/TextView;

    const-string v1, "\u91cd\u65b0\u64ad\u653e"

    invoke-virtual {v0, v1}, Landroid/widget/TextView;->setText(Ljava/lang/CharSequence;)V

    .line 599
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    const/4 v1, 0x1

    iput-boolean v1, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ᐝॱ:Z

    goto :goto_0

    .line 601
    :cond_0
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    invoke-virtual {v0}, Lcom/okappplay/playproject/activity/PlayVideoActivity;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    iget-object v1, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    invoke-static {v1}, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ˏ(Lcom/okappplay/playproject/activity/PlayVideoActivity;)Lcom/okappplay/playproject/bean/VideoBean;

    move-result-object v1

    invoke-static {v0, v1}, Lo/ก;->ʼ(Landroid/content/Context;Lcom/okappplay/playproject/bean/VideoBean;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 602
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-object v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ʽ:Landroid/widget/TextView;

    const-string v1, "\u611f\u8c22\u60a8\u7684\u53cd\u9988"

    invoke-virtual {v0, v1}, Landroid/widget/TextView;->setText(Ljava/lang/CharSequence;)V

    goto :goto_0

    .line 604
    :cond_1
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    iget-object v0, v0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ʽ:Landroid/widget/TextView;

    const-string v1, "\u70b9\u51fb\u53cd\u9988"

    invoke-virtual {v0, v1}, Landroid/widget/TextView;->setText(Ljava/lang/CharSequence;)V

    .line 608
    :goto_0
    return-void
.end method

```



可以看出：

`PlayVideoActivity$6`继承自`handler`,该类没有什么内容，只是重写了`handleMessage`方法。

`PlayVideoActivity$16`继承自`CountDownTimer`，这是一个倒计时类，而我们的视频就是倒计时几十秒的，可以关注下

`PlayVideoActivity$1`继承自`Object`，以为没什么用，但是它还实现了`VideoInfoListener`接口，其中有`onPlayStart`、`onPlayEnd`和`onPlayerError`等播放状态回调方法。

视频倒计时是从点击试看按钮后开始计时的，所以会不会点击试看后调用播放功能当视频播放后回调`onPlayStart`时执行了计时功能？进去该方法看看就知道了

在`onPlayStart`方法中有这样一段代码：

```smali
    .line 583
    iget-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$1;->ॱ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    invoke-static {v0}, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ʼ(Lcom/okappplay/playproject/activity/PlayVideoActivity;)Landroid/os/CountDownTimer;

    move-result-object v0

    invoke-virtual {v0}, Landroid/os/CountDownTimer;->start()Landroid/os/CountDownTimer;
```

翻译过来的意思就是：

把`PlayVideoActivity$1;->ॱ`这个变量放到`v0`寄存器，这个变量类型是`PlayVideoActivity`

调用`PlayVideoActivity;->ʼ(Lcom/okappplay/playproject/activity/PlayVideoActivity;)`静态方法返回一个`CountDownTimer`

把上面方法调用后的返回值放到`v0`寄存器  这个时候`v0`寄存器是一个`CountDownTimer`实例。

最后调用`CountDownTimer`实例的`start`方法。这里应该就是倒计时开始的地方了。

> 关于上面做一些说明：
>
> Android是基于寄存器的，Java是基于栈的，所以smali中的v0，p0都是寄存器。
>
> 一些不明所以的符号其实是混淆造成的。
>
> p0是非静态方法的隐形参数，表示调用当前方法的实例 this，所以可知显示传递的参数在smali中从p1开始。
>
> 

既然基本确定了这个倒计时是负责完整视频的，那么就注释掉最后这个虚方法的调用，重新打包签名(见下面)。

最后运行时发现确实能直接观看完整视频了。

视频都露点，所以不截图了。

##### 目标2：同一视频可以多次播放

现在播放过的视频再次播放提示“此片您已试看过”，不让我再看了。

初步怀疑是在退出播放/页面时对当前视频id进行了保存，而且只保存在了本地。。因为我清除数据或者从新安装后能从新观看。

当再次点击视频进入播放页面时取出该视频id在本地存储里找，如果找到了就弹出提示不给播放。

所以把“此片您已试看过”转为Unicode码去项目中搜索，发现在`VideoPlayActivity`的`ˏॱ()V`方法里有该字符串使用，相关代码如下：

```smali
    .line 391
    :cond_2
    const-string v0, "\u6b64\u7247\u60a8\u5df2\u7ecf\u8bd5\u770b\u8fc7\uff0c\u60a8\u53ef\u4ee5\u7ee7\u7eed\u8bd5\u770b\u5176\u4ed6\u5f71\u7247\uff0c\u6216\u8005\u6210\u4e3a\u4f1a\u5458\u65e0\u9650\u89c2\u770b\u6240\u6709\u5f71\u7247"

    invoke-direct {p0, v0}, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ˋ(Ljava/lang/String;)V
```

`const-string`表示取出常量字符串放到`v0`寄存器，

`invoke-direct {p0, v0}`表示调用方法传入参数`p0`，`v0`  这里基本确定里面某个地方会调用弹窗了。

为什么这里直接调用弹窗呢？直接就执行这个逻辑了吗？

其实并没有，看上面还有个`:cond_2`，这表示一个跳转地址，

也就是说在该方法上面地方执行了前面说的视频id比较，经过一些条件判断跳转到了`:cond_2`。

顺腾摸瓜，果然又发现了`:cond_2 `代码如下：

```
invoke-virtual {v1}, Lcom/okappplay/playproject/bean/VideoBean;->getVideoId()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lo/ก;->ˋॱ(Landroid/content/Context;Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_2
```

这几句大概意思是：

调用`getVideoId`返回视频id字符串

通过`move-result-object`把id存到`v1`寄存器

调用静态方法`Lo/ก;->ˋॱ(Landroid/content/Context;Ljava/lang/String;)Z`返回布尔值

通过`move-result`把布尔值存到`v0`寄存器

`if-nez v0` 表示如果` v0`不为0就跳转到刚才的弹窗逻辑。

感觉看到了希望的曙光，

既然`v0`不为0就弹窗 ,不让看了，那我让`v0`为0不就好了吗。

`v0`的值来自于静态方法的执行，进去看看，找到第一个return地方：

```smali
    invoke-interface {v2, v0, v1}, Landroid/content/SharedPreferences;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    .line 1207
    invoke-static {v3}, Landroid/text/TextUtils;->isEmpty(Ljava/lang/CharSequence;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 1208
    const/4 v0, 0x0

    return v0
    
    .line 1211
    :cond_0
    new-instance v0, Lcom/google/gson/Gson;
```

可以看得出来这里确实和我上面猜测的一样，把视频id存在本地了，而且就用sp存的。

这里逻辑不用管，我们进这个方法目的就是让它返回0的

第一个`return `返回`v0`寄存器值，而上面一行`const/4 v0, 0x0 ` 直接把0存到了`v0`寄存器。

这样就是可以直接观看的了，当然如果能执行到这里的话。

不过既然弹窗了，那说明`if-eqz v0, :cond_0`这里，地址跳转到了`cond_0`。

注释掉不给它机会判断就好了。

按照上面打包签名验证下，果然多次播放也不会给提示了。

到这里已经完成了非VIP观看完整视频且允许多次观看，如果处于看小视频目的，那已经完成了。

不过我是为了提升技术的，所以继续目标3、4。

##### 目标3：去广告

广告这里不打算去掉页面的显示，只把倒计时7s改为1s，达到进入即播放效果。

广告是在播放前，点击试看按钮后出现的倒计时。

倒计时会出现"广告xs"的字样，所以去搜索“广告”的Unicode码，发现在内部类`PlayVideoActivity$19`中有使用，这个类是`CountDownTimer`子类，所以在``PlayVideoActivity`某个地方调用了该实例的start方法。

查找发现只有下面方法中使用了`PlayVideoActivity$19`：

```smali
.method public ʽ()V
    .locals 6

    .line 289

    new-instance v0, Lcom/okappplay/playproject/activity/PlayVideoActivity$19;

    iget-object v1, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ˋ:Lcom/okappplay/playproject/bean/AdResult$AaData;

    invoke-virtual {v1}, Lcom/okappplay/playproject/bean/AdResult$AaData;->getShowTime()Ljava/lang/String;

    move-result-object v1

    invoke-static {v1}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;)I

    move-result v1

    mul-int/lit16 v1, v1, 0x3e8

    int-to-long v2, v1

    move-object v1, p0

    const-wide/16 v4, 0x3e8

    invoke-direct/range {v0 .. v5}, Lcom/okappplay/playproject/activity/PlayVideoActivity$19;-><init>(Lcom/okappplay/playproject/activity/PlayVideoActivity;JJ)V

    iput-object v0, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity;->ˉ:Landroid/os/CountDownTimer;

    .line 307
    return-void
.end method
```

`new-instance v0, Lcom/okappplay/playproject/activity/PlayVideoActivity$19;`表示把`PlayVideoActivity$19`实例存入`v0`寄存器

`invoke-direct/range {v0 .. v5}, Lcom/okappplay/playproject/activity/PlayVideoActivity$19;-><init>(Lcom/okappplay/playproject/activity/PlayVideoActivity;JJ)V `表示调用`PlayVideoActivity$19`的构造方法，这里把`v0`到`v5`几个寄存器的值都传递过去了。

查看`PlayVideoActivity$19`构造方法：

```
# direct methods
.method constructor <init>(Lcom/okappplay/playproject/activity/PlayVideoActivity;JJ)V
    .locals 0

    .line 289
    iput-object p1, p0, Lcom/okappplay/playproject/activity/PlayVideoActivity$19;->ˎ:Lcom/okappplay/playproject/activity/PlayVideoActivity;

    invoke-direct {p0, p2, p3, p4, p5}, Landroid/os/CountDownTimer;-><init>(JJ)V

    return-void
.end method
```

可以看到实参和形参对应关系为：

`v0`对应`p1`，`v1`对应`p2`，

`invoke-direct {p0, p2, p3, p4, p5}, Landroid/os/CountDownTimer;-><init>(JJ)V`

看到`p2`(也就是`v1`)表示倒计时总时长，

所以我们修改`v1`值为1即可。

只要找到把广告时间存到`v1`的地方，在其后面我们从新给`v1`存个`0x1`应该就可以了。

可以看到下面这里获取到了广告时间，并且转为int类型存入`v1`：

```
    invoke-virtual {v1}, Lcom/okappplay/playproject/bean/AdResult$AaData;->getShowTime()Ljava/lang/String;

    move-result-object v1
   invoke-static {v1}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;)I

    move-result v1
```

所以我们在其后面添加：

```smali
const v1,0x1
```

这时不管从AaData取到的广告值是多少，最后都是1s了。

从新打包签名后验证即可。

##### 目标4：去掉电话权限申请

启动时的权限申请是在欢迎页申请的。

通过命令行可以知道欢迎页是`WelComeActivity`，它也继承了`BaseActivity`

去`WelComeActivity`中找实现的那几个抽象方法，看看哪个里面有关于权限申请的代码。

最终找到如下代码：

```smali
    const-string v3, "android.permission.READ_PHONE_STATE"

    const/4 v4, 0x0

    aput-object v3, v2, v4

    const-string v3, "android.permission.WRITE_EXTERNAL_STORAGE"

    const/4 v4, 0x1

    aput-object v3, v2, v4

    invoke-static {v0, v1, v2}, Lcom/okappplay/playproject/perssion/PermissionsUtil;->ˎ(Landroid/content/Context;Lo/م;[Ljava/lang/String;)V
```

第一行就用到了电话权限，

我们知道权限的申请是按组来的，既然下面申请了"写存储"，那我干脆把电话权限改为"读存储"。

让它多余但又不会抱错：

```
# const-string v3, "android.permission.READ_PHONE_STATE"
  const-string v3, "android.permission.READ_EXTERNAL_STORAGE"
```

打包验证发现电话申请权限已经没有了。

#### 重打包

`java -jar apktool_2.4.0.jar b llsp -o aa.apk`

#### 重签名

`jarsigner -keystore debug.keystore aa.apk androiddebugkey`

### 最后

放一个破解后可以观看完整视频的截图：

![完整视频截图](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/ll-play.png)

能播放到29分钟，说明几十秒的倒计时已经无效了。

参考：

apktool下载：https://ibotpeaches.github.io/Apktool/install/

关于CountDownTimer使用方法：https://www.jianshu.com/p/949cd818becc

中文和Unicode互转：https://www.bejson.com/convert/unicode_chinese/ 

《Android软件安全与逆向分析》

《Android安全技术揭秘与防范》