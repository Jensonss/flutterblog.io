# 0x00 前言

图片框架是各个平台必备产品，Flutter也不例外。

目前Flutter生态还在发展阶段，可选择性并不多。

在做信息流时，我选择了`CachedNetworkImage`作为图片显示框架。

因为别说对框架不熟悉，就连Flutter都才刚上手。

所以瞅瞅框架源码如何实现以便更好使用是有必要的。

# 0x01 介绍

在使用之前要先添加库的依赖，

关于`cached_network_image`信息可以在这查找：[cached_network_image](https://pub.dev/packages/cached_network_image)。

添加依赖后看下如何使用：

```dart
        child: CachedNetworkImage(
          imageUrl: imgs[i].imgUrl,
        )
```

没错最基本的使用，就是这么简单。

看下构造函数：

```dart
  CachedNetworkImage({
    Key key,
    @required this.imageUrl,
    this.imageBuilder,
    this.placeholder,
    this.errorWidget,
    this.fadeOutDuration: const Duration(milliseconds: 1000),
    this.fadeOutCurve: Curves.easeOut,
    this.fadeInDuration: const Duration(milliseconds: 500),
    this.fadeInCurve: Curves.easeIn,
    this.width,
    this.height,
    this.fit,
    this.alignment: Alignment.center,
    this.repeat: ImageRepeat.noRepeat,
    this.matchTextDirection: false,
    this.httpHeaders,
    this.cacheManager,
    this.useOldImageOnUrlChange: false,
    this.color,
    this.filterQuality: FilterQuality.low,
    this.colorBlendMode,
    this.placeholderFadeInDuration,
  }) 
```

可以看到虽然参数很多，但必须的就只有`imageUrl`这一项。

所以只要设置了`imageUrl`就能显示图片了。

如果为了更好地体验，

可以使用`placeholder`作为加载中的占位符，

可以使用`errorWidget`作为加载失败的占位符。

但是作为图片框架，其核心功能应该是缓存功能，下面看看如何实现缓存的。

# 0x02 缓存分析



`CachedNetworkImage`是一个`StatefulWidget`，

所以必然有一个与之对应的`State`类，

通过`createState`看到了是`CachedNetworkImageState`:

```dart
  @override
  CachedNetworkImageState createState() {
    return CachedNetworkImageState();
  }
```

进去`CachedNetworkImageState`类看看`build`：

```dart
  @override
  Widget build(BuildContext context) {
    return _animatedWidget();
  }
```

一行代码，只是简单调用了内部方法，

看看该方法实现：

```dart
  _animatedWidget() {
    var fromMemory = _cacheManager().getFileFromMemory(widget.imageUrl);

    return StreamBuilder<FileInfo>(
      key: _streamBuilderKey,
      initialData: fromMemory,
      stream: _cacheManager()
          .getFile(widget.imageUrl, headers: widget.httpHeaders)
          // ignore errors if not mounted
          .handleError(() {}, test: (_) => !mounted)
          .where((f) =>
              f?.originalUrl != fromMemory?.originalUrl ||
              f?.validTill != fromMemory?.validTill),
      builder: (BuildContext context, AsyncSnapshot<FileInfo> snapshot) {
        if (snapshot.hasError) {
          // error
          if (_imageHolders.length == 0 || _imageHolders.last.error == null) {
            _addImage(image: null, error: snapshot.error);
          }
        } else {
          var fileInfo = snapshot.data;
          if (fileInfo == null) {
            // placeholder
            if (_imageHolders.length == 0 || _imageHolders.last.image != null) {
              _addImage(
                  image: null,
                  duration: widget.placeholderFadeInDuration ?? Duration.zero);
            }
          } else if (_imageHolders.length == 0 ||
              _imageHolders.last.image?.originalUrl != fileInfo.originalUrl ||
              _imageHolders.last.image?.validTill != fileInfo.validTill) {
            _addImage(
                image: fileInfo,
                duration: _imageHolders.length > 0 ? null : Duration.zero);
          }
        }

        var children = <Widget>[];
        for (var holder in _imageHolders) {
          if (holder.error != null) {
            children.add(_transitionWidget(
                holder: holder, child: _errorWidget(context, holder.error)));
          } else if (holder.image == null) {
            children.add(_transitionWidget(
                holder: holder, child: _placeholder(context)));
          } else {
            children.add(_transitionWidget(
                holder: holder,
                child: _image(
                  context,
                  FileImage(holder.image.file),
                )));
          }
        }

        return Stack(
          fit: StackFit.passthrough,
          alignment: widget.alignment,
          children: children.toList(),
        );
      },
    );
  }
```

里面代码较多，莫慌，简单抽取下看看主要实现：

```dart
  _animatedWidget() {
      //标注1
    var fromMemory = _cacheManager().getFileFromMemory(widget.imageUrl);

    return StreamBuilder<FileInfo>(
      key: _streamBuilderKey,
      initialData: fromMemory,
      stream: _cacheManager() //标注2
          .getFile(widget.imageUrl, headers: widget.httpHeaders)
         ,
      builder: (BuildContext context, AsyncSnapshot<FileInfo> snapshot) { //标注3
      },
    );
  }
```

精简后的代码标注了123点。

分别看下这三个地方。

开始之前先看下`_cacheManager()`实现：

```dart
  BaseCacheManager _cacheManager() {
    return widget.cacheManager ?? DefaultCacheManager();
  
```

**可以看到如果我们自己没有设置`cacheManager`，**

**那么框架会给我们自动设置一个`DefaultCacheManager`。**

**所以不用担心不设置缓存器就会每次从网络拉取图片的问题。**

## 内存缓存

标注1其实就是从内存获取缓存，看名字就知道了。

然后把获取到的值赋作为`StreamBuilder`构造函数参数`initialData`传进去。

基础缓存框架`BaseCacheManager`是一个抽象类，

`DefaultCacheManager`是它的默认实现。

看下方法内容：

```dart
  ///Returns the file from memory if it has already been fetched
  FileInfo getFileFromMemory(String url) {
    return store.getFileFromMemory(url);
  }
```

可以看到它啥也没干，派了手下人`store`去干了。

这里的`store`是`CacheStore`类型。

看下它里面方法实现：

```dart
  FileInfo getFileFromMemory(String url) {
    if (_memCache[url] == null || _filePath == null) {
      return null;
    }
    var cacheObject = _memCache[url];

    var path = p.join(_filePath, cacheObject.relativePath);
    return new FileInfo(
        File(path), FileSource.Cache, cacheObject.validTill, url);
  }
```

这里主要逻辑就是从`_memCache`里面使用`url`作为key，看看能不能拿到什么东西。

如果没拿到返回null，

如果侥幸拿到了，那我根据拿到的对象里的`relativePath`并拼接缓存目录`_filePath`，

组成缓存文件的完整路径。

根据完整路径创建一个`FileInfo`。

这就完成了内存缓存获取。



下面看看标准2的实现



## 本地缓存

标注2获取本地缓存的逻辑主要是`getFile`部分。

下面看看具体实现：

```dart
/// Get the file from the cache and/or online, depending on availability and age.
/// Downloaded form [url], [headers] can be used for example for authentication.
/// The files are returned as stream. First the cached file if available, when the
/// cached file is too old the newly downloaded file is returned afterwards.
Stream<FileInfo> getFile(String url, {Map<String, String> headers}) {
  var streamController = new StreamController<FileInfo>();
  _pushFileToStream(streamController, url, headers);
  return streamController.stream;
}
```

可以看到这个方法里只创建了一个`StreamController`实例。

然后就把事情交给`_pushFileToStream`处理了，

继续看：

```dart
  _pushFileToStream(StreamController streamController, String url,
      Map<String, String> headers) async {
    FileInfo cacheFile;
    try {
      cacheFile = await getFileFromCache(url);
      if (cacheFile != null) {
        streamController.add(cacheFile);
      }
    } catch (e) {
      print(
          "CacheManager: Failed to load cached file for $url with error:\n$e");
    }
    if (cacheFile == null || cacheFile.validTill.isBefore(DateTime.now())) {
      try {
        var webFile = await webHelper.downloadFile(url, authHeaders: headers);
        if (webFile != null) {
          streamController.add(webFile);
        }
      } catch (e) {
        assert(() {
          print(
              "CacheManager: Failed to download file from $url with error:\n$e");
          return true;
        }());
        if (cacheFile == null && streamController.hasListener) {
          streamController.addError(e);
        }
      }
    }
    streamController.close();
  }
```

从代码不难看出，从中间if分开。

上部分逻辑是从本地获取缓存并添加到`streamController`

下部分逻辑是从网络获取数据并添加到`streamController`。

下面分别看看实现逻辑。

看下`getFileFromCache`的实现：

```dart
  ///Get the file from the cache
  Future<FileInfo> getFileFromCache(String url) async {
    return await store.getFile(url);
  }
```

日常甩锅给`store`，

现在我们知道不管从内存还是从本地都是由`CacheStore`经手。

看下里面实现：

```dart
  Future<FileInfo> getFile(String url) async {
    var cacheObject = await retrieveCacheData(url);
    if (cacheObject == null || cacheObject.relativePath == null) {
      return null;
    }
    var path = p.join(await filePath, cacheObject.relativePath);
    return new FileInfo(
        File(path), FileSource.Cache, cacheObject.validTill, url);
  }
```

这里面通过`retrieveCacheData`获取缓存，后面的都是判断和封装。

其实现内容为：

```dart
  Future<CacheObject> retrieveCacheData(String url) {
    if (_memCache.containsKey(url)) {
      return Future.value(_memCache[url]);
    }
    if (!_futureCache.containsKey(url)) {
      var completer = new Completer<CacheObject>();
      _getCacheDataFromDatabase(url).then((cacheObject) async {
        if (cacheObject != null && !await _fileExists(cacheObject)) {
          final provider = await _cacheObjectProvider;
          provider.delete(cacheObject.id);
          cacheObject = null;
        }
        completer.complete(cacheObject);

        _memCache[url] = cacheObject;
        _futureCache[url] = null;
      });

      _futureCache[url] = completer.future;
    }
    return _futureCache[url];
  }
```

第一个if语句：

```dart
if (_memCache.containsKey(url)) {
      return Future.value(_memCache[url]);
    }
```

这里又从内存获取一遍，

如果没有获取到，且第二个if也没有取到，

则执行`_getCacheDataFromDatabase(url)`：

```dart
  Future<CacheObject> _getCacheDataFromDatabase(String url) async {
    var provider = await _cacheObjectProvider;
    var data = await provider.get(url);
    if (await _fileExists(data)) {
      _updateCacheDataInDatabase(data);
    }
    _scheduleCleanup();
    return data;
  }
```

到这里真相慢慢浮出水面了，因为名字里带了`database`。

看来快要从数据库取数据了。

`_cacheObjectProvider`其泛型类型为`CacheObjectProvider`。

所以`provider.get(url);`调用的就是`CacheObjectProvider`中`get`方法：

```dart
  Future<CacheObject> get(String url) async {
    List<Map> maps = await db.query(tableCacheObject,
        columns: null, where: "$columnUrl = ?", whereArgs: [url]);
    if (maps.length > 0) {
      return new CacheObject.fromMap(maps.first);
    }
    return null;
  }
```

到这里可以看到终于调用了database，进行了sqlite查询以获取缓存。

**上面说了不管从内存还是从本地都是由`CacheStore`经手。**

**只是从内存获取时直接从其Map类型属性`_memCache`中获取就完事了，**

**而如果是获取本地缓存时，交给了其`Future<CacheObjectProvider >`类型**

**`_cacheObjectProvider`来处理。**

**关于`CacheObjectProvider`本类只是sqlite基本操作的封装类。**

至此本地缓存获取流程结束。



**总结一下：**

**本地缓存也还是调用了一下内存缓存，**

**内存缓存没有数据，则从本地sqlite查询。**

**sqlite缓存的是源图片url和本地图片path的对应关系。**

**通过url找到了path，进而找到了本地图片。**



如果首次加载，前面都是获取不到数据的，接下来看看网络获取。

## 网络获取

继续回到`_pushFileToStream`方法，看看下部分：

```dart
  try {
        var webFile = await webHelper.downloadFile(url, authHeaders: headers);
        if (webFile != null) {
          streamController.add(webFile);
        }
      } catch (e) {
        assert(() {
          print(
              "CacheManager: Failed to download file from $url with error:\n$e");
          return true;
        }());
        if (cacheFile == null && streamController.hasListener) {
          streamController.addError(e);
        }
      }
```

可以看到这里使用了`WebHelper`来下载文件。

```dart
  ///Download the file from the url
  Future<FileInfo> downloadFile(String url,
      {Map<String, String> authHeaders, bool ignoreMemCache = false}) async {
    if (!_memCache.containsKey(url) || ignoreMemCache) {
      var completer = new Completer<FileInfo>();
      () async {
        try {
          final cacheObject =
              await _downloadRemoteFile(url, authHeaders: authHeaders);
          completer.complete(cacheObject);
        } catch (e) {
          completer.completeError(e);
        } finally {
          _memCache.remove(url);
        }
      }();

      _memCache[url] = completer.future;
    }
    return _memCache[url];
  }
```

**`WebHelper`不仅是对`http`网络库进行了包装调用，**

**还持有了`CacheStore`的引用，以便在下载完数据后进行数据缓存。**

**有意思的是这里又进行了一次`_memCache`判断，这次的`_memCache`并非`CacheStore`里面的。**

**而是`WebHelper`在构造函数中自己创建的。**

**就是说`WebHelper`也有做了自己的内存缓存。**

继续看代码，

`downloadFile`里面调用了内部方法`_downloadRemoteFile`。

```dart
  ///Download the file from the url
  Future<FileInfo> _downloadRemoteFile(String url,
      {Map<String, String> authHeaders}) async {
    var cacheObject = await _store.retrieveCacheData(url);
    if (cacheObject == null) {
      cacheObject = new CacheObject(url);
    }

    var headers = new Map<String, String>();
    if (authHeaders != null) {
      headers.addAll(authHeaders);
    }

    if (cacheObject.eTag != null) {
      headers["If-None-Match"] = cacheObject.eTag;
    }

    var success = false;

    var response = await _fileFetcher(url, headers: headers);
    success = await _handleHttpResponse(response, cacheObject);

    if (!success) {
      throw HttpException(
          "No valid statuscode. Statuscode was ${response?.statusCode}");
    }

    _store.putFile(cacheObject);
    var filePath = p.join(await _store.filePath, cacheObject.relativePath);

    return FileInfo(
        new File(filePath), FileSource.Online, cacheObject.validTill, url);
  }
```

这里使用`_fileFetcher`执行网络请求返回`reposnse`。

通过`_handleHttpResponse`从`response`取出值赋给`cacheObject`。

这里`_fileFetcher`是在`WebHelper`构造函数进行赋值的：

```dart
  WebHelper(this._store, this._fileFetcher) {
    _memCache = new Map();
    if (_fileFetcher == null) {
        //这里赋值
      _fileFetcher = _defaultHttpGetter;
    }
  }
  
    Future<FileFetcherResponse> _defaultHttpGetter(String url,
      {Map<String, String> headers}) async {
    var httpResponse = await http.get(url, headers: headers);
    return new HttpFileFetcherResponse(httpResponse);
  }
```

给它赋值的`_defaultHttpGetter`本质是`HttpFileFetcherResponse`的实例。

而该类只是包装了`http.get`请求返回的结果。

至此网络获取流程也已经结束。

整个缓存调用流程可以简单理解为：

![image-20200116105412493](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200116105412493.png)





# 0x03 流程分析

## 瞎比比

前面看了三种缓存的实现，所以你懂了该框架实现流程了吗？

不，你顶多只是了解了三种缓存流程大概实现方式。

至于框架的调用流程才刚开始。。。

先来个类图看下主要类的关系：

<img src="https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200115232508547.png" alt="image-20200115232508547" style="zoom:200%;" />

在上面缓存流程中，我们标注了123点。

这三点是围绕`StreamBuilder`展开的。

这三点分别对应了`StreamBuilder`构造函数中的

`initialData`、`stream`、`builder`。

你几乎可以认为掌握了这三块流程，也就掌握了该框架实现流程原理。



## 入正题

通过类图我们知道逻辑开始渐入复杂，

是从`CachedNetworkImageState`的`build`方法开始的。

因为这里调用了它所依赖的`StreamBuilder`。

我们的标注也是从这里开始的。

进入`StreamBuilder`类：

```dart
class StreamBuilder<T> extends StreamBuilderBase<T, AsyncSnapshot<T>> {
  /// The [builder] must not be null.
  const StreamBuilder({
    Key key,
    this.initialData,
    Stream<T> stream,
    @required this.builder,
  }) : assert(builder != null),
       super(key: key, stream: stream);

  final AsyncWidgetBuilder<T> builder;

  final T initialData;

  @override
  AsyncSnapshot<T> initial() => AsyncSnapshot<T>.withData(ConnectionState.none, initialData);

  @override
  AsyncSnapshot<T> afterConnected(AsyncSnapshot<T> current) => current.inState(ConnectionState.waiting);

  @override
  AsyncSnapshot<T> afterData(AsyncSnapshot<T> current, T data) {
    return AsyncSnapshot<T>.withData(ConnectionState.active, data);
  }

  @override
  AsyncSnapshot<T> afterError(AsyncSnapshot<T> current, Object error) {
    return AsyncSnapshot<T>.withError(ConnectionState.active, error);
  }

  @override
  AsyncSnapshot<T> afterDone(AsyncSnapshot<T> current) => current.inState(ConnectionState.done);

  @override
  AsyncSnapshot<T> afterDisconnected(AsyncSnapshot<T> current) => current.inState(ConnectionState.none);

  @override
  Widget build(BuildContext context, AsyncSnapshot<T> currentSummary) => builder(context, currentSummary);
}
```

类的代码并不多，

`StreamBuilder`是个泛型类，注意它和其父类的泛型类型即可。

构造函数中`initialData`直接赋值给了属性`final T initialData`。

`stream`传递给了父类，该类本身没有调用。

`builder`直接赋值给了属性`final AsyncWidgetBuilder<T> builder`。



**最后的方法`build`方法调用了函数类型属性`builder`。**

**记住`StreamBuilder`的这个`builder`实现是我们构造`StreamBuilder`时传入完成的。**

剩下好些个重写方法，暂时不管，小憩一下，



继续看看它的父类：

```dart
abstract class StreamBuilderBase<T, S> extends StatefulWidget {
  /// Creates a [StreamBuilderBase] connected to the specified [stream].
  const StreamBuilderBase({ Key key, this.stream }) : super(key: key);

  final Stream<T> stream;

  S initial();

  S afterConnected(S current) => current;

  S afterData(S current, T data);

  S afterError(S current, Object error) => current;

  S afterDone(S current) => current;

  S afterDisconnected(S current) => current;

  /// Returns a Widget based on the [currentSummary].
  Widget build(BuildContext context, S currentSummary);

  @override
  State<StreamBuilderBase<T, S>> createState() => _StreamBuilderBaseState<T, S>();
}
```

`StreamBuilderBase`是一个抽象泛型类。

通过这两处泛型类，可以知道这里的泛型 `<S>` 其实就是 `AsyncSnapshot<T>`。

下面提供了很多关于 `S`的抽象方法，暂且放一放，知道这些抽象方法在`StreamBuilder`实现了即可。

`StreamBuilderBase`继承了`StatefulWidget`。

由此它必定重写`createState`，创建了`_StreamBuilderBaseState`实例。

创建了`_StreamBuilderBaseState`后，我们知道`State`生命周期有`initState`和`build`。

看看它们的实现：

```dart
class _StreamBuilderBaseState<T, S> extends State<StreamBuilderBase<T, S>> {
  StreamSubscription<T> _subscription;
  S _summary;

  @override
  void initState() {
    super.initState();
    _summary = widget.initial();
    _subscribe();
  }

  @override
  void didUpdateWidget(StreamBuilderBase<T, S> oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.stream != widget.stream) {
      if (_subscription != null) {
        _unsubscribe();
        _summary = widget.afterDisconnected(_summary);
      }
      _subscribe();
    }
  }

  @override
  Widget build(BuildContext context) => widget.build(context, _summary);

  @override
  void dispose() {
    _unsubscribe();
    super.dispose();
  }

  void _subscribe() {
    if (widget.stream != null) {
      _subscription = widget.stream.listen((T data) {
        setState(() {
          _summary = widget.afterData(_summary, data);
        });
      }, onError: (Object error) {
        setState(() {
          _summary = widget.afterError(_summary, error);
        });
      }, onDone: () {
        setState(() {
          _summary = widget.afterDone(_summary);
        });
      });
      _summary = widget.afterConnected(_summary);
    }
  }

  void _unsubscribe() {
    if (_subscription != null) {
      _subscription.cancel();
      _subscription = null;
    }
  }
}
```



看下`initState`代码`_summary = widget.initial();`，

调用了`widget`的`initial`方法。

这个`widget`指向`StreamBuilderBase`，它的`initial`方法是抽象的。

没关系，刚才说了它有实现类`StreamBuilder`,看看它的实现：

```dart
 @override
  AsyncSnapshot<T> initial() => AsyncSnapshot<T>.withData(ConnectionState.none, initialData);
```

看下`AsyncSnapshot`实现：

```dart
@immutable
class AsyncSnapshot<T> {
  const AsyncSnapshot._(this.connectionState, this.data, this.error)
    : assert(connectionState != null),
      assert(!(data != null && error != null));

  const AsyncSnapshot.nothing() : this._(ConnectionState.none, null, null);
  const AsyncSnapshot.withData(ConnectionState state, T data) : this._(state, data, null);
  const AsyncSnapshot.withError(ConnectionState state, Object error) : this._(state, null, error);

  /// Current state of connection to the asynchronous computation.
  final ConnectionState connectionState;

  final T data;
}
```

可以看到这个异步快照(暂时这么叫)类并没有做什么，

只是对从`StreamBuilder`传进来的`initialData`和`ConnectionState`以及一个`error`的一个包装。

目前只要知道能从异步快照中拿到`initialData`和`error`及`ConnectionState`状态即可。

包装好的异步快照赋值给了`_summary`。

权且不管`initState`其他代码，现在我们已经拿到了异步快照，

假如已经`initState`执行完毕，那么就该回调`build`方法构建widget了。



看看`build`函数实现：`widget.build(context, _summary)`，就这一行调用。

这个`State`没有自己创建widget，而是交给了其对应的`widget`的`build`处理。

该`build`又是个抽象方法，如上所述具体实现在`StreamBuilder`：

```dart
@override
  Widget build(BuildContext context, AsyncSnapshot<T> currentSummary) => builder(context, currentSummary);
```

**上面说了`StreamBuilder`里的这个`builder`就是当初我们创建`StreamBuilder`传参的`builder`。**

**`builder`参数类型为`BuildContext context, AsyncSnapshot<T> snapshot`。**

**所以搞了半天，你从`StreamBuilder`的`initialData`传进去的数据，**

**经过异步快照包装一下，又从`StreamBuilder`的`builder`返回来供你使用了。**

**`builder`最终返回`widget`类型。在`builder`代码块中你可以根据异步快照信息来显示你的控件。**

**目前来看，如果不是首次获取的图片，并且内存缓存还没有被回收，那么可以通过`initialData`直接进行读取图片显示。**

**至此你应该知道内存缓存数据的来去流程了。**



上面我们说假如`initState`已经执行完毕，

其实并没有啊，返回去继续看`initState`，里面还调用了`_subscribe`：

```dart
  void _subscribe() {
    if (widget.stream != null) {
      _subscription = widget.stream.listen((T data) {
        setState(() {
          _summary = widget.afterData(_summary, data);
        });
      }, onError: (Object error) {
        setState(() {
          _summary = widget.afterError(_summary, error);
        });
      }, onDone: () {
        setState(() {
          _summary = widget.afterDone(_summary);
        });
      });
      _summary = widget.afterConnected(_summary);
    }
  }
```

如果`stream`不为空，则设置`stream`监听。

看下监听函数参数：

```dart
  StreamSubscription<T> listen(void onData(T event),
      {Function onError, void onDone(), bool cancelOnError});
```

这里有`onData`、`onError`、`onDone`三个函数参数。

这三个参数分别会在`stream`对应的`StreamController`执行`add`、`addError`和`close`时进行触发。

也就是说：

**`StreamController.add`执行时，触发`_summary = widget.afterData(_summary, data);`**

**`StreamController.addError`执行时，触发`_summary = widget.afterError(_summary, data);`**

**`StreamController.close`执行时，触发`_summary = widget.afterConnected(_summary, data);`**

至于`stream`和`StreamController`怎么扯上关系的，还要从`StreamBuilder`构造函数参数`stream`看起。



我们看到`_cacheManager().getFile`是返回了`Stream`。

在`getFile`里面创建了`StreamController`实例，

而每个`StreamController`实例控制着一个`stream`：

```dart
abstract class StreamController<T> implements StreamSink<T> {
  /** The stream that this controller is controlling. */
  Stream<T> get stream;
}
```

通过`streamController.stream`直接返回了构造函数所需的`stream`实例。

现在我们清楚了原来

`streamController.stream`和上面`_subscribe`中`widget.stream`是同一个对象。

由于上面设置了`widget.stream`监听，

所以我们后面对`streamController`的操作都会通过监听回调相应的函数。

关系绑定好了，我们继续看代码：

```dart
  _pushFileToStream(StreamController streamController, String url,
      Map<String, String> headers) async {
    FileInfo cacheFile;
    try {
      cacheFile = await getFileFromCache(url);
      if (cacheFile != null) {
        streamController.add(cacheFile);
      }
    } catch (e) {
      print(
          "CacheManager: Failed to load cached file for $url with error:\n$e");
    }
    if (cacheFile == null || cacheFile.validTill.isBefore(DateTime.now())) {
      try {
        var webFile = await webHelper.downloadFile(url, authHeaders: headers);
        if (webFile != null) {
          streamController.add(webFile);
        }
      } catch (e) {
        assert(() {
          print(
              "CacheManager: Failed to download file from $url with error:\n$e");
          return true;
        }());
        if (cacheFile == null && streamController.hasListener) {
          streamController.addError(e);
        }
      }
    }
    streamController.close();
  }
```

上面讲本地缓存已经看过一遍了，这次应该不慌了吧。

代码大概流程就是

如果我从`getFileFromCache`获取到了数据，将调用`streamController.add(cacheFile)`。

如果没有获取到我将从网络获取，

如果我从`webHelper.downloadFile`获取到了数据，也调用`streamController.add(webFile)`。

如果期间出现异常，将调用`streamController.addError(e)`。

到最后调用`streamController.close()`。

上面说了这三个函数调用时，分别回调监听函数中的`onData`、`onError`、`onDone`。



假如获取数据成功调用了`onData`，则调用`_summary = widget.afterData(_summary, data)`。

这里的`widget`是抽象类，实现方法从`StreamBuilder`里面找：

```dart
@override
  AsyncSnapshot<T> afterData(AsyncSnapshot<T> current, T data) {
    return AsyncSnapshot<T>.withData(ConnectionState.active, data);
  }

  @override
  AsyncSnapshot<T> afterError(AsyncSnapshot<T> current, Object error) {
    return AsyncSnapshot<T>.withError(ConnectionState.active, error);
  }

  @override
  AsyncSnapshot<T> afterDone(AsyncSnapshot<T> current) => current.inState(ConnectionState.done);
```

这里把三个实现函数都拿出来了，

可以看到`afterData`调用后也只是对拿到的`<T>`和`ConnectionState`进行包装。

而`afterError`是对一个`error`和`ConnectionState`进行包装。

`afterDone`则只是把最后的`_summary`中`ConnectionState`状态改为`done`。

你应该注意到这三个函数都是包裹在`setState`中的。

因此导致这三个函数的调用都将导致该`State`的`build`函数调用。

上面说了该`State`的`build`没有自己生成widget，

而是调用`widget.build(context, _summary)`。

而该实现方法调用了`builder(context, currentSummary)`

最终把`_summary`外送到`StreamBuilder`的构造函数参数`builder`中。

这块是我们自己实现的。



总的来说，`initialData`和`stream`两个地方都是为`builder`提供数据的。

最终的落脚点是`builder`的实现，我们来看看源码：

```dart
      builder: (BuildContext context, AsyncSnapshot<FileInfo> snapshot) {
        if (snapshot.hasError) {
          // error
          if (_imageHolders.length == 0 || _imageHolders.last.error == null) {
            _addImage(image: null, error: snapshot.error);
          }
        } else {
          var fileInfo = snapshot.data;
          if (fileInfo == null) {
            // placeholder
            if (_imageHolders.length == 0 || _imageHolders.last.image != null) {
              _addImage(
                  image: null,
                  duration: widget.placeholderFadeInDuration ?? Duration.zero);
            }
          } else if (_imageHolders.length == 0 ||
              _imageHolders.last.image?.originalUrl != fileInfo.originalUrl ||
              _imageHolders.last.image?.validTill != fileInfo.validTill) {
            _addImage(
                image: fileInfo,
                duration: _imageHolders.length > 0 ? null : Duration.zero);
          }
        }

        var children = <Widget>[];
        for (var holder in _imageHolders) {
          if (holder.error != null) {
            children.add(_transitionWidget(
                holder: holder, child: _errorWidget(context, holder.error)));
          } else if (holder.image == null) {
            children.add(_transitionWidget(
                holder: holder, child: _placeholder(context)));
          } else {
            children.add(_transitionWidget(
                holder: holder,
                child: _image(
                  context,
                  FileImage(holder.image.file),
                )));
          }
        }

        return Stack(
          fit: StackFit.passthrough,
          alignment: widget.alignment,
          children: children.toList(),
        );
      }
```

这段代码从中间`var children = <Widget>[]`可以分为上下两部分。

其中上部分就是根据`snapshot`的状态来填充`_imageHolders`：

如果`snapshot.hasError`返回`true`，

说明之前有调用过`streamControler.addError`，否则应该是false的。



`_imageHolders`是`_ImageTransitionHolder`类型列表：

```dart
class _ImageTransitionHolder {
  final FileInfo image;
  AnimationController animationController;
  final Object error;
  Curve curve;
  final TickerFuture forwardTickerFuture;

  _ImageTransitionHolder({
    this.image,
    @required this.animationController,
    this.error,
    this.curve: Curves.easeIn,
  }) : forwardTickerFuture = animationController.forward();

  dispose() {
    if (animationController != null) {
      animationController.dispose();
      animationController = null;
    }
  }
}
```

通过源码可以看到`_ImageTransitionHolder`也是一个包装类。

包装了`image`、`error`和动画控制器。



当`snapshot.hasError`返回`true`时，

添加一个包装了错误信息的`_ImageTransitionHolder`到`_imageHolders`。

如果获取到了数据添加一个包装了`FileInfo`信息的`_ImageTransitionHolder`到`_imageHolders`。

如果没有获取到数据就添加一个空`FileInfo`。



下部分通过遍历`_imageHolders`，根据不同信息创建不同的widget：

```dart
        var children = <Widget>[];
        for (var holder in _imageHolders) {
          if (holder.error != null) {
            children.add(_transitionWidget(
                holder: holder, child: _errorWidget(context, holder.error)));
          } else if (holder.image == null) {
            children.add(_transitionWidget(
                holder: holder, child: _placeholder(context)));
          } else {
            children.add(_transitionWidget(
                holder: holder,
                child: _image(
                  context,
                  FileImage(holder.image.file),
                )));
          }
        }
```

拿到`error`的`_ImageTransitionHolder`时，

会给`child`设置`_errorWidget`：

```dart
  _errorWidget(BuildContext context, Object error) {
    return widget.errorWidget != null
        ? widget.errorWidget(context, widget.imageUrl, error)
        : _placeholder(context);
  }
```

可以看到`_errorWidget`函数里面就是调用创建`CachedNetworkImage`时传递的`errorWidget`。

如果没有设置`errorWidget`,则调用`_placeholder`函数。

可知我们设置的错误信息占位控件是在此时被填充显示的。



同样在遍历中，当`holder.image == null`为true时，

也会调用`_placeholder`：

```dart
  _placeholder(BuildContext context) {
    return widget.placeholder != null
        ? widget.placeholder(context, widget.imageUrl)
        : SizedBox(
            width: widget.width,
            height: widget.height,
          );
  }
```

同样你会发现，这里调用了我们创建`CachedNetworkImage`时传递的`placeholder`。

这是加载到数据前的默认显示占位控件。



如果前两个判断都没有成立，说明现在正常获取到了数据，

调用了`_image`：

```dart
  _image(BuildContext context, ImageProvider imageProvider) {
    return widget.imageBuilder != null
        ? widget.imageBuilder(context, imageProvider)
        : Image(
            image: imageProvider,
            fit: widget.fit,
            width: widget.width,
            height: widget.height,
            alignment: widget.alignment,
            repeat: widget.repeat,
            color: widget.color,
            colorBlendMode: widget.colorBlendMode,
            matchTextDirection: widget.matchTextDirection,
            filterQuality: widget.filterQuality,
          );
  }
```

这里调用了`widget.imageBuilder`，

如果它没有值，则使用默认的`Image`控件显示图片，

如果它有值，则把`imageProvider`交给它处理，

这里的`imageProvider`是`FileImage`类型，它包装了从`FileInfo`获取到的`file`。

而这里的`imageBuilder`又是我们自定义的部分。

所以如果默认的`Image`显示不能满足你的要求，

你可以通道自定义`imageBuilder`实现来达到理想效果。



至此`CachedNetworkImage`框架大体流程分析完了，你看懂了多少？





这里有个疑问，为什么`_imageHolders`要使用List，起了什么作用？

另外还有个问题是之前说了stream监听，每次回调都最终从新调用`builder`。

一个图片显示过程可能面临好几次的`build`。这块需要考虑是否有可能会有性能问题？