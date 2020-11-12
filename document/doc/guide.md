# 宜买车Wap组件库开发指南

### 一. 目录结构

* 本项目内部分为3个子项目

#### 1. 组件库项目-main目录

#### 2. 移动端演示项目-example目录

#### 3. 文档项目-document目录

### 二. 运行方式

```
"dev-document": "vue-cli-service serve --mode document",
"dev-example": "vue-cli-service serve --mode example",
"build-document": "vue-cli-service build --mode document",
"build-example": "vue-cli-service build --mode example",
"inspect": "vue-cli-service inspect",
"test": "jest --coverage -u",
"output": "vue-cli-service build --report --mode library --target lib --name yiwaplib ./main/index.ts && cd shell && ./build_dist.sh"
```

* dev-document: 运行文档项目;
* dev-example: 运行示例项目;
* build-document: 打包文档项目;
* build-example: 打包示例项目;
* inspect: 导出配置;
* output: 打包组件库项目;
* test: 执行单元测试,每次提交代码前执行;

### 三. 开发流程

#### 1. 编写组件

在main/component下添加组件文件夹,建议命名方式为 Yi + 组件名;

如果需要用到外部资源,放在main/assets目录下;

如果需要编写工具类和函数,放在main/utils目录下;

需要模拟网络请求或传入参数,将模拟的数据放在main/mock文件夹下

开发组件完成后,需要在main/index.ts中注册组件:

```js
function install(Vue: { component: Function }, config: Object) {
  console.log('宿主项目传入的Config ==>', config);
  configuration(config);
  // @ts-ignore
  Vue.component(YiStoreSelect.getName(), YiStoreSelect);
  // @ts-ignore
  Vue.component(YiDropPicker.getName(), YiDropPicker);
  ***
  新开发的组件仿照上面两个组件进行注册
}
```

组件中尽量不要耦合过多业务逻辑,业务逻辑由上层应用提供;

车型选择等后端接口稳定的功能,可以在组件中直接进行网络请求,但要注意添加缓存,对于不常变动的后端返回数据,使用cache的方式减少网络请求

从上层项目传过来的配置,可以从main/config/index.ts中获取,需要传哪些参数,在上层项目中通过Vue.use的第二个参数指定,例如:

```js
import YiLib from 'yiautos-commons-wap';

Vue.use(YiLib, {
  env: 'prod',
  baseUrl: 'https://api.erp.yiautos.com/zuul/',
  client: 'demo',
  email: 'lih@itsmycar.com',
});
```

在组件中可以直接使用config获取上层应用传过来的配置

##### 组件样式编写需要注意

上层应用在使用组件时,会添加class属性,这个属性会添加到组件的根容器的class上,所以组件根容器的class的样式要尽量不和传入的class样式有太大冲突

less中使用的颜色/字体/粗细等常量,都要在 main/styles/config.less中取,方便根据宿主项目更换主题风格

#### 2. 单元测试

单元测试的代码放置在test文件夹下,如果要对开发完成的组件进行单元测试,可以在test下建立一个文件夹;

测试的文件名称为 组件名.test.ts

进行测试前要模拟Vue和Element环境

```js
const localVue = createLocalVue();
import YiDropPicker from '../../main/components/YiDropPicker/index.vue';
import ElementUI from 'element-ui';
//使用模拟的Vue进行测试
localVue.use(ElementUI);
```

测试文件示例

```js
describe('TestDropPicker', () => {

  const component: any = YiDropPicker;
  const mountOptions: any = {
    localVue,
    propsData: {
      options: [{ code: 1, name: '男' }, { code: 2, name: '女' }],
    },
  };

  it('DropPickerMounted', () => {
    const wrapper = mount(component, mountOptions);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('DropPickerRender', () => {
    const wrapper = mount(component, mountOptions);
    expect(wrapper.html()).toBeTruthy();
  });

  it('StoreSelectContainLi', () => {
    const wrapper = mount(component, mountOptions);
    expect(wrapper.contains('li')).toBeTruthy();
  });

  it('StoreSelectOptions', () => {
    const wrapper = mount(component, mountOptions);
    expect(wrapper.props().options.length).toBe(2);
  });

  it('StoreSelectDomCount', () => {
    const wrapper = mount(component, mountOptions);
    const pickerItems = wrapper.findAll('.el-dropdown-menu__item');
    expect(pickerItems.length).toBe(2);
  })
});
```

更多示例,请参考 [VueTestUtil文档](https://vue-test-utils.vuejs.org/zh/guides/)

#### 3. 在Example项目中引用

组件代码开发完成后,需要在Example项目中进行运行和自测,并撰写相关文档;

Example项目是模仿ElementUI等组件库的一个文档项目,我们组件库的所有文档和演示都放在这个项目里,项目的入口为 src/main.ts

Example项目是一个普通的Vue单页面应用,目前部署在 [Event服务器](http://event.itsmycar.cn/component/v1-0-1/index.html#/intro)

![Demo](http://markdown.itsmycar.cn/front/document/WeChat87904e2c9ba59d7410ce85fb2dfe2a9d.png)

开发过程中,我们可以使用相对路径引动的方法引用组件库,这样可以在修改组件文件的同时进行热加载,方便调试,在发布测试时,需要将引用改为引用node_modules的方式:

```js
//进行发布时改为引用node_modules的方式
//import YiLib from 'yiautos-commons-wap';
//进行本地调试时,直接引用组件库的相对路径
import YiLib from '../main';

Vue.use(YiLib, {
  env: 'prod',
  baseUrl: 'https://api.erp.yiautos.com/zuul/',
  client: 'demo',
  email: 'lih@itsmycar.com',
});
```

* 创建组件展示页面

在src/pages下新建一个该组件的页面文件,命名为 组件名.vue

* 在Example项目配置中添加组件
根据组件类型,配置在相应的数组中

```
export const layoutComponents = [
  {
    name: '表单',
    componentId: 'YiForm',
    routerName: 'yi-form',
  },
];
export const basicComponents = [
  {
    name: '下拉选择',
    componentId: 'YiDropPicker',
    routerName: 'yi-drop-picker',
  },
  {
    name: '地面店选择',
    componentId: 'YiStoreSelect',
    routerName: 'yi-store-select',
  },
  {
    name: '简单选择框',
    componentId: 'YiSimpleSelect',
    routerName: 'yi-simple-select',
  },
];
export const formComponents = [];
export const extraComponents = [];
```

* 在路由中配置展示页面
添加组件展示页面到路由中,要注意路由path要和组件的引用名相同

```
const routes = [
  { path: '/intro', component: Intro },
  { path: '/guide', component: Guide },
  { path: '/log', component: Log },
  { path: '/rule', component: Rule },
  { path: '/yi-store-select', component: StoreSelect },
  { path: '/yi-simple-select', component: SimpleSelect },
  { path: '/yi-drop-picker', component: DropPicker },
  { path: '/yi-form', component: Form },
  {
    path: '/',
    redirect: '/intro',
  },
  { path: '*', redirect: '/intro', hidden: true },
];
```

* 编写组件文档
在src/doc文件夹下编写md格式的文档,命名要和组件的引用名相同

![图片](http://markdown.itsmycar.cn/front/document/WeChat4f2f2bf350cf1e8facac16bd426112b4.png)

* 完成配置
运行yarn run serve进行测试

#### 4. 发布组件
运行yarn run output,组件项目会进行打包,视后续需求再决定上传到git或npm仓库中;

打包后的文件夹为yiautos-commons-wap,在node_modules和根目录下均有此文件,可以观察文件大小是否异常,是否缺少关键文件等再进行上传.
