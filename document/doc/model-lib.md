### 车型库使用文档

#### 1.使用代码示例:

```
  <yi-model-lib @on-select-success="onModelSelect"/>
```

使用品牌-车系-车型选择,选好的车型会在@on-select-success中返回,格式为通用车型对象

可选参数:

type: string

可选值: model/series/brand

默认为model,选择到车型,如果传入type="series",则选择到车系返回

```js
  <yi-model-lib type="series" @on-select-success="onModelSelect"/>
```
