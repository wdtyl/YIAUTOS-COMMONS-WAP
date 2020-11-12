//import './style/theme/index.less';
import Vue from 'vue';
import Vant, { Toast, ImagePreview, Dialog } from 'vant';
import 'vant/lib/index.less';

Vue.use(Vant);
Vue.use(Toast);
import { configuration } from './config';

//引入预定义的组件
import YiButton from './components/YiButton/index.vue';
import YiModelLib from './components/YiModelLib/index.vue';
import YiModelWechat from './components/YiModelWechat/index.vue';
import YiModelDrawer from './components/YiModelDrawer/index.vue';
import YiActionSheet from './components/YiActionSheet/index.vue';
import YiRate from './components/YiRate/index.vue';
import YiSelect from './components/YiSelect/index.vue';
import YiDropMenu from './components/YiDropMenu/index.vue';
import YiMessage from './components/YiMessage/index.vue';
import YiDrawer from './components/YiDrawer/index.vue';
import YiColorSelect from './components/YiColorSelect/index.vue';
import YiUpload from './components/YiUpload/index.vue';
import YiPreview from './components/YiPreview/index.vue';

//引入地图地位方法
import YiArea from './utils/getArea';
import YiPullRefresh from './components/YiPullRefresh/index.vue';
import YiMoneyInput from './components/YiMoneyInput/index.vue';
import YiDatePicker from './components/YiDatePicker/index.vue';
import YiDialog from './components/YiDialog/index.vue';

import YiModal from './components/YiModal/index'; // 弹出层
import YiSkeleton from './components/YiSkeleton/index'; // 骨架屏
import YiAreaPicker from './components/YiAreaPicker/index'; // 省市区联动

//引入预定义的工具库
import HttpRequest from './commons/HttpRequest/request';
import MicroRouter from './commons/MicroRouter';
import TokenGenerator from './commons/TokenGenerator';

export function install(Vue: { component: Function, prototype: Object }, config: Object) {
  configuration(config);
  Vue.component('yi-button', YiButton);
  Vue.component('yi-model-lib', YiModelLib);
  Vue.component('yi-model-wechat', YiModelWechat);
  Vue.component('yi-model-drawer', YiModelDrawer);
  Vue.component('yi-action-sheet', YiActionSheet);
  Vue.component('yi-rate', YiRate);
  Vue.component('yi-select', YiSelect);
  Vue.component('yi-drop-menu', YiDropMenu);
  Vue.component('yi-message', YiMessage);
  Vue.component('yi-date-picker', YiDatePicker);
  Vue.component('yi-dialog', YiDialog);

  Vue.component('yi-popup', YiModal);
  Vue.component('yi-skeleton', YiSkeleton);
  Vue.component('yi-areaPicker', YiAreaPicker);
  Vue.component('yi-drawer', YiDrawer);
  Vue.component('yi-color-select', YiColorSelect);
  Vue.component('yi-upload', YiUpload);
  Vue.component('yi-preview', YiPreview);
  Vue.component('yi-pull-refresh', YiPullRefresh);
  Vue.component('yi-money-input', YiMoneyInput);
  //Vue.prototype.$toast = Toast;
  Vue.prototype.$area = YiArea;
  Vue.prototype.$YiPreview = ImagePreview;
  Vue.prototype.$YiDialog = Dialog;
}

export { HttpRequest, MicroRouter, TokenGenerator };

export default {
  install,
  HttpRequest,
  MicroRouter,
  TokenGenerator,
};

async function getArea() {
  await getArea();
}
