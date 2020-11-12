<template>
  <div class="page-container">
    <yi-button type="primary" @click="openModelDrawer">打开车型侧滑</yi-button>
    <yi-model-drawer :models="modelList" ref="modelDrawerRef" @on-select-success="onModelSelect" />
  </div>
</template>

<script>
import cars from '../service/cars';
export default {
  name: 'ModelDrawer',
  data() {
    return {
      modelList: cars,
    };
  },
  methods: {
    onModelSelect(model) {
      console.log('真实页面获取的车型 ==>', model);
    },
    openModelDrawer() {
      console.log('当前车型列表 ==>', cars);
      this.$refs['modelDrawerRef'].open(cars);
    },
  },
};
</script>

<style scoped lang="less">
.page-container {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px 0;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  button {
    display: block;
    margin: 10px 0;
  }
}
</style>
