<template>
  <van-button v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </van-button>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Model,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';

@Component
export default class YiButton extends Vue {
  static getName(): string {
    return 'yi-button';
  }
  mounted() {}
}
</script>

<style scoped lang="less">
@import '../../style/config';
</style>
