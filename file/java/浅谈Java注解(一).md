# 0x00 前言

⼀直以来对于Java注解的理解都停留在`@Override`的使⽤上⾯。

对于其他则知之较少，但是慢慢发现很多框架都使⽤了注解功能，

越来越觉得有必要了解下注解的实现了。

对于注解的学习可以按照图下的四个步骤：  

![image-20191115143353914](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/qtzj-01-01.png)

下⾯分别来介绍下每步

<!-- more -->  

# 0x01 知道

## 什么是注解

Java注解从5.0版本推出，

注解就是对类、⽅法、参数、变量、构造器及

包声明中的特殊修饰符，实现对元数据的描述。  

## 元数据是什么

简单点说元数据就是⽤来存储数据的数据，

⽐如⽤来描述学⽣信息需要定义⼀个Student类，

那么Student类⽤来描述学⽣信息，

但是谁⼜来描述Student类本身呢？

就是元类了(meta class)，即Java中Class类。

其实在注解出现之前，它的功能也有其他⼀些⽅法来实现，

但是那个时候的实现是⽐较随意的，由开发⼈员⾃⾏实现。

所以注解的出现相当于统⼀了标准。  

# 0x02 使用

## 内置标准注解

Java注解在推出时便内置了三种标准注解：

`@Override`，说明当前⽅法覆盖⽗类的⽅法实现。

`@Deprecated`，说明该代码已经废弃了，不建议使⽤，如果使⽤了编译器会发出警告。

`@SuppressWarnings`，说明关闭当前修饰代码段内的编译器警告信息。

使⽤⽅法如下：  

![image-20191115143733722](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/qtzj-01-02.png)

可以清楚看到标记了

`@Deprecated`的⽅法会被划线来表示已经过期废弃。

test()和test1()两个⽅法同样的实现， test1()标记了`@SuppressWarnings`⽽没有出现⻩⾊警告信息。

`@Override`重写⽗⽅法，如果父类没有该⽅法就出现错误提示的。 

# 0x03 自定义 

## 元注解

上⾯简单介绍了Java内置的三种标准注解，但是这三种根本不够看的，我们需要更深⼊的了解。

在这之前需要了解⼀个知识点：**元注解**。

上⾯有说到描述类的类叫元类 ，

所以这⾥描述注解的注解⾃然就是元注解:

下⾯是描述Override注解的注解 ：

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.SOURCE)
public @interface Override {
}
```

  Java提供了四种元注解⽤来帮助自定义新注解：  

| 分类       | 描述                   |
| ---------- | ---------------------- |
| @Document  | 是否被包含在Doc文档    |
| @Inherited | 是否允许子类继承该注解 |
| @Retention | 声明周期               |
| @Target    | 作用目标               |

四种元注解主要了解`@Retention`和`@Target`即可。

### @Retention

`@Retention`有三个可选值：  

| 分类                    | 描述                               |
| ----------------------- | ---------------------------------- |
| RetentionPolicy.SOURCE  | 仅编译期可见                       |
| RetentionPolicy.CLASS   | 仅加载class前可见，存在于class文件 |
| RetentionPolicy.RUNTIME | 一直可见，包括运行时               |

网上关于`RetentionPolicy.SOURCE`的说法有说“在编译阶段丢弃”,

⼀时让我很费解，既然在编译阶段就丢弃了，

那`@override`重写标记也是编译阶段丢弃，

但是它⼜如何实现⽗类没有该⽅法时出现编译错误提示呢？

所以我觉得对于`RetentionPolicy.SOURCE`的描述还是⽤

**仅存在于编译阶段更准确⼀些。**

### @Target

关于@Target也有多个属性值可选：  

| 分类                        | 描述                               |
| --------------------------- | ---------------------------------- |
| ElementType.TYPE            | 类、接口（包括注释类型）或枚举声明 |
| ElementType.FIELD           | 字段声明（包括枚举常量）           |
| ElementType.METHOD          | 方法声明                           |
| ElementType.PARAMETER       | 参数声明                           |
| ElementType.CONSTRUCTOR     | 构造方法声明                       |
| ElementType.LOCAL_VARIABLE  | 局部变量声明                       |
| ElementType.PACKAGE         | 包声明                             |
| ElementType.ANNOTATION_TYPE | 用在注解上                         |
| ElementType.TYPE_PARAMETER  | 1.8添加                            |
| ElementType.TYPE_USE        | 1.8添加                            |

关于元注解的介绍已经说完了，下⾯开始元注解实战  

## 实战元注解

先看下需求：

现在从服务器返回⼀个json串`{age:29,name:Jenson}`,

我们要设计⼀个注解，通过注解绑定json和我在本地已有实体类，

代码如下:

```java
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface PAnn {
    String name() default "";
}
```

因为是给People属性设置注解

所以使⽤`@Target(value =ElementType.FIELD)`，

因为要⽤到反射，所以设置周期为

`@Retention(RetentionPolicy.RUNTIME)`。

实体类：  

```java
public class People {
    @PAnn(name = "name")
    String name;
    @PAnn(name = "age")
    int age;

