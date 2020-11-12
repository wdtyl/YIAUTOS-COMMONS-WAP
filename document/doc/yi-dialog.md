### YiDialog使用文档

#### 1.使用代码示例:
```html
<yi-dialog
  ref="your-ref-name"
  :title="title"
  :message="message"
  :show-cancel-button="false"
  @confirm="confirm"/>
```
使用this.$refs.你定义的ref名.open()来显示组件
#### 2.主要参数和事件方法
title: 弹框标题
message: 弹框内容
show-cancel-button: 是否显示取消按钮
@confirm: 点击"确认"时的事件
```js
function confirm() {}
```
除了使用组件还能直接用函数调用：
```js
// 带有"取消"的弹框, then里处理的是点击"确认"的事件
this.$dialog.confirm({
  title: '弹出框的标题',
  message: '弹出框的内容'
}).then(() => {}).catch(() => {})

// 没有"取消"的弹框, then里处理的是点击"确认"的事件
this.$dialog.alert({
  title: '警示框的标题',
  message: '警示框的内容'
}).then(() => {}).catch(() => {})
```
