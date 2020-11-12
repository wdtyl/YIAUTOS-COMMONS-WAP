<template>
    <van-popup
      position="bottom"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <div class="vant-wrapper">
        <van-area
          :area-list="curAreaList"
          :columns-num="curColumnsNum"
          :loading="loading"
          @cancel="onCancel"
          @confirm="onConfirm"
        />
      </div>
    </van-popup>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Area from '../../mock/area';
import * as AreaApi from '../../api/SourceArea';

@Component
export default class YiSkeleton extends Vue {
  static getName(): string {
    return 'yi-area-picker';
  }
  @Prop({ default: {} })
  private areaList: object;

  @Prop({ default: 3 })
  private columnsNum: string | number;

  private curAreaList: object = {};
  private curColumnsNum: string | number;
  private loading: boolean = false;

  @Watch('areaList', { immediate: true, deep: true })
  onAreaListChanged(val: any, oldVal: any) {
    console.log('Watch ==>', val, oldVal);
  }

  // 初始化省市区（可选）
  async theInitArea() {
    this.loading = true;
    try {
      // let res = await AreaApi.getSourceAreaCity();
      this.curAreaList = Area;
      this.loading = false;
    } catch (e) {
      this.loading = false;
      this.$toast.fail(e.message);
    }
  }
  onCancel() {
    this.$emit('on-cancel', false);
  }
  onConfirm(res) {
    this.$emit('on-confirm', res);
  }
  open() {
    // 暂未使用
    // this.$refs['areaPicker'].open();
  }
  mounted() {
    console.log('地区组件 =>', this.areaList);
    // 默认使用 Mock 数据(正式环境更换接口数据);
    if (!Object.keys(this.areaList).length) {
      this.theInitArea();
    } else {
      this.curAreaList = this.areaList;
    }
    this.curColumnsNum = this.columnsNum;
  }
}
</script>

<style scoped lang="less">
@import '../../style/config';
.vant-wrapper {
  width: 375px;
}
</style>
