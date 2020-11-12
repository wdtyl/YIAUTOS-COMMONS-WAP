<template>
  <div>
    <van-popup 
    v-bind="$attrs" 
    v-on="$listeners" 
    >
      <div class="u-title" v-if="!!title.length">
        {{ title }}
      </div>
      <!-- slot -->
      <slot name="content"></slot>
      <!-- end -->
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class YiModal extends Vue {
  static getName(): string {
    return 'yi-modal';
  }
  @Prop({ default: '' })
  private title?: string;
  mounted() {
    console.log('基础弹出层 ==>', this.title);
  }
}
</script>

<style scoped lang="less">
@import '../../style/config';
.u-title {
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
}
</style>
