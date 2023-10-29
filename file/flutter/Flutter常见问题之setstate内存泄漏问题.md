在做延时任务返回刷新UI时，任务完成前退出页面出现了这个问题。

大概意思就是在`dispose()`之后调用了`setstate()`造成的内存泄漏。

既然是`setstate`使用不当造成的，就看看源码注释怎么解释的：

```dart
  /// Notify the framework that the internal state of this object has changed.
  ///
  /// Whenever you change the internal state of a [State] object, make the
  /// change in a function that you pass to [setState]:
  ///
  /// ```dart
  /// setState(() { _myState = newValue });
  /// ```
  ///
  /// The provided callback is immediately called synchronously. It must not
  /// return a future (the callback cannot be `async`), since then it would be
  /// unclear when the state was actually being set.
  ///
  /// Calling [setState] notifies the framework that the internal state of this
  /// object has changed in a way that might impact the user interface in this
  /// subtree, which causes the framework to schedule a [build] for this [State]
  /// object.
  ///
  /// If you just change the state directly without calling [setState], the
  /// framework might not schedule a [build] and the user interface for this
  /// subtree might not be updated to reflect the new state.
  ///
  /// Generally it is recommended that the `setState` method only be used to
  /// wrap the actual changes to the state, not any computation that might be
  /// associated with the change. For example, here a value used by the [build]
  /// function is incremented, and then the change is written to disk, but only
  /// the increment is wrapped in the `setState`:
  ///
  /// ```dart
  /// Future<void> _incrementCounter() async {
  ///   setState(() {
  ///     _counter++;
  ///   });
  ///   Directory directory = await getApplicationDocumentsDirectory();
  ///   final String dirName = directory.path;
  ///   await File('$dir/counter.txt').writeAsString('$_counter');
  /// }
  /// ```
  ///
  /// It is an error to call this method after the framework calls [dispose].
  /// You can determine whether it is legal to call this method by checking
  /// whether the [mounted] property is true.
  @protected
  void setState(VoidCallback fn) {
  
  }
```

注释前面主要介绍如何正确使用`setstate`：

**只在`setstate`中包裹和状态直接相关的变更值。**

**其他诸如计算、IO操作不要放在里面。**

最后介绍了当框架层调用了`dispose`后，你再调用`setstate`会出现异常。

你可以通过使用`mounted`检查它是否为`true`。然后再调用`setstate`。

所以我们目前可以这样使用：

```dart
if (mounted) {
      setState(() {
        visiable = !visiable;
      });
    }
```



顺便看一下`mounted`是什么东西：

```dart
/// Whether this [State] object is currently in a tree.
  ///
  /// After creating a [State] object and before calling [initState], the
  /// framework "mounts" the [State] object by associating it with a
  /// [BuildContext]. The [State] object remains mounted until the framework
  /// calls [dispose], after which time the framework will never ask the [State]
  /// object to [build] again.
  ///
  /// It is an error to call [setState] unless [mounted] is true.
  bool get mounted => _element != null;
```

注释中说明了`mounted`用来判断你的`state`对象是否还在控件树。

创建`state`对象后到调用`initState`之前，框架层通过关联`state`和`BuildContext`来完成挂载。

在框架层调用`dispose`之前都是存在的。

**可以知道通过`mounted`来判断`state`是否还存活。**

**如果返回`true`，才可以安全的调用`setstate`更新状态。**



**如果业务中需要使用延时操作，可以使用`Timer`代替`Future`。**

**因为`Timer.cancel`可以在`dispose`回调方法中取消延时，而`Future`没有取消操作。**