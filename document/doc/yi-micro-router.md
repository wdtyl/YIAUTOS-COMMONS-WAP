### 微前端路由使用文档

#### 1.使用代码示例:

```
import { MicroRouter } from 'yilib';

//第一个参数为应用名,第二个为路由名,第三个参数为附带在url上的参数
MicroRouter.jump('hello', 'world', {
    name: 'lihao',
    age: 28
});


//第一个参数为应用名,第二个参数为附带在url上的参数
MicroRouter.push('#hello', {
    name: 'lihao',
    age: 28
});
```

本组件用于不同微前端之间的页面跳转,如果在同一App内跳转,可继续使用this.$router.push()
方法.
