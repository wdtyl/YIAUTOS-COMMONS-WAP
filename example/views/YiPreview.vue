<template>
  <div class="page-container">
    <template v-for="(item,index) in images">
      <img :src="item" @click="preview(index)" class="imgPre" alt="" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'YiPreviewExample',
  data() {
    return {
      show: true,
      index: 0,
      images: [
        'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=56121732,3385873500&fm=85&s=6B61736EBA7A95DC5B48299A0000E091',
        'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=56121732,3385873500&fm=85&s=6B61736EBA7A95DC5B48299A0000E091',
        'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=56121732,3385873500&fm=85&s=6B61736EBA7A95DC5B48299A0000E091',
        'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=56121732,3385873500&fm=85&s=6B61736EBA7A95DC5B48299A0000E091',
      ]
    };
  },
  methods: {
    preview(index){
      this.$YiPreview({
        images: this.images,
        startPosition:index
      })
    }
  },
  mounted(){
    
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
  .imgPre{
    width: 70px;
  }
</style>
