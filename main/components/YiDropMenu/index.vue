<template>
  <div>
    <div class="warp" v-if="mode">
      <div class="title" @click="handleOpen">
        <span style="padding-right: 5px">{{title}}多选</span>
        <van-icon name="arrow-up" v-if="show" />
        <van-icon name="arrow-down" v-else />
      </div>
      <div
        v-if="show"
        class="item"
        v-for="item of dataSource"
        :key="item.value"
        @click="handleClickItem(item.value, item)"
        :class="activeValue.includes(item.value) ? 'active-item item' : 'item'"
      >
        <div class="item-content">
          <span>{{item.text}}</span><van-icon v-if="activeValue.includes(item.value)" :class="activeValue.includes(item.value) ? 'active-icon' : ''" name="success" />
        </div>
      </div>
      <div class="btn" v-if="show">
        <span @click="handleCancel">{{cancelText}}</span>
        <span @click="handleClickSave">{{saveText}}</span>
      </div>
    </div>
    <van-dropdown-menu v-else>
      <van-dropdown-item
        v-model="value"
        :options="dataSource"
        @change="handleDorpItemChange"
      />
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Emit,
  Prop
} from 'vue-property-decorator';
import { request } from 'http';

@Component

export default class YiDropMenu extends Vue {
  static getName(): string {
    return 'yi-drop-menu';
  }
  @Prop({ type: Array, required: true }) readonly dataSource!: any[]; // 数据源
  @Prop({ type: Array, required: true }) readonly value!: string; // 默认展示
  @Prop({ type: Array, required: true }) readonly title!: string; // 默认展示
  @Prop({ type: Boolean, required: true, default: false }) readonly mode!: boolean; // 是否多选
  @Prop({ type: String, default: '确定' }) readonly saveText!: string; // 确定按钮
  @Prop({ type: String, default: '重置' }) readonly cancelText!: string; // 重置
  private activeValue: number[] = []
  private saveData: any[] = []
  private show: Boolean
  data() {
    return {
      show:false
    }
  }
  @Emit('onChangeSelect')
  onChangeSelect(data) {
    return data;
  }
  handleOpen() {
    if (this.show) {
      this.show = !this.show
    } else {
      this.show = !this.show
    }
  }
  handleDorpItemChange(val) {
    this.onChangeSelect(val);
  }
  handleClickItem(val, obj) {
    console.log(val, obj)
    if (this.mode) {
      if (this.activeValue.includes(val)) {
        this.activeValue.map((v, i) => {
          let arr = [];
          if (v === val) {
            arr = this.activeValue.splice(i, 1)
          }
          return arr;
        })
      } else {
        this.activeValue.push(val);
      }
    }
  }
  handleClickSave() {
    this.onChangeSelect(this.activeValue);
    this.show = false;
  }
  handleCancel() {
    this.activeValue = [];
    this.onChangeSelect([])
    this.show = false;
  }
  mounted() {
  }
  
}
</script>

<style scoped lang="less">
@import '../../style/config';
.warp {
  padding-right: 20px;
  .item {
    line-height: 35px;
    font-weight: 300;
    border-bottom: 1px solid #ebedf0;
    padding: 0 20px;
    .item-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .item:last-child {
      border-bottom: none;
  }
  .active-item {
    color: #1989fa;
  }
  .active-icon {
    color: #1989fa;
  }
  .btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 40px;
    padding: 0 20px;
    border-bottom: 1px solid #ebedf0;
  }
}
.title {
    line-height: 40px;
    background: #fff;
    padding-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
