# 0x00 前言

在试用状态框架时发现一个问题就是：

**状态管理框架的xxProvider Widget只能用在Root Widget。**

**用在HomePage时，其他Page获取不到。**

现在就看看是什么原因造成的。

# 0x01 分析



App启动时的Root Widget一般我们使用`MaterialApp`。

所以分析就从这个Widget开始入手。

## MaterialApp

MaterialApp一般会设置home属性：

```dart
MaterialApp(
            home: ScopedHomePage(),
          )
```

它是一个`StatefulWidget`，

在其对应的`_MaterialAppState`的`build`方法实现为：

```dart
 @override
  Widget build(BuildContext context) {
    Widget result = HeroControllerScope(
      controller: _heroController,
      child: WidgetsApp(
        key: GlobalObjectKey(this),
        navigatorKey: widget.navigatorKey,
        navigatorObservers: widget.navigatorObservers,
        pageRouteBuilder: <T>(RouteSettings settings, WidgetBuilder builder) {
          return MaterialPageRoute<T>(settings: settings, builder: builder);
        },
        home: widget.home,
        routes: widget.routes,
        initialRoute: widget.initialRoute,
        onGenerateRoute: widget.onGenerateRoute,
        onGenerateInitialRoutes: widget.onGenerateInitialRoutes,
        onUnknownRoute: widget.onUnknownRoute,
        builder: (BuildContext context, Widget child) {
          // Use a light theme, dark theme, or fallback theme.
          final ThemeMode mode = widget.themeMode ?? ThemeMode.system;
          ThemeData theme;
          if (widget.darkTheme != null) {
            final ui.Brightness platformBrightness = MediaQuery.platformBrightnessOf(context);
            if (mode == ThemeMode.dark ||
              (mode == ThemeMode.system && platformBrightness == ui.Brightness.dark)) {
              theme = widget.darkTheme;
            }
          }
          theme ??= widget.theme ?? ThemeData.fallback();

          return AnimatedTheme(
            data: theme,
            isMaterialAppTheme: true,
            child: widget.builder != null
              ? Builder(
                  builder: (BuildContext context) {
                    // Why are we surrounding a builder with a builder?
                    //
                    // The widget.builder may contain code that invokes
                    // Theme.of(), which should return the theme we selected
                    // above in AnimatedTheme. However, if we invoke
                    // widget.builder() directly as the child of AnimatedTheme
                    // then there is no Context separating them, and the
                    // widget.builder() will not find the theme. Therefore, we
                    // surround widget.builder with yet another builder so that
                    // a context separates them and Theme.of() correctly
                    // resolves to the theme we passed to AnimatedTheme.
                    return widget.builder(context, child);
                  },
                )
              : child,
          );
        },
        title: widget.title,
        onGenerateTitle: widget.onGenerateTitle,
        textStyle: _errorTextStyle,
        // The color property is always pulled from the light theme, even if dark
        // mode is activated. This was done to simplify the technical details
        // of switching themes and it was deemed acceptable because this color
        // property is only used on old Android OSes to color the app bar in
        // Android's switcher UI.
        //
        // blue is the primary color of the default theme
        color: widget.color ?? widget.theme?.primaryColor ?? Colors.blue,
        locale: widget.locale,
        localizationsDelegates: _localizationsDelegates,
        localeResolutionCallback: widget.localeResolutionCallback,
        localeListResolutionCallback: widget.localeListResolutionCallback,
        supportedLocales: widget.supportedLocales,
        showPerformanceOverlay: widget.showPerformanceOverlay,
        checkerboardRasterCacheImages: widget.checkerboardRasterCacheImages,
        checkerboardOffscreenLayers: widget.checkerboardOffscreenLayers,
        showSemanticsDebugger: widget.showSemanticsDebugger,
        debugShowCheckedModeBanner: widget.debugShowCheckedModeBanner,
        inspectorSelectButtonBuilder: (BuildContext context, VoidCallback onPressed) {
          return FloatingActionButton(
            child: const Icon(Icons.search),
            onPressed: onPressed,
            mini: true,
          );
        },
        shortcuts: widget.shortcuts,
        actions: widget.actions,
      ),
    );

    assert(() {
      if (widget.debugShowMaterialGrid) {
        result = GridPaper(
          color: const Color(0xE0F9BBE0),
          interval: 8.0,
          divisions: 2,
          subdivisions: 1,
          child: result,
        );
      }
      return true;
    }());

    return ScrollConfiguration(
      behavior: _MaterialScrollBehavior(),
      child: result,
    );
  }
```

