# 前言

基本上有列表的地方就会有搜索，通过搜索可以快速找到想要的数据。

在Flutter中我原以为会Framework会提供一个类似`SearchView`的Widget。

但是当我输入`search`时IDE提示给我的并没有类似Widget。

经过查看文档发现要实现搜索，可以使用`showSearch`方法，

这倒是和`showDialog`、`showBottomSheet`如出一辙。

下面看看`showSearch`是如何实现搜索功能的。

# showSearch介绍

## 函数参数

`showSearch`函数源码如下：

```dart
Future<T> showSearch<T>({
  @required BuildContext context,
  @required SearchDelegate<T> delegate,
  String query = '',
})
```

可以看到使用`showSearch`方法，

只要传递`context`和`delegate`两个必须参数即可。

其中`context`不用解释都知道，

`query`是要查找的关键字，一般不用设值。

而`delegate`类型为`SearchDelegate`，这是一个抽象类。

所以我们需要自定义一个类继承该类，实现相关方法。

## SearchDelegate

自定义`AccountSearchDelegate`继承`SearchDelegate`:

```dart
class AccountSearchDelegate extends SearchDelegate {

  @override
  List<Widget> buildActions(BuildContext context) {
  }

  @override
  Widget buildLeading(BuildContext context) {
  }

  @override
  Widget buildResults(BuildContext context) {
  }

  @override
  Widget buildSuggestions(BuildContext context) {
  }
}
```

上面四个函数是需要重写的。

下面分别看看这些函数的作用：

`buildSuggestions`：返回搜索建议列表。

在输入内容改变的时候回调该方法，根据不同的内容返回不同的建议列表。

记住：如果你选择了某个建议列表，也要更新输入内容为建议内容。

**这里还有一个用法：**

**在该方法中判断输入内容，如果输入内容存在就根据输入内容给出建议列表。**

**如果输入内容不存在，就显示一个过去的搜索历史。**

`buildResults`：返回结果列表。

当用户提交搜索内容时回调该方法，一般返回`ListView`列表内容。

`buildLeading`：返回一个显示在输入框前面的Widget。

一般返回一个返回按钮，可以退出搜索页面。

`buildActions`：返回一个在输入框后面的Widget用于查询完后显示。

一般如果输入内容不为空的话，可以显示一个清除按钮，用来清除输入框内容。

# showSearch使用

上面介绍了相关函数功能，

现在根据实际需求看看到底如何应用搜索功能。

这样一个需求：

> 1、进入搜索页面后有一个返回按钮，
>
> 如果当前有输入内容，点击返回按钮时清空输入内容，显示搜索建议。
>
> 如果当前没有输入内容，点击返回按钮时退出搜索页面。
>
> 2、搜索执行后，要有清空搜索按钮
>
> 3、没有输入内容时显示搜索历史标签，
>
> 有输入内容时给出搜索建议列表。
>
> 4、搜索有结果时显示结果列表。

这四个需求分别对应了四个重写方法。

下面分别实现各个需求。

### 需求1实现

我们已经知道`buildLeading`可以添加返回按钮。

那需求1只要在这个方法完善即可。

我们只返回一个`IconButton`，根据需求完善点击事件：

```dart
  @override
  Widget buildLeading(BuildContext context) {
    return IconButton(
      icon: Icon(Icons.arrow_back),
      onPressed: () {
        if (query.isEmpty) {
          close(context, null);
        } else {
          query = "";
          showSuggestions(context);
        }
      },
    );
  }
```

这里注意：

`close`方法表示退出搜索页面，不需要我们调用`Navigator`。

`showSuggestions`方法表示显示建议Widget。

效果图：

![image-20200416183535752](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200416183535752.png)

### 需求2实现

清空按钮实现更简单了，`buildActions`实现即可：

