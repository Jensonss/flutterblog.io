# arguments从哪获取的数据

看下`Get.arguments`实现：`dynamic get arguments => routing.args;`

期中**routing**实现是`Routing get routing => _getxController.routing;`

而 **_getxController** 实现是 `static GetMaterialController _getxController = GetMaterialController();`

也就是**arguments**来自**GetMaterialController**的`final routing = Routing();`

**Routing**构造函数：

```dart
  Routing({
    this.current = '',
    this.previous = '',
    this.args,
    this.removed = '',
    this.route,
    this.isBack,
    // this.isSnackbar,
    this.isBottomSheet,
    this.isDialog,
  });
```

可以看到**arguments**实际上就是**Routing**的**args**

那接下来只要找到哪里给**Routing**的**args**赋值的即可。

# args在哪赋值

既然我们是调用`Get.toNamed()`时候传递的**arguments**。首先看看这个值的传递路径是怎样的。

```dart
  Future<T?>? toNamed<T>(
    String page, {
    dynamic arguments,
    int? id,
    bool preventDuplicates = true,
    Map<String, String>? parameters,
  }) {
    if (preventDuplicates && page == currentRoute) {
      return null;
    }

    if (parameters != null) {
      final uri = Uri(path: page, queryParameters: parameters);
      page = uri.toString();
    }

    return global(id).currentState?.pushNamed<T>(
          page,
          arguments: arguments,
        );
  }
```

最后一行调用了**pushNamed**：

```dart
  Future<T?> pushNamed<T extends Object?>(
    String routeName, {
    Object? arguments,
  }) {
    return push<T>(_routeNamed<T>(routeName, arguments: arguments)!);
  }
```

可以看到**arguments**被 **_routeNamed**封装到了**Route**，然后调用了**push**方法。

先进去看看是如何被封装的：

```dart
  Route<T>? _routeNamed<T>(String name, { required Object? arguments, bool allowNull = false }) {
    assert(!_debugLocked);
    assert(name != null);
    if (allowNull && widget.onGenerateRoute == null)
      return null;
    assert(() {
      if (widget.onGenerateRoute == null) {
        throw FlutterError(
          'Navigator.onGenerateRoute was null, but the route named "$name" was referenced.\n'
          'To use the Navigator API with named routes (pushNamed, pushReplacementNamed, or '
          'pushNamedAndRemoveUntil), the Navigator must be provided with an '
          'onGenerateRoute handler.\n'
          'The Navigator was:\n'
          '  $this',
        );
      }
      return true;
    }());
    final RouteSettings settings = RouteSettings(
      name: name,
      arguments: arguments,
    );
    Route<T>? route = widget.onGenerateRoute!(settings) as Route<T>?;
    if (route == null && !allowNull) {
      assert(() {
        if (widget.onUnknownRoute == null) {
          throw FlutterError.fromParts(<DiagnosticsNode>[
            ErrorSummary('Navigator.onGenerateRoute returned null when requested to build route "$name".'),
            ErrorDescription(
              'The onGenerateRoute callback must never return null, unless an onUnknownRoute '
              'callback is provided as well.',
            ),
            DiagnosticsProperty<NavigatorState>('The Navigator was', this, style: DiagnosticsTreeStyle.errorProperty),
          ]);
        }
        return true;
      }());
      route = widget.onUnknownRoute!(settings) as Route<T>?;
      assert(() {
        if (route == null) {
          throw FlutterError.fromParts(<DiagnosticsNode>[
            ErrorSummary('Navigator.onUnknownRoute returned null when requested to build route "$name".'),
            ErrorDescription('The onUnknownRoute callback must never return null.'),
            DiagnosticsProperty<NavigatorState>('The Navigator was', this, style: DiagnosticsTreeStyle.errorProperty),
          ]);
        }
        return true;
      }());
    }
    assert(route != null || allowNull);
    return route;
  }
```

可以看到**arguments**其实被封装到了**RouteSettings**。

通过`widget.onGenerateRoute!(settings)`传入**settings**返回了**Route**。

这个**Route**是个抽象类，`widget.onGenerateRoute`生成的应该是一个实现类。

看看`widget.onGenerateRoute`如何实现的：