可以看到`HeroControllerScope`的`child`设置了`WidgetsApp`，

在外层的`home`属性被设置到了`WidgetsApp`。



## WidgetsApp

`WidgetsApp`也是一个`StatefulWidget`，

在其对应的`_WidgetsAppState`的`build`方法实现为：

```dart
@override
  Widget build(BuildContext context) {
    Widget navigator;
    if (_navigator != null) {
      navigator = Navigator(
        key: _navigator,
        // If window.defaultRouteName isn't '/', we should assume it was set
        // intentionally via `setInitialRoute`, and should override whatever
        // is in [widget.initialRoute].
        initialRoute: WidgetsBinding.instance.window.defaultRouteName != Navigator.defaultRouteName
            ? WidgetsBinding.instance.window.defaultRouteName
            : widget.initialRoute ?? WidgetsBinding.instance.window.defaultRouteName,
        onGenerateRoute: _onGenerateRoute,
        onGenerateInitialRoutes: widget.onGenerateInitialRoutes == null
          ? Navigator.defaultGenerateInitialRoutes
          : (NavigatorState navigator, String initialRouteName) {
            return widget.onGenerateInitialRoutes(initialRouteName);
          },
        onUnknownRoute: _onUnknownRoute,
        observers: widget.navigatorObservers,
      );
    }

    Widget result;
    if (widget.builder != null) {
      result = Builder(
        builder: (BuildContext context) {
          return widget.builder(context, navigator);
        },
      );
    } else {
      assert(navigator != null);
      result = navigator;
    }

    if (widget.textStyle != null) {
      result = DefaultTextStyle(
        style: widget.textStyle,
        child: result,
      );
    }

    PerformanceOverlay performanceOverlay;
    // We need to push a performance overlay if any of the display or checkerboarding
    // options are set.
    if (widget.showPerformanceOverlay || WidgetsApp.showPerformanceOverlayOverride) {
      performanceOverlay = PerformanceOverlay.allEnabled(
        checkerboardRasterCacheImages: widget.checkerboardRasterCacheImages,
        checkerboardOffscreenLayers: widget.checkerboardOffscreenLayers,
      );
    } else if (widget.checkerboardRasterCacheImages || widget.checkerboardOffscreenLayers) {
      performanceOverlay = PerformanceOverlay(
        checkerboardRasterCacheImages: widget.checkerboardRasterCacheImages,
        checkerboardOffscreenLayers: widget.checkerboardOffscreenLayers,
      );
    }
    if (performanceOverlay != null) {
      result = Stack(
        children: <Widget>[
          result,
          Positioned(top: 0.0, left: 0.0, right: 0.0, child: performanceOverlay),
        ],
      );
    }

    if (widget.showSemanticsDebugger) {
      result = SemanticsDebugger(
        child: result,
      );
    }

    assert(() {
      if (widget.debugShowWidgetInspector || WidgetsApp.debugShowWidgetInspectorOverride) {
        result = WidgetInspector(
          child: result,
          selectButtonBuilder: widget.inspectorSelectButtonBuilder,
        );
      }
      if (widget.debugShowCheckedModeBanner && WidgetsApp.debugAllowBannerOverride) {
        result = CheckedModeBanner(
          child: result,
        );
      }
      return true;
    }());

    Widget title;
    if (widget.onGenerateTitle != null) {
      title = Builder(
        // This Builder exists to provide a context below the Localizations widget.
        // The onGenerateTitle callback can refer to Localizations via its context
        // parameter.
        builder: (BuildContext context) {
          final String title = widget.onGenerateTitle(context);
          assert(title != null, 'onGenerateTitle must return a non-null String');
          return Title(
            title: title,
            color: widget.color,
            child: result,
          );
        },
      );
    } else {
      title = Title(
        title: widget.title,
        color: widget.color,
        child: result,
      );
    }

    final Locale appLocale = widget.locale != null
      ? _resolveLocales(<Locale>[widget.locale], widget.supportedLocales)
      : _locale;

    assert(_debugCheckLocalizations(appLocale));
    return Shortcuts(
      shortcuts: widget.shortcuts ?? WidgetsApp.defaultShortcuts,
      debugLabel: '<Default WidgetsApp Shortcuts>',
      child: Actions(
        actions: widget.actions ?? WidgetsApp.defaultActions,
        child: FocusTraversalGroup(
          policy: ReadingOrderTraversalPolicy(),
          child: _MediaQueryFromWindow(
            child: Localizations(
              locale: appLocale,
              delegates: _localizationsDelegates.toList(),
              child: title,
            ),
          ),
        ),
      ),
    );
  }
```

