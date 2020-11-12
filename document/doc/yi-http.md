### Http请求库使用文档

#### 1.使用代码示例:

```
import { HttpRequest } from 'yilib';

const httpClient = HttpRequest({
	baseUrl: 'http://ptestzuul.erp2.itsmycar.cn:7777/zuul/', // 开发环境的URL
	timeout: 20000 // 请求超时时间
});

export default httpClient;
```

封装了Axios的请求库,并实现了自动添加Token到URL

api示例:

```
import HttpClient from '../network/HttpClient';

export function getUserMessage() {
	return HttpClient({
		url: 'authorize/systems',
		method: 'GET',
		tokenFree: false //如果不需要携带Token,设为true,默认为false
	});
}
```
