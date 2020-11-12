<template>
  <div>
    toast
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

export default class YiMessage extends Vue {
  static getName(): string {
    return 'yi-message';
  }

  private show: Boolean = true
  data() {
    return {
    }
  }
  

  mounted() {
    console.log(this, 'toast')
  }
  
}
</script>

<style scoped lang="less">
@import '../../style/config';


</style>
