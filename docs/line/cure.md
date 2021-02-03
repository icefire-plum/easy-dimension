## 曲线
<p>根据一系列点画出经过这些点的曲线</p>
<template>
  <div class="demo" id="easy-easyDimension"></div>
</template>

<script>
import EasyDimension from "../../packages/mark/index.js"
const easyDimension = new EasyDimension()
export default {
  mounted() {
    easyDimension.init('easy-easyDimension')
    const option = {
      points: [
        { x: 200, y: 198 },
        { x: 220, y: 230 },
        { x: 278, y: 232 },
        { x: 343, y: 276 },
        { x: 398, y: 298 },
        { x: 504, y: 247 },
        { x: 610, y: 220 }
      ],
      lineColor: "#76C1A6",
      linewIdth: 2,
      lineDash: [],
    };
    easyDimension.drawCure(option);
  }
}
</script>

<style>
.demo {
  width: 800px;
  height: 400px;
  background: #eee;
}
</style>

## 示例代码
```html
<template>
  <div class="demo" id="easy-easyDimension"></div>
</template>
```
```js
export default {
    mounted() {
        this.$easyDimension.init('easy-easyDimension')
        const option = {
            points: [
                { x: 200, y: 198 },
                { x: 220, y: 230 },
                { x: 278, y: 232 },
                { x: 343, y: 276 },
                { x: 398, y: 298 },
                { x: 504, y: 247 },
                { x: 610, y: 220 }
            ],
            lineColor: "#76C1A6",
            linewIdth: 2,
            lineDash: [],
            lineSmooth: 0.2
        }
        this.$easyDimension.drawCure(option)
    }
}
```
```css
.demo {
    width: 800px;
    height: 400px;
    background: #eee; 
}
```

## 配置项 option
|  参数          | 描述                 |类型    | 必须   |    默认值           |
| ------------- |:--------------------:|:------:|:------:|:------------------:|
| points        |点序列                 |Array   |true    |         --         |
| lineColor     |线段颜色               |String  |false   |        #76C1A6     |
| linewIdth     |线段宽度(px)           |Number  |false   |        2           |
| lineDash      |线段类型               |Array   |false   |        [ ]         |
| lineSmooth    |曲线光滑度             |Number  |false   |        0.2         |

::: tip
关于lineDah 更多信息请参考canvas文档 
<https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash>
:::