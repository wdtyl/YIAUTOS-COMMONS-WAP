<template>
  <playground component-name="yi-upload"/>
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
export default class YiButton extends Vue {
  static getName(): string {
    return 'yi-upload';
  }

  mounted() {}
}
</script>

<style scoped lang="less">
</style>
