### 金额输入框使用文档

#### 1. 使用代码示例：

```
<yi-money-input :initValue="initValue" @on-change="onChange" />
```

#### 2. 配置项说明：

- initValue 表示初始化值, 为必填项, 支持 string 和 number 类型，为空时传入 null

- onChange 事件中可取到修改后的值, 有输入值时可取到类型为 number 型的值，没有值时取到 null

- 其他配置项可参考 Field 输入框的配置
