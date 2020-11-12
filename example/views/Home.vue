<template>
  <div id="home_container">
    <van-list>
      <van-cell
        v-for="item in list"
        is-link
        :key="item.title"
        :to="item.route"
        :title="item.title"
      />
    </van-list>
  </div>
</template>

<script>
import pages from '../route/pages';
/*
* 移动端组件库目录页
*/
export default {
	name: 'Home',
  data() {
    return {
      list: pages,
      loading: false,
      finished: false
    };
  },
  methods: {
    goSubPage(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped lang="less">
#home_container {
  width: 100%;
  padding-right: 20px;
  box-sizing: border-box;
}
</style>
