# 介绍

Flutter不具备直接和Platform通信的能力，所以诞生了**platformchannel**。

举例来说dart没有直接和Java交互的能力，

但是Dart可以和C++交互，而C++也可以和Java交互。

所以C++实现的Engine/Embeder充当了桥梁角色。

直接看下Flutter和Android端通信的相关类图：

![](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/platformchannel.png)

因为中间涉及语言的转换，所以数据传递前进行编码，得到数据时进行解码。

为了能响应对端的调用，需要进行方法注册(setxxHandler)，

注册的回调，Flutter端存在`ChannelBuffers._channels`。

Android端存在于`DartMessenger.messageHandlers`。

# 以BasicMessageChannel为例分析

## Android端send分析

创建好**MessagePllugin**后，调用其**channel**属性发送消息：

```kotlin
       MessagePllugin(flutterEngine, this).run {
            channel.send("i'am from MessagePllugin")
        }
```

查看`channel.send`方法实现：

```java
  public void send(@Nullable T message) {
    send(message, null);
  }

  @UiThread
  public void send(@Nullable T message, @Nullable final Reply<T> callback) {
    messenger.send(
        name,
        codec.encodeMessage(message),
        callback == null ? null : new IncomingReplyHandler(callback));
  }
```

这里调用了`messenger.send()`，这个**messenger**类型是接口**BinaryMessenger**，

其实际类型是**BinaryMessenger**默认实现类**DefaultBinaryMessenger**。

该类的**send**方法实现为：

```java
   @Override
    @UiThread
    public void send(
        @NonNull String channel,
        @Nullable ByteBuffer message,
        @Nullable BinaryMessenger.BinaryReply callback) {
      messenger.send(channel, message, callback);
    }
```

这里又一个**messenger**，不过它的类型是**DartMessenger**。

```java
  @Override
  public void send(
      @NonNull String channel,
      @Nullable ByteBuffer message,
      @Nullable BinaryMessenger.BinaryReply callback) {
    TraceSection.begin("DartMessenger#send on " + channel);
    try {
      Log.v(TAG, "Sending message with callback over channel '" + channel + "'");
      int replyId = nextReplyId++;
      if (callback != null) {
        pendingReplies.put(replyId, callback);
      }
      if (message == null) {
        flutterJNI.dispatchEmptyPlatformMessage(channel, replyId);
      } else {
        flutterJNI.dispatchPlatformMessage(channel, message, message.position(), replyId);
      }
    } finally {
      TraceSection.end();
    }
  }
```

这里的**send**调用了**flutterJNI**的**dispatchPlatformMessage**方法发送消息。

```java
  @UiThread
  public void dispatchPlatformMessage(
      @NonNull String channel, @Nullable ByteBuffer message, int position, int responseId) {
    ensureRunningOnMainThread();
    if (isAttached()) {
      nativeDispatchPlatformMessage(nativeShellHolderId, channel, message, position, responseId);
    } else {
      Log.w(
          TAG,
          "Tried to send a platform message to Flutter, but FlutterJNI was detached from native C++. Could not send. Channel: "
              + channel
              + ". Response ID: "
              + responseId);
    }
  }

    // Send a data-carrying platform message to Dart.
  private native void nativeDispatchPlatformMessage(
      long nativeShellHolderId,
      @NonNull String channel,
      @Nullable ByteBuffer message,
      int position,
      int responseId);
```

**dispatchPlatformMessage**调用了**native**方法**nativeDispatchPlatformMessage**。

这样消息从Android端发送给了Engine。

## Flutter端setMessageHandler分析

上边消息从Android端发送给了Engine，

接下来分析Engine收到消息后如何传递给Flutter的。

看下**setMessageHandler**实现：

```dart
  void setMessageHandler(Future<T> Function(T? message)? handler) {
    if (handler == null) {
      binaryMessenger.setMessageHandler(name, null);
    } else {
      binaryMessenger.setMessageHandler(name, (ByteData? message) async {
        return codec.encodeMessage(await handler(codec.decodeMessage(message)));
      });
    }
  }
```

