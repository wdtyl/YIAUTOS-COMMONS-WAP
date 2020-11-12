### YiModal
弹出层容器，用于展示弹窗、信息提示等内容


#### 代码演示
```
<yi-popup v-model="show" :title="title">
  <!-- slot -->
  <template #content>
    <div class="m-wrapper">
      <ul class="m-list" v-for="(item, index) in todoList" :key="index">
        <li>{{ item.id }} - {{ item.text }}</li>
      </ul>
      <yi-button type="primary" @click="showPopup">主要按钮</yi-button>
    </div>
  </template>
  <!-- end -->
</yi-popup>
```
弹层内容使用 slot 可自定义需要的显示的内容；


#### API
参数 | 说明 | 类型 | 默认值 | 版本
:- | :- | :- | :- | :-
v-model|当前组件是否显示|boolean|false|-|
position|弹出位置，可选值为 top bottom right left|string|center|-|
title|标题内容|string|空（不显示）|-|

<!-- 详细可参考 [Vant](https://youzan.github.io/vant/#/zh-CN/popup#jie-shao) -->
