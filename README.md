# 宜买车组件库(Wap)

### 1.项目结构说明
```
.
├── README.md 说明文件
├── dist 组件库演示与文档项目打包产物
│   ├── css
│   ├── favicon.ico
│   ├── fonts
│   ├── img
│   ├── index.html
│   └── js
├── main 组件库代码文件夹
│   ├── components
│   ├── index.ts
│   └── styles
├── output 组件库打包目录
│   ├── demo.html
│   ├── fonts
│   ├── yilib.common.js
│   ├── yilib.css
│   ├── yilib.umd.js
│   └── yilib.umd.min.js
├── package.json
├── postcss.config.js
├── public 演示与文档项目静态资源
│   ├── favicon.ico
│   └── index.html
├── res 脚本所需资源
│   ├── lib
│   └── package.json
├── shell 脚本目录文件
│   └── build_dist.sh
├── src 演示与文档项目代码
│   ├── App.vue
│   ├── assets
│   ├── components
│   ├── main.ts
│   ├── shims-tsx.d.ts
│   └── shims-vue.d.ts
├── tsconfig.json typescript配置文件
├── vue.config.js Vue/Webpack配置文件
└── yiautos-commons-wap 组件库导出最终文件
    ├── lib
    └── package.json
```
组件css动画标准参考：
一、transition-duration属性值统一使用0.3s；
例：transition-duration: 0.3s;

二、transition-delay，两个动画之间的时间间隔统一设置0.1s;
例:  第一个动画transition-delay: 0s;
     第二个动画transition-delay: 0.1s;
     第三个动画transition-delay: 0.2s;
     以此类推。。。

三、未完待补充
