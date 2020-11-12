import getConfig from '../config';
import axios from 'axios';

const config = getConfig();

export function getToken(username, password, loginType = 1) {



  return axios({
    // @ts-ignore
    url: window.yiautosConfig.oauthUrl + `oauth/token?type=${loginType}&grant_type=password&username=${username}&password=${password}&scope=trust`,
    method: 'POST',
    auth: {
      username: 'crm-client',
      password: '$2a$10$hv1ZNontrZr8ptqVP6LhPekcIatksaeBZd3iRl1PM'
    },
    headers: {
      loadingTag: 'departments:users'
    }
  });
}
