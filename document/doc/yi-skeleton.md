### YiSkeleton

#### 代码演示
```
<div class="page-container">
  <p class="u-title">基础用法</p>
  <div class="m-box">
    <yi-skeleton title :row="3" />
  </div>
  <p class="u-title">展示子组件</p>
  <div class="m-box skeleton">
    <yi-skeleton
    title
    avatar
    :avatar-size="40"
    :row="3"
    :loading="loading"
  >
      <!-- slot -->
      <template #content>
        <div class="m-content">
          <div class="u-img">
            <img src="http://iph.href.lu/80x80" />
          </div>
          <div class="m-text">
            <p class="u-t">宜买车骨架屏</p>
            <p>展示基础用法展示基础用法展示基础用法展示基础用法展示基础用法展示基础用法</p>
          </div>
        </div>
      </template>
      <!-- end -->
    </yi-skeleton>
  </div>
</div>
```
将 `loading` 属性设置成 `false` 表示内容加载完成，此时会隐藏占位图，通过 `slot` 展示子组件。


#### API
参数 | 说明 | 类型 | 默认值 | 版本
:- | :- | :- | :- | :-
row|段落占位图行数|number|0|-|
avatar|是否显示头像占位图|boolean|false|-|
avatar-size|头像占位图大小|string | number|32px|-|
title|是否显示标题占位图|boolean|false|-|
loading|是否显示占位图，传false时会展示子组件内容|boolean|true|-|

<!-- 详细可参考 [Vant](https://youzan.github.io/vant/#/zh-CN/skeleton#jie-shao) -->
