<template>
  <div class="component-playground">
    <vue-markdown
      :source="mdText"
    />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  const DocFile = require('../../doc/log.md').default;

  @Component
  export default class Log extends Vue {
    mdText: string = DocFile;
  }
</script>

<style scoped lang="less">
  .component-playground {
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 40px;
    padding-right: 20px;
  }
</style>
