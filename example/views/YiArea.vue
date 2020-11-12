<template>
  <div id="area_container">
    <div class="area">
      <div class="button" @click="getArea">点击获取定位信息</div>
      <pre class="result-data">{{area}}</pre>
    </div>
  </div>
</template>

<script>
/*
* 移动端组件库地图定位
*/
export default {
	name: 'Home',
  data() {
    return {
      area: null
    };
  },
  methods: {
	  async getArea() {
      this.area = await this.$area();
    }
  },
  async mounted() {}
};
</script>

<style scoped lang="less">
#area_container {
  width: 100%;
  height: 100%;
  padding-right: 20px;
  box-sizing: border-box;
}
.area {
  font-size: 16px;
}
.button {
  width: 150px;
  height: 40px;
  line-height: 40px;
  border: 1px solid rgba(0,0,0,0.8);
  border-radius: 5px;
  cursor: pointer;
  margin: 20px auto;
  text-align: center;
  &:hover {
    background: rgba(148, 185, 243, 0.8);
  }
}
</style>
