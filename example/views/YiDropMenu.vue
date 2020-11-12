<template>
  <div class="page-container">
    <div class="drop-select">
      <yi-drop-menu
        :dataSource="dataSource"
        @onChangeSelect="onChangeSelect"
        @onCancel="onCancel"
        :value="value"
      />
      <yi-drop-menu
        :dataSource="dataSource"
        @onChangeSelect="onChangeSelect1"
        @onCancel="onCancel1"
        :value="value1"
        :mode="mode"
        :title="title"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'YiDropMenuExample',
  data() {
    return {
      show: true,
      manyShow: false,
      mode: true,
      title: '下拉选择',
      dataSource: [],
      saveData: [],
      saveManyData: [],
      value: 'value0',
      value1: 'value0'
    };
  },
  methods: {
    
    handleManyOpen() {
      if (this.manyShow) {
        this.manyShow = !this.manyShow
      } else {
        this.manyShow = !this.manyShow
      }
    },
    onChangeSelect(data) {
      this.value = data;
    },
    onChangeSelect1(data) {
      if (data.length >= 1) {
        if (this.mode) {
          this.saveManyData = data;
          console.log(data, 'true1')
        }
      }
    },
    onCancel1(show) {
      this.saveManyData = [];
    },
    onCancel(show) {
        this.saveData = [];
        this.show = !!show;
    }
  },
  mounted() {
    for(let i = 0; i < 10; i++) {
      this.dataSource.push({
        text: `项目${i}`,
        value: `value${i}`
      })
    }
  }
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
}
.drop-select {
  width: 100%;
  font-size: 16px;
  .title {
    line-height: 40px;
    background: #fff;
    border-bottom: 1px solid #ebedf0;
    padding-left: 20px;
    display: flex;
    align-items: center;
  }
}
</style>
