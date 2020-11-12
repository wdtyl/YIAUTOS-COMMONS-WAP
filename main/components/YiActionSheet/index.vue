<template>
  <van-action-sheet
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </van-action-sheet>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component
export default class YiActionSheet extends Vue {
  static getName(): string {
    return 'yi-action-sheet';
  }
  mounted() {}
}
</script>

<style scoped lang="less">
@import '../../style/config';
</style>
