<template>
  <div class="page-container">
    <van-cell is-link @click="open('alert')">组件形式警示框</van-cell>
    <yi-dialog
      ref="alert"
      :title="title"
      :message="message"
      :show-cancel-button="false"
      @confirm="confirm"/>
    <van-cell is-link @click="open('dialog')">组件形式弹出框</van-cell>
    <yi-dialog
      ref="dialog"
      :title="title"
      :message="message"
      @confirm="confirm"
      @cancel="cancel"/>
    <van-cell is-link @click="openAlert">方法形式警示框</van-cell>
    <van-cell is-link @click="openConfirm">方法形式弹出框</van-cell>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      show: false,
      title: '我是标题',
      message: '我是message',
    };
  },
  methods: {
    open(type) {
      this.$refs[type].open();
    },
    openAlert() {
      this.$YiDialog.alert({
        title: '警示框的标题',
        message: '警示框的内容'
      }).then(() => {}).catch(() => {})
    },
    openConfirm() {
      this.$YiDialog.confirm({
        title: '弹出框的标题',
        message: '弹出框的内容'
      }).then(() => {}).catch(() => {})
    },
    confirm() {
      console.log('点击了确定');
    },
    cancel() {
      console.log('点击了取消');
    }
  },
};
</script>

<style scoped>
</style>
