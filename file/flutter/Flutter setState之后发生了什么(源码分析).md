# setState

**setState**代码很简单，就是执行了传入的函数及**markNeedsBuild**：

```dart
  void setState(VoidCallback fn) {
    final Object? result = fn() as dynamic;
    _element!.markNeedsBuild();
  }
```

**markNeedsBuild**是标记重建。

# markNeedsBuild

```dart
  void markNeedsBuild() {
    if (_lifecycleState != _ElementLifecycle.active) {
      return;
    }
    if (dirty) {
      return;
    }
    _dirty = true;
    owner!.scheduleBuildFor(this);
  }
```

**markNeedsBuild**关键代码就2行，设置当前**Element**为 **dirty**，

然后调用**scheduleBuildFor**传入当前**Element**对象。

# owner!.scheduleBuildFor

```dart
  void scheduleBuildFor(Element element) {
    if (element._inDirtyList) {
      _dirtyElementsNeedsResorting = true;
      return;
    }
    if (!_scheduledFlushDirtyElements && onBuildScheduled != null) {
      _scheduledFlushDirtyElements = true;
      onBuildScheduled!();
    }
    _dirtyElements.add(element);
    element._inDirtyList = true;
  }
```

该方法把传入的**Element**对象加入到集合 **_dirtyElements**。

然后呢？

往上看**onBuildScheduled**。

# onBuildScheduled

这个函数是在**WidgetsBinding**初始化时回调的函数**initInstances**中传入的：

```dart
    _buildOwner = BuildOwner();
    buildOwner!.onBuildScheduled = _handleBuildScheduled;
```

调用**onBuildScheduled**就是调用 **_handleBuildScheduled**：

```dart
  void _handleBuildScheduled() {
    ensureVisualUpdate();
  }
```

# ensureVisualUpdate

该函数是注册**Vsync**信号的监听。

```dart
  void ensureVisualUpdate() {
    switch (schedulerPhase) {
      case SchedulerPhase.idle:
      case SchedulerPhase.postFrameCallbacks:
        scheduleFrame();
        return;
      case SchedulerPhase.transientCallbacks:
      case SchedulerPhase.midFrameMicrotasks:
      case SchedulerPhase.persistentCallbacks:
        return;
    }
  }
```

默认情况下**schedulerPhase**状态是**idle**，

所以会执行**scheduleFrame**。

# scheduleFrame

```dart
  void scheduleFrame() {
    if (_hasScheduledFrame || !framesEnabled) {
      return;
    }
    ensureFrameCallbacksRegistered();
    platformDispatcher.scheduleFrame();
    _hasScheduledFrame = true;
  }
```

**ensureFrameCallbacksRegistered**注册监听回调：

```dart
  void ensureFrameCallbacksRegistered() {
    platformDispatcher.onBeginFrame ??= _handleBeginFrame;
    platformDispatcher.onDrawFrame ??= _handleDrawFrame;
  }
```

当上一节的**Vsync**信号到来时会先后调用 **_handleBeginFrame**和 **_handleDrawFrame**。

**Element**重建绘制在 **_handleDrawFrame**中，里面直接调用了**handleDrawFrame**

# handleDrawFrame

```dart
  void handleDrawFrame() {
    _frameTimelineTask?.finish(); // end the "Animate" phase
    try {
      // PERSISTENT FRAME CALLBACKS
      _schedulerPhase = SchedulerPhase.persistentCallbacks;
      for (final FrameCallback callback in _persistentCallbacks) {
        _invokeFrameCallback(callback, _currentFrameTimeStamp!);
      }

      // POST-FRAME CALLBACKS
      _schedulerPhase = SchedulerPhase.postFrameCallbacks;
      final List<FrameCallback> localPostFrameCallbacks =
          List<FrameCallback>.of(_postFrameCallbacks);
      _postFrameCallbacks.clear();
      for (final FrameCallback callback in localPostFrameCallbacks) {
        _invokeFrameCallback(callback, _currentFrameTimeStamp!);
      }
    } finally {
      _schedulerPhase = SchedulerPhase.idle;
      _frameTimelineTask?.finish(); // end the Frame
      _currentFrameTimeStamp = null;
    }
  }
```

这里主要调用了永久性回调 **_persistentCallbacks**和一次性回调 **_postFrameCallbacks**。

期中三棵树的更新在永久性回调 **_persistentCallbacks**中。

**_persistentCallbacks**是通过**addPersistentFrameCallback**添加的。

那么**addPersistentFrameCallback**在什么时候调用的呢？

在**RendererBinding**初始化回调**initInstances**调用的：

```dart
    addPersistentFrameCallback(_handlePersistentFrameCallback);
```

**_handlePersistentFrameCallback**函数：

```dart
  void _handlePersistentFrameCallback(Duration timeStamp) {
    drawFrame();
    _scheduleMouseTrackerUpdate();
  }
```

# drawFrame

**WidgetsBinding**重写了**RendererBinding**的方法：

