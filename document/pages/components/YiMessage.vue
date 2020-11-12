<template>
    <playground component-name="yi-message" />
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
export default class YiMessage extends Vue {
  static getName(): string {
    return 'yi-message';
  }
  mounted() {}
}
</script>

<style scoped lang="less"></style>