可以看到这里对参数**handler**进行了封装并通过**binaryMessenger**进行传递。

这里的**binaryMessenger**是**BinaryMessenger** 的

默认实现类 **_DefaultBinaryMessenger**。其实现方法如下：

```dart
  @override
  void setMessageHandler(String channel, MessageHandler? handler) {
    if (handler == null) {
      ui.channelBuffers.clearListener(channel);
    } else {
      ui.channelBuffers.setListener(channel, (ByteData? data, ui.PlatformMessageResponseCallback callback) async {
        ByteData? response;
        try {
          response = await handler(data);
        } catch (exception, stack) {
          FlutterError.reportError(FlutterErrorDetails(
            exception: exception,
            stack: stack,
            library: 'services library',
            context: ErrorDescription('during a platform message callback'),
          ));
        } finally {
          callback(response);
        }
      });
    }
  }
```

这里再次对参数**handler**进行了封装，传入到**setListener**：

```dart
  void setListener(String name, ChannelCallback callback) {
    final _Channel channel = _channels.putIfAbsent(name, () => _Channel());
    channel.setListener(callback);
  }
```

这里如果是首次的话，**_channels**中不存在**name**的**key**值，

所以创建 **_Channel**进行存储并返回，把**callback**通过 **setListener**设置给它。

```dart
  void setListener(ChannelCallback callback) {
    final bool needDrain = _channelCallbackRecord == null;
    _channelCallbackRecord = _ChannelCallbackRecord(callback);
    if (needDrain && !_draining) {
      _drain();
    }
  }
```

这里再次对**callback**进行封装，包到了 **_ChannelCallbackRecord**。

至此**sendMessengerHandler**流程分析完了，记住最初的**handler**经过三次封装进入到了

**channel._channelCallbackRecord**中。

当Android发来消息时，`PlatformDispatcher._dispatchPlatformMessage()`会被调用

```dart
  void _dispatchPlatformMessage(String name, ByteData? data, int responseId) {
    if (name == ChannelBuffers.kControlChannelName) {
      try {
        channelBuffers.handleMessage(data!);
      } finally {
        _respondToPlatformMessage(responseId, null);
      }
    } else if (onPlatformMessage != null) {
      _invoke3<String, ByteData?, PlatformMessageResponseCallback>(
        onPlatformMessage,
        _onPlatformMessageZone,
        name,
        data,
        (ByteData? responseData) {
          _respondToPlatformMessage(responseId, responseData);
        },
      );
    } else {
      channelBuffers.push(name, data, (ByteData? responseData) {
        _respondToPlatformMessage(responseId, responseData);
      });
    }
  }
```

这里会执行最后代码块：

```dart
  void push(String name, ByteData? data, PlatformMessageResponseCallback callback) {
    final _Channel channel = _channels.putIfAbsent(name, () => _Channel());
    if (channel.push(_StoredMessage(data, callback))) {
      _printDebug(
        'A message on the $name channel was discarded before it could be handled.\n'
        'This happens when a plugin sends messages to the framework side before the '
        'framework has had an opportunity to register a listener. See the ChannelBuffers '
        'API documentation for details on how to configure the channel to expect more '
        'messages, or to expect messages to get discarded:\n'
        '  https://api.flutter.dev/flutter/dart-ui/ChannelBuffers-class.html'
      );
    }
  }
```

由于上面已经通过**putIfAbsent**设置了值，所以这里会直接返回创建好的**channel**。

Android端发来的数据封装到 **_StoredMessage**。

```dart
  bool push(_StoredMessage message) {
    if (!_draining && _channelCallbackRecord != null) {
      assert(_queue.isEmpty);
      _channelCallbackRecord!.invoke(message.data, message.invoke);
      return false;
    }
    if (_capacity <= 0) {
      return debugEnableDiscardWarnings;
    }
    final bool result = _dropOverflowMessages(_capacity - 1);
    _queue.addLast(message);
    return result;
  }
```

