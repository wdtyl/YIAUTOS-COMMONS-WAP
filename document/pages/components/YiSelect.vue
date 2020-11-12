<template>
    <playground component-name="yi-select" />
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
export default class YiSelect extends Vue {
  static getName(): string {
    return 'yi-select';
  }
  mounted() {}
}
</script>

<style scoped lang="less"></style>
