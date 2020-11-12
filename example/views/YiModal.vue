<template>
  <div class="page-container">
    <yi-button @click="onShowPopup('center')">居中弹出</yi-button>
    <yi-button @click="onShowPopup('top')">顶部弹出</yi-button>
    <yi-button @click="onShowPopup('bottom')">底部弹出</yi-button>
    <yi-button @click="onShowPopup('left')">左侧弹出</yi-button>
    <yi-button @click="onShowPopup('right')">右侧弹出</yi-button>

    <yi-popup v-model="show" :title="title" :position="location">
      <!-- slot -->
      <template #content>
        <div class="m-wrapper">
          <ul class="m-list" v-for="(item, index) in todoList" :key="index">
            <li>{{ item.id }} - {{ item.text }}</li>
          </ul>
          <yi-button type="primary" @click="onClosePopup">主要按钮</yi-button>
        </div>
      </template>
      <!-- end -->
    </yi-popup>
  </div>
</template>

<script>
export default {
  name: 'YiModal',
  data() {
    return {
      show: false,
      title: '标题',
      location: 'center',
      todoList:[
          {
              id:1,            
              text:"扫地"
          },
          {
              id:2,
              text:"做饭"
          },
          {
              id:3,
              text:"擦桌子"
          }
      ]
    };
  },
  methods:{
    onShowPopup(location) {
      this.show = !this.show;
      this.location = location;
    },
    onClosePopup() {
      this.show = false;
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
.m-wrapper {
  width: 300px;
  padding: 20px;
  font-size: 14px;
  .m-list {
    li {
      padding-bottom: 20px;
    }
  }
}
</style>