```dart
  @override
  List<Widget> buildActions(BuildContext context) {
    if (query.isEmpty) {
      return [Container()];
    } else
      return [
        IconButton(
          icon: Icon(Icons.clear),
          onPressed: () {
            query = "";
            showSuggestions(context);
          },
        ),
      ];
  }

```

效果图：

![image-20200416183604976](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200416183604976.png)

### 需求3实现

没有输入内容时显示搜索历史标签，有输入内容时给出搜索建议列表。

这里涉及到两种布局：标签布局和建议列表。

布局的显示根据搜索内容判断：

```dart
@override
  Widget buildSuggestions(BuildContext context) {
    if (query.isEmpty) {
      return getLables();
    } else
      return getSuggestions();
  }

  Widget getLabels() {
    return Wrap(
      spacing: 5,
      children: <Widget>[
        RaisedButton(
            onPressed: () {}, child: Text("标签1"), shape: StadiumBorder()),
        RaisedButton(
            onPressed: () {}, child: Text("标签2"), shape: StadiumBorder()),
        RaisedButton(
            onPressed: () {}, child: Text("标签3"), shape: StadiumBorder()),
        RaisedButton(
            onPressed: () {}, child: Text("标签4"), shape: StadiumBorder()),
        RaisedButton(
            onPressed: () {}, child: Text("标签5"), shape: StadiumBorder()),
        RaisedButton(
            onPressed: () {}, child: Text("标签6"), shape: StadiumBorder()),
      ],
    );
  }

  Widget getSuggestions() {
    return ListView(
      children: <Widget>[
        ListTile(
          title: Text("我是建议1"),
        ),
        ListTile(
          title: Text("我是建议2"),
        ),
        ListTile(
          title: Text("我是建议3"),
        ),
        ListTile(
          title: Text("我是建议4"),
        ),
        ListTile(
          title: Text("我是建议5"),
        ),
      ],
    );
  }
```

标签效果图：

![image-20200416183656827](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200416183656827.png)

建议效果图：

![image-20200416183714266](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200416183714266.png)

### 需求4实现

搜索有结果时显示结果列表，没有结果时提示没有搜索到。

```dart
  @override
  Widget buildResults(BuildContext context) {
    return ListView(
      children: <Widget>[
        ListTile(
          title: Text("我是结果1"),
        ),
        ListTile(
          title: Text("我是结果2"),
        ),
        ListTile(
          title: Text("我是结果3"),
        ),
        ListTile(
          title: Text("我是结果4"),
        ),
        ListTile(
          title: Text("我是结果5"),
        ),
      ],
    );
  }
```

有内容结果图：

![image-20200416184113935](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200416184113935.png)

### 需求4完善

本节的title是需求4的完善，

之所以是完善是因为需求4中的实现在网上的例子太多了，

因为这都是直接就返回了结果列表，没有进行耗时操作的模拟和实现。

然鹅搜索这个流程最起码是本地文件/数据库搜索，更多的是网络操作，

也就是说其实`Widget buildResults(BuildContext context)`并不能立马得到搜索结果。

既然得不到搜索结果，你又怎么知道该如何显示呢？

也就是说回调`buildResults`时，你应该根据输入内容去进行耗时查询。

所以现在应该是这样：

```dart
  @override
  Widget buildResults(BuildContext context) {
    final String text = query;
    List data =await getDataFromNet(text); 
  	return build(data);
  }
```

但是一旦在函数中使用了`await`，那么该函数就要被声明为`async`函数。

而函数一旦声明`async`，函数返回类型就是`Future<T>`。

这时IDE是报错的，因为这个函数是重写函数，不能修改返回值类型。

既然同步方式实现不行，那就走异步方式，

就是说我先判断数据集合是否为空，

如果为空就执行网络请求，同时返回一个空Widget，

等到网络执行完毕刷新Widget。

如果不为空就直接使用数据创建结果列表。

所以现在代码样式如下：

```dart
List data; 
@override
  Widget buildResults(BuildContext context) {
    final String text = query;
    if(data==null){
        getDataFromNet(text).then((value){
            this.data = value;
            showResults(context);
        }); 
    }else
  		return build(data);
  }
```

