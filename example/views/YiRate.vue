<template>
  <div class="page-container">
    <yi-rate v-model="value" />
  </div>
</template>

<script>
export default {
  name: 'YiRateExample',
  data() {
    return {
      value: 2,
    };
  },
};
</script>

<style scoped>
.page-container {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px 0;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-color: white;
}
</style>