`build`方法一开始就判断了`_navigator`是否为空，如果不为空则创建一个`Navigator`控件。

那么`_navigator`到底为空吗？

在`initState`中调用了`_updateNavigator`方法：

```dart
  void _updateNavigator() {
    _navigator = widget.navigatorKey ?? GlobalObjectKey<NavigatorState>(this);
  }
```

看来`_navigator`是有值的。

那么就会执行：

```dart
      navigator = Navigator(
        key: _navigator,
        // If window.defaultRouteName isn't '/', we should assume it was set
        // intentionally via `setInitialRoute`, and should override whatever
        // is in [widget.initialRoute].
        initialRoute: WidgetsBinding.instance.window.defaultRouteName != Navigator.defaultRouteName
            ? WidgetsBinding.instance.window.defaultRouteName
            : widget.initialRoute ?? WidgetsBinding.instance.window.defaultRouteName,
        onGenerateRoute: _onGenerateRoute,
        onGenerateInitialRoutes: widget.onGenerateInitialRoutes == null
          ? Navigator.defaultGenerateInitialRoutes
          : (NavigatorState navigator, String initialRouteName) {
            return widget.onGenerateInitialRoutes(initialRouteName);
          },
        onUnknownRoute: _onUnknownRoute,
        observers: widget.navigatorObservers,
      );
```

在这里有一个函数参数`onGenerateRoute`，给它的赋值`_onGenerateRoute`实现为：

```dart
Route<dynamic> _onGenerateRoute(RouteSettings settings) {
    final String name = settings.name;
    final WidgetBuilder pageContentBuilder = name == Navigator.defaultRouteName && widget.home != null
        ? (BuildContext context) => widget.home
        : widget.routes[name];

    if (pageContentBuilder != null) {
      assert(widget.pageRouteBuilder != null,
        'The default onGenerateRoute handler for WidgetsApp must have a '
        'pageRouteBuilder set if the home or routes properties are set.');
      final Route<dynamic> route = widget.pageRouteBuilder<dynamic>(
        settings,
        pageContentBuilder,
      );
      assert(route != null,
        'The pageRouteBuilder for WidgetsApp must return a valid non-null Route.');
      return route;
    }
    if (widget.onGenerateRoute != null)
      return widget.onGenerateRoute(settings);
    return null;
  }
```

可以看到如果`name == Navigator.defaultRouteName && widget.home != null`成立，

返回`(BuildContext context) => widget.home`赋值给`pageContentBuilder`。

紧接着调用了`widget.pageRouteBuilder`，把得到的`pageContentBuilder`作为参数传入返回`route`。

那么这个`widget.pageRouteBuilder`是如何实现的？

看一下`MaterialApp`状态的`build`中有实现：

```dart
pageRouteBuilder: <T>(RouteSettings settings, WidgetBuilder builder) {
          return MaterialPageRoute<T>(settings: settings, builder: builder);
        }
```

可以看到我们最初的`home`属性经过一些列操作被包装到了`MaterialPageRoute`。

这个类熟悉吗？

我们跳转打开新页面时经常使用的那句：

```dart
Navigator.of(context)
                .push(MaterialPageRoute(builder: (_) => ScopedSecondPage()));
```

这`home`设置的页面和我们直接跳转是否有所不同，还不能直接下结论。

回过头还要继续往下看。



## Navigator

它对应的`NavigatorState`。

在`initState`有这样一段实现：

```dart
String initialRoute = widget.initialRoute;
    if (widget.pages.isNotEmpty) {
      _history.addAll(
        widget.pages.map((Page<dynamic> page) => _RouteEntry(
          page.createRoute(context),
          initialState: _RouteLifecycle.add,
        ))
      );
    } else {
      // If there is no page provided, we will need to provide default route
      // to initialize the navigator.
      initialRoute = initialRoute ?? Navigator.defaultRouteName;
    }
    if (initialRoute != null) {
      _history.addAll(
        widget.onGenerateInitialRoutes(
          this,
          widget.initialRoute ?? Navigator.defaultRouteName
        ).map((Route<dynamic> route) =>
          _RouteEntry(
            route,
            initialState: _RouteLifecycle.add,
          ),
        ),
      );
    }
```

`initialRoute`在`WidgetsApp`中已经赋值了，所以这里不会为null。

那么自然会执行`_history.addAll`，

首先`widget.onGenerateInitialRoutes`生成`List<Route>`，通过`map`转成`_RouteEntry`。

