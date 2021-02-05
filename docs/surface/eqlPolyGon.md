## 正多变形
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
        center: [300, 200],
        peak: 6,
        distance: 100,
        startAngel: Math.PI * 0.5,
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
    easyDimension.drawEqlPolygon(option)
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
            center: [300, 200],
            peak: 6,
            distance: 100,
            startAngel: Math.PI * 0.5,
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
        this.$easyDimension.drawEqlPolygon(option)
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
|center                  |中心点                 |Array   |true    |         --         |
|peak                    |多边形顶点数           |Number   |false  |         3          |
|distance                |中心点距顶点的距离      |Number   |true  |         --          |
|startAngel              |起始顶点的弧度         |Number   |false  |         0          |
|periphery               |包围线样式             |Object  |false   |         --         |
|periphery.show          |是否显示包围线         |Boolean  |false   |        false       |
|periphery.color         |包围线颜色             |String   |false   |        #76C1A6     |
|periphery.lineWidth     |包围线宽度             |Number  |false   |        2           |
|periphery.lineDash      |包围线类型             |Array   |false   |        []           |
|fill                    |内部图形样式           |Object   |false   |        --          |
|fill.show               |是否显示内部图形       |Boolean  |false   |        true     |
|fill.color              |内部图形颜色           |String   |false   |        #76C1A6     |

::: tip center
center 表示中心点的坐标，center[0] 代表画布横向的坐标即序列中的x,center[1] 代表画布纵向的坐标即序列中的y
:::

::: tip startAngel
startAngel 表示起始顶点和中心点连线与3点钟方向形成的弧度，默认是按逆时针方式计算，比如90°则代表从正上方开始绘制
:::

::: tip lineDah
关于lineDah 更多信息请参考canvas文档 
<https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash>
:::