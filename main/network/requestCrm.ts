import HttpRequest from '../commons/HttpRequest/request';
import getConfig from '../config';

const config = getConfig();

console.log('获取的全局变量 ==>', config);

const request = HttpRequest({
  baseUrl: config.baseUrl + 'crm', // 开发环境的URL
  timeout: 20000, // 请求超时时间
});

export default request;
