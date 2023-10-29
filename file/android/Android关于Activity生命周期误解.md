两个Activity  A和B，先启动A，通过A打开B，在关闭B，这时候两个Activity的生命周期分别是如何执行的？

我的答案是：

A启动时

`A onCreate onStart onResume`

点击启动B之后

`	A onPause onStop, B onCreate onStart onResume`

B关闭之后

` B onPause onStop onDestory ,A onRestart onStart onResume`

<!-- more -->

但是想的太简单了，我以为的并不是我以为的。下面是打印的生命周期执行：

```
05-05 11:01:33.801 5494-5494/com.example.jenson.myapplication I/MainActivity: onCreate
05-05 11:01:33.801 5494-5494/com.example.jenson.myapplication I/MainActivity: onStart
05-05 11:01:33.801 5494-5494/com.example.jenson.myapplication I/MainActivity: onResume
05-05 11:01:33.861 5494-5542/com.example.jenson.myapplication I/OpenGLRenderer: Initialized EGL, version 1.4
05-05 11:01:46.391 5494-5494/com.example.jenson.myapplication I/MainActivity: onPause
05-05 11:01:46.411 5494-5494/com.example.jenson.myapplication I/FirstActivity: onCreate
05-05 11:01:46.411 5494-5494/com.example.jenson.myapplication I/FirstActivity: onStart
05-05 11:01:46.411 5494-5494/com.example.jenson.myapplication I/FirstActivity: onResume
05-05 11:01:46.691 5494-5494/com.example.jenson.myapplication I/MainActivity: onStop
05-05 11:02:20.641 5494-5494/com.example.jenson.myapplication I/ViewRootImpl: WindowInputEventReceiver onInputEvent!! KeyCode is 4, action is 0
05-05 11:02:20.641 5494-5494/com.example.jenson.myapplication I/ViewRootImpl: WindowInputEventReceiver onInputEvent!! KeyCode is 4, action is 1
05-05 11:02:20.651 5494-5494/com.example.jenson.myapplication I/FirstActivity: onPause
05-05 11:02:20.651 5494-5494/com.example.jenson.myapplication I/MainActivity: onRestart
05-05 11:02:20.651 5494-5494/com.example.jenson.myapplication I/MainActivity: onStart
05-05 11:02:20.651 5494-5494/com.example.jenson.myapplication I/MainActivity: onResume
05-05 11:02:20.871 5494-5494/com.example.jenson.myapplication I/FirstActivity: onStop
05-05 11:02:20.871 5494-5494/com.example.jenson.myapplication I/FirstActivity: onDestroy
```

> 记住一点：启动一个新Activity，先把自己onPause，然后等新Activity启动成功即onResume后再onStop，关闭当前Activity时，还是先把自己onPause，下一帧的Activity(相对于Activity栈来说)执行恢复onResume，然后自己再执行onStop、onDestory

虽然知道了真相，但是现在还不清楚为什么要这样设计，，有时间还要看看这里的源码，mark下。