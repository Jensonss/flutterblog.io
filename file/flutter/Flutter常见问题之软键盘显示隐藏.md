如果想在`页面启动`时就设置软键盘的显示隐藏，

可以通过给`TextField`设置`autofocus:`属性。

 `autofocus:true`表示默认弹出软键盘，

`autofocus:false`表示不弹出软键盘：

```dart
TextField(
                controller: controller,
                maxLines: 8,
                autofocus: true,
                decoration: InputDecoration(hintText: _hintext),
              )
```



如果想在操作过程中设置软键盘的显示隐藏，

可以通过给`TextField`设置`focusNode:`属性。

首先创建一个`FocusNode`实例：`FocusNode _focusNode = FocusNode();`

为`TextField`设置`focusNode属性：

```dart
TextField(
                focusNode: _focusNode,
                controller: controller,
                maxLines: 8,
                autofocus: true,
                decoration: InputDecoration(hintText: _hintext),
              ),
```

当想让它隐藏软键盘时，设置`_focusNode.unfocus();`。

当想让它显示软键盘时，设置`FocusScope.of(context).requestFocus(_focusNode);`.