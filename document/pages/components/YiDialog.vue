<template>
  <playground component-name="yi-dialog"/>
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
export default class YiDialog extends Vue {
  static getName(): string {
    return 'yi-dialog';
  }

  mounted() {}
}
</script>

<style scoped lang="less">
</style>
