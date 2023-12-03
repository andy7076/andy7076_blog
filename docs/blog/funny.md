# Funny Api

1. URL获取query指定参数
``` js
window.location: https://www.baidu.com/s?ie=UTF-8&wd=funny

const url = new Url(window.location)
const wd = url.searchParams.get('wd')
console.log("print result:", wd)
// print result: funny
```