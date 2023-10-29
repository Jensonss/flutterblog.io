# 0x00 前言

在图片预览页面一般都有图片缩放和移动功能，

通过缩放和移动可以更容易的看起图片局部内容。

在Flutter中一切皆是widget，其中`Transform`可以帮助我们实现widget的缩放和移动。

# 0x01 Transform介绍

`Transform`  是一个对子widget进行矩阵变换的控件。

`Matrix4  `是使用的矩阵类。

通过它来实现各种矩阵操作，如缩放、平移、旋转等。

看下`Transform`  构造函数：

```dart
  const Transform({
    Key key,
    @required this.transform,
    this.origin,
    this.alignment,
    this.transformHitTests = true,
    Widget child,
  })
```

参数`transform`是传递的矩阵设置，

参数`child`是将要矩阵变换的子控件。

参数`alignment`是矩阵变换围绕的中心点，可设置`Alignment  `。

**这个构造函数是一个混合矩阵操作，就是说通过参数`transform`可以同时实现多种变换。**

**如果要实现单一变换，可以使用相应静态函数：**

**`Transform.rotate`旋转**

**`Transform.translate`平移**

**`Transform.scale`缩放**



# 0x02 创建控件

创建类`ScaleImageWidget`，继承`StatefulWidget`。

因为内部要有缩放和平移变量，切随着变量的改变，Widget随着矩阵变换。

```dart
import 'package:flutter/material.dart';

///缩放图片
class ScaleImageWidget extends StatefulWidget {
  final ImageProvider image;

  const ScaleImageWidget({Key key, this.image}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _State();
}

class _State extends State<ScaleImageWidget> {

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: _onTap,
      onLongPress: _onLongPress,
      onScaleStart: _onScaleStart,
      onScaleUpdate: _onScaleUpdate,
      child: Transform(
        transform: Matrix4.identity(),
        alignment: Alignment.center,
        child: Container(
          color: Colors.red,
          child: Center(
            child: Image(image: widget.image),
          ),
        ),
      ),
    );
  }

  _onTap() {}

  _onLongPress() {}

  _onScaleStart(ScaleStartDetails details) {
    print("_onScaleStart: focalPoint=${details.focalPoint}");
  }

  _onScaleUpdate(ScaleUpdateDetails details) {
    print("_onScaleUpdate: focalPoint=${details.focalPoint}");
    print("_onScaleUpdate: scale=${details.scale}");
  }
}

```

上面是基本的框架内容。

通过下面的调用：

```dart
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("图片缩放"),
      ),
      body: ScaleImageWidget(
        image: AssetImage('images/timg.jpg'),
      ),
    );
  }
```

显示内容为：

![image-20200325140009078](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200325140009078.png)

当你在屏幕上做拖拽、缩放操作时，可以看到打印内容如下：

```txt
I/flutter ( 4189): _onScaleStart: focalPoint=Offset(162.3, 455.8)
I/flutter ( 4189): _onScaleUpdate: focalPoint=Offset(162.3, 455.8)
I/flutter ( 4189): _onScaleUpdate: scale=1.5541888479517616
I/flutter ( 4189): _onScaleUpdate: focalPoint=Offset(162.3, 456.9)
I/flutter ( 4189): _onScaleUpdate: scale=1.5886558417246175
I/flutter ( 4189): _onScaleUpdate: focalPoint=Offset(162.1, 456.0)
I/flutter ( 4189): _onScaleUpdate: scale=1.6181237483206579
I/flutter ( 4189): _onScaleUpdate: focalPoint=Offset(162.3, 456.9)
I/flutter ( 4189): _onScaleUpdate: scale=1.6475941543845447
I/flutter ( 4189): _onScaleUpdate: focalPoint=Offset(162.1, 456.4)
I/flutter ( 4189): _onScaleUpdate: scale=1.665581750241805
I/flutter ( 4189): _onScaleUpdate: focalPoint=Offset(162.1, 457.1)
I/flutter ( 4189): _onScaleUpdate: scale=1.688553437419615
```

基础内容已经添加，下面看看具体如何实现。

# 0x03 缩放实现

矩阵变换我们这里说过使用`Matrix4`类，并没有使用`Transform`的静态方法。

上面我们通过`Matrix4.identity()`得到了`Matrix4`实例，

接着通过该实例实现缩放：

```dart
Matrix4.identity()
          ..scale(x, y)
```

这里的`scale`函数接收2个参数，分别是x，y轴的缩放倍率。

添加一个变量`_currentScale;`表示当前应该使用的倍率：

```dart
double _currentScale = 1.0;
Matrix4.identity()
          ..scale(_currentScale, _currentScale)
```

接下来要思考的就是在做缩放操作时，如何正确的变更`_currentScale`。

通过上面日志可以看到

