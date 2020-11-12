<template>
  <van-popup
    key="series-drawer"
    v-model="showDrawer"
    position="right"
    class="drawer"
  >
    <div class="list-container">
      <div class="list-header">
        <span class="list-header-title">选择意向车型</span>
        <span class="list-header-back" @click="closeDrawer">返回</span>
      </div>
      <div class="list-scroller">
        <div
          class="series-item"
          v-for="model in models"
          :key="model.id"
          @click="onModelSelect(model)"
        >
          <van-image class="model-item-avatar" fit="cover" :src="model.url" />
          <div class="series-item-model-message">
            <span class="model-title">{{ model.label }}</span>
            <span
              >指导价: <span>{{ model.price }}元</span></span
            >
          </div>
        </div>
      </div>
    </div>
  </van-popup>
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
export default class YiModelDrawer extends Vue {
  static getName(): string {
    return 'yi-model-drawer';
  }

  models: Array<any> = [];

  showDrawer: boolean = false;

  @Emit('on-select-success')
  onSelectSuccess(model) {
    return model;
  }

  public open(models) {
    this.models = models;
    this.showDrawer = true;
  }

  closeDrawer() {
    this.showDrawer = false;
  }

  onModelSelect(model) {
    this.closeDrawer();
    this.onSelectSuccess(model);
  }

  mounted() {}
}
</script>

<style scoped lang="less">
@import '../../style/config';
.drawer {
  width: 305px;
  height: 100%;
}
.list-container {
  height: 100%;
  width: 100%;
}
.list-header {
  padding: 0 20px;
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  .flexible(row, center, space-between);

  &-title {
    .font-medium(18px, #000000);
  }
  &-back {
    padding: 5px;
    .font-regular(14px, #000000);
    &:active {
      opacity: 0.8;
    }
  }
}
.series-item {
  .flexible(row, center, flex-start);
}
.model-item-avatar {
  width: 70px;
  height: 46px;
  margin-right: 20px;
}
.list-scroller {
  box-sizing: border-box;
  padding: 0 20px;
  height: calc(~'100% - 50px');
  overflow-y: scroll;
  width: 100%;
}

.model-title {
  .font-regular(16px, #000000);
  margin-bottom: 6px;
  .double-line;
  height: 36px;
}

.series-item-model-message {
  width: 180px;
  box-sizing: border-box;
  padding: 6px 0;

  &:active {
    opacity: 0.8;
  }

  :last-child {
    .font-regular(12px, rgba(0, 0, 0, 0.32));
    :first-child {
      .font-medium(12px, #f03a21);
      margin-left: 6px;
    }
  }
}
</style>
