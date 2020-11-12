<template>
  <van-rate
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
export default class YiRate extends Vue {
  static getName(): string {
    return 'yi-rate';
  }
  mounted() {}
}
</script>

<style scoped lang="less">
@import '../../style/config';
</style>