**_draining**默认为**false**，且 **_channelCallbackRecord**里封装了**handler**，

所以不为空，所以会调用`_channelCallbackRecord!.invoke`：

```dart
  void invoke(ByteData? dataArg, PlatformMessageResponseCallback callbackArg) {
    _invoke2<ByteData?, PlatformMessageResponseCallback>(_callback, _zone, dataArg, callbackArg);
  }

  void _invoke2<A1, A2>(void Function(A1 a1, A2 a2)? callback, Zone zone, A1 arg1, A2 arg2) {
  if (callback == null) {
    return;
  }
  if (identical(zone, Zone.current)) {
    callback(arg1, arg2);
  } else {
    zone.runGuarded(() {
      callback(arg1, arg2);
    });
  }
}
```

**_invoke2**调用了`callback(arg1, arg2);`。

这个**callback**就是 **_callback**，就是对**handler**进行二次封装函数：

```dart
     ui.channelBuffers.setListener(channel, (ByteData? data, ui.PlatformMessageResponseCallback callback) async {
        ByteData? response;
        try {
          response = await handler(data);
        } catch (exception, stack) {
          FlutterError.reportError(FlutterErrorDetails(
            exception: exception,
            stack: stack,
            library: 'services library',
            context: ErrorDescription('during a platform message callback'),
          ));
        } finally {
          callback(response);
        }
      });
```

可以看到这个**setListener**第二个参数为函数类型，

**callback**调用时，即调用该函数类型参数。

也就执行了`await handler(data);`，这里**handler**是首次封装代码块地方：

```dart
 binaryMessenger.setMessageHandler(name, (ByteData? message) async {
        return codec.encodeMessage(await handler(codec.decodeMessage(message)));
      });
```

这里对**message**进行解码通过调用**handler**传递。

此时的**handler**已经是我们调用**setMessageHandler**时的函数了：

```dart
    BasicMessageChannel basicMessageChannel =
        const BasicMessageChannel("MessagePllugin", StandardMessageCodec())
          ..setMessageHandler((msg) {
            print('BasicMessageChannel setMessageHandler ${msg}');
            return Future.value(msg);
          });
```

至此Android端发送数据，Flutter端接收数据流程已分析完毕，

接下来分析Flutter端发送数据，Android端接收流程。

## Flutter端send分析

```dart
  Future<T?> send(T message) async {
    return codec.decodeMessage(await binaryMessenger.send(name, codec.encodeMessage(message)));
  }
```

首先**codec**对数据进行编码`codec.encodeMessage(message)`。

**send**方法直接调用了`binaryMessenger.send`：

```dart
  @override
  Future<ByteData?> send(String channel, ByteData? message) {
    final Completer<ByteData?> completer = Completer<ByteData?>();
    ui.PlatformDispatcher.instance.sendPlatformMessage(channel, message, (ByteData? reply) {
      try {
        completer.complete(reply);
      } catch (exception, stack) {
        FlutterError.reportError(FlutterErrorDetails(
          exception: exception,
          stack: stack,
          library: 'services library',
          context: ErrorDescription('during a platform message response callback'),
        ));
      }
    });
    return completer.future;
  }
```

直接调用了`PlatformDispatcher.instance.sendPlatformMessage`：

```dart
  void sendPlatformMessage(String name, ByteData? data, PlatformMessageResponseCallback? callback) {
    final String? error =
        _sendPlatformMessage(name, _zonedPlatformMessageResponseCallback(callback), data);
    if (error != null) {
      throw Exception(error);
    }
  }

  String? _sendPlatformMessage(String name, PlatformMessageResponseCallback? callback, ByteData? data) =>
      __sendPlatformMessage(name, callback, data);

  @Native<Handle Function(Handle, Handle, Handle)>(symbol: 'PlatformConfigurationNativeApi::SendPlatformMessage')
  external static String? __sendPlatformMessage(String name, PlatformMessageResponseCallback? callback, ByteData? data);
```