我们使用路由功能时需要**GetMaterialApp**替代原来的**MaterialApp**，看下如何实现的：

```dart
MaterialApp(
                key: _.unikey,
                navigatorKey: (navigatorKey == null
                    ? Get.key
                    : Get.addKey(navigatorKey!)),
                scaffoldMessengerKey:
                    scaffoldMessengerKey ?? _.scaffoldMessengerKey,
                home: home,
                routes: routes ?? const <String, WidgetBuilder>{},
                initialRoute: initialRoute,
                onGenerateRoute:
                    (getPages != null ? generator : onGenerateRoute),
                onGenerateInitialRoutes: (getPages == null || home != null)
                    ? onGenerateInitialRoutes
                    : initialRoutesGenerate,
                onUnknownRoute: onUnknownRoute,
                navigatorObservers: (navigatorObservers == null
                    ? <NavigatorObserver>[
                        GetObserver(routingCallback, Get.routing)
                      ]
                    : <NavigatorObserver>[
                        GetObserver(routingCallback, Get.routing)
                      ]
                  ..addAll(navigatorObservers!)),
                builder: defaultBuilder,
                title: title,
                onGenerateTitle: onGenerateTitle,
                color: color,
                theme: _.theme ?? theme ?? ThemeData.fallback(),
                darkTheme:
                    _.darkTheme ?? darkTheme ?? theme ?? ThemeData.fallback(),
                themeMode: _.themeMode ?? themeMode,
                locale: Get.locale ?? locale,
                localizationsDelegates: localizationsDelegates,
                localeListResolutionCallback: localeListResolutionCallback,
                localeResolutionCallback: localeResolutionCallback,
                supportedLocales: supportedLocales,
                debugShowMaterialGrid: debugShowMaterialGrid,
                showPerformanceOverlay: showPerformanceOverlay,
                checkerboardRasterCacheImages: checkerboardRasterCacheImages,
                checkerboardOffscreenLayers: checkerboardOffscreenLayers,
                showSemanticsDebugger: showSemanticsDebugger,
                debugShowCheckedModeBanner: debugShowCheckedModeBanner,
                shortcuts: shortcuts,
                scrollBehavior: scrollBehavior,
                useInheritedMediaQuery: useInheritedMediaQuery,
                //   actions: actions,
              )
```

在**build**方法中也是通过**MaterialApp**实现的，只是对其进行了封装。

这里有两点属性要注意：

首先是`onGenerateRoute:(getPages != null ? generator : onGenerateRoute)`。

其次是

```dart
navigatorObservers: (navigatorObservers == null
    ? <NavigatorObserver>[
        GetObserver(routingCallback, Get.routing)
      ]
    : <NavigatorObserver>[
        GetObserver(routingCallback, Get.routing)
      ]
  ..addAll(navigatorObservers!))
```

由于设置了**getPages**所以这里传递的是**generator**函数：

```dart
 Route<dynamic> generator(RouteSettings settings) {
    return PageRedirect(settings: settings, unknownRoute: unknownRoute).page();
  }
```

这两个属性又传递给了**WidgetsApp**,而**WidgetsApp**中又调用了**Navigator** Widget：

```dart
Navigator(
        restorationScopeId: 'nav',
        key: _navigator,
        initialRoute: _initialRouteName,
        onGenerateRoute: _onGenerateRoute,
        onGenerateInitialRoutes: widget.onGenerateInitialRoutes == null
          ? Navigator.defaultGenerateInitialRoutes
          : (NavigatorState navigator, String initialRouteName) {
            return widget.onGenerateInitialRoutes!(initialRouteName);
          },
        onUnknownRoute: _onUnknownRoute,
        observers: widget.navigatorObservers!,
        reportsRouteUpdateToEngine: true,
      )
```

**Navigator**中的**observers**直接来自**GetMaterialApp**传递过来的，

**onGenerateRoute**则是对传递过来的进行了封装：

