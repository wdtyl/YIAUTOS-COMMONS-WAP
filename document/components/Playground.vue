<template>
  <div class="component-dashboard">
    <span class="section-title">组件演示</span>
    <div class="divider"/>
    <div class="component-display">
      <simulator :url="url"/>
    </div>
    <div class="divider"/>
    <span class="section-title">组件文档</span>
    <vue-markdown :source="mdText" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Simulator from './Simulator';
import * as Config from '../config';

@Component({
  components: { Simulator }
})
export default class Playground extends Vue {
  mdText = '';
  url = 'http://localhost:8080/#/';

  @Prop({ type: String, default: 'no-content'})
  readonly componentName!: string;

  mounted() {
    let baseUrl = '';

    if (Config.isLocal) {
      baseUrl = Config.EXAMPLE_URL['local'];
    } else {
      baseUrl = Config.EXAMPLE_URL['remote'];
    }

    this.url = baseUrl + this.componentName;
    console.log(this.url,"000000000")
    let mdText = '';
    try {
      mdText = require(`../doc/${this.componentName}.md`).default;
    } catch (e) {
      mdText = require(`../doc/no-content.md`).default;
    }
    if (!!mdText) {
      this.mdText = mdText;
    }
  }
}
</script>

<style scoped lang="less">
.component-playground {
  width: 100%;
}
.component-display {
  display: flex;
  min-height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 12px 0;
}
.section-title {
  font-size: 20px;
  font-weight: 600;
  padding: 12px 0;
  color: #00BEBA;
}
.store-select {
  width: 300px;
}
.divider {
  height: 1px;
  background-color: #EAEAEA;
  width: 100%;
  margin: 12px 0;
}
</style>
