# 前言

工作中会有不少异步编程地方，看到相关知识点往往涉及`Runnable`和`Callable`。

但是看下源码就会发现这两个都是函数式接口，功能单一，感觉不是那么好用。

然后`Future`登场了，提供了取消和获取结果等几个方法：

```java
public interface Future<V> {
    boolean cancel(boolean mayInterruptIfRunning);
    boolean isCancelled();
    boolean isDone();
    V get() throws InterruptedException, ExecutionException;
    V get(long timeout, TimeUnit unit)
        throws InterruptedException, ExecutionException, TimeoutException;
}
```

但是这时候`Future`的使用仍然还是比较简单的，

在线程池提交任务的时候返回`Future`：

```
 ExecutorService executor = Executors.newSingleThreadExecutor();
 Future<String> future = executor.submit(new Callable<String>() {
            @Override
            public String call() throws Exception {
            	//耗时处理
                return "";
            }
        });
```

在我们依赖异步结果的时候通过`future.get()`获取结果，如果任务还没有完成，这会阻塞当前线程。

感觉`Future`并没有给我们异步编程带来多大便利，对下面任务它仍然很无力：

- 将两个异步计算合并为一个——这两个异步计算之间相互独立，同时第二个又依赖于第一个的结果。
- 等待`Future`集合中的所有任务都完成。
- 仅等待`Future`集合中最快结束的任务完成（有可能因为它们试图通过不同的方式计算同一个值），并返回它的结果。
- 应对`Future`的完成事件（即当`Future`的完成事件发生时会收到通知，并能使用`Future`计算的结果进行下一步的操作，不只是简单地阻塞等待操作的结果）。

好在，JDK8之后Java推出了 `CompletableFuture `，支持非阻塞的多功能`Future`，它的功能包括但不限于上面的任务，可见它的功能强大了。

下面对`CompletableFuture `方法加以分析：



# 方法解析



## 获取 CompletableFuture 实例

`CompletableFuture` 提供了静态工厂方法获取实例对象，所以我们不用自己new生成。

如果`CompletableFuture` 运行后有返回值可以通过`supplyAsync`方法，

如果没有返回值可以通过`runAsync`方法。

### runAsync

不需要返回值时，可以使用`runAsync`获取实例,可以看到有2个名称为`runAsync`的方法：

```java
 public static CompletableFuture<Void> runAsync(Runnable runnable) {
        return asyncRunStage(asyncPool, runnable);
    }
    
public static CompletableFuture<Void> runAsync(Runnable runnable,
                                                   Executor executor) {
        return asyncRunStage(screenExecutor(executor), runnable);
    }
```

这里方法重载，第二个参数`executor`为自定义的线程池。

如果没有设置则使用系统默认的` ForkJoinPool.commonPool()`。

使用方法：

```java
CompletableFuture.runAsync(() -> {
            System.out.println("runAsync");
        });
```



### supplyAsync

如果需要返回值，可以使用`supplyAsync`获取实例，可以看到也有2个名称为`supplyAsync`的方法：

```java
    public static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier) {
        return asyncSupplyStage(asyncPool, supplier);
    }
    public static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier,
                                                       Executor executor) {
        return asyncSupplyStage(screenExecutor(executor), supplier);
    }
```

使用方法：

```java
 CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            return "supplyAsync";
        });
        System.out.println(future.join());
```



## 等待任务完成

如果我们想阻塞当前线程直到任务完成，可以使用`get`和`join`两种方法。

`get` 方法抛出的 ExecutionException 是一个受检异常（checked exception）。
`join` 方法与 `get `方法相同，不同之处在于，如果异常出现， `join`方法将抛出
由底层异常所引发的 CompletionException，它是一个非受检异常（unchecked
exception）  

### get

`get`有2个方法：

```java
public T get() throws InterruptedException, ExecutionException {
        Object r;
        return reportGet((r = result) == null ? waitingGet(true) : r);
}

public T get(long timeout, TimeUnit unit)
        throws InterruptedException, ExecutionException, TimeoutException {
        Object r;
        long nanos = unit.toNanos(timeout);
        return reportGet((r = result) == null ? timedGet(nanos) : r);
}
```

