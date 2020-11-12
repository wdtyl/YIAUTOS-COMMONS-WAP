<template>
  <playground component-name="yi-event-bus">
    <yi-button type="primary" @click="getToken">
      使用EventBus
    </yi-button>
  </playground>
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
import Playground from '../../components/Playground.vue';

@Component({
  components: { Playground },
})
export default class YiForm extends Vue {
  static getName(): string {
    return 'yi-form';
  }

  getToken() {}

  mounted() {}
}
</script>

<style scoped lang="less"></style>
