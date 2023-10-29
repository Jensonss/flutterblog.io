web部署运行后页面中文会先显示带叉号的方格，然后过一会又刷新正常。

通过查找发现有2种方式可以修复乱码问题。

# 更换渲染方式

Flutter web有2种渲染方式：**html**和**canvaskit**。

打包时可以指定编码方式，也可以不指定，使用**auto**即默认方式。

点击运行按钮时就是**auto**方式，移动端使用**html**，pc端使用**canvaskit**。

问题源自**canvaskit**渲染方式，所以切换为**html**就好了。

更换渲染方式有2种方式：

## 命令行切换

debug 模式（使用 chrome 浏览器）

`flutter run -d chrome --web-renderer html`

debug 模式（不指定浏览器）

`flutter run -d web-server --web-renderer html`

release 模式

`flutter build web --web-renderer html`

`flutter build web --web-renderer html --release`

`flutter build web --web-renderer canvaskit --release`

## 页面切换

在`web/index.html`的`script`中添加：

```javascript
window.flutterWebRenderer = "html";
```

# 更换字体

更换渲染方式会有其他问题，所以采用更换字体方式更合适。

## 下载Roboto-Mono字体，进行配置：

```yaml
  fonts:
    - family: RobotoMono
      fonts:
        - asset: fonts/RobotoMono-Bold.ttf
        - asset: fonts/RobotoMono-Italic.ttf
        - asset: fonts/RobotoMono-Regular.ttf
```

## 根widget使用字体

```dart
GetMaterialApp(
      debugShowCheckedModeBanner: false,
      title: '笔记',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
        fontFamily: 'RobotoMono'//配置字体
      ),
      home: const MyHomePage(title: '笔记'),
    );
```