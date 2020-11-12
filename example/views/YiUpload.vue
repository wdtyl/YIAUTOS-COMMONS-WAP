<template>
  <div id="upload_container">
    <yi-upload v-model="fileList"/>
  </div>
</template>

<script>
/*
* 移动端组件库-文件上传
*/
export default {
	name: 'show-yi-upload',
  data() {
    return {
      fileList: [
        'https://img.yzcdn.cn/vant/leaf.jpg',
        "http://test.erp.images.itsmycar.cn/test-cocntract-1573527527878-bc05884d-46c4-4f62-9c34-018e0b658f48"
      ]
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped lang="less">
#upload_container {
  width: 100%;
  height: 100%;
  padding-right: 20px;
  box-sizing: border-box;
  margin-top: 20px
}
</style>
