## 宜买车Vue项目开发规范:

### 1.文件夹、文件结构规范:

类目与模块的文件夹（如utils、views）全部小写，如有多个单词组成，中间使用‘-’连接

例如: order-controller

组件文件: 首字母大写，如有多个字母组成，遵循驼峰命名法

例如：CarSeriesSelector、MoneyInput.vue

工具类js文件:首字母大写，遵循驼峰命名法

例如：TimeTransferUtil.js

### 2.Vue代码结构规范

我们统一使用Vue单文件组件的形式组织Vue代码

文件结构：
<template></template>
<script></script>
<style></style>
<style scoped></style>
需要按顺序排列，其中如果有用到全局样式，需要把全局样式写在局部样式前。

Vue中js代码规范：

默认导出匿名Vue组件对象
export default {
  name: '',
  components: {},
  mixins: [],
  props: {}
  data() {
  	return {}
  },
  filters: {},
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeDistroyed() {}
};

name要与组件名称一致；

components中注册在此组件中局部引用的组件，例如：
components: {
	HelloWorld,
	TestComponent
}

props中使用的prop，需要以小写字母开头，遵循驼峰命名法命名，必须声明prop的type，例如：
props: {
	userName: {
		type: String,
		required: false,
		default: 'userName1'
	}
}
Vue对象的其他属性按上面的顺序排列，生命周期对象写在最后，需要按生命周期的执行顺序排列。

### 3.开发中Log日志使用规范

只允许使用console.log()与console.warn()方法，不允许使用console.error()抛出错误，错误处理请参照后文。

使用方法：
console.log('Log的标记 ==>', logContent1， logContent2);

每个Log的第一个参数必须是Log标记，用于区分Log。

正式版本需要在项目初始化时屏蔽Log，例如：
if(prod) {
	window.console.log = () => null;
	window.console.warn = () => null;
	window.console.error = () => null;
}

### 4.computed编写规范

如果只是对View显示的值做格式化处理，建议使用filter，而不是computed函数，这样可以节省资源。

computed函数必须以Comp结尾，用于和data与Prop中的属性进行区分，且必须return一个有效值，例如：
computed: {
	userWalletComp() {
		return 10 + 20;
	}
}

如果computed函数中引用了不确定是否有效的值，需要使用try catch包裹,并进行异常处理, 例如：
computed: {
	userWalletComp() {
		try {
 			return 10 + this.getRealNum();
		} catch(e) {
			return 0
		}
	}
}

在computed函数中禁止对ViewModel中的参数进行复制，可能引起连锁反应
错误实例:
computed: {
	userWalletComp() {
		this.userMoney = 20;
		return 10 + 20;
	}
}

### 5.methods开发规范

特别注意!同步方法与异步方法:
需要网络请求的方法，推荐使用async/await的方式，也可以使用promise then的方式；

async/await 函数最外层必须用try catch包裹，promise函数最后必须有catch块；

需要同时发起多个请求,并进行汇总的函数，可以使用Promise.all,如果对时序没有要求，可以使用先调用async方法，在使用时await取值的方式，例如：

const func1 = asycnFunc1();
const func2 = asycnFunc2();
const func3 = asycnFunc3();

console.log('func1结果 ==>', await func1);
console.log('func2结果 ==>', await func2);
console.log('func3结果 ==>', await func3);

如果对时序要求严格，需要按1 》2 》3的时序顺序进行，可以进行如下操作:

const func1 = await asycnFunc1();
const func2 = await asycnFunc2(func1);
const func3 = await asycnFunc3(func2);

一定要特别注意时序，根据统计，很多Bug由时序错误引起。

暴露给外部组件使用的函数:
有些情况，我们需要通过ref去主动调用组件中的某些方法，这些方法需要以下划线开头，用来与内部用函数做区分，例如：
methods: {
	_exportData() {
		return this.computedData;
	}
}

### 6.Vue ViewModel Data组织规范。

为避免深层次对象无法监听，data中的对象尽量只使用一层结构。

data中的属性命名规范：

开头字母小写，如果由多个字母组成，需要使用驼峰命名法。
