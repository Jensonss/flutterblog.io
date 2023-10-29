# put的存储流程

首先调用 **GetInstance()** 的**put** 方法：

```dart
S put<S>(S dependency,
          {String? tag,
          bool permanent = false,
          InstanceBuilderCallback<S>? builder}) =>
      GetInstance().put<S>(dependency, tag: tag, permanent: permanent);
```

进入这个方法发现先是插入数据，然后再查找返回：

```dart
  S put<S>(
    S dependency, {
    String? tag,
    bool permanent = false,
    @deprecated InstanceBuilderCallback<S>? builder,
  }) {
    _insert(
        isSingleton: true,
        name: tag,
        permanent: permanent,
        builder: builder ?? (() => dependency));
    return find<S>(tag: tag);
  }
```

所以我们使用某个共享对象时使用**Object obj = Get.put(Object())**。

继续分析，

调用 **_insert** 方法时根据**S**和**tag** 生成**key**然后存入到

**static final Map<String, _InstanceBuilderFactory> _singl = {}** 中：

```dart
  void _insert<S>({
    bool? isSingleton,
    String? name,
    bool permanent = false,
    required InstanceBuilderCallback<S> builder,
    bool fenix = false,
  }) {
    final key = _getKey(S, name);

    if (_singl.containsKey(key)) {
      final dep = _singl[key];
      if (dep != null && dep.isDirty) {
        _singl[key] = _InstanceBuilderFactory<S>(
          isSingleton,
          builder,
          permanent,
          false,
          fenix,
          name,
          lateRemove: dep as _InstanceBuilderFactory<S>,
        );
      }
    } else {
      _singl[key] = _InstanceBuilderFactory<S>(
        isSingleton,
        builder,
        permanent,
        false,
        fenix,
        name,
      );
    }
  }
```

然后分析**find**方法：

```dart
  S find<S>({String? tag}) {
    final key = _getKey(S, tag);
    if (isRegistered<S>(tag: tag)) {
      final dep = _singl[key];
      if (dep == null) {
        if (tag == null) {
          throw 'Class "$S" is not registered';
        } else {
          throw 'Class "$S" with tag "$tag" is not registered';
        }
      }
      final i = _initDependencies<S>(name: tag);
      return i ?? dep.getDependency() as S;
    } else {
      // ignore: lines_longer_than_80_chars
      throw '"$S" not found. You need to call "Get.put($S())" or "Get.lazyPut(()=>$S())"';
    }
  }
```

这个时候**isRegistered**是返回**true**的，所以会执行 **_initDependencies**方法：

```dart
  S? _initDependencies<S>({String? name}) {
    final key = _getKey(S, name);
    final isInit = _singl[key]!.isInit;
    S? i;
    if (!isInit) {
      i = _startController<S>(tag: name);
      if (_singl[key]!.isSingleton!) {
        _singl[key]!.isInit = true;
        if (Get.smartManagement != SmartManagement.onlyBuilder) {
          RouterReportManager.reportDependencyLinkedToRoute(_getKey(S, name));
        }
      }
    }
    return i;
  }
```

在 **_insert**方法中构建 **_InstanceBuilderFactory**时**isInit**是**false**。

所以这个会执行**if**。由于**Get.smartManagement**默认值是**full**：

```dart
SmartManagement smartManagement = SmartManagement.full;
```

所以会调用`RouterReportManager.reportDependencyLinkedToRoute(_getKey(S, name));`

看下这个方法实现：

```dart
  static void reportDependencyLinkedToRoute(String depedencyKey) {
    if (_current == null) return;
    if (_routesKey.containsKey(_current)) {
      _routesKey[_current!]!.add(depedencyKey);
    } else {
      _routesKey[_current] = <String>[depedencyKey];
    }
  }
```

这里 **_current**类型为`static Route? _current;`也就是当前页面对象，

**_routesKey**类型为`static final Map<Route?, List<String>> _routesKey = {};`,

这个 **_routesKey**存储的是当前页面所有调用**Get.put**时通过**S**和**tag**生成的**key**。

也就是说我通过 **_routesKey**根据当前页面能拿到所有**key**，

在**static final Map<String, _InstanceBuilderFactory> _singl = {}** 里**String**为**key**，**_InstanceBuilderFactory**中存储着我们创建的对象。

下面分析页面弹出时流程

# Get.back弹出流程

看下**back**方法：

