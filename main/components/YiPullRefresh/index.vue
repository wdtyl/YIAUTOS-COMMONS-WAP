<template>
  <van-pull-refresh
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </van-pull-refresh>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component
export default class YiPullRefresh extends Vue {
  static getName(): string {
    return 'yi-pull-refresh';
  }
  mounted() {}
}
</script>

<style scoped lang="less">
@import '../../style/config';
</style>