然后紧接着执行`_flushHistoryUpdates`方法，实现为：

```dart
void _flushHistoryUpdates({bool rearrangeOverlay = true}) {
    assert(_debugLocked && !_debugUpdatingPage);
    // Clean up the list, sending updates to the routes that changed. Notably,
    // we don't send the didChangePrevious/didChangeNext updates to those that
    // did not change at this point, because we're not yet sure exactly what the
    // routes will be at the end of the day (some might get disposed).
    int index = _history.length - 1;
    _RouteEntry next;
    _RouteEntry entry = _history[index];
    _RouteEntry previous = index > 0 ? _history[index - 1] : null;
    bool canRemoveOrAdd = false; // Whether there is a fully opaque route on top to silently remove or add route underneath.
    Route<dynamic> poppedRoute; // The route that should trigger didPopNext on the top active route.
    bool seenTopActiveRoute = false; // Whether we've seen the route that would get didPopNext.
    final List<_RouteEntry> toBeDisposed = <_RouteEntry>[];
    while (index >= 0) {
      switch (entry.currentState) {
        case _RouteLifecycle.add:
          assert(rearrangeOverlay);
          entry.handleAdd(
            navigator: this,
            previousPresent: _getRouteBefore(index - 1, _RouteEntry.isPresentPredicate)?.route,
          );
          assert(entry.currentState == _RouteLifecycle.adding);
          continue;
        case _RouteLifecycle.adding:
          if (canRemoveOrAdd || next == null) {
            entry.didAdd(
              navigator: this,
              isNewFirst: next == null
            );
            assert(entry.currentState == _RouteLifecycle.idle);
            continue;
          }
          break;
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
        case _RouteLifecycle.pushing: // Will exit this state when animation completes.
          if (!seenTopActiveRoute && poppedRoute != null)
            entry.handleDidPopNext(poppedRoute);
          seenTopActiveRoute = true;
          break;
        case _RouteLifecycle.idle:
          if (!seenTopActiveRoute && poppedRoute != null)
            entry.handleDidPopNext(poppedRoute);
          seenTopActiveRoute = true;
          // This route is idle, so we are allowed to remove subsequent (earlier)
          // routes that are waiting to be removed silently:
          canRemoveOrAdd = true;
          break;
        case _RouteLifecycle.pop:
          if (!seenTopActiveRoute) {
            if (poppedRoute != null)
              entry.handleDidPopNext(poppedRoute);
            poppedRoute = entry.route;
          }
          entry.handlePop(
            navigator: this,
            previousPresent: _getRouteBefore(index, _RouteEntry.willBePresentPredicate)?.route,
          );
          assert(entry.currentState == _RouteLifecycle.popping);
          canRemoveOrAdd = true;
          break;
        case _RouteLifecycle.popping:
          // Will exit this state when animation completes.
          break;
        case _RouteLifecycle.remove:
          if (!seenTopActiveRoute) {
            if (poppedRoute != null)
              entry.route.didPopNext(poppedRoute);
            poppedRoute = null;
          }
          entry.handleRemoval(
            navigator: this,
            previousPresent: _getRouteBefore(index, _RouteEntry.willBePresentPredicate)?.route,
          );
          assert(entry.currentState == _RouteLifecycle.removing);
          continue;
        case _RouteLifecycle.removing:
          if (!canRemoveOrAdd && next != null) {
            // We aren't allowed to remove this route yet.
            break;
          }
          entry.currentState = _RouteLifecycle.dispose;
          continue;
        case _RouteLifecycle.dispose:
          // Delay disposal until didChangeNext/didChangePrevious have been sent.
          toBeDisposed.add(_history.removeAt(index));
          entry = next;
          break;
        case _RouteLifecycle.disposed:
        case _RouteLifecycle.staging:
          assert(false);
          break;
      }
      index -= 1;
      next = entry;
      entry = previous;
      previous = index > 0 ? _history[index - 1] : null;
    }

    // Informs navigator observers about route changes.
    _flushObserverNotifications();

    // Now that the list is clean, send the didChangeNext/didChangePrevious
    // notifications.
    _flushRouteAnnouncement();

    // Announces route name changes.
    final _RouteEntry lastEntry = _history.lastWhere(_RouteEntry.isPresentPredicate, orElse: () => null);
    final String routeName = lastEntry?.route?.settings?.name;
    if (routeName != _lastAnnouncedRouteName) {
      RouteNotificationMessages.maybeNotifyRouteChange(routeName, _lastAnnouncedRouteName);
      _lastAnnouncedRouteName = routeName;
    }

    // Lastly, removes the overlay entries of all marked entries and disposes
    // them.
    for (final _RouteEntry entry in toBeDisposed) {
      for (final OverlayEntry overlayEntry in entry.route.overlayEntries)
        overlayEntry.remove();
      entry.dispose();
    }
    if (rearrangeOverlay)
      overlay?.rearrange(_allRouteOverlayEntries);
  }
```