其中`public T get(long timeout, TimeUnit unit)`表示为延迟`timeout`时间后没有返回值则抛出异常。

使用方法：

```java
 CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            return "supplyAsync";
        });
        try {
            String result = future.get();
            System.out.println(result);
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
```



### join

使用方法：

```java
CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> {
            return "supplyAsync-1";
        });
System.out.println(future1.join());
```

在`join`和`get`之间，我更倾向于使用`join`，不用每次都`try catch`。而且`CompletableFuture`后面有专门的异常处理方法。

### getNow

这里还有一个不常用方法，

看下方法：

```java
public T getNow(T valueIfAbsent) {
        Object r;
        return ((r = result) == null) ? valueIfAbsent : reportJoin(r);
}
```

调用`getNow`时，如果任务没有完成，不进行阻塞等待，而是直接返回值`valueIfAbsent`。

使用方法：

```java
CompletableFuture future2 = CompletableFuture.supplyAsync(() -> {
            sleep(2000);
            return "hello";
        });
System.out.println(future2.getNow("world"));//打印world
```



## 完成任务

###   complete  

future调用`complete(T t)` 会立即执行。 但是`complete(T t)` 只能调用一次， 后续的重复调用会失效。

如果future已经执行完毕能够返回结果， 此时再调用`complete(T t)` 则会无效。

使用方法：

```java
CompletableFuture future3 = CompletableFuture.supplyAsync(() -> "hello");
future3.complete("world");
System.out.println(future3.join());//打印world
```

###   completeExceptionally  

使用`completeExceptionally（Throwable ex)`则抛出一个异常， 而不是一个成功的结果。  

使用方法：

```java
CompletableFuture future4 = CompletableFuture.supplyAsync(() -> "hello");
        future4.completeExceptionally(new Exception("exception.."));
        try {
            future4.get();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }
```



## thenApply

`thenApply`的功能相当于将CompletableFuture＜t＞转换成Completablefuture＜U＞。  

future执行完成后紧接着把结果通过函数参数传递到`thenApply`，然后继续处理future结果并返回一个新的future。

| 方法名                                                       | 描述                       |
| :----------------------------------------------------------- | :------------------------- |
| public <U> CompletableFuture<U> thenApply(Function<? super T,? extends U> fn) | 使用上一个任务所在线程执行 |
| public <U> CompletableFuture<U> thenApplyAsync(Function<? super T,? extends U> fn) | 使用Fork.joinPool线程池    |
| public <U> CompletableFuture<U> thenApplyAsync(Function<? super T,? extends U> fn, Executor executor) | 指定线程池                 |

使用方法：

```java
CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> "hello").thenApplyAsync((str) -> str + " world");
System.out.println(future.join());
```



## thenCompose

`thenCompose` 可用于组合多个 `CompletableFuture`， 将前一个结果作为下一个计算
的参数， 它们之间存在着先后顺序。  它是连接多个`CompletableFuture `



| 方法名                                                       | 描述                       |
| :----------------------------------------------------------- | :------------------------- |
| public <U> CompletableFuture<U> thenCompose(    Function<? super T, ? extends CompletionStage<U>> fn) | 使用上一个任务所在线程执行 |
| public <U> CompletableFuture<U> thenComposeAsync(    Function<? super T, ? extends CompletionStage<U>> fn) | 使用Fork.joinPool线程池    |
| public <U> CompletableFuture<U> thenComposeAsync(    Function<? super T, ? extends CompletionStage<U>> fn,    Executor executor) | 指定线程池                 |

使用方法：

```java
 CompletableFuture future1 = CompletableFuture.supplyAsync(() -> {
            System.out.println(Thread.currentThread().getName());
            return "hello";
        }).thenCompose(str -> CompletableFuture.supplyAsync(() -> {
            System.out.println(Thread.currentThread().getName());
            return (str + " world");
        })).thenApplyAsync(str -> CompletableFuture.supplyAsync(() -> {
            System.out.println(Thread.currentThread().getName());
            return str + " last";
        }));
        System.out.println(future1.join());
```



##   thenCombine  

使用`thenCombine` 之后， future1、 future2之间是并行执行的， 最后再将结果汇总并返回。 

