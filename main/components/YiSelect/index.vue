<template>
  <div>
    <div
      v-if="position === 'bottom'"
    >
      <van-popup
        v-bind="$attrs"
        v-on="$listeners"
        position="bottom"
        :style="`height: ${height}%`"
        v-model="show"
      >
        <div v-if="mode" class="top-btn-bottom" :style="`bottom: ${height}%`">
          <div @click="handleCancel">{{cancelText}}</div>
          <div @click="handleSave">{{saveText}}</div>
        </div>
        <div class="list-warp list-warp-bottom">
          <div
            class="list"
            :class="activeValue.includes(item.value) ? 'active-list list' : 'list' "
            v-for="item in dataSource"
            :key="item.label"
            @click="handleListItem(item.value, item)"
          >
              <div class="list-item">
                <span>{{item.label}}</span>
                <van-icon v-if="activeValue.includes(item.value)" :class="activeValue.includes(item.value) ? 'active-icon' : ''" name="success" />
              </div>
            </div>
        </div>
      </van-popup>
    </div>
    <div
      v-if="position === 'top'"
    >
      <van-popup
        v-bind="$attrs"
        v-on="$listeners"
        position="top"
        :style="`height: ${height}%`"
        v-model="show"
      >
        <div class="list-warp" style="">
          <div
            class="list"
            :class="activeValue.includes(item.value) ? 'active-list list' : 'list' "
            v-for="item in dataSource"
            :key="item.label"
            @click="handleListItem(item.value, item)"
          >
              <div class="list-item">
                <span>{{item.label}}</span>
              </div>
            </div>
        </div>
        <div v-if="mode" class="top-btn-top" style="padding-top: 0" :style="`top: ${height}%`">
          <div @click="handleCancel">{{cancelText}}</div>
          <div @click="handleSave">{{saveText}}</div>
        </div>
      </van-popup>
    </div>
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

export default class YiSelect extends Vue {
  static getName(): string {
    return 'yi-select';
  }
  @Prop({ type: Array, required: true }) readonly dataSource!: any[]; // 数据源
  @Prop({ type: String, default: '确定' }) readonly saveText!: string; // 确定按钮
  @Prop({ type: String, default: '取消' }) readonly cancelText!: string; // 取消按钮
  @Prop({ type: String, default: 'bottom' }) readonly position!: string; // 弹出方式
  @Prop({ type: String, default: 50 }) readonly height!: string; // 高度
  @Prop({ type: Boolean, default: false }) readonly mode!: boolean; // 是否多选
  @Prop({ type: Boolean, default: true }) readonly show!: boolean; // 是否多选

  private activeValue: number[] = []
  data() {
    return {
      mainActiveIndex: 0,
      activeId: null,
    }
  }
  @Emit('onSelectChangeSave')
  onSelectChangeSave(model) {
    return model;
  }
  @Emit('onCancel')
  onCancel(show) {
    return show;
  }
  
  handleListItem(val, obj) {
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
    } else {
      this.activeValue.push(val);
      this.activeValue.map((v) => {
        if (v !== val) {
          this.activeValue = [val];
        }
      })
      this.onSelectChangeSave(this.activeValue);
    }
  }
  handleListItemLeft(val, obj) {
    this.activeValue.push(val);
    this.activeValue.map((v) => {
      if (v !== val) {
        this.activeValue = [val];
      }
    })
    this.onSelectChangeSave(this.activeValue);
  }
  handleSave() {
    this.onSelectChangeSave(this.activeValue);
  }
  handleCancel() {
    this.activeValue = []
    this.onCancel(0);
  }

  mounted() {
    console.log(this, this.position, '12312312')
  }
  
}
</script>

<style scoped lang="less">
@import '../../style/config';
.top-btn {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    border-bottom: 1px solid #ebedf0;
}
.list-warp {
  padding: 15px;
  .active-list {
    color: #1989fa;
  }
  .list {
    font-size: 16px;
    line-height: 35px;
    .list-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
.list-warp-left {
  margin-left: 15px;
  .active-list {
    background: #1989fa;
    margin-right: 15px;
  }
  .list {
    font-size: 16px;
    line-height: 35px;
    .list-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
.active-icon {
    color: #1989fa;
  }
.top-btn-bottom {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  border-bottom: 1px solid #ebedf0;
  position: fixed;
  left: 0;
  width: 100%;
  background: #fff;
  div {
    padding: 15px;
  }
}
.top-btn-top {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid #ebedf0;
  position: fixed;
  left: 0;
  width: 100%;
  background: #fff;
  div {
    padding: 15px;
  }
}
.list-warp-bottom {
  overflow-y: scroll;
}
</style>
