##### YiSelect
使用代码示例
```
<yi-select
    v-model="show"
    @onSelectChangeSave="onSelectChangeSave"
    @onCancel="onCancel"
    :dataSource="dataSource"
/>
```

参数

数据源: dataSource  | Array
确定事件: onSelectChangeSave  | Function
取消事件: onCancel  | Function
确定文字: saveText | String
取消文字: cancelText | String
弹出方式: position | String  |  'top'|'bottom'   默认 bottom
弹出层高度: height | Number 
是否多选单选 mode | Boolean  默认 false

有时间继续扩展

建议UI同学介入一下