```dart
  void back<T>({
    T? result,
    bool closeOverlays = false,
    bool canPop = true,
    int? id,
  }) {
    if (isSnackbarOpen && !closeOverlays) {
      closeCurrentSnackbar();
      return;
    }

    if (closeOverlays && isOverlaysOpen) {
      if (isSnackbarOpen) {
        closeAllSnackbars();
      }
      navigator?.popUntil((route) {
        return (!isDialogOpen! && !isBottomSheetOpen!);
      });
    }
    if (canPop) {
      if (global(id).currentState?.canPop() == true) {
        global(id).currentState?.pop<T>(result);
      }
    } else {
      global(id).currentState?.pop<T>(result);
    }
  }
```

可以看到最后主要调用**pop**方法，看下实现：

```dart
  void pop<T extends Object?>([ T? result ]) {
    final _RouteEntry entry = _history.lastWhere(_RouteEntry.isPresentPredicate);
    if (entry.hasPage) {
      if (widget.onPopPage!(entry.route, result) && entry.currentState == _RouteLifecycle.idle) {
        entry.currentState = _RouteLifecycle.pop;
      }
    } else {
      entry.pop<T>(result);
      assert (entry.currentState == _RouteLifecycle.pop);
    }
    if (entry.currentState == _RouteLifecycle.pop)
      _flushHistoryUpdates(rearrangeOverlay: false);
    _afterNavigation(entry.route);
  }
```

这里主要看`_flushHistoryUpdates`方法：

```dart
  void _flushHistoryUpdates({bool rearrangeOverlay = true}) {
    assert(_debugLocked && !_debugUpdatingPage);
    _flushingHistory = true;
    // Clean up the list, sending updates to the routes that changed. Notably,
    // we don't send the didChangePrevious/didChangeNext updates to those that
    // did not change at this point, because we're not yet sure exactly what the
    // routes will be at the end of the day (some might get disposed).
    int index = _history.length - 1;
    _RouteEntry? next;
    _RouteEntry? entry = _history[index];
    _RouteEntry? previous = index > 0 ? _history[index - 1] : null;
    bool canRemoveOrAdd = false; // Whether there is a fully opaque route on top to silently remove or add route underneath.
    Route<dynamic>? poppedRoute; // The route that should trigger didPopNext on the top active route.
    bool seenTopActiveRoute = false; // Whether we've seen the route that would get didPopNext.
    final List<_RouteEntry> toBeDisposed = <_RouteEntry>[];
    while (index >= 0) {
      switch (entry!.currentState) {
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
              isNewFirst: next == null,
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
          if (!entry.handlePop(
                navigator: this,
                previousPresent: _getRouteBefore(index, _RouteEntry.willBePresentPredicate)?.route)){
            assert(entry.currentState == _RouteLifecycle.idle);
            continue;
          }
          if (!seenTopActiveRoute) {
            if (poppedRoute != null)
              entry.handleDidPopNext(poppedRoute);
            poppedRoute = entry.route;
          }
          _observedRouteDeletions.add(
            _NavigatorPopObservation(entry.route, _getRouteBefore(index, _RouteEntry.willBePresentPredicate)?.route),
          );
          if (entry.currentState == _RouteLifecycle.dispose) {
            // The pop finished synchronously. This can happen if transition
            // duration is zero.
            continue;
          }
          assert(entry.currentState == _RouteLifecycle.popping);
          canRemoveOrAdd = true;
          break;
        case _RouteLifecycle.popping:
          // Will exit this state when animation completes.
          break;
        case _RouteLifecycle.complete:
          entry.handleComplete();
          assert(entry.currentState == _RouteLifecycle.remove);
          continue;
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

    // Announce route name changes.
    if (widget.reportsRouteUpdateToEngine) {
      final _RouteEntry? lastEntry = _history.cast<_RouteEntry?>().lastWhere(
        (_RouteEntry? e) => e != null && _RouteEntry.isPresentPredicate(e), orElse: () => null,
      );
      final String? routeName = lastEntry?.route.settings.name;
      if (routeName != null && routeName != _lastAnnouncedRouteName) {
        SystemNavigator.routeInformationUpdated(location: routeName);
        _lastAnnouncedRouteName = routeName;
      }
    }

    // Lastly, removes the overlay entries of all marked entries and disposes
    // them.
    for (final _RouteEntry entry in toBeDisposed) {
      for (final OverlayEntry overlayEntry in entry.route.overlayEntries)
        overlayEntry.remove();
      entry.dispose();
    }
    if (rearrangeOverlay) {
      overlay?.rearrange(_allRouteOverlayEntries);
    }
    if (bucket != null) {
      _serializableHistory.update(_history);
    }
    _flushingHistory = false;
  }
```

这个方法看着代码很多，但其实**switch**那一大段代码都是对不同操作的的处理比如**pop**。

注意最后这一块：