可以看到在**PlatformDispatcher**中，经过连续调用最后调用了**external**的 **__sendPlatformMessage**方法，这个是**native**方法。数据由此传递到了Engine。

## Android端setMessageHandler分析

Android端自定义的**MessagePllugin**设置了**handler**：

```kotlin
        channel = BasicMessageChannel(
            flutterEngine.dartExecutor.binaryMessenger,
            name,
            StandardMessageCodec()
        ).apply { setMessageHandler(this@MessagePllugin) }
```

看下**setMessagerHandler**实现：

```kotlin
  @UiThread
  public void setMessageHandler(@Nullable final MessageHandler<T> handler) {
    // We call the 2 parameter variant specifically to avoid breaking changes in
    // mock verify calls.
    // See https://github.com/flutter/flutter/issues/92582.
    if (taskQueue != null) {
      messenger.setMessageHandler(
          name, handler == null ? null : new IncomingMessageHandler(handler), taskQueue);
    } else {
      messenger.setMessageHandler(
          name, handler == null ? null : new IncomingMessageHandler(handler));
    }
  }
```

直接调用了`messenger.setMessageHandler`。

这个**messenger**类型为**BinaryMessenger**默认实现类**DefaultBinaryMessenger**。

注意这里对**handler**进行了首次封装**IncomingMessageHandler**。

看下`messenger.setMessageHandler`实现：

```kotlin
    @Override
    @UiThread
    public void setMessageHandler(
        @NonNull String channel, @Nullable BinaryMessenger.BinaryMessageHandler handler) {
      messenger.setMessageHandler(channel, handler);
    }
```

这里的**messenger**类型为**DartMessenger**：

```kotlin
  @Override
  public void setMessageHandler(
      @NonNull String channel, @Nullable BinaryMessenger.BinaryMessageHandler handler) {
    setMessageHandler(channel, handler, null);
  }

  @Override
  public void setMessageHandler(
      @NonNull String channel,
      @Nullable BinaryMessenger.BinaryMessageHandler handler,
      @Nullable TaskQueue taskQueue) {
    if (handler == null) {
      Log.v(TAG, "Removing handler for channel '" + channel + "'");
      synchronized (handlersLock) {
        messageHandlers.remove(channel);
      }
      return;
    }
    DartMessengerTaskQueue dartMessengerTaskQueue = null;
    if (taskQueue != null) {
      dartMessengerTaskQueue = createdTaskQueues.get(taskQueue);
      if (dartMessengerTaskQueue == null) {
        throw new IllegalArgumentException(
            "Unrecognized TaskQueue, use BinaryMessenger to create your TaskQueue (ex makeBackgroundTaskQueue).");
      }
    }
    Log.v(TAG, "Setting handler for channel '" + channel + "'");

    List<BufferedMessageInfo> list;
    synchronized (handlersLock) {
      messageHandlers.put(channel, new HandlerInfo(handler, dartMessengerTaskQueue));
      list = bufferedMessages.remove(channel);
      if (list == null) {
        return;
      }
    }
    for (BufferedMessageInfo info : list) {
      dispatchMessageToQueue(
          channel, messageHandlers.get(channel), info.message, info.replyId, info.messageData);
    }
  }
```

这里主要看加锁部分，这里对**handler**进行了二次封装，存储到**messageHandlers**中。

接收到消息时，会调用`flutterJni.handlePlatformMessage`：

```java
  @VisibleForTesting
  public void handlePlatformMessage(
      @NonNull final String channel,
      ByteBuffer message,
      final int replyId,
      final long messageData) {
    if (platformMessageHandler != null) {
      platformMessageHandler.handleMessageFromDart(channel, message, replyId, messageData);
    } else {
      nativeCleanupMessageData(messageData);
    }
    // TODO(mattcarroll): log dropped messages when in debug mode
    // (https://github.com/flutter/flutter/issues/25391)
  }
```

