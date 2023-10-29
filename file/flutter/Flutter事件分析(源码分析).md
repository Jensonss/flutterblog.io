Flutter事件主要分为两大块。

一是事件发生时在触摸范围内收集所有符合条件的Widget，这一流程叫**hitTest**。

二是对收集的所有Widget进行事件分发，这一流程叫**dispatchEvent**。

# hitTest

首先**RendererBinding**调用`hitTest`：

```dart
  @override
  void hitTest(HitTestResult result, Offset position) {
    renderView.hitTest(result, position: position);
    super.hitTest(result, position);
  }
```

进入**renderView**的`hittest`：

```dart
  bool hitTest(HitTestResult result, { required Offset position }) {
    if (child != null) {
      child!.hitTest(BoxHitTestResult.wrap(result), position: position);
    }
    result.add(HitTestEntry(this));
    return true;
  }
```

看到这里调用了子**RenderObject**的`hitTest`方法，然后把自己封装加入到了**HitTestResult**。

查看**RenderObject**的`hittest`：

```dart
  bool hitTest(BoxHitTestResult result, { required Offset position }) {
    if (_size!.contains(position)) {
      if (hitTestChildren(result, position: position) || hitTestSelf(position)) {
        result.add(BoxHitTestEntry(this, position));
        return true;
      }
    }
    return false;
  }
```

判断如果触摸点位包含在**RenderObject**大小内，就进行所有子**RenderObject**的`hitTest`

这里`hitTestChildren`为空方法，实际调用内容在`defaultHitTestChildren`：

```dart
  bool defaultHitTestChildren(BoxHitTestResult result, { required Offset position }) {
    ChildType? child = lastChild;
    while (child != null) {
      // The x, y parameters have the top left of the node's box as the origin.
      final ParentDataType childParentData = child.parentData! as ParentDataType;
      final bool isHit = result.addWithPaintOffset(
        offset: childParentData.offset,
        position: position,
        hitTest: (BoxHitTestResult result, Offset transformed) {
          assert(transformed == position - childParentData.offset);
          return child!.hitTest(result, position: transformed);
        },
      );
      if (isHit) {
        return true;
      }
      child = childParentData.previousSibling;
    }
    return false;
  }
```

---

这里的逻辑很简单，就是从最后一个child开始判断，只要有一个符合就退出循环。

为什么会有这种操作，估计是包含多个情况下，要么兄弟Widget之间位置不同，要么像**Stack**这种有重叠，但是实际看到的只有最后面的那个Widget。所以为了节省时间只取一个符合条件的。现在看来是没毛病的。

