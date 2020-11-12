<template>
  <playground component-name="yi-pull-refresh" />
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
export default class YiPullRefreshDoc extends Vue {
  static getName(): string {
    return 'yi-pull-refresh-doc';
  }
  mounted() {}
}
</script>

<style scoped lang="less"></style>
