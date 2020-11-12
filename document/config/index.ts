//展示项目是否为本地
export const isLocal = true;
//展示项目链接
export const EXAMPLE_URL = {
  local: 'http://localhost:8080/#/',
  remote: 'http://event.itsmycar.cn/component/wap-example/index.html#/',
};

export const layoutComponents = [
  {
    name: '车型库',
    componentId: 'YiModelLib',
    routerName: 'yi-model-lib',
  },
  {
    name: '车型侧滑',
    componentId: 'YiModelDrawer',
    routerName: 'yi-model-drawer',
  },
  {
    name: '底部菜单',
    componentId: 'YiActionSheet',
    routerName: 'yi-action-sheet',
  },
  {
    name: '侧滑',
    componentId: 'YiDrawer',
    routerName: 'yi-drawer',
  },
  {
    name: '下拉刷新',
    componentId: 'YiPullRefresh',
    routerName: 'yi-pull-refresh',
  },
  {
    name: '省市区选择',
    componentId: 'YiAreaPicker',
    routerName: 'yi-areaPicker'
  }
];

export const basicComponents = [
  {
    name: '按钮',
    componentId: 'YiButton',
    routerName: 'yi-button',
  },
  {
    name: '星级评分',
    componentId: 'YiRate',
    routerName: 'yi-rate'
  },
  {
    name: '底部Select',
    componentId: 'YiSelect',
    routerName: 'yi-select'
  },
  {
    name: '下拉选择',
    componentId: 'YiDropMenu',
    routerName: 'yi-drop-menu'
  },
  {
    name: '提示Toast',
    componentId: 'YiMessage',
    routerName: 'yi-message'
  },
  {
    name: '颜色选择',
    componentId: 'YiColorSelect',
    routerName: 'yi-color-select',
  },
  {
    name: '地图定位',
    componentId: 'YiArea',
    routerName: 'yi-area',
  },
  {
    name: '图片上传',
    componentId: 'YiUpload',
    routerName: 'yi-upload',
  },
  {
    name: '金额输入框',
    componentId: 'YiMoneyInput',
    routerName: 'yi-money-input',
  },
  {
    name: '弹出层',
    componentId: 'YiModal',
    routerName: 'yi-modal'
  },
  {
    name: '骨架屏',
    componentId: 'YiSkeleton',
    routerName: 'yi-skeleton'
  },
  {
    name: '日期选择',
    componentId: 'YiDatePicker',
    routerName: 'yi-date-picker'
  },
  {
    name: '警示框',
    componentId: 'YiDialog',
    routerName: 'yi-dialog'
  },
];
export const formComponents = [];
export const extraComponents = [
  {
    name: 'Http请求库',
    componentId: 'YiHttpRequest',
    routerName: 'yi-http-request',
  },
  {
    name: '微服务跳转',
    componentId: 'YiMicroRouter',
    routerName: 'yi-micro-router',
  },
  {
    name: '错误提示',
    componentId: 'YiErrorDisplay',
    routerName: 'yi-error-display',
  },
  {
    name: '获取Token',
    componentId: 'YiTokenGenerator',
    routerName: 'yi-token-generator',
  },
  {
    name: 'EventBus使用',
    componentId: 'EventBus',
    routerName: 'yi-event-bus',
  },
];