    public People() {
    }

    public People(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

```

现在我们要设计⼀个JsonParser类，

通过⽅法(JsonParser()).parse(text, People.class)；

可以直接解析成功并返回⼀个People对象。

下⾯看JsonParser.parse的实现：  

```java
public class JsonParser {
    public <T> T parse(String text, Class<T> clz) throws InstantiationException, IllegalAccessException, JSONException {
        T t = clz.newInstance();
        Field[] fields = clz.getDeclaredFields();
        JSONObject object = new JSONObject(text);
        for (int i = 0; i < fields.length; i++) {
            Field f = fields[i];
            PAnn pAnn = f.getAnnotation(PAnn.class);
            if (pAnn != null) {
                f.setAccessible(true);
                f.set(t, object.get(pAnn.name()));
            }
        }
        return t;
    }
}

```

因为通过注解绑定了People的属性和json的key值。

所以通过反射拿到注解信息的value，

通过这个value作为key拿到json的value。

最后通过set⽅法把json的value赋值给对应的属性。

这样完成了解析过程。

最后看看main⽅法实现：  

```kotlin
        val text = """{name:"jenson",age=30}"""
        try {
            val p = (JsonParser()).parse(text, People::class.java)
            Log.e(this.javaClass.simpleName, "${p.name},${p.age}")
        } catch (e: Exception) {
            e.printStackTrace()
        }

```

打印结果：

`MainActivity: jenson,30`

这样看起来好像⽐直接使⽤JSONObject解析麻烦，

但是其实这样做更灵活，

而且⼀般服务器交互过程都是若⼲个实体类，

⽽我们只要实现这⼀次就可以达到通⽤的⽬的。

⽐如下次解析消息类时只要给消息实体加上注解 ，

然后如下使⽤就可以完成解析：

```java
Message msg = (Message) JsonParser.parse(json, Message.class);
```

其实看下jackson和gson等使⽤注解的解析应该都是类似的⽅法。

另外注解在hibernate和各种测试框架都有⼴泛应⽤。

所以了解注解原理对理解相关注解框架很有帮助  。



# 0x04 原理

这⾥的原理只介绍注解在classFile中的实现机制。

上⾯说了四种元注解主要了解@Retention和@Target。

下⾯分别说说这两种实现  ：

##   @Retention

@Retention有三种可选值： SOURCE、 CLASS和RUNTIME。  

上⾯说了三种值代表的意义，但是这三种值是如何实现的呢？

### @RetentionPolicy.SOURCE

只在源码中存在或者说只在编译成字节码⽂件前存在。

这时疑问就来了，我们运⾏的都是字节码⽂件，也就是在编译后，

那`@override`⼜怎么达到重写检查的效果的呢？

因为`@override`注解修饰的是@Retention.SOURCE。

这个问题也困惑了我很久。

因为关于重写检查在IDE中都是即时提示的，⼀度怀疑是IDE搞的⻤。

有这个想法还是很愚蠢的，同时也说明了⾃⼰基本功的Low。

我们⼀直在讲编译，其实这是⼀个⽐较⼤范围的概念。

就是说编译这个步骤不是原⼦性的，还能分成很多⼩步骤：

词法分析、语法分析、语义分析，

经过⼀些列分析后才执⾏编译(参⻅编译器原理)

附⼀张编译器步骤图：  

![image-20191115145727351](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/qtzj-01-03.png)

现在清楚了之所以IDE在编译前很智能即时的对

@Retention.SOURCE注解给出提示，

是因为IDE对我们输⼊进⾏实时词法、语法、语义的分析。  





### @RetentionPolicy.CLASS



只能活到字节码⽂件中，

再往后⾯的操作是@RetentionPolicy.CLASS所不能及的。

⽣命周期⽐SOURCE⻓⼀点，却⼜不及RUNTIME。

如果没有设置，那么注解默认是使⽤RetentionPolicy.CLASS的，

因为编译后它只存在于字节码⽂件中，

所以⼀般应⽤开发⼈员⽐较少⽤到，

更多的可能是给底层研发⼈员来使⽤的吧，我是这样认为的。

现在⼜产⽣⼀个疑问：

怎么证明`RetentionPolicy.SOURCE`没有存在字节码⽂件中，

⽽`RetentionPolicy.CLASS`存在于字节码⽂件中呢？

这个问题答案只能从`classFile`中找到了。

编译后的字节码⽂件⼀般称为`classFile`。

在`classFile`中有⼀个名为字段表的结构，

字段表⼜包含⼀个属性表，属性表其中⼀项是`RuntimeInvisibleAnnotations`

(参⻅Java虚拟机规范）。

如果为`RetentionPolicy.CLASS`，那么字节码⽂件中会出现这属性，

如果为`RetentionPolicy.SOURCE`，则没有这个属性。

下⾯对⽐下SOURCE和CLASS字节码⽂件结构：  

`RetentionPolicy.CLASS`如图：

![image-20191115175742841](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/qtzj-01-04.png)

`RetentionPolicy.SOURCE`如图：

![image-20191115175908599](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/qtzj-01-05.png)





### @RetentionPolicy.RUNTIME

这个是⽣命周期最⻓的，既然存在于虚拟机运⾏时环境中，

那是不是为应⽤开发⼈员提供了功能？不然的话那和CLASS⼀样了。

最主要的功能就是通过反射能拿到注解相关信息了。

注意⼀点：既然`RetentionPolicy.RUNTIME`和`RetentionPolicy.CLASS`都存在于字节码⽂件中，

那么如何区分它们呢？

上⾯看到设置`RetentionPolicy.CLASS`后属性表中多了个`RuntimeInvisibleAnnotations`属性。

⽽设置`RetentionPolicy.RUNTIME`后属性表中其实多了个`RuntimeVisibleAnnotations`属性:

如图:

![image-20191115180044571](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/qtzj-01-06.png)



很明显意思是`运行时不可见注解`和`运行时可见注解`。

这样JVM加载classFile时根据这个属性来判断

是否将注解信息加载到JVM中，

如果是`RuntimeVisibleAnnotations`则表明我们可以通过反射拿到相关的注解信息。 



## @Target

`Target`表示注解设置的目标是谁。

⼀般是设置给类、字段和⽅法。

但JVM如何保证我们给类设置的注解不会被⽤在字段或⽅法的身上呢？

在Java虚拟机规范中讲到： 

classFile包含字段表、方法表和属性表，

而字段表和⽅法表中⼜都分别有⾃⼰的属性表。

字段表和⽅法表中各⾃的属性表同样也都拥有`RuntimeVisibleAnnotations`和
`RuntimeInvisibleAnnotations`属性，

前提是你设置了相关注解信息。这样根据你设置注解位置不同，

在classFile中不同区域的属性表也会有不同的注解信息显示。

现在新创建了⼀个test注解，⽤来修饰⽅法：

  ```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.CLASS)
public @interface MTest {
}
  ```

  编译后字节码如下图：

![image-20191115180439961](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/qtzj-01-07.png)

可以看到修饰字段和修饰⽅法的注解都还在，

由此可见， JVM根据不同的区域属性表来显示注解信息是成⽴的。  



# 0x05 关于classFile

上⾯多次提到了classFile，到底classFile长什么样？

上⾯图中可视化还是⽐较强的，其实真正的classFile是这个样子：

![image-20191115153303026](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/qtzj-01-08.png)

打开之后显示的都是⼗六进制内容，初次看难免让⼈头大。

但是其实这都是按照JVM规范来定义的。  

简单看两个了解下JVM对classFile⽂件定义的规则：

JVM规定⾸个4个字节为魔数，

紧挨着的2各字节为小版本号，

小版本后⾯紧挨着的2各字节为主版本号。

## 魔数

前4个字节为CAFEBABE，⼀般直接理解为咖啡宝⻉。

这个魔数是固定不变的，

它的作⽤就是⽤来判断该⽂本是否为可被JVM接受的class⽂件。

所以如果你直接从后缀把⼀个⽂件改为*.class是不会被JVM加载的。

## 版本号

版本号分为minor_version（副版本号） 、 major_version（主版本号）2个部分。

如果⼀个class⽂件副版本号为v，主版本号为V，那么该class⽂件版本就为V.v

⼀个JVM实例只能⽀持特定范围内的主版本号（a～i） 和0⾄特定范围内（0～m） 的副版本号。

假设⼀个class⽂件的格式版本号为v，

 仅当a.0≤v≤i.m成⽴时， 这个class⽂件才可以被此Java虚拟机⽀持。

不同版本的Java虚拟机实现⽀持的版本号也不同， 

⾼版本号的Java虚拟机实现可以⽀持低版本号的class⽂件，反之则不成⽴。

Oracle的JDK在1.0.2版本时， ⽀持的class格式版本号范围为45.0～45.3；

JDK版本在1.1.x时， ⽀持的class格式版本号范围扩展⾄45.0～45.65535；

JDK版本为1.k时（k≥2） 时， 对应的class⽂件格式版本号的范围为45.0～44+k.0。

现在看看截图中classFile，副版本号为0000，主版本号为0034。

当然这是⼗六进制的，转换成⼗进制是0和52。

所以该classFile版本号是52.0？  

这怎么和我们的版本号对应上的呢？

看这句JDK版本为 版本为1.k时（ 时（k≥2）） 时， 

对应的 对应的class⽂件格式版本号的范围为45.0～～44+k.0。

求k值： 44+k=52—>k=8，所以JDK版本为： 1.8.0

下⾯是我通过命令⾏获取的JDK版本信息：

java version "1.8.0_101"

Java(TM) SE Runtime Environment (build 1.8.0_101-b13)

Java HotSpot(TM) 64-Bit Server VM (build 25.101-b13, mixed mode)  

# 0x06 总结

classFile后⾯还有很多结构，也还有很多有意思的地⽅，

感兴趣可以参考《JVM规范》。

很多时候⽤不到的东西并不是没有用，而是我们使⽤的东西还太浅。