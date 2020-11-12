import * as OAuthApi from '../../api/auth';
import { setToken } from '../../utils/token-storage';

export default async function (userName, password) {
  try {
    const result = await OAuthApi.getToken(userName, password);
    console.log('获取到的Token ==>', result);
    if (result.status === 200) {
      const token = result.data.access_token;
      !!token && setToken(token);
    }
  } catch (e) {
    console.log('获取Token失败 ==>', e);
  }
}
