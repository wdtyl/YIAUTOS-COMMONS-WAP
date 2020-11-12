<template>
  <header class="header-container">
    <div class="header-body">
      <img src="../assets/company_logo.png" id="company_logo" />
      <span class="header-title">宜买车移动端组件库</span>
      <div></div>
      <div></div>
      <yi-drop-picker
        class="header-version"
        :defaultValue="curVersion"
        :options="versionOptions"
        @on-select-change="onVersionChange"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

  curVersion: Number = 4;

  versionOptions: Array<any> = [
    { code: 1, name: 'v1.0.0' },
    { code: 2, name: 'v1.0.1' },
    { code: 3, name: 'v1.0.2' },
    { code: 4, name: 'v1.1.0' },
  ];

  onVersionChange(version: Number): void {
    console.log('改变的Version ==>', version, this);
    this.curVersion = version;
  }
}
</script>

<style scoped lang="less">
.header-container {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 80px;
  z-index: 1000;
}
.header-body {
  height: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdfe6;
  width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 60px 200px auto 100px 120px;
  grid-template-rows: 100%;
  align-items: center;
  #company_logo {
    width: 50px;
    height: 50px;
  }
  .header-title {
    font-weight: 500;
    font-size: 20px;
  }
  .header-version {
    display: inline-grid;
    justify-items: end;
  }
}
</style>
