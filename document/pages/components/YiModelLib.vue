<template>
  <playground component-name="model-lib"/>
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
import Playground from '../../components/Playground';

@Component({
  components: { Playground },
})
export default class YiModelLib extends Vue {
  static getName(): string {
    return 'yi-model-lib';
  }
  mounted() {}
}
</script>

<style scoped lang="less"></style>
