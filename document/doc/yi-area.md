### YiArea文档
1.使用代码示例:
```
 async getArea() {
       this.area = await this.$area();
 }
 
```
2.注意点
一定要使用async await同步获取,请求失败返回null，可自行做判断