这个方法就是根据`_RouteLifecycle`不同的生命周期状态执行不同的操作。

其中当我们执行到

`_RouteLifecycle.add`、

`_RouteLifecycle.push`、

`_RouteLifecycle.pushReplace`

`_RouteLifecycle.replace`这些操作时，会执行`route.install()`方法：

```dart
  @override
  void install() {
    assert(_overlayEntries.isEmpty);
    _overlayEntries.addAll(createOverlayEntries());
    super.install();
  }
```

其中`createOverlayEntries`执行时会创建`OverlayEntry`。

其中的参数`builder`赋值`_buildModalScope`，

这里最终会回调到`MaterialPageRoute(builder: (_) => ScopedSecondPage())`中的`builder`。

也就是说之前Page设置的Widget。现在被以`builder`函数形式存放到了**OverlayEntry**中。

其中`_overlayEntries`就是当前`route`的属性，以`overlayEntries`名称对外提供。

以上这些操作是在`initState`方法中进行的。

下面看看`build`方法：

```dart
@override
  Widget build(BuildContext context) {
    assert(!_debugLocked);
    assert(_history.isNotEmpty);
    // Hides the HeroControllerScope for the widget subtree so that the other
    // nested navigator underneath will not pick up the hero controller above
    // this level.
    return HeroControllerScope(
      child: Listener(
        onPointerDown: _handlePointerDown,
        onPointerUp: _handlePointerUpOrCancel,
        onPointerCancel: _handlePointerUpOrCancel,
        child: AbsorbPointer(
          absorbing: false, // it's mutated directly by _cancelActivePointers above
          child: FocusScope(
            node: focusScopeNode,
            autofocus: true,
            child: Overlay(
              key: _overlayKey,
              initialEntries: overlay == null ?  _allRouteOverlayEntries.toList(growable: false) : const <OverlayEntry>[],
            ),
          ),
        ),
      ),
    );
  }
```

可以看到终点是`Overlay`，通过`initialEntries`参数接收`_allRouteOverlayEntries`的值。

这里的`_allRouteOverlayEntries`就是从上面创建的`overlayEntries`集合：

```dart
  Iterable<OverlayEntry> get _allRouteOverlayEntries sync* {
    for (final _RouteEntry entry in _history)
      yield* entry.route.overlayEntries;
  }
```



## Overlay

那么`Overlay`接收到`overlayEntries`如何处理的呢？

在`OverlayState`中的`initState`里，把数据全部添加到了`List<OverlayEntry> _entries`。

```dart
 @override
  Widget build(BuildContext context) {
    // This list is filled backwards and then reversed below before
    // it is added to the tree.
    final List<Widget> children = <Widget>[];
    bool onstage = true;
    int onstageCount = 0;
    for (int i = _entries.length - 1; i >= 0; i -= 1) {
      final OverlayEntry entry = _entries[i];
      if (onstage) {
        onstageCount += 1;
        children.add(_OverlayEntryWidget(
          key: entry._key,
          entry: entry,
        ));
        if (entry.opaque)
          onstage = false;
      } else if (entry.maintainState) {
        children.add(_OverlayEntryWidget(
          key: entry._key,
          entry: entry,
          tickerEnabled: false,
        ));
      }
    }
    return _Theatre(
      skipCount: children.length - onstageCount,
      children: children.reversed.toList(growable: false),
    );
  }
```

在`build`中根据清情况遍历`_entries`，为每个`entry`外包裹一层`_OverlayEntryWidget`。

并将`children`添加到`_Theatre`中。

## _Theatre

`_Theatre`是一种特殊的`Stack`。

上面说了不管通过`home`属性设置还是通过`Navigator.of(context).push`都会调用`route.install`。

而上面用到的`_entries`是所有`route`的`List<OverLayEntry>`集合。

**由于`_Theatre`是一种`Stack`，**

**也就是说`home`也好`push`也罢，所有页面都以children方式被`_Theatre`管理。**

**所以所有页面是以兄弟形式存在，在Widget tree中它们是平级，**

**所以在HomePage设置了xxProvider后，其他页面是不能获取到的**