```dart
// Lastly, removes the overlay entries of all marked entries and disposes
    // them.
    for (final _RouteEntry entry in toBeDisposed) {
      for (final OverlayEntry overlayEntry in entry.route.overlayEntries)
        overlayEntry.remove();
      entry.dispose();
    }
```

**entry**的**dispose**回调页面**route**的**dispose**方法：

```dart
  void dispose() {
    assert(currentState.index < _RouteLifecycle.disposed.index);
    currentState = _RouteLifecycle.disposed;

    final Iterable<OverlayEntry> mountedEntries = route.overlayEntries.where((OverlayEntry e) => e.mounted);

    if (mountedEntries.isEmpty) {
      route.dispose();
    } else {
      int mounted = mountedEntries.length;
      assert(mounted > 0);
      for (final OverlayEntry entry in mountedEntries) {
        late VoidCallback listener;
        listener = () {
          assert(mounted > 0);
          assert(!entry.mounted);
          mounted--;
          entry.removeListener(listener);
          if (mounted == 0) {
            assert(route.overlayEntries.every((OverlayEntry e) => !e.mounted));
            route.dispose();
          }
        };
        entry.addListener(listener);
      }
    }
  }
```

使用**Get**路由导航的页面都是使用了**GetPageRoute**,

查看**dispose**中调用了`RouterReportManager.reportRouteDispose(this)`:

```dart
  static void reportRouteDispose(Route disposed) {
    if (Get.smartManagement != SmartManagement.onlyBuilder) {
      ambiguate(WidgetsBinding.instance)?.addPostFrameCallback((_) {
        _removeDependencyByRoute(disposed);
      });
    }
  }
```

看下 **_removeDependencyByRoute**实现：

```dart
  static void _removeDependencyByRoute(Route routeName) {
    final keysToRemove = <String>[];

    _routesKey[routeName]?.forEach(keysToRemove.add);

    /// Removes `Get.create()` instances registered in `routeName`.
    if (_routesByCreate.containsKey(routeName)) {
      for (final onClose in _routesByCreate[routeName]!) {
        // assure the [DisposableInterface] instance holding a reference
        // to onClose() wasn't disposed.
        onClose();
      }
      _routesByCreate[routeName]!.clear();
      _routesByCreate.remove(routeName);
    }

    for (final element in keysToRemove) {
      final value = GetInstance().delete(key: element);
      if (value) {
        _routesKey[routeName]?.remove(element);
      }
    }

    keysToRemove.clear();
  }
```

这个方法释放了当前页面产生的一些资源，

`_routesKey[routeName]`在put流程有提到，

根据**routeName**作为**key**，可以拿到所有的`Get.find`所需要的**key**集合。

最后遍历的时候执行了`GetInstance().delete(key: element);`进行清理操作：

```dart
  bool delete<S>({String? tag, String? key, bool force = false}) {
    final newKey = key ?? _getKey(S, tag);

    if (!_singl.containsKey(newKey)) {
      Get.log('Instance "$newKey" already removed.', isError: true);
      return false;
    }

    final dep = _singl[newKey];

    if (dep == null) return false;

    final _InstanceBuilderFactory builder;
    if (dep.isDirty) {
      builder = dep.lateRemove ?? dep;
    } else {
      builder = dep;
    }

    if (builder.permanent && !force) {
      Get.log(
        // ignore: lines_longer_than_80_chars
        '"$newKey" has been marked as permanent, SmartManagement is not authorized to delete it.',
        isError: true,
      );
      return false;
    }
    final i = builder.dependency;

    if (i is GetxServiceMixin && !force) {
      return false;
    }

    if (i is GetLifeCycleBase) {
      i.onDelete();
      Get.log('"$newKey" onDelete() called');
    }

    if (builder.fenix) {
      builder.dependency = null;
      builder.isInit = false;
      return true;
    } else {
      if (dep.lateRemove != null) {
        dep.lateRemove = null;
        Get.log('"$newKey" deleted from memory');
        return false;
      } else {
        _singl.remove(newKey);
        if (_singl.containsKey(newKey)) {
          Get.log('Error removing object "$newKey"', isError: true);
        } else {
          Get.log('"$newKey" deleted from memory');
        }
        return true;
      }
    }
  }
```

最后可以发现调用了`_singl.remove(newKey);`移除了通过**put**方法存储的对象。

总结一下流程就是：

**S**和**tag**生成了**key**，Map类型变量 **_singl**根据**key**存储了**S**实例的封装。

Map类型变量 **_routesKey**根据当前页面route存储了**key**列表。

因为一个页面可能使用多个业务实例(GetController)。

当页面弹出时，清空 **_singl**和 **_routesKey_**。