```dart
  Route<dynamic>? _onGenerateRoute(RouteSettings settings) {
    final String? name = settings.name;
    final WidgetBuilder? pageContentBuilder = name == Navigator.defaultRouteName && widget.home != null
        ? (BuildContext context) => widget.home!
        : widget.routes![name];

    if (pageContentBuilder != null) {
      assert(
        widget.pageRouteBuilder != null,
        'The default onGenerateRoute handler for WidgetsApp must have a '
        'pageRouteBuilder set if the home or routes properties are set.',
      );
      final Route<dynamic> route = widget.pageRouteBuilder!<dynamic>(
        settings,
        pageContentBuilder,
      );
      assert(route != null, 'The pageRouteBuilder for WidgetsApp must return a valid non-null Route.');
      return route;
    }
    if (widget.onGenerateRoute != null)
      return widget.onGenerateRoute!(settings);
    return null;
  }
```

可以看到虽然封装了但最终还是调用了外部传递的：

```dart
Route<dynamic> generator(RouteSettings settings) {
    return PageRedirect(settings: settings, unknownRoute: unknownRoute).page();
  }
```

查看**page**方法：

```dart
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
```

看到**arguments**最终被封装到**GetPageRoute**中，而**GetPageRoute**就是**Route**子类。

刚才说的第二个属性**navigatorObservers**传递到**Navigator**的**observers**属性。

继续刚才的**push**流程：

```dart
  Future<T?> push<T extends Object?>(Route<T> route) {
    assert(_debugCheckIsPagelessRoute(route));
    _pushEntry(_RouteEntry(route, initialState: _RouteLifecycle.push));
    return route.popped;
  }
```

这里把刚才生成的**Route**又封装到了**RouteEntry**

进入 **_pushEntry**:

```dart
  void _pushEntry(_RouteEntry entry) {
    _history.add(entry);
    _flushHistoryUpdates();
    _afterNavigation(entry.route);
  }
```

**_history**这是一个存储打开页面集合，加入到集合后通过 **_flushHistoryUpdates**执行相关操作：

```dart
        case _RouteLifecycle.push:
        case _RouteLifecycle.pushReplace:
        case _RouteLifecycle.replace:
          assert(rearrangeOverlay);
          entry.handlePush(
            navigator: this,
            previous: previous?.route,
            previousPresent: _getRouteBefore(index - 1, _RouteEntry.isPresentPredicate)?.route,
            isNewFirst: next == null,
          );
          assert(entry.currentState != _RouteLifecycle.push);
          assert(entry.currentState != _RouteLifecycle.pushReplace);
          assert(entry.currentState != _RouteLifecycle.replace);
          if (entry.currentState == _RouteLifecycle.idle) {
            continue;
          }
          break;

    _flushObserverNotifications();
```

这是该方法部分代码，由于现在是**push**页面所以**switch**流程执行`case _RouteLifecycle.push:`

调用`entry.handlePush`：

```dart
  void handlePush({ required NavigatorState navigator, required bool isNewFirst, required Route<dynamic>? previous, required Route<dynamic>? previousPresent }) {
    assert(currentState == _RouteLifecycle.push || currentState == _RouteLifecycle.pushReplace || currentState == _RouteLifecycle.replace);
    assert(navigator != null);
    assert(navigator._debugLocked);
    assert(
      route._navigator == null,
      'The pushed route has already been used. When pushing a route, a new '
      'Route object must be provided.',
    );
    final _RouteLifecycle previousState = currentState;
    route._navigator = navigator;
    route.install();
    assert(route.overlayEntries.isNotEmpty);
    if (currentState == _RouteLifecycle.push || currentState == _RouteLifecycle.pushReplace) {
      final TickerFuture routeFuture = route.didPush();
      currentState = _RouteLifecycle.pushing;
      routeFuture.whenCompleteOrCancel(() {
        if (currentState == _RouteLifecycle.pushing) {
          currentState = _RouteLifecycle.idle;
          assert(!navigator._debugLocked);
          assert(() { navigator._debugLocked = true; return true; }());
          navigator._flushHistoryUpdates();
          assert(() { navigator._debugLocked = false; return true; }());
        }
      });
    } else {
      assert(currentState == _RouteLifecycle.replace);
      route.didReplace(previous);
      currentState = _RouteLifecycle.idle;
    }
    if (isNewFirst) {
      route.didChangeNext(null);
    }

    if (previousState == _RouteLifecycle.replace || previousState == _RouteLifecycle.pushReplace) {
      navigator._observedRouteAdditions.add(
        _NavigatorReplaceObservation(route, previousPresent),
      );
    } else {
      assert(previousState == _RouteLifecycle.push);
      navigator._observedRouteAdditions.add(
        _NavigatorPushObservation(route, previousPresent),
      );
    }
  }
```

