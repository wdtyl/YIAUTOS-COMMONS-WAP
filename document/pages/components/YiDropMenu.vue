<template>
    <playground component-name="yi-drop-menu" />
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
export default class YiDropMenu extends Vue {
  static getName(): string {
    return 'yi-drop-menu';
  }
  mounted() {}
}
</script>

<style scoped lang="less"></style>
