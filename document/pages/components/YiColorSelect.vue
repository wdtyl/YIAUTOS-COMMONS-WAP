<template>
  <playground component-name="yi-color-select"/>
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
  components:{Playground}
})
export default class YiDrawer extends Vue{
  static getName(): string {
    return 'yi-color-select';
  }
};
</script>

<style scoped>
</style>