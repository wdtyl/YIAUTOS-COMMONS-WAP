#### YiDropMenu

使用代码示例
```
<yi-drop-menu
    :show="show"
    :dataSource="dataSource"
    :mode="mode"
    @onChangeSelect="onChangeSelect"
    @onCancel="onCancel"
/>
```

参数

数据源: dataSource  | Array
确定事件: onChangeSelect  | Function
取消事件: onCancel  | Function
确定文字: saveText | String
取消文字: cancelText | String
是否多选单选 mode | Boolean  默认 false

有时间继续扩展
