/*
 * 车源所在地请求Api接口
 */
import request from '../utils/request-util';


/**
 * 根据文件key获取七牛Token
 */
export function getQiniuUploadToken(params) {
  return request({
    url: 'wechat/qiNiu/token',
    method: 'POST',
    data: params
  }, 'requestCrm');
}
