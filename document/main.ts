import Vue from 'vue';
// @ts-ignore
import App from './App.vue';
//import YiLib from 'yiautos-commons-wap';
import YiLib from '../main';
import VueRouter from 'vue-router';
import './styles/index.css';
import router from './routers';

Vue.use((window as any).VueMarkdown);

Vue.use(YiLib, {
  env: 'prod',
  baseUrl: 'http://testzuul.erp2.itsmycar.cn:7775/zuul/',
  oauthUrl: 'http://testoauth.erp2.itsmycar.cn:7775/',
  client: 'demo',
  email: 'lih@itsmycar.com',
});

Vue.use(VueRouter);

Vue.config.productionTip = false;

Vue.config.devtools = true;

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
