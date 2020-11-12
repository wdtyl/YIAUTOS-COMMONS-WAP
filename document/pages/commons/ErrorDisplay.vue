<template>
  <playground>
    <yi-button type="primary" :loading="loading" @click="testError">
      测试错误处理
    </yi-button>
  </playground>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Playground from '../../components/Playground.vue';

@Component({
  components: { Playground },
})
export default class ErrorDisplay extends Vue {
  money: number | undefined = undefined;
  httpRequest: any;
  loading: boolean = false;

  testError() {
    this.$message.error('发生错误!');
  }

  mounted() {}
}
</script>

<style scoped lang="less"></style>
