<template>
  <yi-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="page-container">
      <p style="margin-bottom: 40px">刷新次数: {{ count }}</p>
      <yi-button type="primary" @click="refreshList">点击刷新</yi-button>
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
    refreshList() {
      this.isLoading = true;
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
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
