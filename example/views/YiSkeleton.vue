<template>
  <div class="page-container">
    <p class="u-title">基础用法</p>
    <div class="m-box">
      <yi-skeleton title :row="3" />
    </div>
    <p class="u-title">展示子组件</p>
    <div class="m-box skeleton">
      <yi-skeleton
      title
      avatar
      :avatar-size="40"
      :row="3"
      :loading="loading"
    >
        <!-- slot -->
        <template #content>
          <div class="m-content">
            <div class="u-img">
              <img src="http://iph.href.lu/80x80" />
            </div>
            <div class="m-text">
              <p class="u-t">宜买车骨架屏</p>
              <p>展示基础用法展示基础用法展示基础用法展示基础用法展示基础用法展示基础用法</p>
            </div>
          </div>
        </template>
        <!-- end -->
      </yi-skeleton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YiSkeletonExample',
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    setTimeout(()=>{
      this.loading = false;
    }, 500)
  }
};
</script>

<style lang="less">
.page-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: left;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #fff;
  .u-title {
    margin: 0;
    padding: 35px 15px 15px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
  }
  .m-box {
    width: 375px;
  }
  .m-content {
    display: flex;
    padding: 10px 15px 15px;
    font-size: 16px;
    line-height: 1.8;
    .wh40 {
       width: 50px;
       height: 50px;
    }
    .u-img {
      margin-right: 20px;
      .wh40;
      img {
        .wh40;
        border-radius: 50%;
      }
    }
    .m-text {
      .u-t {
        font-size: 18px;
        color: rgba(69,90,100,.6);
        font-weight: 400;
      }
    }
  }
}
.skeleton {
  .van-skeleton {
    .van-skeleton__title {
      height: 30px;
    }
    .van-skeleton__row {
      height: 25px;
    }
  }
}
</style>
