<template>
  <div class="page-container">
    <yi-button type="primary" @click="handleContentToast">
      文字提示
    </yi-button>
    <br>
    <yi-button type="primary" @click="handleSuccess">
      成功提示
    </yi-button>
    <br>
    <yi-button type="primary" @click="handleLoading">
      加载提示
    </yi-button>
    <br>
    <yi-button type="danger" @click="handleError">失败提示</yi-button>
  </div>
</template>

<script>
export default {
  name: 'YiMessageExample',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleContentToast() {
      this.$toast('提示信息');
    },
    handleSuccess() {
      this.$toast.success({
        message: '成功提示',
        duration: 1000
      });
    },
    handleLoading() {
      this.$toast.loading({
        forbidClick: true,
        message: '加载中...'
      });
    },
    handleError() {
       this.$toast.fail({
        message: '失败提示',
        duration: 1000
      });
    }
  },
  mounted() {
    // this.$toast.success({
    //   message: '成功提示',
    //   duration: 0,
    // });
  }
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
