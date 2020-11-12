<template>
  <van-field v-bind="$attrs"
             v-on="$listeners"
             :value="getValue"
             @input="onHandleInput"
             @focus="onHandleFocus"
             @blur="onHandleBlur">
    <slot></slot>
  </van-field>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import numeral from 'numeral';

@Component
export default class YiMoneyInput extends Vue {
  static getName(): string {
    return 'yi-money-input';
  }

  @Prop({ type: [String, Number, null], required: true })
  initValue: String | Number | null;

  defaultValue: string | null = null;
  showValue: string | null = '';
  realValue: string | null = '';

  get getValue() {
    return this.showValue;
  }

  onHandleInput(value) {
    this.realValue = value;
  }
  onHandleFocus(e) {
    if (!this.realValue) {
      this.showValue = '';
    } else {
      this.showValue = this.realValue;
    }
  }
  onHandleBlur(e) {
    // 输入为空时, 判断是否有默认值, 有则显示
    if (!this.realValue) {
      if (this.defaultValue !== null) {
        console.log('111111111');
        this.showValue = this.formateMoney(this.defaultValue);
        this.realValue = this.defaultValue;
        this.onChange(this.defaultValue);
      } else {
        this.showValue = null;
        this.realValue = '';
        this.onChange(null);
      }
      return;
    }
    // 输入格式错误时, 判断是否有默认值, 有则显示, 没有则清空数据
    const moneyReg = /(^(-)?[1-9]([0-9]+)?(.[0-9]{1,2})?$)|(^(-)?(0){1}$)|(^(-)?[0-9].[0-9]([0-9])?$)/;
    if (!moneyReg.test(this.realValue)) {
      this.$toast('金额格式错误,请输入!');
      if (this.defaultValue !== null) {
        this.showValue = this.formateMoney(this.defaultValue);
        this.realValue = this.defaultValue;
        this.onChange(this.defaultValue);
      } else {
        this.showValue = null;
        this.realValue = '';
        this.onChange(null);
      }
    } else {
      this.showValue = this.formateMoney(this.realValue);
      this.onChange(this.realValue);
    }
  }
  formateMoney(value) {
    return '¥ ' + numeral(value).format('0,0.00');
  }
  onChange(value) {
    this.$emit('change', value ? Number(value) : value);
  }

  mounted() {
    if (
      this.initValue !== null &&
      this.initValue !== undefined &&
      this.initValue !== ''
    ) {
      this.defaultValue = this.initValue.toString();
      this.realValue = this.initValue.toString();
      this.showValue = this.formateMoney(this.initValue);
    }
  }
}
</script>

<style scoped lang="less">
@import '../../style/config';
</style>
