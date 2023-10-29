Flutter中默认情况下，页面弹出软键盘时会对当前布局产生影响：

即会把底部布局挤压上去，如果不想软键盘顶起布局，可以在

`scaffold`上设置：`resizeToAvoidBottomInset: false,`。

默认为true会顶起布局。

```dart
return Scaffold(
      resizeToAvoidBottomInset: false,
      appBar: AppBar(
        title: Text("意见反馈"),
      ),);
```



在`scaffold`属性中还有一个类似的属性：`resizeToAvoidBottomPadding`。

该属性被标记为`@Deprecated`，推荐使用`resizeToAvoidBottomInset`。