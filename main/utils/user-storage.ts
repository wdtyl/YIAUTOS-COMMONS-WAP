// TODO 去除crypto依赖,手写加密解密函数
// @ts-ignore
import Crypto from 'crypto-js';
// @ts-ignore
import lodash from 'lodash';
const { AES } = Crypto;

const UserInfoKey = 'userInfo';
const encriptKey = '!!YiAutoERPWeb!!';

export function setUserInfo(userInfo: object) : void{
  if (!lodash.isObject(userInfo)) {
    return;
  }
  const encryptMessage = AES.encrypt(JSON.stringify(userInfo), encriptKey);
  localStorage.setItem(UserInfoKey, encryptMessage);
}

export function getUserInfo() {
  const decryptBytes = AES.decrypt(
    localStorage.getItem(UserInfoKey) || '',
    encriptKey
  );
  const userInfo = JSON.parse(decryptBytes.toString(Crypto.enc.Utf8) || '{}');
  if (lodash.isObject(userInfo)) {
    return userInfo;
  } else {
    return null;
  }
}
