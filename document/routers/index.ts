import VueRouter from 'vue-router';
import Intro from '../pages/intro/Intro.vue';
import Guide from '../pages/intro/Guide.vue';
import Log from '../pages/intro/Log.vue';
import Rule from '../pages/intro/Rule.vue';
import Design from '../pages/intro/Design.vue';

import YiButton from '../pages/components/YiButton.vue';
import YiModelLib from '../pages/components/YiModelLib.vue';
import YiModelDrawer from '../pages/components/YiModelDrawer.vue';
import YiActionSheet from '../pages/components/YiActionSheet.vue';
import YiRate from '../pages/components/YiRate.vue';
import YiSelect from '../pages/components/YiSelect.vue'; // 底部Select 单选多选
import YiDropMenu from '../pages/components/YiDropMenu.vue'; // 下拉选择
import YiMessage from '../pages/components/YiMessage.vue'; // 下拉选择
import YiDatePicker from '../pages/components/YiDatePicker.vue';
import YiDialog from '../pages/components/YiDialog.vue';
import YiDrawer from '../pages/components/YiDrawer.vue';
import YiColorSelect from '../pages/components/YiColorSelect.vue';
import YiArea from '../pages/components/YiArea.vue';
import YiUpload from '../pages/components/YiUpload.vue';
import YiPullRefresh from '../pages/components/YiPullRefresh.vue';
import YiMoneyInput from '../pages/components/YiMoneyInput.vue';

import YiModal from '../pages/components/YiModal.vue'; // 弹出层
import YiSkeleton from '../pages/components/YiSkeleton.vue'; // 骨架屏
import YiAreaPicker from '../pages/components/YiAreaPicker.vue'; // 省市区

import HttpRequest from '../pages/commons/HttpRequest.vue';
import MicroRouter from '../pages/commons/MicroRouter.vue';
import ErrorDisplay from '../pages/commons/ErrorDisplay.vue';
import TokenGenerator from '../pages/commons/TokenGenerator.vue';
import EventBus from '../pages/commons/EventBus.vue';

const routes = [
  { path: '/intro', component: Intro },
  { path: '/guide', component: Guide },
  { path: '/log', component: Log },
  { path: '/rule', component: Rule },
  { path: '/design', component: Design },

  { path: '/yi-http-request', component: HttpRequest },
  { path: '/yi-token-generator', component: TokenGenerator },

  { path: '/yi-micro-router', component: MicroRouter },
  { path: '/yi-error-display', component: ErrorDisplay },

  { path: '/yi-event-bus', component: EventBus },
  { path: '/yi-button', component: YiButton },
  { path: '/yi-rate', component: YiRate },
  { path: '/yi-drawer', component: YiDrawer },
  { path: '/yi-model-lib', component: YiModelLib },
  { path: '/yi-model-drawer', component: YiModelDrawer },
  { path: '/yi-action-sheet', component: YiActionSheet },
  { path: '/yi-select', component: YiSelect },
  { path: '/yi-drop-menu', component: YiDropMenu },
  { path: '/yi-message', component: YiMessage },
  
  { path: '/yi-modal', component: YiModal },
  { path: '/yi-skeleton', component: YiSkeleton },
  { path: '/yi-areaPicker', component: YiAreaPicker },
  
  { path: '/yi-color-select', component: YiColorSelect },
  { path: '/yi-area', component: YiArea },
  { path: '/yi-upload', component: YiUpload },
  { path: '/yi-pull-refresh', component: YiPullRefresh },
  { path: '/yi-money-input', component: YiMoneyInput },
  { path: '/yi-date-picker', component: YiDatePicker },
  { path: '/yi-dialog', component: YiDialog },
  {
    path: '/',
    redirect: '/intro',
  },
  { path: '*', redirect: '/intro', hidden: true },
];

export default new VueRouter({
  routes,
});
