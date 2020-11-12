<template>
  <div class="page-container">
    <yi-button type="warning" @click="onSelectCity">地区选择</yi-button>
    <yi-areaPicker
      ref="areaPicker" 
      v-model="show" 
      @on-cancel="show = false"
      @on-confirm="onConfirm"
       />
  </div>
</template>

<script>
export default {
  name: 'YiAreaPickerExample',
  data() {
    return {
      show: false,
      areaList: {
        province_list: {
          110000: '北京市'
        },
        city_list: {
          110100: '北京市'
        },
        county_list: {
          110101: '东城区'
        }
      }
    }
  },
  methods: {
    onSelectCity() {
      this.show = !this.show;
    },
    onConfirm(res) {
      console.log('on-confirm ==>', res);
      this.show = false;
      this.$toast(JSON.stringify(res));
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
  button {
    display: block;
    margin: 10px 0;
  }
}
</style>
