<template>
  <div class="page-container">
    <img
      class="close-icon"
      @click="backToPage"
      src="../../assets/close.png"
      alt=""
    />
    <van-index-bar :index-list="letterArr" :sticky="false">
      <template v-for="letter in letterArr">
        <van-index-anchor
          style="background-color: white"
          :key="letter"
          :index="letter"
        >
          <div class="anchor-text">
            <span class="anchor-letter">{{ letter }}</span>
          </div>
        </van-index-anchor>
        <div
          class="model-item"
          v-for="model in brandObj[letter]"
          :key="model.id"
          @click="onBrandSelect(model)"
        >
          <van-image
            round
            fit="cover"
            class="model-avatar"
            :src="model.avatar"
          />
          <div class="model-text">{{ model.name }}</div>
        </div>
      </template>
    </van-index-bar>
    <model-drawer
      ref="drawerRef"
      :type="type"
      :brand-filter="brandFilter"
      :firms-filter="firmsFilter"
      :series-filter="seriesFilter"
      :model-filter="modelFilter"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
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
import * as ModelApi from '../../api/modelWechat';
import ModelDrawer from './ModelDrawer';
import * as FilterHelper from './commons/FilterHelper';

@Component({
  components: { ModelDrawer },
})
export default class YiModelLib extends Vue {
  static getName(): string {
    return 'yi-model-lib';
  }

  letterArr: Array<string> = [];
  brandObj: object = {};

  @Prop({ type: String, default: 'model' })
  type: string;

  @Prop({ default: [] })
  brandFilter: Array<string>;

  @Prop({ default: [] })
  firmsFilter: Array<string>;

  @Prop({ default: [] })
  seriesFilter: Array<string>;

  @Prop({ default: [] })
  modelFilter: Array<string>;

  async getBrandList() {
    const toast = this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0,
    });
    try {
      const modelResult = await ModelApi.getBrandList();
      if (modelResult.code === 200) {
        //遍历一次品牌数据,得到品牌对象
        /*const brandObj = {};
        modelResult.data.forEach(item => {
          if (brandObj[item.firstLetter]) {
            brandObj[item.firstLetter].push(item);
          } else {
            brandObj[item.firstLetter] = [item];
          }
        });*/
        FilterHelper.filterBrand(modelResult.data, this);
        this.letterArr = Object.keys(this.brandObj).sort((a, b) =>
          a >= b ? 1 : -1
        );
      } else {
        throw new Error(modelResult.message);
      }
      toast.clear();
    } catch (e) {
      toast.clear();
      this.$toast.fail(e.message);
    }
  }

  onBrandSelect(brand) {
    const drawerRef: any = this.$refs['drawerRef'];
    if (this.type === 'brand') {
      this.$emit('on-select-success', brand);
      return;
    }
    drawerRef.open(brand);
  }

  backToPage() {
    this.$emit('on-back-page');
  }

  mounted() {
    console.log('初始化选择类型 ==>', this.type);
    this.getBrandList();
  }
}
</script>

<style scoped lang="less">
@import '../../style/config';
.page-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow-y: auto;
}

.anchor-text {
  height: 60px;
  line-height: 60px;
  background-color: white;
  vertical-align: middle;
  .anchor-letter {
    .font-medium(18px, @theme-color);
  }
}

.model-item {
  height: 55px;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  .flexible(row, center, flex-start);

  &:active {
    opacity: 0.8;
    background-color: #fafafa;
  }

  .model-avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 35px;
  }

  .model-text {
    width: 0;
    height: 55px;
    flex: 1;
    line-height: 55px;
    vertical-align: middle;
    .font-regular(14px, #000000);
    border-bottom: 1px solid #f0f0f0;
  }
}
.close-icon {
  position: fixed;
  top: 18px;
  right: 20px;
  width: 20px;
  height: 20px;
  z-index: 10;
}
</style>
