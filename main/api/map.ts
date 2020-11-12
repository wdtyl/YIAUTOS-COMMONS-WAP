import axios from 'axios';

export function getArea() {
  return axios({
    // @ts-ignore
    url: 'https://restapi.amap.com/v3/ip?key=a2d8883fdba4e3131c1564ee6021ffb4',
    method: 'GET'
  });
}
