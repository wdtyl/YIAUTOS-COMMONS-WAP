# 宜买车前端项目设计文档

| 版本号 | 作者 | 修订原因 | 修订日期  |
| ------ | ---- | -------- | --------- |
| v1.0.0 | 李昊 | 创建文档 | 2019.11.4 |

---

## 目录

[toc]

---

## 一. 概述

### 1. 参考资料

- 产品原型: 无
- 设计稿: 无

### 2. 需求背景

为规范宜买车移动端网页/小程序 webview 页/App webview 页的开发,避免对相似的工作进行重复设计和开发,决定将常用的功能和组件封装成一个外部组件库提供给各业务项目引用.达到简化开发流程,提高开发效率的目的.

### 3. 目标

完成 wap 环境下常用基础组件和业务组件的开发,完成 wap 环境下常用工具类库的开发,并提供一个易用的组件库引用方式.

## 二. 页面展示

- 组件库项目效果图

![组件库项目效果图](http://markdown.itsmycar.cn/front/document/WeChat51532efa5e98431ea84ea885a179cee5.png)

## 三. 组件和库

### 1. 新增组件

#### 第一期计划开发组件

- YiModelSelect 车型选择(品牌-车系-车型三级选择)
- YiModelDrawer 车型选择侧滑
- YiColorSelect 颜色选择
- YiDialog 警示对话框
- YiModal 弹出层
- YiDrawer 侧滑
- YiUploader 上传组件
- YiPreview 图片/文件预览
- YiSkeleton 骨架屏
- YiLocation 地图与定位
- YiBottomDialog 底部选择框(对话式)
- YiMoneyInput 金额输入
- YiDatePicker 日期选择
- YiAreaPicker 省市区选择
- YiPullRefresh 下拉刷新
- YiSelect 底部单选/多选
- YiDropMenu 下拉选择
- YiMessage 提示 Toast

### 2. 迭代组件

暂无

### 3. 第三方库

主要使用第三方 UI 库 vant-ui 作为基础组件库,在其基础上进行业务组件的开发.

其他第三方库

```
    "amfe-flexible": "^2.2.1",
    "axios": "^0.19.0",
    "babel-core": "^6.26.3",
    "babel-jest": "^24.8.0",
    "babel-polyfill": "^6.26.0",
    "crypto-js": "^3.1.9-1",
    "lodash": "^4.17.15",
    "moment": "^2.24.0",
    "normalize.css": "^8.0.1",
    "numeral": "^2.0.6",
    "vant": "^2.2.8",
    "vue": "^2.6.10",
    "vue-class-component": "^7.0.2",
    "vue-property-decorator": "^8.1.0",
    "vue-router": "^3.0.6",
    "@types/jest": "^24.0.17",
    "@types/mocha": "^5.2.7",
    "@types/numeral": "^0.0.26",
    "@vue/cli-plugin-typescript": "^3.8.0",
    "@vue/cli-service": "^3.8.0",
    "@vue/test-utils": "^1.0.0-beta.29",
    "eslint": "^6.0.1",
    "eslint-plugin-prettier": "^3.1.0",
    "jest": "^24.8.0",
    "less": "^3.9.0",
    "less-loader": "^5.0.0",
    "prettier": "^1.18.2",
    "raw-loader": "^3.1.0",
    "sass": "^1.20.1",
    "sass-loader": "^7.1.0",
    "ts-jest": "^24.0.2",
    "typescript": "^3.4.3",
    "uglifyjs-webpack-plugin": "^2.2.0",
    "vue-jest": "^3.0.4",
    "vue-loader": "^15.7.1",
    "vue-template-compiler": "^2.6.10",
    "postcss-pxtorem": "^4.0.1"
```

- 网络请求库: axios
- 移动端适配: amfe-flexible
- 常用 js 工具库: lodash
- 时间工具库: moment

### 4. 开发文档

[项目介绍与开发教程](http://cdn.liritian.top/ppt/wap/Wap%E7%BB%84%E4%BB%B6%E5%BA%93%E4%BB%8B%E7%BB%8D.pptx)

## 四. 服务端接口定义

### 组件库除部分车型库等强业务相关组件外,暂不使用接口,接口在业务项目中维护

| 接口用途 | 接口路径 | 请求方式 | 参数 |
| -------- | -------- | -------- | ---- |
| 待定     | ---      | ---      | ---  |

## 五. 前端风险点

技术项目,不进行上线,暂无风险点

## 六. 拓展性设计

暂无

## 七. 统计

技术项目,不需要进行统计,后期考虑接入 sentry 进行错误上报

## 八. 开发计划

按技术项目的开发计划进行,利用平常工作时间的 10%-20%进行开发,并长期维护

| 组件名                                         | 负责人 | 计划完成时间 | 备注 |
| ---------------------------------------------- | ------ | ------------ | ---- |
| YiModelSelect 车型选择(品牌-车系-车型三级选择) | 李昊   | 11/1         | ---  |
| YiModelDrawer 车型选择侧滑                     | 李昊   | 11/1         | ---  |
| YiDialog 警示对话框                            | 陈志坚 | 11/14          | ---  |
| YiUploader 上传组件                            | 王佳   | 11/14          | ---  |
| YiPreview 图片/文件预览                        | 蔡伟乾 | 11/14          | ---  |
| YiLocation 地图与定位                          | 王佳   | 11/14          | ---  |
| YiBottomDialog 底部选择框(对话式)              | 李昊   | 11/4         | ---  |
| YiMoneyInput 金额输入                          | 陈燕钦 | 11/14          | ---  |
| YiDatePicker 日期选择                          | 陈志坚 | 11/14          | ---  |
| YiPullRefresh 下拉刷新                         | 李昊   | 11/14          | ---  |
| YiSelect 底部单选/多选                         | 袁紫峰 | 11/14          | ---  |
| YiDropMenu 下拉选择                            | 袁紫峰 | 11/14          | ---  |
| YiMessage 提示 Toast                           | 袁紫峰 | 11/14          | ---  |
| YiColorSelect 颜色选择                         | 贾弘毅 | 11/14          | ---  |
| YiDrawer 侧滑                                  | 贾弘毅 | 11/14          | ---  |
| YiModal 弹出层                                 | 郭辉   | 11/14          | ---  |
| YiSkeleton 骨架屏                              | 郭辉   | 11/14          | ---  |
| YiAreaPicker 省市区选择                        | 郭辉   | 11/14          | ---  |
 
## 九. 上线前 CheckList

| 检查项 | 内容 | 检查结果 |
| ------ | ---- | -------- |
| ---    | ---  | ---      |
