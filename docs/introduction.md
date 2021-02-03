# 介绍
    基于canvas 对指定元素进行标注的插间

## 安装
    npm i easy-dimension -S

## 使用
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;main.js
```js
import easyDimension from 'easy-dimension'
Vue.use(easyDimension)
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;demo.vue
``` html
<template>
    <div class="demo" id="easy-easyDimension"></div>
</template>
```
```js
export default {
    mounted() {
        // 初始化实例，easy-easyDimension为元素id
        this.$easyDimension.init('easy-easyDimension')
        // 使用实例方法进行标注
        const option = {
            points: [
                { x: 0, y: 10 },
                { x: 30, y: 20 }
            ],
            lineColor: 'red',
            linewIdth: 2,
            lineDash: []
        }
        this.$easyDimension.drawLine(option)
    }
}
```
::: tip
因为canvas作用在元素上，请保证dom元素生成后再调用easyDimension.init()方法
:::

