<template>
  <playground component-name="yi-micro-router">
    <yi-button type="primary" :loading="loading" @click="mockJump">
      点击跳转
    </yi-button>
  </playground>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Playground from '../../components/Playground.vue';
import { MicroRouter } from 'yiautos-commons-wap';

@Component({
  components: { Playground },
})
export default class MicroRouterDemo extends Vue {
  money: number | undefined = undefined;
  httpRequest: any;
  loading: boolean = false;

  mockJump() {
    MicroRouter.push('hello#/world', {
      name: 'lihao',
      age: 28,
    });
  }

  mounted() {}
}
</script>

<style scoped lang="less"></style>