```dart
  void drawFrame() {
    TimingsCallback? firstFrameCallback;
    if (_needToReportFirstFrame) {
      firstFrameCallback = (List<FrameTiming> timings) {
        SchedulerBinding.instance.removeTimingsCallback(firstFrameCallback!);
        firstFrameCallback = null;
        _firstFrameCompleter.complete();
      };
      // Callback is only invoked when FlutterView.render is called. When
      // sendFramesToEngine is set to false during the frame, it will not be
      // called and we need to remove the callback (see below).
      SchedulerBinding.instance.addTimingsCallback(firstFrameCallback!);
    }

    try {
      if (rootElement != null) {
        buildOwner!.buildScope(rootElement!);
      }
      super.drawFrame();
      buildOwner!.finalizeTree();
    } finally {
    
    }
  
    _needToReportFirstFrame = false;
    if (firstFrameCallback != null && !sendFramesToEngine) {
      // This frame is deferred and not the first frame sent to the engine that
      // should be reported.
      _needToReportFirstFrame = true;
      SchedulerBinding.instance.removeTimingsCallback(firstFrameCallback!);
    }
  }
```

这里主要看3点：

第一点：`buildOwner!.buildScope(rootElement!);`调用重建

第二点：`super.drawFrame();`调用重新布局和绘制

第三点：`buildOwner!.finalizeTree();`回收**inactive**的**Element**

## buildScope重建

```dart
  void buildScope(Element context, [ VoidCallback? callback ]) {
    if (callback == null && _dirtyElements.isEmpty) {
      return;
    }
    try {
      _scheduledFlushDirtyElements = true;
      if (callback != null) {
        assert(_debugStateLocked);
        Element? debugPreviousBuildTarget;
        assert(() {
          debugPreviousBuildTarget = _debugCurrentBuildTarget;
          _debugCurrentBuildTarget = context;
          return true;
        }());
        _dirtyElementsNeedsResorting = false;
        try {
          callback();
        } finally {
        }
      }
      _dirtyElements.sort(Element._sort);
      _dirtyElementsNeedsResorting = false;
      int dirtyCount = _dirtyElements.length;
      int index = 0;
      while (index < dirtyCount) {
        final Element element = _dirtyElements[index];

        final bool isTimelineTracked = !kReleaseMode && _isProfileBuildsEnabledFor(element.widget);
   
        try {
          element.rebuild();
        } catch (e, stack) {
          _reportException(
            ErrorDescription('while rebuilding dirty elements'),
            e,
            stack,
            informationCollector: () => <DiagnosticsNode>[
              if (kDebugMode && index < _dirtyElements.length)
                DiagnosticsDebugCreator(DebugCreator(element)),
              if (index < _dirtyElements.length)
                element.describeElement('The element being rebuilt at the time was index $index of $dirtyCount')
              else
                ErrorHint('The element being rebuilt at the time was index $index of $dirtyCount, but _dirtyElements only had ${_dirtyElements.length} entries. This suggests some confusion in the framework internals.'),
            ],
          );
        }
        if (isTimelineTracked) {
          Timeline.finishSync();
        }
        index += 1;
        if (dirtyCount < _dirtyElements.length || _dirtyElementsNeedsResorting!) {
          _dirtyElements.sort(Element._sort);
          _dirtyElementsNeedsResorting = false;
          dirtyCount = _dirtyElements.length;
          while (index > 0 && _dirtyElements[index - 1].dirty) {
            // It is possible for previously dirty but inactive widgets to move right in the list.
            // We therefore have to move the index left in the list to account for this.
            // We don't know how many could have moved. However, we do know that the only possible
            // change to the list is that nodes that were previously to the left of the index have
            // now moved to be to the right of the right-most cleaned node, and we do know that
            // all the clean nodes were to the left of the index. So we move the index left
            // until just after the right-most clean node.
            index -= 1;
          }
        }
      }
    } finally {
      for (final Element element in _dirtyElements) {
        assert(element._inDirtyList);
        element._inDirtyList = false;
      }
      _dirtyElements.clear();
      _scheduledFlushDirtyElements = false;
      _dirtyElementsNeedsResorting = null;
      if (!kReleaseMode) {
        Timeline.finishSync();
      }
    }
  }
```

该函数主要是对 **_dirtyElements**进行排序，而后遍历调用**rebuild**重建，

最后清空 **_dirtyElements**。

**rebuild**调用了**performRebuild**

### performRebuild

**Element**类函数很简单只设置了 **_dirty**值：

```dart
  void performRebuild() {
    _dirty = false;
  }
```

这里和开头的**markNeedsBuild**呼应了。

要知道我们是调用**setState**刷新的，

所以对应的**Element**为**StatefulElement**，它又继承了**ComponentElement**。

**StatefulElement**的实现为：

```dart
  @override
  void performRebuild() {
    if (_didChangeDependencies) {
      state.didChangeDependencies();
      _didChangeDependencies = false;
    }
    super.performRebuild();
  }
```

