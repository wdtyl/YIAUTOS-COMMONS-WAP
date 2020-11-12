<template>
  <div class="page-container">
    <yi-button plain hairline type="primary" @click="onShowAction"
      >打开下拉选择</yi-button
    >
    <yi-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      @cancel="onCancel"
    />
  </div>
</template>

<script>
export default {
  name: 'ActionSheet',
  data() {
    return {
      show: false,
      actions: [
        { name: '选项', color: '#07c160' },
        { name: '呵呵', color: '#07c160', loading: true },
        { name: '禁用选项', disabled: true },
      ],
    };
  },
  methods: {
    onCancel() {
      this.show = false;
    },
    onShowAction() {
      this.show = true;
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
  background-color: white;
  button {
    display: block;
    margin: 10px 0;
  }
}
</style>
