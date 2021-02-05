## 绘制一系列点
<p>在画布上绘制一系列点</p>
<template>
  <div class="demo" id="easy-easyDimension"></div>
</template>

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
            {x: 100, y: 100 },
            {x: 200, y: 100 },
            {x: 300, y: 100 },
            {x: 400, y: 100 },
            {x: 500, y: 100 }
          ],
          radius: 2,
          color: '#00F5FF'
        }
        this.$easyDimension.drawPoints(option)
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

<p>额外的，每个点的样式除了默认的圆点也支持其他具有中心属性的图形进行绘制，比如如下三角形。你需要做的是在配置项pointOption中传入该中心图形的配置，并在drawPoints方法中多传入一个绘制该图形的实例方法的指代</p>

::: tip 实例方法的指代
实例方法的指代是指通过 easyDimension 调用特定方法绘制图形时对应方法的字符串格式，比如绘制正多变形的的方法是this.$easyDimension.drawEqlPolygon(option)，那么该正多变形的实例方法指代就是'drawEqlPolygon'
:::
<template>
  <div class="demo" id="easy-easyDimension-point-triangle"></div>
</template>

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
          {x: 100, y: 100 },
          {x: 200, y: 100 },
          {x: 300, y: 100 },
          {x: 400, y: 100 },
          {x: 500, y: 100 }
        ],
        pointOption: {
          center: [0, 0],
          peak: 3,
          distance: 10,
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
      }
      this.$easyDimension.drawPoints(option, 'drawEqlPolygon')
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

<p>所以，对于绘制一系列圆点的情况，除了可以直接修改配置项的radius和color对圆点样式进行修改以外，还可以自定义使用绘制圆的方式进行更加灵活配置，比如以下效果</p>

<template>
  <div class="demo" id="easy-easyDimension-point-pie"></div>
</template>

<script>
import EasyDimension from "../../packages/mark/index.js"
const easyDimension = new EasyDimension()
export default {
  mounted() {
    // 默认圆点
    easyDimension.init('easy-easyDimension')
    const dotOption = {
      points: [
        {x: 100, y: 100 },
        {x: 200, y: 100 },
        {x: 300, y: 100 },
        {x: 400, y: 100 },
        {x: 500, y: 100 }
      ],
      radius: 2,
      color: '#00F5FF'
    }
    easyDimension.drawPoints(dotOption)
    // 自定义三角形
    easyDimension.init('easy-easyDimension-point-triangle')
    const triangleOption = {
      points: [
        {x: 100, y: 100 },
        {x: 200, y: 100 },
        {x: 300, y: 100 },
        {x: 400, y: 100 },
        {x: 500, y: 100 }
      ],
      pointOption: {
        center: [0, 0],
        peak: 3,
        distance: 10,
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
    }
    easyDimension.drawPoints(triangleOption, 'drawEqlPolygon')
    // 自定义圆
    easyDimension.init('easy-easyDimension-point-pie')
    const pieOption = {
      points: [
        {x: 100, y: 100 },
        {x: 200, y: 100 },
        {x: 300, y: 100 },
        {x: 400, y: 100 },
        {x: 500, y: 100 }
      ],
      pointOption: {
        center: [0,0],
        radius: 3,
        periphery: {
          show: true,
          color: '#00F5FF',
          lilineWidth: 5
        },
        fill: {
          show: false
        }
      }
    }
    easyDimension.drawPoints(pieOption, 'drawPie')
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
          {x: 100, y: 100 },
          {x: 200, y: 100 },
          {x: 300, y: 100 },
          {x: 400, y: 100 },
          {x: 500, y: 100 }
        ],
        pointOption: {
          center: [0,0],
          radius: 3,
          periphery: {
            show: true,
            color: '#00F5FF',
            lilineWidth: 5
          },
          fill: {
            show: false
          }
        }
      }
      this.$easyDimension.drawPoints(option, 'drawPie')
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
|points                  |点序列                 |Array    |true    |         --        |
|radius                  |默认圆点半径           |Number   |false    |         2        |
|color                   |默认圆点颜色           |String   |false   |         #00F5FF   |
|pointOption             |中心图形的配置项       |Object   |false   | 请参考对应图形配置  |


::: tip 自定义中心图形
如果调用 drawPoints 方法不传第二个参数的情况将显示默认圆点图形，可通过radius 和color 配置进行样式设置,如果想使用自定义图形请一定保证实例方法的指代和pointOption是一一对应的，当使用自定义图形后，radius和color将静默失效，即使设置了该参数也将不起任何效果
:::
