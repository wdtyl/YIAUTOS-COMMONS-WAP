<template>
  <playground>
    <yi-button type="primary" @click="getToken">
      点击获取Token
    </yi-button>
  </playground>
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
import { TokenGenerator } from 'yiautos-commons-wap';
import Playground from '../../components/Playground.vue';

@Component({
  components: { Playground },
})
export default class YiForm extends Vue {
  static getName(): string {
    return 'yi-form';
  }

  getToken() {
    TokenGenerator('17786123214', '123456');
  }

  mounted() {}
}
</script>

<style scoped lang="less">
</style>
