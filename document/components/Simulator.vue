<template>
  <div class="page-display">
    <div class="display-wrapper">
      <section class="phone-demo">
        <iframe
          :src="url"
          frameborder="0"
          width="100%"
          height="100%"
          scrolling="no"
        ></iframe>
      </section>
    </div>
  </div>
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

@Component
export default class Simulator extends Vue {

  @Prop({ type: String, default: ''})
  url: string = '';

  mounted() {}
}
</script>

<style scoped lang="less">
.page-display {
  position: relative;
  margin: 40px 0;
  .display-wrapper {
    position: relative;
    width: 330px;
    height: 645px;
    margin: 0 56px 0 26px;
    background: url('../assets/iphoneX.png') no-repeat center 0;
    background-size: 100%;

    .phone-demo {
      position: absolute;
      top: 64px;
      left: 21px;
      right: 23px;
      bottom: 22px;
      overflow: hidden;
      border-radius: 0 0 35px 35px;
      border: 1px solid #edf0f4;
      border-top: none;
      background-color: #edf0f4;
      iframe {
        width: 0;
        max-width: 100%;
        min-width: 100%;
      }
    }
  }
}
</style>