**ComponentElement**的实现为：

```dart
  void performRebuild() {
    Widget? built;
    try {
      built = build();
    } catch (e, stack) {
      _debugDoingBuild = false;
      built = ErrorWidget.builder(
        _reportException(
          ErrorDescription('building $this'),
          e,
          stack,
          informationCollector: () => <DiagnosticsNode>[
            if (kDebugMode)
              DiagnosticsDebugCreator(DebugCreator(this)),
          ],
        ),
      );
    } finally {
      // We delay marking the element as clean until after calling build() so
      // that attempts to markNeedsBuild() during build() will be ignored.
      super.performRebuild(); // clears the "dirty" flag
    }
    try {
      _child = updateChild(_child, built, slot);
      assert(_child != null);
    } catch (e, stack) {
      built = ErrorWidget.builder(
        _reportException(
          ErrorDescription('building $this'),
          e,
          stack,
          informationCollector: () => <DiagnosticsNode>[
            if (kDebugMode)
              DiagnosticsDebugCreator(DebugCreator(this)),
          ],
        ),
      );
      _child = updateChild(null, built, slot);
    }
  }
```

先调用了**build**函数，因为是**StatefulElement**，所以会调用`state.build(this);`。

至此实现了从**state**来又到**state**去的闭环，但目前仅仅完成了**Widget**重建，

对应的**Element**和**RenderObject**更新在**updateChild**完成。

### updateChild

```dart
  Element? updateChild(Element? child, Widget? newWidget, Object? newSlot) {
    if (newWidget == null) {
      if (child != null) {
        deactivateChild(child);
      }
      return null;
    }

    final Element newChild;
    if (child != null) {
      bool hasSameSuperclass = true;

      if (hasSameSuperclass && child.widget == newWidget) {
        if (child.slot != newSlot) {
          updateSlotForChild(child, newSlot);
        }
        newChild = child;
      } else if (hasSameSuperclass && Widget.canUpdate(child.widget, newWidget)) {
        if (child.slot != newSlot) {
          updateSlotForChild(child, newSlot);
        }      
        child.update(newWidget);
        newChild = child;
      } else {
        deactivateChild(child);
     
        newChild = inflateWidget(newWidget, newSlot);
      }
    } else {
 
      newChild = inflateWidget(newWidget, newSlot);
    }
    return newChild;
  }
```

该函数首先判断**newWidget**如果为null，说明**build**后移除了Widget，那么Element类型的**child**应该从Element tree移除，调用了**deactivateChild**。

接着根据**child**是否有值产生2个分支：

分支2：如果**child**不存在，是首次渲染，调用**inflateWidget**通过`Widget.createElement`创建Element挂在并返回。

分支1：如果**child**存在，说明不是首次渲染，又分为3种情况：

情况1：如果`child.widget == newWidget`，直接复用**child**

情况2：如果`Widget.canUpdate(child.widget, newWidget)`，调用**update**更新Element的**_widget**，如果该Element是**StatefulElement**，还会更新**state**的Widget属性；

如果是**RenderObjectElement**，还会调用**updateRenderObject**更新**RenderObject**对象。

情况3：新的Widget类型和旧的类型不同，需要移除旧的Element，同时**inflateWidget**新的

## 重新布局绘制

上边说了**WidgetsBinding**重写了**RendererBinding**的方法，

**super.drawFrame**调用了重新布局和绘制：

```dart
void drawFrame() {
    pipelineOwner.flushLayout();
    pipelineOwner.flushCompositingBits();
    pipelineOwner.flushPaint();
    if (sendFramesToEngine) {
      renderView.compositeFrame(); // this sends the bits to the GPU
      pipelineOwner.flushSemantics(); // this also sends the semantics to the OS.
      _firstFrameSent = true;
    }
  }
```

## 回收无用Element

### finalizeTree

```dart
  void finalizeTree() {
    try {
      lockState(_inactiveElements._unmountAll); // this unregisters the GlobalKeys
    } catch (e, stack) {
      // Catching the exception directly to avoid activating the ErrorWidget.
      // Since the tree is in a broken state, adding the ErrorWidget would
      // cause more exceptions.
      _reportException(ErrorSummary('while finalizing the widget tree'), e, stack);
    } finally {
      if (!kReleaseMode) {
        Timeline.finishSync();
      }
    }
  }
```

**lockState**里调用了`_inactiveElements._unmountAll`：

```dart
  void _unmountAll() {
    _locked = true;
    final List<Element> elements = _elements.toList()..sort(Element._sort);
    _elements.clear();
    try {
      elements.reversed.forEach(_unmount);
    } finally {
      assert(_elements.isEmpty);
      _locked = false;
    }
  }
```

这里遍历 **_inactiveElements**调用 **_unmount**：

```dart
  void _unmount(Element element) {
    element.visitChildren((Element child) {
      assert(child._parent == element);
      _unmount(child);
    });
    element.unmount();
  }
```

**_unmount**递归调用子Element的 **unmount**。