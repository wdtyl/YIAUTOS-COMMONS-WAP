<template>
  <yi-model-lib @on-select-success="onModelSelect"/>
</template>

<script>
export default {
  name: 'ModelLib',
  methods: {
    onModelSelect(model) {
      console.log('真实页面获取的车型 ==>', model);
    }
  }
};
</script>

<style scoped>
.header {
  height: 60px;
  width: 100%;
  background-color: #66d5d3;
}
</style>
