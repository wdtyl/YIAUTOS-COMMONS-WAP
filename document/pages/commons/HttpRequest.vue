<template>
  <playground component-name="yi-http">
    <yi-button type="primary" :loading="loading" @click="mockHttpRequest">
      点击模拟请求
    </yi-button>
  </playground>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Playground from '../../components/Playground.vue';
import { HttpRequest } from 'yiautos-commons-wap';

@Component({
  components: { Playground },
})
export default class HttpRequestDemo extends Vue {
  money: number | undefined = undefined;
  httpRequest: any;
  loading: boolean = false;

  mockHttpRequest() {
    this.loading = true;
    this.httpRequest({
      url: 'authorize/systems',
      method: 'GET',
    }).then(result => {
      this.loading = false;
      alert(JSON.stringify(result));
    });
  }

  mounted() {
    this.httpRequest = new HttpRequest({
      baseUrl: 'http://ptestzuul.erp2.itsmycar.cn:7777/zuul/',
      timeout: 20000,
    });
  }
}
</script>

<style scoped lang="less"></style>
