# 0x00 前言

Dart2.7提供了一个令人期待的功能，就是扩展函数。

用过Kotlin或Groovy的应该很熟悉。

它是向既有库添加新功能的方式。

虽然是扩展函数，但是和使用普通函数没有什么区别，

所以你并不会感知到它。

一般来说，如果你使用别人的API或者被广泛使用的库时，你想修改它是不现实的。

但是仍然想扩展它的一些功能。

这时扩展函数就派上用场了。



# 0x01 介绍

通常我们会像选这样把字符串转为int：

```dart
int.parse('42')
```

但是如果在String类上有类似的替代函数，想必它会更简短易用：

```dart
'42'.parseInt()
```

要使用这个功能，你可以导入包含String的扩展类库：

```dart
import 'string_apis.dart';
print('42'.parseInt()); // Use an extension method.
```

扩展功能不仅可以定义方法，还能定义成员，如getter、setter、operators。

另外扩展也可以有名称，这在API冲突时很有用。

# 0x02 定义

下面看看如何实现对字符串进行操作的扩展函数`parseInt()`：

```dart
extension NumberParsing on String {
  int parseInt() {
    return int.parse(this);
  }
  // ···
}
```

**定义扩展函数时，**

**先使用`extension`关键字，后面跟`扩展名`，**

**`扩展名`后面接 关键字 `on`，**

**`on`关键字后面接要作用的类。**

**然后是代码块定义函数。**

语法格式：

```dart
extension <extension name> on <type> {
  (<member definition>)*
}
```

**如果你想要创建一个只在声明它的库中使用的扩展函数，**

**可以省略它的扩展名或者扩展名以下划线(_)开头：**

```dart
extension on String {
  double parseDouble() {
    return double.parse(this);
  }
}

extension _NumParseon on String {
  double parseDouble() {
    return double.parse(this);
  }
}
```



# 0x03 使用

## 静态和动态类型

**不能在动态变量上使用扩展函数**

例如，下面这样做会出现异常：

```dart
dynamic d = '2';
print(d.parseInt()); // Runtime exception: NoSuchMethodError
```

**扩展函数可以和类型推断一起使用**

例如，下面代码会正常运行：

```dart
var v = '2';
print(v.parseInt()); // Output: 2
```

**`dynamic`不能使用是因为扩展函数是静态解析的。**

**`dynamic`只有在运行期才能确定其类型，**

**也由于扩展函数的静态解析原因，所以不用担心它的性能问题。**



## API冲突问题

现在定义了2个string扩展文件：

string_ex.dart：

```dart
extension NumberParsing on String {
  int parseInt() {
    return int.parse(this);
  }
}
```

string_ex2.dart：

```dart
extension NumberParsing2 on String {
  int parseInt() {
    return int.parse(this);
  }
}

extension PhoneParsing on String {
  bool isPhone() {
    return false;
  }
}
```

都引入的时候会出现冲突问题：

![image-20200115104953260](https://jenson-1258324340.cos.ap-beijing.myqcloud.com/image-20200115104953260.png)

如果你的扩展成员和其他接口或者其他扩展成员冲突，那么你不得不采取一些措施。

**使用`show`或`hide`限制公开的API**：

```dart
import 'string_ex.dart';
import 'string_ex2.dart' hide NumberParsing2;

void main() {
  print("22".parseInt());
  print("33".isPhone());
}
```



**使用`显示扩展`，即通过扩展名调用扩展函数。不过这会让你的代码看起来像包装类**：

```dart
import 'string_ex.dart';
import 'string_ex2.dart';

void main() {
  // print('42'.parseInt()); // Doesn't work.
  print(NumberParsing('22').parseInt());
  print(NumberParsing2('33').parseInt());
  print("33".isPhone());
}
```



**如果扩展名都相同了，可以通过`as`给`导入文件`定义别名**：

string_ex3.dar:

```dart
extension NumberParsing on String {
  int parseInt() {
    return int.parse(this);
  }
}
```

这和sting_ex.dart扩展名冲突。

通过`as`给导入文件定义别名：

```dart
import 'string_ex.dart';
import 'string_ex2.dart';
import 'string_ex3.dart' as ex3;

void main() {
  // print('42'.parseInt()); // Doesn't work.
  print(NumberParsing('22').parseInt());
  print(NumberParsing2('33').parseInt());
  print(ex3.NumberParsing('55').parseInt());
  print("33".isPhone());
}

```