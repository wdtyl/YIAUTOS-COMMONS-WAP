<template>
  <playground component-name="model-drawer" />
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
export default class YiModelDrawer extends Vue {
  static getName(): string {
    return 'yi-model-drawer';
  }
  mounted() {}
}
</script>

<style scoped lang="less"></style>
