### YiButton使用文档

#### 1.设计思路:

可以嵌套在列表/div/页面外层,达到下拉刷新的功能,不仅是列表可以下拉刷新,期望支持所有容易的下拉刷新.

#### 2.使用代码示例:

```js
<template>
  <yi-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="page-container">
      <p>刷新次数: {{ count }}</p>
    </div>
  </yi-pull-refresh>
</template>

<script>
export default {
  name: 'YiPullRefreshExample',
  data() {
    return {
      count: 0,
      isLoading: false,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
  },
};
</script>

<style scoped>
.page-container {
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 20px 0;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-color: white;
}
</style>
```

#### 3. 组件设计原理

组件由vant-ui的 pull-refresh组件为基础改造而成.

![](http://markdown.itsmycar.cn/front/document/811573024897_.pic.jpg)

#### 4. 文档

Vant - 轻量、可靠的移动端 Vue 组件库: https://youzan.github.io/vant/#/zh-CN/pull-refresh
