<template>
  <div id="app">
    <example-header></example-header>
    <div class="example-body">
      <component-list class="example-list"></component-list>
      <component-dashboard class="example-content"></component-dashboard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import ComponentList from './components/ComponentList.vue';
import ComponentDashboard from './components/ComponentDashboard.vue';

@Component({
  components: {
    ComponentDashboard,
    ComponentList,
    ExampleHeader: Header
  },
})
export default class App extends Vue {
  mounted() {
    console.log(this, Vue, 'mounted');
  }
}
</script>

<style scoped lang="less">
#app {
  font-family: PingFangSC-Regular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  min-width: 1140px;
}
.example-body {
  width: 1140px;
  margin: 0 auto;
  height: 100%;
  position: relative;
}
.example-list {
  position: fixed;
  width: 220px;
  top: 0;
  bottom: 0;
  margin-top: 80px;
  transition: padding-top 0.3s;
  overflow-y: auto;
}
.example-content {
  width: 900px;
  margin-top: 80px;
  position: absolute;
  transition: padding-top 0.3s;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
}
</style>
