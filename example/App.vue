<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { TokenGenerator } from 'yiautos-commons-wap';

export default {
  name: 'App',
  mounted() {
    TokenGenerator('17786123214', '123456');
  },
};
</script>

<style scoped lang="less">
#app {
  font-family: 'PingFang SC', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: calc(~'100% + 20px');
  height: calc(~'100% + 20px');
  padding-bottom: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
