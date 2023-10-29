loading使用一般有2种场景：

场景一：点击某个按钮进行耗时操作前弹出loading直到耗时操作完成，才可继续操作页面。

场景二：刚进入某个页面时就执行耗时操作，直到耗时操作完成才显示页面。



场景一可以使用`Stack`，它类似Android中的`FrameLayout`。

最后声明的控件在最上层，这样把loading声明最后，在需要的时候显示出来，

可以阻止对页面进行其他操作，实现如下：

```dart
@override
  Widget build(BuildContext context) {
    final TextEditingController controller = TextEditingController();
    controller.addListener(() {
      _feedText = controller.text;
    });
    return Scaffold(
      appBar: AppBar(
        title: Text("意见反馈"),
      ),
      body: Container(
        width: double.infinity,
        height: double.infinity,
        margin: const EdgeInsets.all(20),
        child: Stack(
          children: <Widget>[
            Align(
              alignment: FractionalOffset.topCenter,
              child: TextField(
                focusNode: _focusNode,
                controller: controller,
                maxLines: 8,
                autofocus: true,
                decoration: InputDecoration(hintText: _hintext),
              ),
            ),
            Align(
              alignment: FractionalOffset.bottomCenter,
              child: RaisedButton(
                color: Colors.blue,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.all(Radius.circular(6))),
                onPressed: () {
                  submitFeedBack();
                },
                child: Text(
                  "提交",
                  style: TextStyle(fontSize: 16, color: Colors.white),
                ),
              ),
            ),
            Offstage(
              offstage: visiable,
              child: LoadingWidget(),//封装的loading控件
            ),
          ],
        ),
      ),
    );
  }
```



场景二可以使用`visiable ? Loading(): Center()`方式：

```dart
class _FirstPageState extends State<FirstPage> {
  bool visiable = true;

  @override
  Widget build(BuildContext context) {
    print("FirstPage - build");
    Future.delayed(Duration(seconds: 6), () {
      if (mounted) {
        setState(() {
          visiable = false;
        });
      }
    });

    return Scaffold(
      appBar: AppBar(
        title: Text("firstPage"),
      ),
      body: visiable//初始为true显示loading。
          ? Text("loading....")
          : Center(),
    );
  }
}

```