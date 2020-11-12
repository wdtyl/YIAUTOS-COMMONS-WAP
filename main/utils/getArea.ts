import * as MapApi from '../api/map'
export default async function getArea(): Promise<any>{
  try {
    let mapData = await MapApi.getArea();
    if (mapData.status === 200 && mapData.data.status != '0') {
      return mapData.data;
    }
    return null
  } catch (e) {
    return null
  }
}
