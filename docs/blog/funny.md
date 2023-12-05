# Just Funny

1. URL获取query指定参数
``` js
window.location: https://www.baidu.com/s?ie=UTF-8&wd=funny

const url = new Url(window.location)
const wd = url.searchParams.get('wd')
console.log("print result:", wd)
// print result: funny
```
2. CommonJS和EsModule的区别

[「万字进阶」深入浅出 Commonjs 和 Es Module](https://juejin.cn/post/6994224541312483336?searchId=2023120514144604D7F1A48D8054CF12B8)