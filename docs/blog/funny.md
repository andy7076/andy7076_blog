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

3. window.getComputedStyle

`getComputedStyle` 和 `element.style` 是用于获取元素样式的两种不同方式，它们有一些重要的区别：
1. getComputedStyle: 返回一个包含所有计算后样式的对象，包括通过 CSS 继承和层叠的样式。这是一个只读的对象，你可以获取元素的所有计算样式，但不能修改它们。
2. element.style: 返回一个表示元素内联样式的对象。它只包含通过 style 属性直接设置的样式，不包含通过外部样式表或者内嵌样式设置的样式。你可以修改这个对象的属性来动态改变元素的样式。

```js
document.documentElement.style.fontSize
''

window.getComputedStyle(document.documentElement, null).getPropertyValue('font-size')
'16px'
```

4. {JSON} Placeholder 模拟数据Api

Free fake API for testing and prototyping.
https://jsonplaceholder.typicode.com/
```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
```