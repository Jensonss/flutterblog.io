# 减少不必要的UI绘制

缩小Widget刷新范围，越小越好。例如Provider的selector。

使用Builder缩小Context范围，避免在State范围内调用`setState`。

# 减少build中耗时和widget数量。

# const widget

对于dart语法，需要分清楚final和const关键字的区别。

关键字final的意思是一次赋值，不能改变；

关键字const的意思是常量，确定的值。

这两者的区别是final变量在第一次使用时被初始化，

而const 变量是一个编译时替换为常量值。

同样const widget的widget在编译阶段就已经确定，不会有状态的变化和成员变量更新。

const widget特别适合于标签、特殊Icon等可以复用的UI，性能开销较小。

# 圆角使用BoxDecoration替换Clipxxx

# 耗时计算放到Isolate

# 超大图片检测

Flutter Inspector：点击 “Highlight Oversizeded Images”，

它会识别出那些解码大小超过展示大小的图片，并且系统会将其倒置，

这些你就能更容易在 App 页面中找到它。

针对这些图片，你可以指定 cacheWidth 和 cacheHeight 为展示大小，

这样可以让 flutter 引擎以指定大小解析图片，减少内存消耗。

# RepaintBoundary区分变与不变图层

对于经常刷新的Widget使用RepaintBoundary包裹起来成为一个单独的layer。

# Opacity减少使用

特别是动画中，淡入效果可以使用AnimatedOpacity和FadeInImage,透明效果可以设置widget的背景颜色实现。

# 避免调用 saveLayer

（调用 saveLayer() 会开辟一片离屏缓冲区。将内容绘制到离屏缓冲区可能会触发渲染目标切换，这些切换在较早期的 GPU 中特别慢）

1 ShaderMask

2 ColorFilter

3 Chip -- might cause call to saveLayer() if disabledColorAlpha != 0xff （简单的圆角效果可以使用Container 实现）

4 Text -- might cause call to saveLayer() if there’s an overflowShader

# 分帧渲染

复杂列表或者长列表使用分帧渲染减少卡顿。

分帧渲染的原理是将一棵Widget树中的部分绘制时间较长的节点

在第一帧时只占位不绘制，等到下一帧开始时，节点替换占位UI，单独使用一帧时间绘制。

# 内存泄露

内存泄漏是一个比较严重的问题，

在监控方面Flutter现在比较通用的方法就是利用Expando中的弱引用去监控是否有泄漏的对象，如果出现则从VM中获取其引用链接，从而分析其泄漏原因。

另外通过Flutter的Dev tool中的内存监控工具也能实现对泄漏对象的发现。