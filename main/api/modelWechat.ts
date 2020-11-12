/*
 * 车型库请求Api接口
 */
import request from '../utils/request-util';

/**
 * 分页搜索所有上架车型
 */
export function getModelsPutawayPage(text, pageSize = 30, pageNum = 1) {
  return request({
    url: 'models/putaway_list/page',
    method: 'POST',
    data: { pageSize, pageNum, condition: { name: [text] } }
  }, 'requestModel')
}

/**
 * 获取指定Id的车型信息
 */
export function getModelById(modelId) {
  return request({
    url: `models/${modelId}`,
    method: 'GET'
  }, 'requestModel')
}

/**
 * 获取所有品牌
 */
export function getBrandList() {
  return request({
    url: '/brand/putaway_list',
    method: 'post',
    data: {}
  }, 'requestModel');
}

/**
 * 根据品牌获取厂商
 */
export function getFirmList(brandId) {
  return request({
    url: `/firm/putaway_list/${brandId}`,
    method: 'post',
    data: {}
  }, 'requestModel');
}

/**
 * 根据厂商获取车系
 */
export function getSeriesList(firmId) {
  return request({
    url: `/series/putaway_list/${firmId}`,
    method: 'post',
    data: {}
  }, 'requestModel');
}

/**
 * 根据车系获取车型列表
 */
export function getModelsList(seriesId) {
  return request({
    url: `/models/putaway_list/${seriesId}`,
    method: 'post',
    data: {}
  }, 'requestModel');
}
