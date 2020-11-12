### YiAreaPicker

#### 代码演示
```
<div class="page-container">
  <yi-button type="warning" @click="onSelectCity">地区选择</yi-button>
  <yi-areaPicker
    v-model="show" 
    @on-cancel="show = false"
    @on-confirm="onConfirm"
      />
</div>

// 数据格式
let areaList = {
  province_list: {
    110000: '北京市'
  },
  city_list: {
    110100: '北京市'
  },
  county_list: {
    110101: '东城区'
  }
}
```


#### API
参数 | 说明 | 类型 | 默认值 | 版本
:- | :- | :- | :- | :-
area-list|省市区数据(见上)|object|-|-|
columns-num|省市区显示列数，3-省市区，2-省市，1-省|string | number|-|-|

#### Events
参数 | 说明 | 回调参数 
:- | :- | :- 
on-cancel|点击取消按钮时|一个数组参数，具体格式看下方数据格式章节|
on-confirm|点击右上方完成按钮|-|

<!-- 详细可参考 [Vant](https://youzan.github.io/vant-weapp/#/area#eventso) -->