由于`DartExcutor.onAttachedToJNI()`的调用，

通过`flutterJNI.setPlatformMessageHandler(dartMessenger);`

给**platformMessageHandler**设置了值，所以调用**handleMessageFromDart**：

```java
  @Override
  public void handleMessageFromDart(
      @NonNull String channel, @Nullable ByteBuffer message, int replyId, long messageData) {
    HandlerInfo handlerInfo;
    boolean messageDeferred;
    // This lock can potentially be a bottleneck and could replaced with a
    // read/write lock.
    synchronized (handlersLock) {
      handlerInfo = messageHandlers.get(channel);
      messageDeferred = (enableBufferingIncomingMessages.get() && handlerInfo == null);
      if (messageDeferred) {
        if (!bufferedMessages.containsKey(channel)) {
          bufferedMessages.put(channel, new LinkedList<>());
        }
        List<BufferedMessageInfo> buffer = bufferedMessages.get(channel);
        buffer.add(new BufferedMessageInfo(message, replyId, messageData));
      }
    }
    if (!messageDeferred) {
      dispatchMessageToQueue(channel, handlerInfo, message, replyId, messageData);
    }
  }
```

这里取出了之前存储的**handlerInfo**，传递到**dispatchMessageToQueue**：

```java
  private void dispatchMessageToQueue(
      @NonNull String channel,
      @Nullable HandlerInfo handlerInfo,
      @Nullable ByteBuffer message,
      int replyId,
      long messageData) {
    // Called from any thread.
    final DartMessengerTaskQueue taskQueue = (handlerInfo != null) ? handlerInfo.taskQueue : null;
    TraceSection.beginAsyncSection("PlatformChannel ScheduleHandler on " + channel, replyId);
    Runnable myRunnable =
        () -> {
          TraceSection.endAsyncSection("PlatformChannel ScheduleHandler on " + channel, replyId);
          TraceSection.begin("DartMessenger#handleMessageFromDart on " + channel);
          try {
            invokeHandler(handlerInfo, message, replyId);
            if (message != null && message.isDirect()) {
              // This ensures that if a user retains an instance to the ByteBuffer and it
              // happens to be direct they will get a deterministic error.
              message.limit(0);
            }
          } finally {
            // This is deleting the data underneath the message object.
            flutterJNI.cleanupMessageData(messageData);
            TraceSection.end();
          }
        };
    final DartMessengerTaskQueue nonnullTaskQueue =
        taskQueue == null ? platformTaskQueue : taskQueue;
    nonnullTaskQueue.dispatch(myRunnable);
  }
```

这里主要看看**invokeHandler**方法：

```java
  private void invokeHandler(
      @Nullable HandlerInfo handlerInfo, @Nullable ByteBuffer message, final int replyId) {
    // Called from any thread.
    if (handlerInfo != null) {
      try {
        Log.v(TAG, "Deferring to registered handler to process message.");
        handlerInfo.handler.onMessage(message, new Reply(flutterJNI, replyId));
      } catch (Exception ex) {
        Log.e(TAG, "Uncaught exception in binary message listener", ex);
        flutterJNI.invokePlatformMessageEmptyResponseCallback(replyId);
      } catch (Error err) {
        handleError(err);
      }
    } else {
      Log.v(TAG, "No registered handler for message. Responding to Dart with empty reply message.");
      flutterJNI.invokePlatformMessageEmptyResponseCallback(replyId);
    }
  }
```

调用了`handlerInfo.handler`解包了第二次封装，

此时`handlerInfo.handler`类型为**IncomingMessageHandler**。