返回上面的**hittest**看一下`

```dart
  if (hitTestChildren(result, position: position) || hitTestSelf(position)) {`
```

如果子RenderObject有符合条件德尔或者设置了**hitTestSelf返回true**，那么父RenderObject本身也会加入到**result**。

这就形成了一条顺序链`HitTestResult._path`。

hitTest采取深度优先原则符合条件的封装加入到**HitTestResult**

越深的越排序靠前，遍历时最先取出。

# dispatchEvent

**GestureBinding**调用`dispatchEvent`

```dart
  void dispatchEvent(PointerEvent event, HitTestResult? hitTestResult) {
    for (final HitTestEntry entry in hitTestResult.path) {
      try {
        entry.target.handleEvent(event.transformed(entry.transform), entry);
      } catch (exception, stack) {
        FlutterError.reportError(FlutterErrorDetailsForPointerEventDispatcher(
          exception: exception,
          stack: stack,
          library: 'gesture library',
          context: ErrorDescription('while dispatching a pointer event'),
          event: event,
          hitTestEntry: entry,
          informationCollector: () => <DiagnosticsNode>[
            DiagnosticsProperty<PointerEvent>('Event', event, style: DiagnosticsTreeStyle.errorProperty),
            DiagnosticsProperty<HitTestTarget>('Target', entry.target, style: DiagnosticsTreeStyle.errorProperty),
          ],
        ));
      }
    }
  }
```

遍历`hitTestResult`调用`handleEvent`处理事件，

这里的**target**是**RenderObject**子类**RenderPointerListener**：

```dart
  @override
  void handleEvent(PointerEvent event, HitTestEntry entry) {
    assert(debugHandleEvent(event, entry));
    if (event is PointerDownEvent) {
      return onPointerDown?.call(event);
    }
    if (event is PointerMoveEvent) {
      return onPointerMove?.call(event);
    }
    if (event is PointerUpEvent) {
      return onPointerUp?.call(event);
    }
    if (event is PointerHoverEvent) {
      return onPointerHover?.call(event);
    }
    if (event is PointerCancelEvent) {
      return onPointerCancel?.call(event);
    }
    if (event is PointerPanZoomStartEvent) {
      return onPointerPanZoomStart?.call(event);
    }
    if (event is PointerPanZoomUpdateEvent) {
      return onPointerPanZoomUpdate?.call(event);
    }
    if (event is PointerPanZoomEndEvent) {
      return onPointerPanZoomEnd?.call(event);
    }
    if (event is PointerSignalEvent) {
      return onPointerSignal?.call(event);
    }
  }
```

这里所有**onPointerxxx**变量都是从构造函数传过来的。

创建RenderObject对象是由Widget调用的，比如**Listener**：

```dart
  @override
  RenderPointerListener createRenderObject(BuildContext context) {
    return RenderPointerListener(
      onPointerDown: onPointerDown,
      onPointerMove: onPointerMove,
      onPointerUp: onPointerUp,
      onPointerHover: onPointerHover,
      onPointerCancel: onPointerCancel,
      onPointerPanZoomStart: onPointerPanZoomStart,
      onPointerPanZoomUpdate: onPointerPanZoomUpdate,
      onPointerPanZoomEnd: onPointerPanZoomEnd,
      onPointerSignal: onPointerSignal,
      behavior: behavior,
    );
  }
```

所以这里就是调用从**Listener**传递过来的事件进行响应。

## listener测试

嵌套一个Listener进行事件测试：

```dart
  Listener buildListener() {
    return Listener(
      onPointerUp: (event) {
        print('父 onPointerUp');
      },
      onPointerDown: (event) {
        print('父 onPointerDown');
      },
      child: Listener(
        onPointerUp: (event) {
          print('子 onPointerUp');
        },
        onPointerDown: (event) {
          print('子 onPointerDown');
        },
        child: const Text(
          'Listener测试',
        ),
      ),
    );
  }
```

```
2023-09-14 11:12:10.681 11012-11040 flutter                 com.example.untitled                 I  子 onPointerDown
2023-09-14 11:12:10.681 11012-11040 flutter                 com.example.untitled                 I  父 onPointerDown
2023-09-14 11:12:10.743 11012-11040 flutter                 com.example.untitled                 I  子 onPointerUp
2023-09-14 11:12:10.743 11012-11040 flutter                 com.example.untitled                 I  父 onPointerUp
```

可以看到先调用了子Widget再调用了父Widget，这符合**hittest**中的深度优先。

## 手势竞技

基本流程完了，但是好像还没有看到手势竞技代码。

手势竞技需要在有手势分析处理的Widget才有，比如**GestureDetector**：

```dart
  Widget build(BuildContext context) {
    final Map<Type, GestureRecognizerFactory> gestures = <Type, GestureRecognizerFactory>{};
    final DeviceGestureSettings? gestureSettings = MediaQuery.maybeGestureSettingsOf(context);

    if (onTapDown != null ||
        onTapUp != null ||
        onTap != null ||
        onTapCancel != null ||
        onSecondaryTap != null ||
        onSecondaryTapDown != null ||
        onSecondaryTapUp != null ||
        onSecondaryTapCancel != null||
        onTertiaryTapDown != null ||
        onTertiaryTapUp != null ||
        onTertiaryTapCancel != null
    ) {
      gestures[TapGestureRecognizer] = GestureRecognizerFactoryWithHandlers<TapGestureRecognizer>(
        () => TapGestureRecognizer(debugOwner: this, supportedDevices: supportedDevices),
        (TapGestureRecognizer instance) {
          instance
            ..onTapDown = onTapDown
            ..onTapUp = onTapUp
            ..onTap = onTap
            ..onTapCancel = onTapCancel
            ..onSecondaryTap = onSecondaryTap
            ..onSecondaryTapDown = onSecondaryTapDown
            ..onSecondaryTapUp = onSecondaryTapUp
            ..onSecondaryTapCancel = onSecondaryTapCancel
            ..onTertiaryTapDown = onTertiaryTapDown
            ..onTertiaryTapUp = onTertiaryTapUp
            ..onTertiaryTapCancel = onTertiaryTapCancel
            ..gestureSettings = gestureSettings
            ..supportedDevices = supportedDevices;
        },
      );
    }

    if (onDoubleTap != null ||
        onDoubleTapDown != null ||
        onDoubleTapCancel != null) {
      gestures[DoubleTapGestureRecognizer] = GestureRecognizerFactoryWithHandlers<DoubleTapGestureRecognizer>(
        () => DoubleTapGestureRecognizer(debugOwner: this, supportedDevices: supportedDevices),
        (DoubleTapGestureRecognizer instance) {
          instance
            ..onDoubleTapDown = onDoubleTapDown
            ..onDoubleTap = onDoubleTap
            ..onDoubleTapCancel = onDoubleTapCancel
            ..gestureSettings = gestureSettings
            ..supportedDevices = supportedDevices;
        },
      );
    }

    if (onLongPressDown != null ||
        onLongPressCancel != null ||
        onLongPress != null ||
        onLongPressStart != null ||
        onLongPressMoveUpdate != null ||
        onLongPressUp != null ||
        onLongPressEnd != null ||
        onSecondaryLongPressDown != null ||
        onSecondaryLongPressCancel != null ||
        onSecondaryLongPress != null ||
        onSecondaryLongPressStart != null ||
        onSecondaryLongPressMoveUpdate != null ||
        onSecondaryLongPressUp != null ||
        onSecondaryLongPressEnd != null ||
        onTertiaryLongPressDown != null ||
        onTertiaryLongPressCancel != null ||
        onTertiaryLongPress != null ||
        onTertiaryLongPressStart != null ||
        onTertiaryLongPressMoveUpdate != null ||
        onTertiaryLongPressUp != null ||
        onTertiaryLongPressEnd != null) {
      gestures[LongPressGestureRecognizer] = GestureRecognizerFactoryWithHandlers<LongPressGestureRecognizer>(
        () => LongPressGestureRecognizer(debugOwner: this, supportedDevices: supportedDevices),
        (LongPressGestureRecognizer instance) {
          instance
            ..onLongPressDown = onLongPressDown
            ..onLongPressCancel = onLongPressCancel
            ..onLongPress = onLongPress
            ..onLongPressStart = onLongPressStart
            ..onLongPressMoveUpdate = onLongPressMoveUpdate
            ..onLongPressUp = onLongPressUp
            ..onLongPressEnd = onLongPressEnd
            ..onSecondaryLongPressDown = onSecondaryLongPressDown
            ..onSecondaryLongPressCancel = onSecondaryLongPressCancel
            ..onSecondaryLongPress = onSecondaryLongPress
            ..onSecondaryLongPressStart = onSecondaryLongPressStart
            ..onSecondaryLongPressMoveUpdate = onSecondaryLongPressMoveUpdate
            ..onSecondaryLongPressUp = onSecondaryLongPressUp
            ..onSecondaryLongPressEnd = onSecondaryLongPressEnd
            ..onTertiaryLongPressDown = onTertiaryLongPressDown
            ..onTertiaryLongPressCancel = onTertiaryLongPressCancel
            ..onTertiaryLongPress = onTertiaryLongPress
            ..onTertiaryLongPressStart = onTertiaryLongPressStart
            ..onTertiaryLongPressMoveUpdate = onTertiaryLongPressMoveUpdate
            ..onTertiaryLongPressUp = onTertiaryLongPressUp
            ..onTertiaryLongPressEnd = onTertiaryLongPressEnd
            ..gestureSettings = gestureSettings
            ..supportedDevices = supportedDevices;
        },
      );
    }

    if (onVerticalDragDown != null ||
        onVerticalDragStart != null ||
        onVerticalDragUpdate != null ||
        onVerticalDragEnd != null ||
        onVerticalDragCancel != null) {
      gestures[VerticalDragGestureRecognizer] = GestureRecognizerFactoryWithHandlers<VerticalDragGestureRecognizer>(
        () => VerticalDragGestureRecognizer(debugOwner: this, supportedDevices: supportedDevices),
        (VerticalDragGestureRecognizer instance) {
          instance
            ..onDown = onVerticalDragDown
            ..onStart = onVerticalDragStart
            ..onUpdate = onVerticalDragUpdate
            ..onEnd = onVerticalDragEnd
            ..onCancel = onVerticalDragCancel
            ..dragStartBehavior = dragStartBehavior
            ..gestureSettings = gestureSettings
            ..supportedDevices = supportedDevices;
        },
      );
    }

    if (onHorizontalDragDown != null ||
        onHorizontalDragStart != null ||
        onHorizontalDragUpdate != null ||
        onHorizontalDragEnd != null ||
        onHorizontalDragCancel != null) {
      gestures[HorizontalDragGestureRecognizer] = GestureRecognizerFactoryWithHandlers<HorizontalDragGestureRecognizer>(
        () => HorizontalDragGestureRecognizer(debugOwner: this, supportedDevices: supportedDevices),
        (HorizontalDragGestureRecognizer instance) {
          instance
            ..onDown = onHorizontalDragDown
            ..onStart = onHorizontalDragStart
            ..onUpdate = onHorizontalDragUpdate
            ..onEnd = onHorizontalDragEnd
            ..onCancel = onHorizontalDragCancel
            ..dragStartBehavior = dragStartBehavior
            ..gestureSettings = gestureSettings
            ..supportedDevices = supportedDevices;
        },
      );
    }

    if (onPanDown != null ||
        onPanStart != null ||
        onPanUpdate != null ||
        onPanEnd != null ||
        onPanCancel != null) {
      gestures[PanGestureRecognizer] = GestureRecognizerFactoryWithHandlers<PanGestureRecognizer>(
        () => PanGestureRecognizer(debugOwner: this, supportedDevices: supportedDevices),
        (PanGestureRecognizer instance) {
          instance
            ..onDown = onPanDown
            ..onStart = onPanStart
            ..onUpdate = onPanUpdate
            ..onEnd = onPanEnd
            ..onCancel = onPanCancel
            ..dragStartBehavior = dragStartBehavior
            ..gestureSettings = gestureSettings
            ..supportedDevices = supportedDevices;
        },
      );
    }

    if (onScaleStart != null || onScaleUpdate != null || onScaleEnd != null) {
      gestures[ScaleGestureRecognizer] = GestureRecognizerFactoryWithHandlers<ScaleGestureRecognizer>(
        () => ScaleGestureRecognizer(debugOwner: this, supportedDevices: supportedDevices),
        (ScaleGestureRecognizer instance) {
          instance
            ..onStart = onScaleStart
            ..onUpdate = onScaleUpdate
            ..onEnd = onScaleEnd
            ..dragStartBehavior = dragStartBehavior
            ..gestureSettings = gestureSettings
            ..trackpadScrollCausesScale = trackpadScrollCausesScale
            ..trackpadScrollToScaleFactor = trackpadScrollToScaleFactor
            ..supportedDevices = supportedDevices;
        },
      );
    }

    if (onForcePressStart != null ||
        onForcePressPeak != null ||
        onForcePressUpdate != null ||
        onForcePressEnd != null) {
      gestures[ForcePressGestureRecognizer] = GestureRecognizerFactoryWithHandlers<ForcePressGestureRecognizer>(
        () => ForcePressGestureRecognizer(debugOwner: this, supportedDevices: supportedDevices),
        (ForcePressGestureRecognizer instance) {
          instance
            ..onStart = onForcePressStart
            ..onPeak = onForcePressPeak
            ..onUpdate = onForcePressUpdate
            ..onEnd = onForcePressEnd
            ..gestureSettings = gestureSettings
            ..supportedDevices = supportedDevices;
        },
      );
    }

    return RawGestureDetector(
      gestures: gestures,
      behavior: behavior,
      excludeFromSemantics: excludeFromSemantics,
      child: child,
    );
  }
```

s上面代码尝试把几种手势识别如**TapGestureRecognizer**存到**gestures**，传给**RawGestureDetector**，这是一个**StatefulWidget**，查看它的State **RawGestureDetectorState**

```dart
  @override
  void initState() {
    super.initState();
    _semantics = widget.semantics ?? _DefaultSemanticsGestureDelegate(this);
    _syncAll(widget.gestures);
  }
  
    void _syncAll(Map<Type, GestureRecognizerFactory> gestures) {
    assert(_recognizers != null);
    final Map<Type, GestureRecognizer> oldRecognizers = _recognizers!;
    _recognizers = <Type, GestureRecognizer>{};
    for (final Type type in gestures.keys) {
      assert(gestures[type] != null);
      assert(gestures[type]!._debugAssertTypeMatches(type));
      assert(!_recognizers!.containsKey(type));
      _recognizers![type] = oldRecognizers[type] ?? gestures[type]!.constructor();
      assert(_recognizers![type].runtimeType == type, 'GestureRecognizerFactory of type $type created a GestureRecognizer of type ${_recognizers![type].runtimeType}. The GestureRecognizerFactory must be specialized with the type of the class that it returns from its constructor method.');
      gestures[type]!.initializer(_recognizers![type]!);
    }
    for (final Type type in oldRecognizers.keys) {
      if (!_recognizers!.containsKey(type)) {
        oldRecognizers[type]!.dispose();
      }
    }
  }
```

这里的 **_syncAll**把**gestures**转存到了 **_recognizers**。

查看**build**：

```dart
  @override
  Widget build(BuildContext context) {
    Widget result = Listener(
      onPointerDown: _handlePointerDown,
      onPointerPanZoomStart: _handlePointerPanZoomStart,
      behavior: widget.behavior ?? _defaultBehavior,
      child: widget.child,
    );
    if (!widget.excludeFromSemantics) {
      result = _GestureSemantics(
        behavior: widget.behavior ?? _defaultBehavior,
        assignSemantics: _updateSemanticsForRenderObject,
        child: result,
      );
    }
    return result;
  }
```

这里同样调用了**Listener**控件，看看 **_handlePointerDown**：

```dart
  void _handlePointerDown(PointerDownEvent event) {
    assert(_recognizers != null);
    for (final GestureRecognizer recognizer in _recognizers!.values) {
      recognizer.addPointer(event);
    }
  }
```

把事件添加到对应的**recognizer**，如果只设置了**onTap**事件，那么这里的**recognizer**就是**TapGestureRecognizer**。

```dart
  void addPointer(PointerDownEvent event) {
    _pointerToKind[event.pointer] = event.kind;
    if (isPointerAllowed(event)) {
      addAllowedPointer(event);
    } else {
      handleNonAllowedPointer(event);
    }
  }
```

这里的**addAllowedPointer**实现在**BaseTapGestureRecognizer**：

```dart
  @override
  void addAllowedPointer(PointerDownEvent event) {
    if (state == GestureRecognizerState.ready) {
      // If there is no result in the previous gesture arena,
      // we ignore them and prepare to accept a new pointer.
      if (_down != null && _up != null) {
        assert(_down!.pointer == _up!.pointer);
        _reset();
      }

      assert(_down == null && _up == null);
      // `_down` must be assigned in this method instead of `handlePrimaryPointer`,
      // because `acceptGesture` might be called before `handlePrimaryPointer`,
      // which relies on `_down` to call `handleTapDown`.
      _down = event;
    }
    if (_down != null) {
      // This happens when this tap gesture has been rejected while the pointer
      // is down (i.e. due to movement), when another allowed pointer is added,
      // in which case all pointers are ignored. The `_down` being null
      // means that _reset() has been called, since it is always set at the
      // first allowed down event and will not be cleared except for reset(),
      super.addAllowedPointer(event);
    }
  }
```

经过连续调用到了**OneSequenceGestureRecognizer**的**startTrackingPointer**：

```dart
  @protected
  void startTrackingPointer(int pointer, [Matrix4? transform]) {
    GestureBinding.instance.pointerRouter.addRoute(pointer, handleEvent, transform);
    _trackedPointers.add(pointer);
    // TODO(goderbauer): Enable assert after recognizers properly clean up their defunct `_entries`, see https://github.com/flutter/flutter/issues/117356.
    // assert(!_entries.containsKey(pointer));
    _entries[pointer] = _addPointerToArena(pointer);
  }
```

这里就做了两件事：

`GestureBinding.instance.pointerRouter.addRoute(pointer, handleEvent, transform);`加入到**pointerRouter**的 **_routeMap**。

`GestureBinding.instance.gestureArena.add(pointer, this);`加入到**GestureArenaManager**的 **_arenas**。

## GestureBinding

上面把事件加入到那两个Map里就完事了，但是竞技还没开始，

回到最开始的**RenderBinding**的**hittest**：

```dart
  @override
  void hitTest(HitTestResult result, Offset position) {
    renderView.hitTest(result, position: position);
    super.hitTest(result, position);
  }
```

这里的**super.hitTest**就是**GestureBinding**：

```dart
    result.add(HitTestEntry(this));
```

**GestureBinding**把自己加入到了最后，那么看看它的**handleEvent**：

```dart
  @override // from HitTestTarget
  void handleEvent(PointerEvent event, HitTestEntry entry) {
    pointerRouter.route(event);
    if (event is PointerDownEvent || event is PointerPanZoomStartEvent) {
      gestureArena.close(event.pointer);
    } else if (event is PointerUpEvent || event is PointerPanZoomEndEvent) {
      gestureArena.sweep(event.pointer);
    } else if (event is PointerSignalEvent) {
      pointerSignalResolver.resolve(event);
    }
  }
```

## PointerDownEvent

如果是**PointerDownEvent**，看下**close**方法：

```dart
  void close(int pointer) {
    final _GestureArena? state = _arenas[pointer];
    if (state == null) {
      return; // This arena either never existed or has been resolved.
    }
    state.isOpen = false;
    assert(_debugLogDiagnostic(pointer, 'Closing', state));
    _tryToResolveArena(pointer, state);
  }
```

如果像Listener测试里只使用Listener控件时，没有涉及手势和竞技场添加，所以这里**state==null**，不会继续执行的。

相反如果使用**GestureDetector**涉及了手势，会执行 **_tryToResolveArena**：

```dart
  void _tryToResolveArena(int pointer, _GestureArena state) {
    assert(_arenas[pointer] == state);
    assert(!state.isOpen);
    if (state.members.length == 1) {
      scheduleMicrotask(() => _resolveByDefault(pointer, state));
    } else if (state.members.isEmpty) {
      _arenas.remove(pointer);
      assert(_debugLogDiagnostic(pointer, 'Arena empty.'));
    } else if (state.eagerWinner != null) {
      assert(_debugLogDiagnostic(pointer, 'Eager winner: ${state.eagerWinner}'));
      _resolveInFavorOf(pointer, state, state.eagerWinner!);
    }
  }
```

如果是**PointerDownEvent**且竞技场成员只有一个，那么胜出者就是它，否则胜出者是**eagerWinner**。

## PointerUpEvent

看下**sweep**方法：

```dart
  void sweep(int pointer) {
    final _GestureArena? state = _arenas[pointer];
    if (state == null) {
      return; // This arena either never existed or has been resolved.
    }
    assert(!state.isOpen);
    if (state.isHeld) {
      state.hasPendingSweep = true;
      assert(_debugLogDiagnostic(pointer, 'Delaying sweep', state));
      return; // This arena is being held for a long-lived member.
    }
    assert(_debugLogDiagnostic(pointer, 'Sweeping', state));
    _arenas.remove(pointer);
    if (state.members.isNotEmpty) {
      // First member wins.
      assert(_debugLogDiagnostic(pointer, 'Winner: ${state.members.first}'));
      state.members.first.acceptGesture(pointer);
      // Give all the other members the bad news.
      for (int i = 1; i < state.members.length; i++) {
        state.members[i].rejectGesture(pointer);
      }
    }
  }
```

触摸抬起时，成员不为空，强制第一个成员接收事件。

也就是说如果**GestureDetector**嵌套了，那么只会调用最深层的**GestureDetector**相关事件，比如**onTapUp**。