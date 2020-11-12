<template>
  <playground component-name="yi-money-input" />
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
export default class YiMoneyInput extends Vue {
  static getName(): string {
    return 'yi-money-input';
  }
  mounted() {}
}
</script>

<style scoped lang="less"></style>
