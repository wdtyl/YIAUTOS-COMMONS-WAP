<template>
  <div>
    <van-popup
      key="series-drawer"
      v-model="showSeriesDrawer"
      position="right"
      class="drawer"
    >
      <div class="list-container">
        <div class="list-header">
          <span class="list-header-title">{{ brandName }}-选择车系</span>
          <span class="list-header-back" @click="closeSeries">返回</span>
        </div>
        <div class="list-scroller">
          <template v-for="firm in firmsList">
            <div :key="firm.id" class="section-header">{{ firm.name }}</div>
            <div
              v-for="series in firm.seriesList"
              :key="series.id"
              class="series-item"
              @click="onSeriesSelect(series)"
            >
              <van-image
                class="series-item-avatar"
                fit="cover"
                :src="series.avatar"
              />
              <div class="series-item-message">
                <span>{{ series.name }}</span>
                <span
                  >指导价: <span>{{ series.indicativePrice }}</span></span
                >
              </div>
            </div>
          </template>
          <div style="height: 40px;" />
        </div>
      </div>
    </van-popup>
    <van-popup
      key="model-drawer"
      v-model="showModelDrawer"
      position="right"
      class="drawer"
    >
      <div class="list-container">
        <div class="list-header">
          <span class="list-header-title">{{ seriesName }}-选择车型</span>
          <span class="list-header-back" @click="closeModels">返回</span>
        </div>
        <div class="list-scroller">
          <template v-for="year in modelList">
            <div :key="year.year" class="section-header">{{ year.year }}</div>
            <div
              v-for="model in year.models"
              :key="model.id"
              class="series-item"
              @click="onModelSelect(model)"
            >
              <div class="series-item-model-message">
                <span>{{ model.name }}</span>
                <span
                  >指导价: <span>{{ model.indicativePrice }}万元</span></span
                >
              </div>
            </div>
          </template>
          <div style="height: 40px;" />
        </div>
      </div>
    </van-popup>
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
import * as FilterHelper from './commons/FilterHelper';

@Component
export default class ModelDrawer extends Vue {
  brandName: string = '品牌';
  seriesName: string = '车系';
  showModelDrawer: boolean = false;
  showSeriesDrawer: boolean = false;
  firmsList: Array<any> = [];
  modelList: Array<any> = [];

  @Emit('on-select-success')
  onSelectSuccess(model) {
    return model;
  }

  @Prop({ default: [] })
  brandFilter: Array<string>;

  @Prop({ default: [] })
  firmsFilter: Array<string>;

  @Prop({ default: [] })
  seriesFilter: Array<string>;

  @Prop({ default: [] })
  modelFilter: Array<string>;

  @Prop({ type: String, default: 'model' })
  type: string;

  async open(brand) {
    this.brandName = brand.name;
    const toast = this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0,
    });
    try {
      const firms = await ModelApi.getFirmList(brand.id);
      console.log('this is firms====>', firms.data, this);
      if (firms.code === 200) {
        const firmsList = FilterHelper.filterFirms(
          firms.data,
          this
        );
        console.log('this is list===>', firmsList);
        const seriesList = await Promise.all(
          firmsList.map(firm => {
            return ModelApi.getSeriesList(firm.id);
          })
        );
        seriesList.forEach((seriesResult, index) => {
          if (seriesResult.code !== 200) {
            throw new Error(seriesResult.message);
          }
          console.log('获取的车系列表 ==>', seriesResult.data);
          const filteredSeries = FilterHelper.filterSeries(
            seriesResult.data,
            this
          );
          console.log('过滤后的车系列表 ==>', seriesResult.data);
          firmsList[index].seriesList = filteredSeries;
        });
        //FilterHelper.filterSeries(firmsList.data, this);
        this.firmsList = firmsList.filter(item => {
          return item.seriesList && item.seriesList.length > 0;
        });
      } else {
        throw new Error(firms.message);
      }
      toast.clear();
      this.showSeriesDrawer = true;
    } catch (e) {
      toast.clear();
      this.$toast.fail(e.message);
    }
  }

  closeSeries() {
    this.showSeriesDrawer = false;
  }

  closeModels() {
    this.showModelDrawer = false;
  }

  async onSeriesSelect(series) {
    if (this.type === 'series') {
      this.showModelDrawer = false;
      this.showSeriesDrawer = false;
      this.onSelectSuccess(series);
      return;
    }
    this.seriesName = series.name;
    const toast = this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0,
    });
    try {
      const modelResult = await ModelApi.getModelsList(series.id);
      if (modelResult.code === 200) {
        /*const modelList = {};
        modelResult.data.forEach(model => {
          if (!modelList[model.productiveYear]) {
            modelList[model.productiveYear] = [model];
          } else {
            modelList[model.productiveYear].push(model);
          }
        });
        this.modelList = Object.keys(modelList).sort((a, b) => b - a).map(key => {
          return {
            year: key,
            models: modelList[key]
          }
        });*/
        this.modelList = Object.keys(modelResult.data)
          .sort((a, b) => b - a)
          .map(key => {
            return {
              year: key,
              models: FilterHelper.filterModel(modelResult.data[key], this),
            };
          })
          .filter((section: any) => {
            return section.models && section.models.length > 0
          });
      } else {
        throw new Error(modelResult.message);
      }
      toast.clear();
      this.showModelDrawer = true;
    } catch (e) {
      toast.clear();
      this.$toast.fail(e.message);
    }
  }

  async onModelSelect(model) {
    this.showModelDrawer = false;
    this.showSeriesDrawer = false;
    this.onSelectSuccess(model);
  }

  get modelFilterComp() {
    let modelFilter = {};

    this.modelFilter
      .map(modelName => modelName.replace(/\s+/g, ''))
      .forEach(noBlankName => {
        modelFilter[noBlankName] = true;
      });
    return modelFilter;
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
.list-scroller {
  box-sizing: border-box;
  padding: 0 20px;
  height: calc(~'100% - 50px');
  width: 100%;
  overflow-y: scroll;
}
.section-header {
  width: 100%;
  height: 30px;
  background: rgba(241, 241, 241, 1);
  border-radius: 2px;
  line-height: 30px;
  text-align: center;
  .font-regular(14px, #000000);
  margin: 12px 0;
}
.series-item {
  width: 100%;
  height: 72px;
  .flexible(row, center, flex-start);
  border-bottom: 1px solid #f0f0f0;

  &:active {
    opacity: 0.8;
  }

  &-avatar {
    width: 70px;
    height: 46px;
    margin-right: 20px;
  }

  &-model-message {
    box-sizing: border-box;
    padding: 3px 0;
    .flexible(column, flex-start, space-between);
    width: 100%;
    height: 47px;

    span {
      width: 100%;
      overflow: hidden;
      .single-line;
    }

    :first-child {
      .font-regular(16px, #000000);
    }

    :last-child {
      .font-regular(12px, rgba(0, 0, 0, 0.32));
      :first-child {
        .font-medium(12px, #f03a21);
      }
    }
  }

  &-message {
    box-sizing: border-box;
    padding: 3px 0;
    .flexible(column, flex-start, space-between);
    width: 170px;
    height: 47px;

    span {
      width: 100%;
      overflow: hidden;
      .single-line;
    }

    :first-child {
      .font-regular(16px, #000000);
    }

    :last-child {
      .font-regular(12px, rgba(0, 0, 0, 0.32));
      :first-child {
        .font-medium(12px, #f03a21);
      }
    }
  }
}
</style>
