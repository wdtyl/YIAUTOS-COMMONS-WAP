<template>
  <div class="component-playground">
    <vue-markdown
      :source="mdText"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
const DocFile = require('../../doc/intro.md').default;

@Component
export default class Intro extends Vue {
  mdText: string = DocFile;
}
</script>

<style scoped lang="less">
  .component-playground {
    width: 100%;
    padding-right: 20px;
    padding-bottom: 40px;
    box-sizing: border-box;
  }
</style>
