# 0x00 介绍

Redux也是一个数据(状态)管理的框架。

为啥要用**也**字？因为前面介绍的[Flutter框架之Provider源码分析](http://www.jenson.top/post/154/)的也是一个数据管理的框架。

通过前面Provider的源码分析了解到最终Provider的实现其实就是围绕**InheritedWidget**实现的。

巧得很，Redux也是通过**InheritedWidget**来实现的。

不过这里只介绍Redux的基本使用，关于源码分析留在后面。

废话少说，直接看看Redux如何使用。

# 0x01 使用

介绍使用之前先看下谷歌搜到的一个Redux流程图：

![redux流程](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/redux%E6%B5%81%E7%A8%8B.png)

表达出来大概意思是：

用户操作Widget时触发Action，

Reducer收到当前State和相应Action然后生成新的State。

新的State保存到Store，

保存后的Store通知Widget刷新为最新状态。

其中Action是**dynamic**类型，

Reducer是纯函数，它接收State和Action然后返回新的State。

## 创建State

既然Redux也是基于**InheritedWidget**的。

那也就是说我们应该和Provider一样，把自定义的State放在根Widget中。

所以我们创建MyState类：

```dart
class MyState {
  int count;

  MyState({this.count});

  factory MyState.initial() {
    return MyState(count: 110);
  }
}
```

## 创建Store

State创建后需要由Store持有的，所以我们需要创建泛型为MyState的Store实例：

```dart
  var store = Store<MyState>(appReducer, initialState: MyState.initial());
```

参数**appReducer**：Reducer函数，接收State和Action然后返回新的State。

参数**initialState**：默认初始化，提供默认值。

## 创建reducer

上面说了，reducer是接收State和Action然后根据Action返回新的State。

所以这里实现为：

```dart
MyState appReducer(MyState myState, dynamic action) {
  debugPrint("appReducer");
  var _count;
  if ('inc' == action) {
    _count = myState.count + 1;
  } else if ('dec' == action) {
    _count = myState.count - 1;
  } else {
    _count = myState.count;
  }
  return MyState(
    count: _count,
  );
}
```

网上很多例子都是把Action设置为`enum`类型：

```dart
enum Action{
INCREMENT,
}
```

然后看官网demo时，发现也是如此，，所以当时我的第一感觉是Action只能是enum！！！

唉，不想多说。

但其实上面说了**Action是**dynamic**类型，可以是字符串，enum，也可以是对象。**

## 保存Store到根Widget

上面已经完成了创建Store所需工作，

这里需要把Store实例保存到根Widget，以便其他页面可以来获取。

其实只要使用**StoreProvider**包裹一下我们当前根Widget即可：

```dart
class MyApp extends StatelessWidget {
  final Store store;

  const MyApp({Key key, this.store}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StoreProvider<MyState>(
        store: store,
        child: MaterialApp(
          title: 'Flutter Demo',
          theme: ThemeData(
            primarySwatch: Colors.blue,
            visualDensity: VisualDensity.adaptivePlatformDensity,
          ),
          home: MyHomePage(
            title: "增加数据",
          ),
        ));
  }
}
```

然后在main函数中修改为：

```dart
void main() {
  var store = Store<MyState>(appReducer, initialState: MyState.initial());
  runApp(MyApp(
    store: store,
  ));
}
```

## 获取数据

获取数据可以通过**StoreConnector**和**StoreBuilder**。

这里以**StoreConnector**为例，在MyHomePage代码为：

```dart
 StoreConnector<MyState, int>(
            builder: (ctx, count) {
              debugPrint("build..StoreConnector");
              return Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text(
                    'You have pushed the button this many times:',
                  ),
                  Text(
                    '$count',
                    style: Theme.of(context).textTheme.headline4,
                  ),
                ],
              );
            },
            converter: (store) => store.state.count)
```

**StoreConnector**类为泛型`StoreConnector<S, ViewModel>`。

其中`S`为我们定义的MyState类型；

`ViewModel`为MyState中的某一(某些)属性类型。

构造函数中，

参数`converter`将Store类换到ViewModel类型的属性。

参数`builder`负责根据ViewModel构建Widget。

## 刷新数据

上面介绍完了如何获取数据，

但是数据并不是一成不变的，根据用户操作会呈现不同的样式。

那么Redux如何刷新Widget呢？

上面流程图已经介绍过了，

用户操作触发Action，所以我们只要发送Action就好了：

```dart
StoreProvider.of<MyState>(context, listen: false).dispatch('inc')
```

这里的操作和Provider基本一样了。

至此Redux最基本的使用流程基本讲完了。

# 0x02 疑问

## 如何存储多个State

上面介绍完基本使用流程后就能在项目中直接使用了吗？

告诉你并不能啊！！

难道你的项目简单到只有一个State需要管理吗？

在Provider中我们可以通过这样来管理多个状态类：

```dart
MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => ScreenSizeBean()),
        ChangeNotifierProvider(create: (_) => UserBean()),
        ChangeNotifierProvider(create: (_) => ChatUser()),
      ],
      child: MaterialApp(
        onGenerateRoute: FindCatApp.router.generator,
        localizationsDelegates: [
          GlobalMaterialLocalizations.delegate,
          GlobalWidgetsLocalizations.delegate,
          CatLocalizationsDelegate()
        ],
        supportedLocales: [const Locale('en', 'US'), const Locale('zh', 'CN')],
        theme: ThemeData(
          primaryColor: Colors.yellow[700],
        ),
        home: HomePage(),
      ),
    )
```

**那Redux中如何管理多个State呢？**

**抱歉，Redux中只有一个`Store`，而这一个`Store`只能管理一个`State`。。**

**那如果还要UserInfo的登录信息要管理怎么办？**

**往自定义`State`中塞属性！！**

先定义好`UserInfo`：

```dart
class UserInfo {
  String name;
  String pwd;
  String mobile;

  UserInfo({this.name, this.pwd, this.mobile});

  factory UserInfo.empty() => UserInfo();

  bool get isEmpty {
    return (null == name || name.isEmpty) &&
        (null == pwd || pwd.isEmpty) &&
        (null == mobile || mobile.isEmpty);
  }
}
```

再定义MyState:

```dart
class MyState {
  int count;
  UserInfo userInfo;

  MyState({this.count, this.userInfo});

  factory MyState.initial() {
    return MyState(count: 110, userInfo: UserInfo.empty());
  }
}
```

上面我们已经创建好的Store可以不用改变，继续拿来使用。

但是`appReducer`需要修改，因为现在已经有多个状态需要管理了，

所以在大于一个状态时，我们需要为每个状态都提供单独的`reducer`：

```dart
MyState appReducer(MyState myState, dynamic action) {
  debugPrint("appReducer");
  return MyState(
    count: countReducer(myState, action),
    userInfo: userReducer(myState, action),
  );
}

UserInfo userReducer(MyState myState, action) {
  if (action == 'logout') {
    ///登出
    return UserInfo.empty();
  }
  return myState.userInfo;
}

int countReducer(MyState myState, action) {
  var _count;
  if ('inc' == action) {
    _count = myState.count + 1;
  } else if ('dec' == action) {
    _count = myState.count - 1;
  } else {
    _count = myState.count;
  }
  return _count;
}
```

至此我们完成了多个State属性存储。

## Action为对象类型如何操作

上面我们完成了多State属性的存储，但是我们看到userReducer只判断enum，字符串的Action类型。

如果我们要从Widget获取name、pwd和mobile值，然后封装到UserInfo中，

那么我们的Action应该如何把新封装的UserInfo传递到`appReducer`呢？

这时就涉及到对象类型的Action了。

创建一个UserInfoUpdateAction类：

```dart
class UserInfoUpdateAction {
  final UserInfo userInfo;

  UserInfoUpdateAction(this.userInfo);
}
```

修改`userReducer`，添加`UserInfoUpdateAction`处理：

```dart
UserInfo userReducer(MyState myState, action) {
  if (action == 'logout') {
    ///登出
    return UserInfo.empty();
  }
  if (action is UserInfoUpdateAction) {
    return action.userInfo;
  }
  return myState.userInfo;
}
```

**这里使用了**is**判断Action，**

**有没有更好方式？**

**Redux提供了**combineReducers  **，它接收`Reducer<State>列表`，返回`Reducer<State>`。**

**列表中的item使用**TypedReducer**来定义,两个泛型参数为State、Action。**

**构造函数接收纯函数`final State Function(State state, Action action) reducer;`**

```dart
final UserInfoAction = combineReducers<UserInfo>([
  TypedReducer<UserInfo, UserInfoUpdateAction>(userUpdateAction),
  ///其他Action
 ///其他Action
]);

UserInfo userUpdateAction(UserInfo userInfo, UserInfoUpdateAction action) {
  return action.userInfo;
}
```

所以`appReducer`修改为：

```dart
MyState appReducer(MyState myState, dynamic action) {
  debugPrint("appReducer");
  return MyState(
    count: countReducer(myState, action),
    userInfo: userInfoAction(myState.userInfo, action),
  );
}
```

下面直接通过Action更新状态：

```dart
  void _updateUser() {
    var userUpdateAction = UserInfoUpdateAction(
        UserInfo(name: 'Jenson', pwd: '1234', mobile: '158013822222'));
    StoreProvider.of<MyState>(context, listen: false)
        .dispatch(userUpdateAction);
  }
```



## 异步Action/Store

参考[redux_thunk](https://pub.dev/packages/redux_thunk)