<template>
  <van-dialog
    v-model="show"
    :title="title"
    :message="message"
    :show-cancel-button="showCancelButton"
    @confirm="confirm"
    @cancel="cancel"
    v-bind="$attrs"
    v-on="$listeners"
    />
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class YiDialog extends Vue {
  @Prop({ default: true }) showCancelButton!: boolean;
  @Prop({ default: '' }) title!: string;
  @Prop({ default: '' }) message!: string;

  show: boolean = false;

  open(): void {
    this.show = true;
  }

  close(): void {
    this.show = false;
  }

  @Emit('confirm')
  confirm(): void {
    this.close();
  }
  @Emit('cancel')
  cancel(): void {
    this.close();
  }
}
</script>

<style scoped lang="less">
@import '../../style/config';
</style>
