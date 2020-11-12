<template>
  <div class="component-playground">
    <vue-markdown
      :source="mdText"
    />
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  const DocFile = require('../../doc/guide.md').default;

  @Component
  export default class Guide extends Vue {
    mdText: string = DocFile;
  }
</script>

<style scoped lang="less">
  .component-playground {
    width: 100%;
    box-sizing: border-box;
    padding-right: 20px;
    padding-bottom: 40px;
  }
</style>
