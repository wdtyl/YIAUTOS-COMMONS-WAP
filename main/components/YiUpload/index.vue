<template>
    <van-uploader
      v-model="realValue"
      :after-read="onUpload"
      @delete="onDelete"
      result-type="file"
      :multiple="multiple"
      :max-count="realMaxCount"
      :disabled="disabled"
      :deletable="!disabled"
    />
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Model,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';

import { Toast } from 'vant'
import * as QiniuService from '../../api/QiNiu'
import axios from 'axios';
@Component({})
export default class YiUpload extends Vue {
  static getName(): string {
    return 'yi-upload';
  }
  @Prop({default: []}) value!:Array<any>;//当前颜色
  @Prop({default: true}) multiple!:boolean;//
  @Prop({default: false}) disabled!:boolean;//
  @Prop({default: 10}) maxCount!:number;//
  realValue: Array<any> = [];
  realMaxCount: number;
  bucketName: string = 'yiautos-crm-dev';
  bucketUrl: string = 'http://test.erp.images.itsmycar.cn/';
  cdnRoute: string = 'test-cocntract';

  @Watch('value', {immediate: true, deep: true})
  onValueChange(newVal: Array<any>, oldVal: Array<any>){
    this.initValue();
  }

  @Watch('maxCount')
  onMaxCountChange(val: number, oldVal: number) {
    this.initMaxCount();
  }

  onUpload(file) {

    let WarningLoading = null;
    let UpLoading = null;
    let time = 0;
    if (this.isArray(file) && file.length === 1) {
       WarningLoading = Toast({
        duration: 1000,
        message: `最多只能上传${this.maxCount}张图片`,
        forbidClick: true
       });
      time = 1000;
    }
    let timer = setTimeout(async () => {
      if (WarningLoading)  {
        WarningLoading.clear()
      }
      UpLoading = Toast.loading({
        duration: 0,
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner'
      });
      // 多张图片上传
      if (this.isArray(file)) {
        console.log('多个数组', file);
        let len = file.length;
        let count = 0;
        let realLen = this.realValue.length;
        for (let i = 0; i < len; i++) {
          let urls = await this.doUploadAction(file[i].file);
          if (urls) {
            // 上传成功后修改父组件的数据，触发emit
            this.onEmitInput(urls);
            count++;
          } else {
            // 上传失败将vant上的错误数据清除
            this.realValue.splice(realLen - 1 + i, 1)
          }
        }
        UpLoading.clear();
        if (count !== len) {
          Toast({
            message: `上传成功${count}张，失败${len - count}张`,
            duration: 2000
          });
        }
      }
      // 单张图片上传
      if (this.isObject(file)) {
        console.log('单个数据', file);
        let urls = await this.doUploadAction(file.file);
        if (urls) {
          this.onEmitInput(urls)
        } else {
          UpLoading.clear();
          // 上传失败将vant上的错误数据清除
          this.realValue.pop();
          Toast({
            message: '上传失败，请重试！',
            duration: 2000
          });
          return false;
        }
        UpLoading.clear();
      }
      clearTimeout(timer)
    }, time);
  }
  onEmitInput(urls) {
    let arr = this.value.slice();
    arr.push(urls);
    this.$emit('input', arr);
    this.$emit('update:value', arr);
  }
  async doUploadAction(file):string|null {
    try {
      let key = `${this.cdnRoute}-${new Date().getTime()}-${this.uuid()}`;
      // console.log('当前文件的key ==>', key);
      let tokenRes = await QiniuService.getQiniuUploadToken({
        bucket: this.bucketName,
        key: key
      });
      // console.log('服务端获取token返回的参数', tokenRes);
      const param = new FormData();
      param.append('token', tokenRes.data);
      param.append('key', key);
      param.append('file', file, file.name);
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      };
      let qNres = await axios.post('http://up.qiniu.com/', param, config);
      // console.log('七牛的qNres', qNres);
      return this.bucketUrl + qNres.data.key;
    } catch (e) {
      console.log(e);
      return null
    }
  }
  onDelete(file, local) {
    let imgList = this.value.slice();
    imgList.splice(local.index, 1);
    this.$emit('input', imgList)
  }
  onOversize() {
    console.log('超过上传张数');
  }
  initValue() {
    let newImgList = [];
    if (!this.value.length && typeof this.value[0] === 'object') return false;
    for (let img of this.value) {
      newImgList.push({url: img, isImage: true})
    }
    this.realValue = newImgList;
  }
  initMaxCount() {
    this.realMaxCount = this.maxCount === 10 && this.disabled ? this.value.length : this.maxCount;
  }
  initQiniuParams() {
    if (this.$localConfig.env === 'prod') {
      this.bucketName = 'yiautos-crm-prod';
      this.bucketUrl = 'http://erp.images.itsmycar.cn/';
      this.cdnRoute = 'wechat-contract';
    } else {
      this.bucketName = 'yiautos-crm-dev';
      this.bucketUrl = 'http://test.erp.images.itsmycar.cn/';
      this.cdnRoute = 'test-cocntract';
    }
  }
  isArray(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === 'Array'
  }
  isObject(value) {
    return Object.prototype.toString.call(value).slice(8, -1) === 'Object'
  }
  uuid(){
    let s = [];
    let hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    return s.join('');
  }
  mounted() {
    this.initQiniuParams();
    this.initValue();
    this.initMaxCount();
  }
}
</script>

<style scoped lang="less">
@import '../../style/config';
</style>
