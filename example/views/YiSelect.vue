<template>
  <div class="page-container">
    <yi-button plain hairline type="primary" @click="handleOpen"
      >底部选择多选</yi-button
    >
    <yi-select
      :show="show"
      @onSelectChangeSave="onSelectChangeSave"
      @onCancel="onCancel"
      :dataSource="dataSource"
      :mode="mode"
    />
    <span v-for="item in value">{{item}}</span>
    <br>
    <yi-button plain hairline type="primary" @click="handleOpen1"
      >底部选择单选</yi-button
    >
    <yi-select
      :show="show1"
      @onSelectChangeSave="onSelectChangeSave1"
      @onCancel="onCancel1"
      :dataSource="dataSource"
    />
    <span v-for="item in value1">{{item}}</span>
  </div>
</template>

<script>
export default {
  name: 'YiSelectExample',
  data() {
    return {
      show: false,
      mode: true,
      value: [],
      show1: false,
      value1: [],
      dataSource: []
    };
  },
  methods: {
   handleOpen() {
     this.show = true;
   },
   onSelectChangeSave(data) {
     if (data.length >= 1) {
       this.show = false
       this.value = data;
     }
     console.log(data, '传回来了')
   },
   onCancel(show) {
     this.value = []
     this.show = !!show;
   },
    handleOpen1() {
     this.show1 = true;
   },
   onSelectChangeSave1(data) {
     if (data.length >= 1) {
       this.show1 = false
       this.value1 = data;
     }
     console.log(data, '传回来了')
   },
   onCancel1(show) {
     this.value1 = []
     this.show1 = !!show;
   }
  },
  mounted() {
    let obj = {}
    for (let i = 0; i < 50; i++) {
      this.dataSource.push({
        label: `项目${i}`,
        value: `value${i}`
      })
    }
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