```java
    @Override
    public void onMessage(@Nullable ByteBuffer message, @NonNull final BinaryReply callback) {
      try {
        handler.onMessage(
            codec.decodeMessage(message),
            new Reply<T>() {
              @Override
              public void reply(T reply) {
                callback.reply(codec.encodeMessage(reply));
              }
            });
      } catch (RuntimeException e) {
        Log.e(TAG + name, "Failed to handle message", e);
        callback.reply(null);
      }
    }
```

**onMessage**方法中再次调用了**handler.onMessage**。

此时的**handler**是我们最初传递的即**MessagePllugin**，因为该类实现了**MessageHandler**接口,这里的**onMessage**是我们重写的方法：

```kotlin
class MessagePllugin(flutterEngine: FlutterEngine, context: Activity) : MessageHandler<Any> {
    lateinit var channel: BasicMessageChannel<Any>

    companion object {
        const val name = "MessagePllugin"
    }

    init {
        channel = BasicMessageChannel(
            flutterEngine.dartExecutor.binaryMessenger,
            name,
            StandardMessageCodec()
        ).apply { setMessageHandler(this@MessagePllugin) }
    }

    override fun onMessage(message: Any?, reply: BasicMessageChannel.Reply<Any>) {
        reply.reply("reply from android MessagePllugin")
        Log.w(javaClass.simpleName, "message=$message")
    }

}
```

至此Flutter端发送数据，Android接收也已经分析完成。

## 关于Reply

看下我们实现**MessageHandler**后重写的**onMessage**方法：

```kotlin
    override fun onMessage(message: Any?, reply: BasicMessageChannel.Reply<Any>) {
        reply.reply("reply from android MessagePllugin")
        Log.w(javaClass.simpleName, "message=$message")
    }
```

当我们收到消息后，可以通过`reply.reply()`进行回复。

这里有个问题，系统怎么知道这个**reply**是回复这次消息的？

前边说过了当我们收到Flutter发来消息时，会调用`flutterJNI.handlePlatformMessage`

```java
  @VisibleForTesting
  public void handlePlatformMessage(
      @NonNull final String channel,
      ByteBuffer message,
      final int replyId,
      final long messageData) {
    if (platformMessageHandler != null) {
      platformMessageHandler.handleMessageFromDart(channel, message, replyId, messageData);
    } else {
      nativeCleanupMessageData(messageData);
    }
    // TODO(mattcarroll): log dropped messages when in debug mode
    // (https://github.com/flutter/flutter/issues/25391)
  }
```

可以看到这里通过**channel**除了返回数据**message**外还带了**replyId**。

经过调用把**flutterJNI**和**replyId**封装到`BinaryMessenger.BinaryReply`实现类**Reply**中，

通过`handlerInfo.handler.onMessage()`传递

接着调用`handler.onMessage`方法：

```java
try {
        handler.onMessage(
            codec.decodeMessage(message),
            new Reply<T>() {
              @Override
              public void reply(T reply) {
                callback.reply(codec.encodeMessage(reply));
              }
            });
      } catch (RuntimeException e) {
        Log.e(TAG + name, "Failed to handle message", e);
        callback.reply(null);
      }
```

这里再次对上面的**Reply**进行封装。

这里的**new Reply**就是我们调用**reply.reply()** 用到的对象。

接着调用到`callback.reply()`，该方法如下：

```java
    @Override
    public void reply(@Nullable ByteBuffer reply) {
      if (done.getAndSet(true)) {
        throw new IllegalStateException("Reply already submitted");
      }
      if (reply == null) {
        flutterJNI.invokePlatformMessageEmptyResponseCallback(replyId);
      } else {
        flutterJNI.invokePlatformMessageResponseCallback(replyId, reply, reply.position());
      }
    }
```

可以看到跟随**message**返回的**replyId**，这里又跟着**ByteBuffer**一同发送回去了。

# 关于EventChannel

**BasicMessageChannel**和**MethodChannel**都是支持双向通信的，

但**EventChannel**只支持单向通信，即平台向Flutter端发送数据。

通过`events: EventChannel.EventSink?`进行发送。