**每次完整的缩放操作都会调用一次`_onScaleStart`及若干次`_onScaleUpdate`**

其中`_onScaleUpdate`参数`ScaleUpdateDetails`包含的是缩放操作发生时，

返回的缩放率`details.scale`。

这时我们的想法一般是这样的：

```dart
  _onScaleUpdate(ScaleUpdateDetails details) {
    print("_onScaleUpdate: focalPoint=${details.focalPoint}");
    print("_onScaleUpdate: scale=${details.scale}");
      setState(() {
        _currentScale = details.scale;
      });
  }
```

运行后操作了下，会发现可以执行缩放了：

![image-20200325180924466](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200325180924466.png)



这么简单就完成了吗？

其实多测试几次会发现，在单词缩放中目前是可以的。

但是松开手后，想继续上次的大小继续缩放，

**发现widget会先复原或者基本上先缩小，然后再缩放，这是个问题。**

**这是因为我们缩放一次完成后，没有存储当前的倍率，让下一次缩放开始时使用当前倍率作为基数开始。**

我们需要再额外添加变量`_lastScale`作为保存上次的倍率。

在缩放发生时，即`_onScaleStart`调用时保存当前倍率。

然后在缩放时，让上次的倍率和当前倍率乘积作为新的缩放倍率：

所以目前代码为：

```dart
  double _currentScale = 1.0;
  double _lastScale = 1.0;

_onScaleStart(ScaleStartDetails details) {
    print("_onScaleStart: focalPoint=${details.focalPoint}");
    _lastScale = _currentScale;
  }  


_onScaleUpdate(ScaleUpdateDetails details) {
    print("_onScaleUpdate: focalPoint=${details.focalPoint}");
    print("_onScaleUpdate: scale=${details.scale}");
    var tmpScale = details.scale;
    var currentScale = _lastScale * tmpScale;
      setState(() {
        _currentScale = currentScale;
      });
  }
```

然后再执行多次完整缩放操作，发现目前没有问题了。

现在基本完成了图片的缩放操作。

# 0x04 移动实现

现在看看Widget平移的实现，

首先创建一个变量`_currentOffset`表示当前的位置，

有了没有保存上一次变量的教训，

这次提交创建变量`_lastOffset`表示上一次移动的位置。

平移操作同样交给`Matrix4`，目前代码为：

```dart
 Offset _currentOffset = Offset.zero;
 Offset _lastOffset = Offset.zero;

 Transform(
        transform: Matrix4.identity()
          ..scale(_currentScale, _currentScale)
          ..translate(_currentOffset.dx, _currentOffset.dy)
     
   _onScaleStart(ScaleStartDetails details) {
    print("_onScaleStart: focalPoint=${details.focalPoint}");
    _lastScale = _currentScale;
    _lastOffset = _currentOffset;
  }    
```

接下来我们要做的就是计算好在什么时机刷新`_currentOffset`。

Widget平移没有使用什么onDragxxx方法。

这里仍然使用`_onScaleUpdate`方法。

已经知道回调返回的参数`ScaleUpdateDetails`中带有缩放倍率。

如果缩放倍率不为1说明我们正在执行缩放操作，

如果缩放倍率为1说明我们只是在执行拖动操作。

所以实现平移，我们需要添加倍率的判断操作：

```dart
  _onScaleUpdate(ScaleUpdateDetails details) {
    var tmpScale = details.scale;
    if (tmpScale == 1.0) {
      var tmpFocalPoint = details.focalPoint;
      var currentOffset;//如何计算currentOffset
      setState(() {
        _currentOffset = currentOffset;
      });
    } else {
      print("_onScaleUpdate: scale=${details.scale}");
      print("_onScaleUpdate: _lastScale=$_lastScale");
      var currentScale = _lastScale * tmpScale;
      setState(() {
        _currentScale = currentScale;
      });
    }
  }
```

现在需要计算局部变量`currentOffset`的值。

当我们在屏幕上滑动时，有个起始点就是`_onScaleStart`返回的`details.focalPoint`，

有个更新点是`_onScaleUpdate`返回的`details.focalPoint`，

**偏移量=更新点-起始点，**

**但是偏移量并不是控件平移所需的最终值，**

**而是应该使用上一次控件左上角的Offset即`_lastOffset`加上偏移量。**

起始点的需要从`_onScaleStart`中计算，

所以需要添加新的变量`_startOffset`，

在`_onScaleStart`执行时为其赋值：`_startOffset = details.focalPoint;`

现在更新`_onScaleUpdate`代码：

