<template>
  <van-popup v-model="show" position="bottom" @click-overlay="cancel">
    <van-datetime-picker
      v-if="show"
      v-model="value"
      :type="type"
      :item-height="itemHeight"
      :show-toolbar="showToolbar"
      :title="title"
      :confirm-button-text="confirmButtonText"
      :cancel-button-text="cancelButtonText"
      @change="change"
      @confirm="confirm"
      @cancel="cancel"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </van-popup>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
//分别是      完整时间      时间         年月        年月日
type Type = 'datetime' | 'time' | 'year-month' | 'date'; //默认为datetime

@Component
export default class YiDatePicker extends Vue {
  @Prop({ default: new Date() }) value!: Date; // 绑定的value，默认为当前时间
  @Prop() title!: string; // 顶部栏标题
  @Prop({ default: 'datetime' }) type!: Type; // 日期时间类型
  @Prop({ default: 44 }) itemHeight!: number; // 选项高度
  @Prop({ default: true }) showToolbar!: boolean; // 是否显示顶部栏
  @Prop({ default: '确认' }) confirmButtonText!: string; // 确认按钮文字
  @Prop({ default: '取消' }) cancelButtonText!: string; // 取消按钮文字

  visible: boolean = false;

  get show(): Boolean {
    return this.visible;
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  //值发生改变，回调参数是picker实例，用到的频率较低
  @Emit('change')
  change<T>(picker: T): T {
    return picker;
  }
  //点击确认按钮，回调参数是当前value
  @Emit('confirm')
  confirm(value: Date): Date {
    this.close();
    return value;
  }
  //点击取消按钮
  @Emit('cancel')
  cancel(): void {
    this.close();
  }
}
</script>

<style scoped lang="less">
@import '../../style/config';
</style>
