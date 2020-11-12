import axios from 'axios';
import { getToken } from '../../utils/token-storage'
const Message = {
  error() {},
  success() {},
  warn() {}
};
const TOKEN_NAME = 'access_token';
interface HttpRequestConfig {
  baseUrl: string;
  timeout: number;
}
/*
* Http请求工具,实现自动注入Token功能
* 基于Axios封装
* */
export default function (props: HttpRequestConfig) {
  const axiosClient = axios.create({
    baseURL: props.baseUrl, // 开发环境的URL
    timeout: props.timeout || 50000, // 请求超时时间
  });

  axiosClient.interceptors.request.use(
    (config: any) => {
      //当存在Token和非忽略Token的情况下在Url中追加token
      if (getToken() && !config.tokenFree) {
        const url = config.url;
        let authorizedUrl = '';
        if (url.indexOf('?') !== -1) {
          authorizedUrl = `${url}&${TOKEN_NAME}=${
            config.token ? config.token : getToken()
            }`;
        } else {
          authorizedUrl = `${url}?${TOKEN_NAME}=${
            config.token ? config.token : getToken()
            }`;
        }
        config.url = authorizedUrl;
        config.data = config.data || {};
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  axiosClient.interceptors.response.use(
    response => {
      // 成功返回，status状态200，额外处理user/info接口成功没有code
      if (response.status === 200 && response.data.code === 200 || response.status === 200 && response.data.principal) {
        return response.data;
      } else {
        let message = '请求失败，请检查！';
        if (response.data.message || response.data.details) {
          message = response.data.message;
          try {
            if (isArray(response.data.details) && response.data.details.length) {
              message = response.data.details[0][Object.keys(response.data.details[0])[0]]
            }
          } catch (e) {
            if (isArray(response.data.details) && response.data.details.length){
              message = response.data.details[0];
            }
          }
        }
        // @ts-ignore
        Message.error(message);
        return Promise.reject(response.data);
      }
    },
    error => {
      console.log('请求体拦截器的失败响应', error, error.response);
      if (error && error.response) {
        switch (error.response.status) {
          case 401:
            locationHref('401：Token失效,请重新登录！');
            break;
          case 403:
            locationHref('403：您没有访问权限！');
            break;
          case 404:
            // @ts-ignore
            Message.error('404: 您访问的资源不存在！');
            break;
          case 500:
            // @ts-ignore
            Message.error('500：服务器端出错！');
            break;
          case 501:
            // @ts-ignore
            Message.error('501：网络未实现！');
            break;
          case 502:
            // @ts-ignore
            Message.error('502: 网络错误！');
            break;
          case 503:
            // @ts-ignore
            Message.error('503: 服务不可用！');
            break;
          case 504:
            // @ts-ignore
            Message.error('504: 网络请求超时！');
            break;
          default:
            console.log(`连接错误${error.response.status}`)
        }
      }
      return Promise.reject(error);
    }
  );

  //TODO 改写为单例工厂模式,防止创建过多的axios实例
  return axiosClient;
}

function locationHref(message) {
  // @ts-ignore
  Message.error(message);
  window.yiautosConfig && window.yiautosConfig.requestErrorHandle && window.yiautosConfig.requestErrorHandle();
}

function isArray(arr):boolean {
  return Object.prototype.toString.call(arr).slice(8, -1) === 'Array'
}