这里会先调用`final TickerFuture routeFuture = route.didPush();`然后通过`whenCompleteOrCancel`等待完成回调。

接着调用`navigator._observedRouteAdditions.add( _NavigatorPushObservation(route, previousPresent), );`

等到页面**push**完成时回调时再次调用`navigator._flushHistoryUpdates();`

该方法底部调用了`_flushObserverNotifications`：

```dart
  void _flushObserverNotifications() {
    if (_effectiveObservers.isEmpty) {
      _observedRouteDeletions.clear();
      _observedRouteAdditions.clear();
      return;
    }
    while (_observedRouteAdditions.isNotEmpty) {
      final _NavigatorObservation observation = _observedRouteAdditions.removeLast();
      _effectiveObservers.forEach(observation.notify);
    }

    while (_observedRouteDeletions.isNotEmpty) {
      final _NavigatorObservation observation = _observedRouteDeletions.removeFirst();
      _effectiveObservers.forEach(observation.notify);
    }
  }
```

方法中 **_effectiveObservers**的赋值：

```
  void initState() {
    _effectiveObservers = widget.observers;
}
```

这个**widget**是**Navigator**，上面说了**Navigator**中的**observers**直接来自**GetMaterialApp**传递过来的：

```dart
    navigatorObservers: (navigatorObservers == null
                    ? <NavigatorObserver>[
                        GetObserver(routingCallback, Get.routing)
                      ]
                    : <NavigatorObserver>[
                        GetObserver(routingCallback, Get.routing)
                      ]
                  ..addAll(navigatorObservers!)),
```

所以 **_effectiveObservers**不为空，而 **_observedRouteAdditions**在**handlePush**添加了对象，

所以调用`_effectiveObservers.forEach(observation.notify)`时进入 **_NavigatorPushObservation**的**notify**方法查看：

```dart
void notify(NavigatorObserver observer) {
    observer.didPush(primaryRoute, secondaryRoute);
  }
```

这里的**observer**为外部传递的**GetObserver**:

```dart
  void didPush(Route route, Route? previousRoute) {
    super.didPush(route, previousRoute);
    final newRoute = _RouteData.ofRoute(route);

    if (newRoute.isBottomSheet || newRoute.isDialog) {
      Get.log("OPEN ${newRoute.name}");
    } else if (newRoute.isGetPageRoute) {
      Get.log("GOING TO ROUTE ${newRoute.name}");
    }

    RouterReportManager.reportCurrentRoute(route);
    _routeSend?.update((value) {
      // Only PageRoute is allowed to change current value
      if (route is PageRoute) {
        value.current = newRoute.name ?? '';
      }
      final previousRouteName = _extractRouteName(previousRoute);
      if (previousRouteName != null) {
        value.previous = previousRouteName;
      }

      value.args = route.settings.arguments;
      value.route = route;
      value.isBack = false;
      value.removed = '';
      value.isBottomSheet =
          newRoute.isBottomSheet ? true : value.isBottomSheet ?? false;
      value.isDialog = newRoute.isDialog ? true : value.isDialog ?? false;
    });

    if (routing != null) {
      routing!(_routeSend);
    }
  }
```

看到 **_routeSend**更新了自身的属性值拿到了`route.settings.arguments`。

**_routeSend**来自构造函数`GetObserver([this.routing, this._routeSend])`。而在**GetMaterialApp**中传递时是这样的：

```dart
GetObserver(routingCallback, Get.routing)
```

也就是说 **_routeSend**就是**Get.routing**，也就是`Routing get routing => _getxController.routing`

这和上一节**arguments从哪获取的数据**说到的**Routing**是同一个值。

就是说本节在调用`Get.toNamed()`后通过一些列流程最后更新了`_getxController.routing`值。

然后`Get.arguments`调用拿到该值。