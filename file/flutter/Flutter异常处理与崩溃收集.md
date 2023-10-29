# 0x00 前言

通常我们在写程序时都是假设执行期间不会发生不正确的事情，然后一撸到底。

但事实是我们需要把各种设备环境因素考虑进去，以便提供更好的用户体验。

所以我们需要良好的异常处理。

# 0x01 异常划分

说到异常划分，作为Java过来人，

下意识想到的就是受检异常(编译期异常)和非受检异常(运行时异常)。

但是Dart和Kotlin一样，都是运行时异常。

所以这里的异常是根据我使用Flutter过程中自己做的分类，

姑且分为**UI异常(Widget异常)**和**逻辑异常**。

## UI异常

在Flutter中，我把 `build`方法中出现的异常称为UI异常也叫**Widget异常**。

因为Flutter中的UI构建是基于通过`Widget build(BuildContext context)`方法的响应式构建。

Framework中构建Widget树时会执行`performRebuild`方法。

该方法中调用了我们熟知的`build`方法。

Framework中对`build`方法专门做了`try catch`处理：

```dart
    Widget built;
    try {
      built = build();
      debugWidgetBuilderValue(widget, built);
    } catch (e, stack) {
      built = ErrorWidget.builder(
        _debugReportException(
          ErrorDescription('building $this'),
          e,
          stack,
          informationCollector: () sync* {
            yield DiagnosticsDebugCreator(DebugCreator(this));
          },
        ),
      );
    } finally {
      // We delay marking the element as clean until after calling build() so
      // that attempts to markNeedsBuild() during build() will be ignored.
      _dirty = false;
      assert(_debugSetAllowIgnoredCallsToMarkNeedsBuild(false));
    }
```

进入`_debugReportException`：

```dart
FlutterErrorDetails _debugReportException(
  DiagnosticsNode context,
  dynamic exception,
  StackTrace stack, {
  InformationCollector informationCollector,
}) {
  final FlutterErrorDetails details = FlutterErrorDetails(
    exception: exception,
    stack: stack,
    library: 'widgets library',
    context: context,
    informationCollector: informationCollector,
  );
  FlutterError.reportError(details);
  return details;
}
```

可以看到这里调用了`FlutterError.reportError(details);`。

看样子这个类是专门处理错误相关的？

看看`reportError`操作：

```dart
  /// Calls [onError] with the given details, unless it is null.
  static void reportError(FlutterErrorDetails details) {
    assert(details != null);
    assert(details.exception != null);
    if (onError != null)
      onError(details);
  }
```

可以看到这里有个判断，

如果`onError`不为空则调用该函数。

而`onError`默认值是`static FlutterExceptionHandler onError = dumpErrorToConsole;`。

看来默认是打印异常信息到控制台的，

不过这是一个静态变量，我们也可以从新赋值处理的。

我们可以在app启动时这样处理：

```dart
    FlutterError.onError = (FlutterErrorDetails details,) {
      reportExp(details.exception,details.stack);//上报异常堆栈信息
    };
```

这样在所有Flutter页面`build`方法出现异常时，我们都会捕捉并上报。

**注意：并不是Widget在`build`中声明，那异常信息就一定是在`build`中抛出。**

比如

```dart
Column(
            children: <Widget>[
              Positioned(child: Text("哈哈")),
              ]
```

在这样摆放Widget时，IDE不会出现错误，

但是在运行时会出现异常，而且你设置了`FlutterError.onError`也无效。

究其原因是在把子Widget加入到Widget树时会对子Widget进行类型检查。

检查发现`Positioned`只能放在`Stack`中，

这一过程发生在`mount`到`build`调用之间。



## 逻辑异常

上面介绍了UI异常处理，那其他异常怎么办呢？

说到这可能你上来就是`try catch finally`素质三连。

但是我想说这素质三连只能在同步异常中有效。

异步代码需要另外处理。

### 同步异常

Flutter中同步异常我们可以使用`try catch finally`捕获。

使用方法和Java一样，不在细说：

```dart
try{
      String a;
      a.substring(10);
    }catch(error,stackTrace){
      reportExp(error,stackTrace);//上报异常堆栈信息
    }finally{
    }
```



### 异步异常

#### Future.catchError

Flutter中异步异常是无法通过素质三连进行捕获的。

Flutter的异步是基于`async await`关键字和`Future`类实现的。

在`Future`中可以通过`catchError`进行异步异常捕获，

具体操作是：

```dart
Future(() {
      String a;
      a.substring(10);
    }).catchError((error,stackTrace) {
      reportExp(error,stackTrace);//上报异常堆栈信息
    });
```

**注意：如果在你使用`await`等待`Future`完成，**

**此时你通过素质三连、`catchError`均可捕获异常。**

**但是如果你同时使用素质三连和`catchError`,那么只有`catchError`捕获到异常。**

如下代码只会打印`catch1`内容：

```dart
    try {
      await Future(() {
        String a;
        a.substring(10);
      }).catchError((error) {
        print("catch1 == ${error.toString()}");
      });
    } catch (e) {
      print("catch2 == ${e.toString()}");
    }
```

#### runZoned

异步异常处理的另一种方法是使用`Zone`。

`Zone`相当于一个沙盒，

```dart
R runZoned<R>(R body(),
    {Map zoneValues, ZoneSpecification zoneSpecification, Function onError}){
    
}
```

其中`body`方法作为代码块运行在沙盒环境中。

可以看到函数参数`onError`，通过该参数来进行异常处理。

如何把Flutter的代码放在沙盒环境中？

```dart
void main() {
  runZoned(() {
    runApp(MyApp());
  }, onError: (error, StackTrace stackTrace) {
      reportExp(error,stackTrace);//上报异常堆栈信息
  });
}
```

把`runApp`作为`runZoned`的`body`代码块运行即可。

这样，在未使用`catchError`的`Future`代码块中出现异常时，

会自动被`runZoned`的`onError`捕获：

```dart
        onPressed: () {
          Future(() {
            String a;
            a.substring(10);
          });
        }
```



通过`zoneSpecification`可以对`Zone`进行一些配置，这里不详述。



# 0x02 异常收集

通过上面的操作基本完成了对常见情况下异常捕获，

捕获到异常后的上报操作基本都基于现有平台(Android,iOS)，

这就需要使用平台通信。

在通信前可以把异常、堆栈信息转为String以便传递：

```dart
void reportExp(err, StackTrace stackTrace) {
  var data = {
    'message': err.toString(),
    'trace': null == stackTrace ? [] : _getTrace(stackTrace),
  };
  //MethodChannel通信
    
}

_getTrace(StackTrace stackTrace) {
  return Trace.format(stackTrace);
}
```

如果不打算传递堆栈，而只传递造成异常原因，

可以通过`Trace.from(stackTrace).frames.first.toString();`。

转换后的堆栈信息可以通过`MethodChannel`发送给相应平台。

关于`MethodChannel`使用这里不详述。