```dart
  _onScaleUpdate(ScaleUpdateDetails details) {
    var tmpScale = details.scale;
    if (tmpScale == 1.0) {
      var tmpFocalPoint = details.focalPoint;
      var currentOffset = _lastOffset + (tmpFocalPoint - _startOffset);
      print("_onScaleUpdate: currentOffset=$currentOffset");
      setState(() {
        _currentOffset = currentOffset;
      });
    } else {
      var currentScale = _lastScale * tmpScale;
      setState(() {
        _currentScale = currentScale;
      });
      print("_onScaleUpdate: _currentScale=$_currentScale");
    }
  }
```

运行代码基本没什么问题：

![image-20200326012256347](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200326012256347.png)

但是当放大或缩小到比较大的倍数时，进行拖动操作时会有漂移/稍慢的现象

因为可能是Widget已经被缩放过了，这个时候要考虑缩放因素，这里极端情况暂不考虑。





# 0x05 恢复原图

添加完了缩放和平移，现在添加恢复原样的功能。

希望长按时恢复原样，

这里恢复原样只要把用到的变量恢复默认值即可：

```dart
  _onLongPress() {
    setState(() {
      _resetToDefaultValues();
    });
  }
    void _resetToDefaultValues() {
    _startOffset = Offset.zero;
    _lastOffset = Offset.zero;
    _currentOffset = Offset.zero;
    _lastScale = 1.0;
    _currentScale = 1.0;
  }
```

# 0x06 点击放大

单击时调用的函数没有参数，所以单击放大倍率默认设置1.5。

但是我们不能无限放大，当倍率大于16时，恢复原样。

代码实现为：

```dart
  _onTap() {
    double currentScale = _lastScale * 1.5;
    if (currentScale > 16) {
      currentScale = 1.0;
      _resetToDefaultValues();
    }
    _lastScale = currentScale;
    setState(() {
      _currentScale = currentScale;
    });
  }
```



全部代码为：

```dart
import 'package:flutter/material.dart';

///缩放图片
class ScaleImageWidget extends StatefulWidget {
  final ImageProvider image;

  const ScaleImageWidget({Key key, this.image}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _State();
}

class _State extends State<ScaleImageWidget> {
  double _currentScale = 1.0;
  double _lastScale = 1.0;
  double currentWidth = 0;
  double currentHeight = 0;
  Offset _currentOffset = Offset.zero;
  Offset _lastOffset = Offset.zero;
  Offset _startOffset = Offset.zero;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: _onTap,
      onLongPress: _onLongPress,
      onScaleStart: _onScaleStart,
      onScaleUpdate: _onScaleUpdate,
      child: Transform(
          transform: Matrix4.identity()
            ..scale(_currentScale, _currentScale)
            ..translate(_currentOffset.dx, _currentOffset.dy),
          alignment: Alignment.center,
          child: Container(
            color: Colors.red,
            child: Center(
              child: LayoutBuilder(
                builder: (BuildContext _context, BoxConstraints constraints) {
                  if (currentWidth == 0) {
                    currentWidth = constraints.maxWidth;
                    currentHeight = constraints.maxHeight;
                  }
                  print(
                      "constraints,,,width=${constraints.maxWidth},,,height=${constraints.maxHeight}");

                  return Image(image: widget.image);
                },
              ),
            ),
          )),
    );
  }

  void _resetToDefaultValues() {
    _startOffset = Offset.zero;
    _lastOffset = Offset.zero;
    _currentOffset = Offset.zero;
    _lastScale = 1.0;
    _currentScale = 1.0;
  }

  _onTap() {
    double currentScale = _lastScale * 1.5;
    if (currentScale > 16) {
      currentScale = 1.0;
      _resetToDefaultValues();
    }
    _lastScale = currentScale;
    setState(() {
      _currentScale = currentScale;
    });
  }

  _onLongPress() {
    setState(() {
      _resetToDefaultValues();
    });
  }

  _onScaleStart(ScaleStartDetails details) {
    print("_onScaleStart: focalPoint=${details.focalPoint}");
    _lastScale = _currentScale;
    _lastOffset = _currentOffset;
    _startOffset = details.focalPoint;
  }

  _onScaleUpdate(ScaleUpdateDetails details) {
    print(
        "_onScaleUpdate: _lastScale=$_lastScale，，， _currentScale=$_currentScale");
    print(
        "_onScaleUpdate: _startOffset=$_startOffset，，， _lastOffset=$_lastOffset");
    var tmpScale = details.scale;
    if (tmpScale == 1.0) {
      var tmpFocalPoint = details.focalPoint;
      var currentOffset = _lastOffset + (tmpFocalPoint - _startOffset);
      print("_onScaleUpdate: currentOffset=$currentOffset");
      setState(() {
        _currentOffset = currentOffset;
      });
    } else {
      var currentScale = _lastScale * tmpScale;
      setState(() {
        _currentScale = currentScale;
      });
      print("_onScaleUpdate: _currentScale=$_currentScale");
    }
  }
}

```