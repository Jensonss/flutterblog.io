Flutter web仅仅几个页面构建后的`main.dart.js`文件就有3.7m大小。

文件过大导致首次加载很慢，需要将该文件进行分包。

延迟加载**deferred as**功能可以实现分包，

实现那些通过跳转的深层页面使用延迟加载。

看看分包前大小：

![未分包](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/%E6%9C%AA%E5%88%86%E5%8C%85main.dart.jpg)

# 0x00 创建新route文件

## 1、创建 blog_route.dart

## 2、deferred as 深层page

导入所有要延迟加载的深层页面：

```dart
import 'page/markdown_page.dart' deferred as post_detail;
import 'page/gq_page.dart' deferred as gq_page;
import 'page/gqdetail_page.dart' deferred as gqdetail_page;
import 'page/phb_page.dart' deferred as phb_page;
```

## 3、创建BlogRoute类

为深层page声明静态变量

同时创建函数**onGenerateRoute**：

```dart
class BlogRoute {
  static const String MARKDOWN_PAGE = 'markdown_page';
  static const String GQ_PAGE = 'gq_page';
  static const String GQDETAIL_PAGE = 'gqdetail_page';
  static const String PHB_PAGE = 'phb_page';

  static Route<dynamic>? onGenerateRoute(RouteSettings settings) {
    print('BlogRoute onGenerateRoute');
    return MaterialPageRoute(
        settings: settings,
        builder: (context) => DefferedLoadWidget(settings: settings));
  }
}
```

为**materialapp**的**onGenerateRoute**配置`onGenerateRoute: BlogRoute.onGenerateRoute`，这样所有的路由会通过这里。

## 4、定义顶层函数 WidgetConstructor

`typedef WidgetConstructor = Widget Function();`

## 5、定义顶层变量 defferLoadMap

map中**key**为命名页面的常量，**value**为每个延迟页面的**loadLibrary**：

```dart
var defferLoadMap = {
  BlogRoute.MARKDOWN_PAGE: post_detail.loadLibrary,
  BlogRoute.GQ_PAGE: gq_page.loadLibrary,
  BlogRoute.GQDETAIL_PAGE: gqdetail_page.loadLibrary,
  BlogRoute.PHB_PAGE: phb_page.loadLibrary
};
```

## 6、定义顶层变量 constructorMap

```dart
var constructorMap = {
  ///注意这里value是函数类型，不能直接post_detail.newWidget ，会出现DeferredNotLoadedError
  BlogRoute.MARKDOWN_PAGE: () => post_detail.newWidget,
  BlogRoute.GQ_PAGE: () => gq_page.newWidget,
  BlogRoute.GQDETAIL_PAGE: () => gqdetail_page.newWidget,
  BlogRoute.PHB_PAGE: () => phb_page.newWidget
};
```

这里的**newWidget**实现为:

```dart
WidgetConstructor newWidget = () {
  return const xxxxPage();
};
```

注意每个深层页面里都要有这样一个对应的函数。

# 0x01 创建DefferedLoadWidget

这里的**DefferedLoadWidget**是一个**StatefulWidget**

```dart
class DefferedLoadWidget extends StatefulWidget {
  final RouteSettings settings;

  const DefferedLoadWidget({super.key, required this.settings});

  @override
  State<StatefulWidget> createState() => _DefferLoadState();
}
```

创建 **_DefferLoadState**：

```dart
class _DefferLoadState extends State<DefferedLoadWidget> {
  Future Function()? fun;
  String path = '';
  late Future future;

  @override
  void initState() {
    super.initState();
    Uri uri = Uri.parse(widget.settings.name ?? "");
    path = uri.path;
    fun = defferLoadMap[path];
    future = fun!.call();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: future,
      builder: (context, snap) {
        if (snap.connectionState == ConnectionState.done) {
          if (snap.hasError) {
            return const Center(
              child: Text('页面加载失败'),
            );
          }
          return constructorMap[path]!().call();
        }
        return const UnconstrainedBox(
          child: SizedBox(
            width: 40,
            height: 40,
            child: CircularProgressIndicator(),
          ),
        );
      },
    );
  }
}
```

**initState**中通过**settings**拿到**path**，这里的**path**就是命名路由的**key**。

所以通过`defferLoadMap[path]`能得到对应延迟加载页面的**loadLibrary**函数。

调用该函数返回**future**，传递给**FutureBuilder**。

在返回结果前是不能直接使用对应页面的。

所以使用前先展示loading，状态完成时

`snap.connectionState == ConnectionState.done`且没有错误

表示延迟加载完成，

此时调用`constructorMap[path]!()`拿到并执行**constructorMap**的**value**函数，

这个函数返回的是创建各个页面实例的函数，继续调用执行即可。

看看分包后的大小：
![分包后大小](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/%E5%88%86%E5%8C%85%E7%9A%84main.dart.jpg)