其中`showResults`表示以结果列表的形式刷新搜索页。

上面这种方式功能上没有问题，但是代码并不好。

所以下面我们以更符合**响应式编程**方式来从新实现这块。

首先创建一个枚举类：

```dart
enum FutureState {
  wait,
  done,
}
```

`FutureState`表示Future执行状态，

`wait`表示执行中，`done`表示执行完成，包括出现异常。

然后创建一个包装类，包装泛型数据T和错误信息以及Future状态：

```dart
class DataWrapper<T> {
  final Object error;
  final T data;
  final FutureState state;

  DataWrapper._(
    this.state,
    this.data,
    this.error,
  );

  factory DataWrapper.wrap(
    FutureState state,
    T data,
    Object error,
  ) =>
      DataWrapper._(state, data, error);

  bool get hasError => this.error != null;
}
```

命名一个新函数:

```dart
typedef FutureWidgetBuilder = Widget Function(
    BuildContext context, DataWrapper wrapper);
```

接下来是重点，

创建`FutureBuild<T>`，它是一个有`StatefulWidget`。

构造函数接收`Future`和`FutureWidgetBuilder`：

```dart
class FutureBuild<T> extends StatefulWidget {
  final FutureWidgetBuilder builder;
  final Future future;

  const FutureBuild({this.builder, this.future});

  @override
  State<StatefulWidget> createState() => _FutureBuildState<T>();
}
```

创建对应的State，`_FutureBuildState<T>`：

```dart
class _FutureBuildState<T> extends State<FutureBuild> {
  DataWrapper<T> _wrapper;

  @override
  void initState() {
    super.initState();
    _wrapper = DataWrapper.wrap(FutureState.wait, null, null);
    if (widget.future != null) {
      final future = widget.future;
      future.then((value) {
        setState(() {
          _wrapper = DataWrapper<T>.wrap(FutureState.done, value, null);
        });
      }).catchError((error) {
        setState(() {
          _wrapper = DataWrapper<T>.wrap(FutureState.done, null, error);
        });
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return widget.builder(context, _wrapper);
  }
}
```

在State开始的时候会调用`initState`，

这时给`_wrapper`赋初始值`DataWrapper.wrap(FutureState.wait, null, null);`。

紧接着对`future`的`then`和`catchError`分别进行实现，重新对`_wrapper`赋值。

这样不管执行的是`then`还是`catchError`，

在调用`setState`时都会再次调用`build`，进而调用`FutureWidgetBuilder`。

最后我们只需要根据`FutureState`和`wrapper.hasError`分别进行判断来返回不同的Widget即可：

```dart
  @override
  Widget buildResults(BuildContext context) {
    final String text = query;
    return FutureBuild<List<AccountData>>(
      future: AccountProvider.provider.queryByFilter(text),
      builder: (BuildContext context, DataWrapper wrapper) {
        if (wrapper.state == FutureState.wait) {
          return Container();
        } else {
          if (wrapper.hasError) {
            return Text(wrapper.error);
          }
          final data = wrapper.data;
          return ListView.separated(
              itemBuilder: (BuildContext context, int index) =>
                  itemBuilder(context, data[index], null),
              separatorBuilder: (BuildContext context, int index) => Divider(
                    height: 1,
                    color: Colors.grey,
                  ),
              itemCount: data.length);
        }
      },
    );
```

这样的实现看起来代码量多了，

但是这块封装适用于以后所有类似的异步请求。

最关键的问题是通过封装把异步操作封装到FutureBuild的Widget里面。

对于使用该Widget的人来说只要把注意力放在业务实现即可。

但是其实Flutter已经想到了这一点，

所以为我们提供了`FutureBuilder`，我们可以直接拿来使用。

上面的自己封装代码如果你懂了，那么`FutureBuilder`实现原理你也就懂了。