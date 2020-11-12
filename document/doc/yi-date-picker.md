### YiDatePicker使用文档

#### 1.使用代码示例:
```html
<yi-date-picker 
  :type="type" 
  ref="your-ref-name" 
  :value="value"
  @change="change" 
  @confirm="confirmDate" 
/>
```
使用this.$refs.你定义的ref名.open()来显示组件
#### 2.主要参数和事件方法
type: 组件类型
```
取值范围：datetime（完整时间）time（时间）year-month（年月）date（年月日）              
默认为datetime
```
value: 绑定的值
```
如果不传参数则组件默认显示当前时间日期：new Date()
type为time即时间选择时例外，需要传一个类似"12:00"的字符串作为value
```
@change: 值变化时触发的事件，返回一个picker实例，一般不需要用到
```js
function change(picker) {}
```
@confirm: 点击组件"确认"按钮时的事件，返回当前value
```js
function confirm(value) {}
```

