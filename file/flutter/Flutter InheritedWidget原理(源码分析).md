状态管理是Flutter避不开的话题，而**InheritedWidget**又是状态管理的基础。

一起看看**InheritedWidget**底层是怎么实现的。

# dependOnInheritedWidgetOfExactType

这个函数是学习状态管理时的首先接触到的，所以把这个函数当成入口看看：

```dart
  @override
  T? dependOnInheritedWidgetOfExactType<T extends InheritedWidget>({Object? aspect}) {
    final InheritedElement? ancestor = _inheritedElements == null ? null : _inheritedElements![T];
    if (ancestor != null) {
      return dependOnInheritedElement(ancestor, aspect: aspect) as T;
    }
    _hadUnsatisfiedDependencies = true;
    return null;
  }
```

可以看到每个**Element**都有一个`PersistentHashMap<Type, InheritedElement>? _inheritedElements;`属性。

这个属性哪里来的呢？

## _updateInheritance

**_inheritedElements**值来自 **_updateInheritance**函数：

```dart
  void _updateInheritance() {
    _inheritedElements = _parent?._inheritedElements;
  }
```

然后**InheritedElement**重写了该函数：

```dart
  @override
  void _updateInheritance() {
    final PersistentHashMap<Type, InheritedElement> incomingWidgets =
        _parent?._inheritedElements ?? const PersistentHashMap<Type, InheritedElement>.empty();
    _inheritedElements = incomingWidgets.put(widget.runtimeType, this);
  }
```

由此可知**普通ELement**该值来自父类对象，

**InheritedElement**该值除了来自父类对象，而后又把自身所持Widget和自身放了进去。

该函数在**mount**挂在时被调用。

我们继续**dependOnInheritedWidgetOfExactType**函数分析，

**ancestor**为我们根据指定的**InheritedWidget**返回的**InheritedElement**。

如果在这个Element tree上存在该**InheritedWidget**，那么**ancestor**是会有值的，

所以调用**dependOnInheritedElement**

## dependOnInheritedElement

```dart
  @override
  InheritedWidget dependOnInheritedElement(InheritedElement ancestor, { Object? aspect }) {
    _dependencies ??= HashSet<InheritedElement>();
    _dependencies!.add(ancestor);
    ancestor.updateDependencies(this, aspect);
    return ancestor.widget as InheritedWidget;
  }
```

这里又看到了一个新变量`Set<InheritedElement>? _dependencies;`。

把刚刚拿到的`InheritedElement ancestor`添加进去。

这是告诉我们，我这个Element依赖了某一祖先结点**ancestor**。

然后调用了**updateDependencies**函数：

```dart
  @protected
  void updateDependencies(Element dependent, Object? aspect) {
    setDependencies(dependent, null);
  }
  
    @protected
  void setDependencies(Element dependent, Object? value) {
    _dependents[dependent] = value;
  }
```

注意这个函数是**ancestor**调用的，它是**InheritedElement**类型。

也就是**InheritedElement**有一个变量：

`final Map<Element, Object?> _dependents = HashMap<Element, Object?>();`。

现在**InheritedElement**通过该变量又持有了使用它的所有ELement。

所以现在情况来看是互相持有了。

最后通过`ancestor.widget as InheritedWidget;`返回我们需要的

InheritedWidget。

# update

现在流程看，虽然它们互相持有对方了，而且也能从祖先结点获取到InheritedWidget，

进而获取所需数据。

但是InheritedWidget中数据是如何变化的？子类又是如何刷新的呢?

先说InheritedWidget中数据是如何变化的，

一般InheritedWidget外层会套一个StatefulWidget。

StatefulWidget的State的**build**函数中调用InheritedWidget并传入从外部接收的数据。

这个数据一般是**ChangeNotifier**实现类，在State中为其添加**addListener**。

当该值发生变化时调用**notifyListeners**，进而调用**setState**，最终导致ELement重建。

自然**InheritedWidget**也会跟随重建，具体流程可以参考文章**setState流程分析**。

当**InheritedWidget**重建时，**updateChild**函数中，

由于Widget类型没有变，所以`Widget.canUpdate(child.widget, newWidget)`会返回true，进而调用`child.update(newWidget)`。

由于**child**类型为**InheritedElement**，所以会调用：

```dart
@override
  void update(ProxyWidget newWidget) {
    final ProxyWidget oldWidget = widget as ProxyWidget;
    super.update(newWidget);
    updated(oldWidget);
    rebuild(force: true);
  }


  @protected
  void updated(covariant ProxyWidget oldWidget) {
    notifyClients(oldWidget);
  }


  @override
  void notifyClients(InheritedWidget oldWidget) {
    for (final Element dependent in _dependents.keys) {
      // check that it really depends on us
      assert(dependent._dependencies!.contains(this));
      notifyDependent(oldWidget, dependent);
    }
  }


  @protected
  void notifyDependent(covariant InheritedWidget oldWidget, Element dependent) {
    dependent.didChangeDependencies();
  }
```

通过这几个函数的连续调用，可以看到**InheritedElement**重建时，

会遍历上边讲到的变量 **_dependents**，并调用**didChangeDependencies**。

至此所有依赖该**InheritedElement**的Element都被调用了**didChangeDependencies**。

而**didChangeDependencies**又调用了**markNeedsBuild**，以达到刷新所有依赖它的Element。

这里有一点注意下，如果依赖的Element是**StatefulElement**，

在调用**didChangeDependencies**时会设置`_didChangeDependencies = true;`。

这个值用来判断**State**是否调用**didChangeDependencies**条件：

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

# getInheritedWidgetOfExactType

上面说了调用**dependOnInheritedWidgetOfExactType**会注册当前**Element**，

所以数据改变时会刷新。

那么如果我不想要监听刷新，只是单纯的想获取值该怎么办？

可以调用**getInheritedWidgetOfExactType**函数来实现：

```dart
  @override
  T? getInheritedWidgetOfExactType<T extends InheritedWidget>() {
    return getElementForInheritedWidgetOfExactType<T>()?.widget as T?;
  }

  @override
  InheritedElement? getElementForInheritedWidgetOfExactType<T extends InheritedWidget>() {
    final InheritedElement? ancestor = _inheritedElements == null ? null : _inheritedElements![T];
    return ancestor;
  }
```

可以发现该函数只是获取**ancestor**，没有向其添加当前Element。

# _dependencies

有一点你们是不是忽略了，

前边说了子Element和InheritedElement互相持有的。

子Element通过 **_dependencies** 持有它依赖的 **InheritedElement**，

而**InheritedElement**通过 **_dependents**持有依赖它的Element。

其中 **_dependents**在 **notifyDependent**中用到了，

那 **_dependencies**有什么用了？？

不知道你们有没有这个疑惑。。。

看下**deactivate**实现：

```dart
  void deactivate() {
    assert(_lifecycleState == _ElementLifecycle.active);
    if (_dependencies != null && _dependencies!.isNotEmpty) {
      for (final InheritedElement dependency in _dependencies!) {
        dependency._dependents.remove(this);
      }
    }
    _inheritedElements = null;
    _lifecycleState = _ElementLifecycle.inactive;
  }
```

当Element从tree中移除后调用**deactivate**。

此时它在UI中不可见，也就没必要跟随数据刷新了，

所以就告诉它依赖的所有**InheritedElement**：

我不在了，你们可以删除我了，数据改变时不要通知我了。