| 方法名                                                       | 描述                    |
| ------------------------------------------------------------ | ----------------------- |
| public <U,V> CompletableFuture<V> thenCombine(    CompletionStage<? extends U> other,    BiFunction<? super T,? super U,? extends V> fn) |                         |
| public <U,V> CompletableFuture<V> thenCombineAsync(    CompletionStage<? extends U> other,    BiFunction<? super T,? super U,? extends V> fn) | 使用Fork.joinPool线程池 |
| public <U,V> CompletableFuture<V> thenCombineAsync(    CompletionStage<? extends U> other,    BiFunction<? super T,? super U,? extends V> fn, Executor executor) | 指定线程池              |

使用方法：

```java
        CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> {
            return "hello";
        });

        CompletableFuture<String> future3 = CompletableFuture.supplyAsync(() -> {
            return "world";
        });
        CompletableFuture<String> future5 = future2.thenCombine(future3, (s1, s2) -> {
            return s1 + "##" + s2;
        });
        System.out.println(future5.join());
```



## thenAcceptBoth

上面说了`thenCombine` 是将结果汇总并返回，那如果不需要返回就可以使用`thenAcceptBoth`。

返回`Void`类型泛型。

| 方法名                                                       | 描述                    |
| ------------------------------------------------------------ | ----------------------- |
| public <U> CompletableFuture<Void> thenAcceptBoth(    CompletionStage<? extends U> other,    BiConsumer<? super T, ? super U> action) |                         |
| public <U> CompletableFuture<Void> thenAcceptBothAsync(    CompletionStage<? extends U> other,    BiConsumer<? super T, ? super U> action) | 使用Fork.joinPool线程池 |
| public <U> CompletableFuture<Void> thenAcceptBothAsync(    CompletionStage<? extends U> other,    BiConsumer<? super T, ? super U> action, Executor executor) | 指定线程池              |

使用方法：

```java
CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> {
            return "hello";
        });

CompletableFuture<String> future3 = CompletableFuture.supplyAsync(() -> {
            return "world";
        });
CompletableFuture<Void> future5 = future2.thenAcceptBothAsync(future3, (s1, s2) -> {
            System.out.println(s1 + "##" + s2);
        });
System.out.println(future5.join());
```



## whenComplete

 当`CompletableFuture`的计算结果完成，或者抛出异常的时候，都可以进入`whenComplete`方法对结果进行处理。

| 方法名                                                       | 描述                    |
| ------------------------------------------------------------ | ----------------------- |
| public CompletableFuture<T> whenComplete(    BiConsumer<? super T, ? super Throwable> action) |                         |
| public CompletableFuture<T> whenCompleteAsync(    BiConsumer<? super T, ? super Throwable> action) | 使用Fork.joinPool线程池 |
| public CompletableFuture<T> whenCompleteAsync(    BiConsumer<? super T, ? super Throwable> action, Executor executor) | 指定线程池              |

使用方法：

```java
        CompletableFuture.supplyAsync(() -> "hello")
                .thenApply((s1) -> s1 + "@@")
                .whenCompleteAsync((result, throwable) -> {
                    System.out.println(result);
                });
```



## handle

 当`CompletableFuture`的计算结果完成，或者抛出异常的时候，可以通过`handle`方法对结果进行处理 。

`handle`和`whenComplete`相比，`whenComplete`是没有返回值的，而`handle`是有返回值的。

| 方法名                                                       | 描述 |
| ------------------------------------------------------------ | ---- |
| public <U> CompletionStage<U> handle    (BiFunction<? super T, Throwable, ? extends U> fn); |      |
| public <U> CompletionStage<U> handleAsync    (BiFunction<? super T, Throwable, ? extends U> fn); |      |
| public <U> CompletionStage<U> handleAsync    (BiFunction<? super T, Throwable, ? extends U> fn,     Executor executor); |      |

使用方法：

```java
        CompletableFuture future = CompletableFuture.supplyAsync(() -> "hello")
                .thenApply((s1) -> s1 + "@@")
                .handleAsync((result, throwable) -> {
                    System.out.println(result);
                    return result;
                });
        System.out.println(future.join());
```



