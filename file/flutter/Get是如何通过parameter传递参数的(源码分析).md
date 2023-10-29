# 没有拿到数据

跳转到文章详情页面时通过

`Get.toNamed(BlogRoute.MARKDOWN_PAGE, 
parameters: {"name": post.title})`传递了文章名称。

详情页面通过`String? name = Get.parameters['name'];`

获取传入的**parameter**但是为null导致页面显示异常。

# 获取parameter流程

看下`Get.parameter`方法：

```dart
Map<String, String?> get parameters => _getxController.parameters;
```

这里的 **_getxController**是一个静态变量：

`static GetMaterialController _getxController = GetMaterialController();`

**parameters**类型`Map<String, String?> parameters = {};`。

没有什么复杂逻辑，就是获取变量**parameters**的值。

# parameter赋值流程

接下来看看 **parameter**是如何赋值的。

上面的**get**方法下其实还带了**set**：

```dart
  Map<String, String?> get parameters => _getxController.parameters;
  set parameters(Map<String, String?> newParameters) =>
      _getxController.parameters = newParameters;
```

有两处调用了**set**方法：

```dart
  void addPageParameter(GetPage route) {
    if (route.parameters == null) return;

    final parameters = Get.parameters;
    parameters.addEntries(route.parameters!.entries);
    Get.parameters = parameters;
  }
  
    bool needRecheck() {
    if (settings == null && route != null) {
      settings = route;
    }
    final match = Get.routeTree.matchRoute(settings!.name!);
    Get.parameters = match.parameters;

    // No Match found
    if (match.route == null) {
      isUnknown = true;
      return false;
    }

    final runner = MiddlewareRunner(match.route!.middlewares);
    route = runner.runOnPageCalled(match.route);
    addPageParameter(route!);

    // No middlewares found return match.
    if (match.route!.middlewares == null || match.route!.middlewares!.isEmpty) {
      return false;
    }
    final newSettings = runner.runRedirect(settings!.name);
    if (newSettings == null) {
      return false;
    }
    settings = newSettings;
    return true;
  }
```

这里的**addPageParameter**也是在**needRecheck**中调用的。

所以主要看**needRecheck**是在哪里调用的。

查找发现有两处调用了**needRecheck**：

```dart
  // redirect all pages that needes redirecting
  GetPageRoute<T> page<T>() {
    while (needRecheck()) {}
    final _r = (isUnknown ? unknownRoute : route)!;
    return GetPageRoute<T>(
      page: _r.page,
      parameter: _r.parameters,
      settings: isUnknown
          ? RouteSettings(
              name: _r.name,
              arguments: settings!.arguments,
            )
          : settings,
      curve: _r.curve,
      opaque: _r.opaque,
      showCupertinoParallax: _r.showCupertinoParallax,
      gestureWidth: _r.gestureWidth,
      customTransition: _r.customTransition,
      binding: _r.binding,
      bindings: _r.bindings,
      transitionDuration:
          _r.transitionDuration ?? Get.defaultTransitionDuration,
      transition: _r.transition,
      popGesture: _r.popGesture,
      fullscreenDialog: _r.fullscreenDialog,
      middlewares: _r.middlewares,
    );
  }

  // redirect all pages that needes redirecting
  GetPageRoute<T> getPageToRoute<T>(GetPage rou, GetPage? unk) {
    while (needRecheck()) {}
    final _r = (isUnknown ? unk : rou)!;

    return GetPageRoute<T>(
      page: _r.page,
      parameter: _r.parameters,
      alignment: _r.alignment,
      title: _r.title,
      maintainState: _r.maintainState,
      routeName: _r.name,
      settings: _r,
      curve: _r.curve,
      showCupertinoParallax: _r.showCupertinoParallax,
      gestureWidth: _r.gestureWidth,
      opaque: _r.opaque,
      customTransition: _r.customTransition,
      binding: _r.binding,
      bindings: _r.bindings,
      transitionDuration:
          _r.transitionDuration ?? Get.defaultTransitionDuration,
      transition: _r.transition,
      popGesture: _r.popGesture,
      fullscreenDialog: _r.fullscreenDialog,
      middlewares: _r.middlewares,
    );
  }
```

## GetPage

看下哪里调用了**getPageToRoute**：

```dart
  @override
  Route<T> createRoute(BuildContext context) {
    // return GetPageRoute<T>(settings: this, page: page);
    final _page = PageRedirect(
      route: this,
      settings: this,
      unknownRoute: unknownRoute,
    ).getPageToRoute<T>(this, unknownRoute);

    return _page;
  }
```

