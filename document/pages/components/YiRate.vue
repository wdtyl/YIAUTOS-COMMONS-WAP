<template>
  <playground component-name="yi-rate" />
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
export default class YiRate extends Vue {
  static getName(): string {
    return 'yi-rate';
  }
  mounted() {}
}
</script>

<style scoped lang="less"></style>
