## 正圆
<p>根据圆心及长短半径等绘制椭圆</p>
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
        center: [200, 200],
        radius: [100, 50],
        periphery: {
            show: true,
            color: '#8B8878',
            lineWidth: 5,
            lineDash: []
        },
        fill: {
            show: true
        }
    }
    easyDimension.drawEllipse(option)
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
            center: [200, 200],
            radius: [100, 50],
            periphery: {
                show: true,
                color: '#8B8878',
                lineWidth: 5,
                lineDash: []
            },
            fill: {
                show: true
            }
        }
        this.$easyDimension.drawEllipse(option)
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
|radius                  |长短轴半径             |Array   |true    |         --         |
|radius[0]               |x轴方向半径            |Number  |true    |         --         |
|radius[1]               |y轴方向半径            |Number  |true    |         --         |
|rotation                |旋转弧度               |Number  |false   |         0         |
|startAngel              |起始方向的弧度         |Number   |false   |         0          |
|endAngle                |结束方向的弧度         |Number   |false   |         2Π         |
|clockwise               |是否逆时针旋转         |Boolean  |false   |         true        |
|periphery              |包围线样式             |Object  |false   |         --         |
|periphery.show          |是否显示包围线         |Boolean  |false   |        false       |
|periphery.color         |包围线颜色             |String   |false   |        #76C1A6     |
|periphery.lineWidth     |包围线宽度             |Number  |false   |        2           |
|periphery.lineDash      |包围线类型             |Array   |false   |        []           |
|fill                    |内部图形样式           |Object   |false   |        --          |
|fill.show               |是否显示内部图形       |Boolean  |false   |        true        |
|fill.color              |内部图形颜色           |String   |false   |        #76C1A6     |


::: tip center
center 表示中心点的坐标，center[0] 代表画布横向的坐标即序列中的x,center[1] 代表画布纵向的坐标即序列中的y
:::

::: tip radius
椭圆的长轴和短轴半径,radius[0]代表在x轴方向的半径，radius[1]代表在y轴方向的半径
:::

::: tip rotation
椭圆图形旋转弧度，请特别注意，该值的计算永远都是顺时针方向旋转，比如值为Math.PI * 0.5时，代表顺时针旋转90°
:::

::: tip startAngel-endAngle
startAngel 表示开始绘制时笔触和中心点连线与3点钟方向形成的弧度;endAngle表示结束绘制时笔触与中心点连线与3点钟方向形成的弧度；请注意，弧度计算本身是按顺时针方向进行，即90°代表6点钟方向
:::

::: tip
关于lineDah 更多信息请参考canvas文档 
<https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash>
:::