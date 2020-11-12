### 微前端事件总线使用文档

#### 1.注册事件:

```js
window.EventBus && window.EventBus.addEventListener('ROUTE_UPDATE', this.onRouteChange);

async function onRouteChange(event, callback) {
	getUserInfo()
		.then(result => {
			callback(result);
		})
		.catch(err => {
			console.log('获取用户信息失败 ==>', err);
		});
}
```

### 2.发送事件并获取相应

```js
getUserInfo() {
	window.EventBus.dispatch('GET_USER_INFO', this, this.printUserInfo);
},

printUserInfo(userInfo) {
	console.log('当前用户信息 ==>', userInfo);
}
```

发送事件时如果不带参数,则只传事件名即可,如果要传参数,要传到第三个参数以后

例如

```js
window.EventBus.dispatch('GET_USER_INFO', this, params1, params2);
```

其中的任何参数都可以传回调函数,函数调用者为第二个参数(一般为this);
