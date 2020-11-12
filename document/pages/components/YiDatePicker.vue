<template>
  <playground component-name="yi-date-picker"/>
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
  components: { Playground }
})
export default class YiDatePicker extends Vue {
  static getName(): string {
    return 'yi-date-picker';
  }

  mounted() {}
}
</script>

<style scoped lang="less">
</style>
