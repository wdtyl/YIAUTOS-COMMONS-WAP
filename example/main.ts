import 'babel-polyfill';
import 'normalize.css/normalize.css';
import './style/init.css';
import 'amfe-flexible';
import Vue from 'vue';
import App from './App.vue';
import router from './route/router';
//模拟生产环境时,引用下面的npm包路径
//import 'yiautos-commons-wap/lib/yiwaplib.css';
//import YilibWap from 'yiautos-commons-wap';
//开发过程中,引用下面的相对路径
import YilibWap from '../main';

Vue.use(YilibWap, {
  env: 'test',
  // baseUrl: 'http://testzuul.erp2.itsmycar.cn:7775/zuul/',
  // oauthUrl: 'http://testoauth.erp2.itsmycar.cn:7775/',
  baseUrl: 'https://api.erp.yiautos.com/zuul/',
  oauthUrl: 'https://oauth.erp.yiautos.com/',
  client: 'demo',
  email: 'lih@itsmycar.com',
  requestErrorHandle: () => {}
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