## thenAccept

  `thenAccept` 是只会对计算结果进行消费而不会返回任何结果的方法。  

| 方法名                                                       | 描述 |
| ------------------------------------------------------------ | ---- |
| public CompletionStage<Void> thenAccept(Consumer<? super T> action); |      |
| public CompletionStage<Void> thenAcceptAsync(Consumer<? super T> action); |      |
| public CompletionStage<Void> thenAcceptAsync(Consumer<? super T> action,                                             Executor executor); |      |

使用方法：

```java
        CompletableFuture future = CompletableFuture.supplyAsync(() -> "hello")
                .thenApply((s1) -> s1 + "@@")
                .thenAcceptAsync(s -> System.out.println(s));

        future.join();
```



## acceptEither

`acceptEither`表示的是两个Future， 当其中任意一个Future计算完成的时候就会执行 。

| 方法名                                                       | 描述 |
| ------------------------------------------------------------ | ---- |
| public CompletionStage<Void> acceptEither    (CompletionStage<? extends T> other,     Consumer<? super T> action); |      |
| public CompletionStage<Void> acceptEitherAsync    (CompletionStage<? extends T> other,     Consumer<? super T> action); |      |
| public CompletionStage<Void> acceptEitherAsync    (CompletionStage<? extends T> other,     Consumer<? super T> action,     Executor executor); |      |

使用方法：

```java
  CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> "jenson");
  CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> "hello");
  CompletableFuture<Void> future = future1.acceptEither(future2, o -> 	     	System.out.println(o));
  future.join();

```



##   applyToEither

`applyToEither` 与 `acceptEither` 类似，

`applyToEither` 有返回值，`acceptEither` 没有返回值。

| 方法名                                                       | 描述 |
| ------------------------------------------------------------ | ---- |
| public <U> CompletionStage<U> applyToEither    (CompletionStage<? extends T> other,     Function<? super T, U> fn); |      |
| public <U> CompletionStage<U> applyToEitherAsync    (CompletionStage<? extends T> other,     Function<? super T, U> fn); |      |
| public <U> CompletionStage<U> applyToEitherAsync    (CompletionStage<? extends T> other,     Function<? super T, U> fn,     Executor executor); |      |

使用方法：

```java
CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> "jenson");
CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> "hello");
CompletableFuture<String> future = future1.applyToEitherAsync(future2, s -> s);
System.out.println("result=" + future.join());
```



## allOf

| 方法名                                                       | 描述                                                |
| ------------------------------------------------------------ | --------------------------------------------------- |
| public static CompletableFuture<Void> allOf(CompletableFuture<?>... cfs) | 在所有future完成后，返回一个CompletableFuture<Void> |



使用方法：

```java
 val future2 = CompletableFuture.supplyAsync { "hello" }
 val future3 = CompletableFuture.supplyAsync { "jenson" }
 val future4 = CompletableFuture.supplyAsync { "qq" }
 CompletableFuture.allOf(future2, future3, future4).join()
```



## anyOf

`anyOf`和`acceptEither`、 `applyToEither`的区别在于，

 后两者只能使用在两个future中， 而`anyOf`可以使用在多个future中。  



## 异常处理

`CompletableFuture`在运行时如果遇到异常， 则可以使用`get` 并抛出异常进行处理，

 但这并不是一个最好的方法。 `CompletableFuture`本身也提供了几种方式来处理异常。

###   Exceptionally  

| 方法名                                                       | 描述                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------- |
| public CompletionStage<T> exceptionally    (Function<Throwable, ? extends T> fn); | 只有future抛出异常时候才触发这个方法调用fn函数计算。 |

使用方法：

```java
CompletableFuture.supplyAsync(() -> "jenson").thenApply(s -> {
            s = null;
            return s.length();
        }).exceptionally(t -> {
            System.out.println(t.getMessage());
            return null;
        }).join();
```

###   whenComplete  

`whenComplete` 在前面已经介绍过了， 在这里跟`exceptionally`的作用差不多， 

可以捕获任意阶段的异常。 如果没有异常， 就执行action。  

### handle

  与`whenComplete`相似的方法是`handle`。