**GetPage**重写了**createRoute**函数调用了**getPageToRoute**。

这下明了了，**GetPage**通常是在**GetMaterialApp**的**getPages**参数里使用的。

但是我现在由于是延迟加载，

使用的是自定义`onGenerateRoute: BlogRoute.onGenerateRoute`。

所以**GetPage**推进不下去了，暂时打住。

看看**page**在哪调用的。

## GetMaterialApp

**page**函数在**GetMaterialApp**和**GetCupertinoApp**中。

这俩组件只是风格不同，只看一个流程即可：

```dart
  Route<dynamic> generator(RouteSettings settings) {
    return PageRedirect(settings: settings, unknownRoute: unknownRoute).page();
  }

  List<Route<dynamic>> initialRoutesGenerate(String name) {
    return [
      PageRedirect(
        settings: RouteSettings(name: name),
        unknownRoute: unknownRoute,
      ).page()
    ];
  }
```

**GetMaterialApp**只是对**MaterialApp**的封装。

这俩函数都在  **MaterialApp**的属性处调用：

```dart
                onGenerateRoute:
                    (getPages != null ? generator : onGenerateRoute),
                onGenerateInitialRoutes: (getPages == null || home != null)
                    ? onGenerateInitialRoutes
                    : initialRoutesGenerate,
```

可以看到由于没有设置**getPages**，所以调用的是我们自定义的**onGenerateRoute**。

同样由于没有设置**getPages**，所以不会调用**initialRoutesGenerate**。

这导致了一直没有机会调用**set**函数设置**parameter**。

# 手动set parameter

既然调用了我们自定义的**onGenerateRoute**。

那我们就在该函数中，页面启动前**set parameter**：

```dart
  static Route<dynamic>? onGenerateRoute(RouteSettings settings) {
    //这里设置parameter
    return MaterialPageRoute(
        settings: settings,
        builder: (ctx) => DefferedLoadWidget(settings: settings));
  }
```

找到了**set parameter**地方，如何拿到有哪些**parameter**呢？

## 重回needRecheck

这个函数有这样两行代码：

```dart
    final match = Get.routeTree.matchRoute(settings!.name!);
    Get.parameters = match.parameters;
```

传入**settings!.name!** 到`Get.routeTree.matchRoute`：

```dart
  RouteDecoder matchRoute(String name, {Object? arguments}) {
    final uri = Uri.parse(name);
    // /home/profile/123 => home,profile,123 => /,/home,/home/profile,/home/profile/123
    final split = uri.path.split('/').where((element) => element.isNotEmpty);
    var curPath = '/';
    final cumulativePaths = <String>[
      '/',
    ];
    for (var item in split) {
      if (curPath.endsWith('/')) {
        curPath += '$item';
      } else {
        curPath += '/$item';
      }
      cumulativePaths.add(curPath);
    }

    final treeBranch = cumulativePaths
        .map((e) => MapEntry(e, _findRoute(e)))
        .where((element) => element.value != null)
        .map((e) => MapEntry(e.key, e.value!))
        .toList();

    final params = Map<String, String>.from(uri.queryParameters);
    if (treeBranch.isNotEmpty) {
      //route is found, do further parsing to get nested query params
      final lastRoute = treeBranch.last;
      final parsedParams = _parseParams(name, lastRoute.value.path);
      if (parsedParams.isNotEmpty) {
        params.addAll(parsedParams);
      }
      //copy parameters to all pages.
      final mappedTreeBranch = treeBranch
          .map(
            (e) => e.value.copy(
              parameters: {
                if (e.value.parameters != null) ...e.value.parameters!,
                ...params,
              },
              name: e.key,
            ),
          )
          .toList();
      return RouteDecoder(
        mappedTreeBranch,
        params,
        arguments,
      );
    }

    //route not found
    return RouteDecoder(
      treeBranch.map((e) => e.value).toList(),
      params,
      arguments,
    );
  }
```

这里只看关键两行即可：

```dart
 final uri = Uri.parse(name);
 final params = Map<String, String>.from(uri.queryParameters);
```

所以通过`Uri.parse(settings.name!).queryParameters;`即可拿到**parameter**了。

最后**set parameter**如下：

```dart
static Route<dynamic>? onGenerateRoute(RouteSettings settings) {
    Get.parameters = Uri.parse(settings.name!).queryParameters;
    return MaterialPageRoute(
        settings: settings,
        builder: (ctx) => DefferedLoadWidget(settings: settings));
  }
```