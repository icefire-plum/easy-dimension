## 任意多变形
<p>根据至少3个点画出经过这些点的平面</p>
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
        periphery: {
            show: true,
            color: '#8B8878',
            lineWidth: 5,
            lineDash: []
        },
        fill: {
            show: true,
            color: '#00EE00'
        }
    }
    easyDimension.drawPolygon(option)
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
            periphery: {
                show: true,
                color: '#8B8878',
                lineWidth: 2,
                lineDash: []
            },
            fill: {
                show: true,
                color: '#00F5FF'
            }
        }
        this.$easyDimension.drawPolygon(option)
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
|  参数                   | 描述                 |类型    | 必须   |    默认值           |
| ---------------------- |:--------------------:|:------:|:------:|:------------------:|
| points                 |点序列                 |Array   |true    |         --         |
| periphery              |包围线样式             |Object  |false   |         --         |
|periphery.show          |是否显示包围线         |Boolean  |false   |        false       |
|periphery.color         |包围线颜色             |String   |false   |        #76C1A6     |
|periphery.lineWidth     |包围线宽度             |Number  |false   |        2           |
|periphery.lineDash      |包围线类型             |Array   |false   |        []           |
|fill                    |内部图形样式           |Object   |false   |        --          |
|fill.show               |是否显示内部图形       |Boolean  |false   |        true     |
|fill.color              |内部图形颜色           |String   |false   |        #76C1A6     |

::: tip
关于lineDah 更多信息请参考canvas文档 
<https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash>
:::