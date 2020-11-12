<template>
  <van-image-preview
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component
export default class YiPreview extends Vue {
  static getName(): string {
    return 'yi-preview';
  }
  mounted() {}
}
</script>

<style scoped lang="less">
@import '../../style/config';
</style>
