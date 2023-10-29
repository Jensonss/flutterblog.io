Flutter为我们提供了两种Dialog：

`SimpleDialog`和`AlertDialog`。

通过`showDialog`方法，可以避免我们在`build`方法的一大串布局控件中去添加dialog。

而是把dialog提取到一个方法中：

```dart
  ///显示提示对话框
  Future showAlertDialog() async {
    return showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text("此操作会删除数据"),
            content: Text("确定删除吗？"),
            actions: <Widget>[
              FlatButton(
                child: Text("取消"),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
              FlatButton(
                child: Text("确定"),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              ),
            ],
          );
        });
  }

  ///显示简单对话框
  Future showSimpleDialog() async {
    return showDialog(
        context: context,
        builder: (context) {
          return SimpleDialog(
            title: Text("这是simpledialog"),
            children: <Widget>[
              SimpleDialogOption(
                onPressed: () {},
                child: Text("第一行信息"),
              ),
              SimpleDialogOption(
                onPressed: () {},
                child: Text("第二行信息"),
              ),
            ],
          );
        });
  }
```



`AlertDialog`通过`actions`属性添加操作。

`SimpleDialog`通过`children`添加内容，其中可以通过`SimpleDialogOption`添加简单操作。