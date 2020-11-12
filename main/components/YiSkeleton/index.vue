<template>
  <div>
    <van-skeleton 
      v-bind="$attrs" 
      v-on="$listeners" 
    >
      <!-- slot -->
      <slot name="content"></slot>
      <!-- end -->
    </van-skeleton>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class YiSkeleton extends Vue {
  static getName(): string {
    return 'yi-skeleton';
  }
  mounted() {}
}
</script>

<style scoped lang="less">
@import '../../style/config';

</style>
