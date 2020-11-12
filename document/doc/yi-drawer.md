
1.使用代码示例:
```

  <yi-drawer/>

```
### 参数及使用规范
| 参数 | 说明 | 类型 | 默认值 |
|:-------------- |:-------- |:-------- |:---- |
| show     | 当前组件是否显示     | boolean      | false  |
| overlay     | 是否显示遮罩层      | boolean      | false  |
| position     | 弹出位置，可选值为 top bottom right left     | boolean      | false  |
|overlayClass|	自定义遮罩层类名|	string |    ---|
|overlayStyle|	自定义遮罩层样式|	object| --- |
|duration|	动画时长，单位秒|	number|	0.3	|
|round|	是否显示圆角|	boolean	|false|
|lockScroll|	是否锁定背景滚动|	boolean	|true|
|lazyRender|	是否在显示弹层时才渲染节点|	boolean	|true|
|closeOnPopstate|	是否在页面回退时自动关闭|	boolean	|false|	2.2.10|
|closeOnClickOverlay|	是否在点击遮罩层后关闭|	boolean	|true
|closeable|	是否显示关闭图标|	boolean	|false	|
|closeIcon	|关闭图标名称或图片链接|	string|	cross	|
|closeIconPosition|	关闭图标位置可选值为top-left bottom-left bottomRight	|string	|top-right|
|transition	|动画类名，等价于 transtion 的name属性	|string|
|getContainer	|指定挂载的节点，可以传入选择器，或一个返回节点的函数	|string | () => Element	-	|-
|safeAreaInsetBottom	|是否开启底部安全区适配，详细说明	|boolean	|false








----
### Events

|事件名    |说明       |回调参数 |
|:------- |:--------:|-------:|
|onClick|点击弹出层时触发|	event: Event|
|onOpen|打开弹出层时触发|	-|
|onOpend|o打开弹出层且动画结束后触发|	-|
|onClose|关闭弹出层时触发|	-|
|onClosed|o关闭弹出层且动画结束后触发|	-|
|onClickOverlay	|点击遮罩层时触发|-|


