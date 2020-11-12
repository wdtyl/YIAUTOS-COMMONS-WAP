import Vue from 'vue';

const defaultConfig: object = {
  name: 'lihao',
  email: '591353643@qq.com',
};

export function configuration(options: object) {
  console.log('配置全局变量 ==>', options);
  Object.keys(options).forEach(key => {
    // @ts-ignore
    defaultConfig[key] = options[key];
  });
  Vue.prototype.$localConfig = defaultConfig;
  // @ts-ignore
  window.yiautosConfig = defaultConfig;
}

function getConfig() {
  return defaultConfig;
}

export default getConfig;
