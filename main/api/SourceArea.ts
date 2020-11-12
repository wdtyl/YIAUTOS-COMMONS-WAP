/*
 * 车源所在地请求Api接口
 */
import request from '../utils/request-util';

/**
 * 请求地区列表
 */
export function getSourceAreaRegion() {
  return request({
    url: 'region/list',
    method: 'get'
  }, 'requestBase')
}

/**
 * 请求省份列表
 */
export function getSourceAreaCity() {
  return request({
    url: 'areas/byRoot',
    method: 'get'
  }, 'requestBase')
}
