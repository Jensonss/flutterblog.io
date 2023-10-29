# 0x01 dialog中禁止返回键

禁止返回键后，不用考虑显示loading过程中，突然返回键取消dialog。然后打开新的页面，这样会造成判断请求loading页面是否在栈顶准确性问题。

首先弹出一个禁止返回键的dialog：

```dart
  void showdialog(BuildContext context) {
    showDialog(
        context: context,
        barrierDismissible: false,
        builder: (_context) {
          return UnconstrainedBox(
            constrainedAxis: Axis.vertical,
            child: WillPopScope(
                child: SizedBox(
                  width: 250,
                  child: Builder(builder: (__context) {
                    return AlertDialog(
                      elevation: 0,
                      backgroundColor: Colors.transparent,
                      content: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: <Widget>[
                          LoadingWidget(),
                        ],
                      ),
                    );
                  }),
                ),
                onWillPop: () async => false),
          );
        });
  }
```

接下来判断请求loading的页面是否在栈顶，

如果该页面在栈顶可以认为当前没有显示loading，

如果该页面没有在栈顶可以认为当前loading还在显示。

因为禁用了loading返回键，你不可能取消loading进入新页面。

我们使用`ModalRoute`判断是否在栈顶：

```dart
ModalRoute.of(context).isCurrent
```

注意一定要使用`isCurrent`，

不要被它的兄弟属性`isFirst`和`isActive`迷惑。

如果返回false，说明不在栈顶，那就间接说明有dialog；

如果返回true，说明在栈顶，间接说明没有弹出dialog。

# 0x02 不禁止返回键



既然不禁止返回键，那上面取消dialog然后再进入新页面的情况就要考虑进去。

我这里的解决方案是创建一个可以显示loadingDialog的基类`MyLoadingWidget`，

所有需要显示loadingDialog的widget继承该类：

相关state继承`MyLoadingState`：

```dart
import 'package:flutter/material.dart';

import 'LoadingWidget.dart';

abstract class MyLoadingWidget extends StatefulWidget {
  const MyLoadingWidget({Key key}) : super(key: key);

  @override
  MyLoadingState createState();
}

abstract class MyLoadingState<T extends MyLoadingWidget> extends State<T> {
  BuildContext dialogContext;

  void showdialog(BuildContext context) {
    showDialog(
        context: context,
        barrierDismissible: false,
        builder: (_context) {
          return UnconstrainedBox(
            constrainedAxis: Axis.vertical,
            child: WillPopScope(
                child: SizedBox(
                  width: 250,
                  child: Builder(builder: (__context) {
                    dialogContext = __context;
                    return AlertDialog(
                      elevation: 0,
                      backgroundColor: Colors.transparent,
                      content: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: <Widget>[
                          LoadingWidget(),
                        ],
                      ),
                    );
                  }),
                ),
                onWillPop: () async {
                  dialogContext = null;
                  return true;
                }),
          );
        });
  }

  bool isShow() {
    if (dialogContext == null) return false;
    return ModalRoute.of(dialogContext) is PopupRoute;
  }
}

```

通过`showdialog`显示dialog；

通过`isShow`判断是否显示dialog；