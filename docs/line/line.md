## 线段
<p>连接两个点绘制一条线段</p>
<template>
  <div class="demo" id="easy-easyDimension"></div>
</template>

<script>
import EasyDimension from "../../packages/mark/index.js"
const easyDimension = new EasyDimension()
export default {
  mounted() {
    easyDimension.init('easy-easyDimension')
    // 使用实例方法进行标注，具体的方法和配置项如下
    const option = {
      points: [
        { x: 200, y: 100 },
        { x: 600, y: 300 },
      ],
      lineColor: "#76C1A6",
      linewIdth: 2,
      lineDash: [],
    };
    easyDimension.drawLine(option);
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
                { x: 200, y: 100 },
                { x: 600, y: 300 },
            ],
            lineColor: "#76C1A6",
            linewIdth: 2,
            lineDash: [],
        };
        this.$easyDimension.drawLine(option)
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
| points        |给定两点的坐标          |Array  |true    |         --         |
| lineColor     |线段颜色               |String  |false   |        #76C1A6     |
| linewIdth     |线段宽度(px)           |Number  |false   |        2           |
| lineDash      |线段类型               |Array   |false   |        [ ]         |

::: tip
关于lineDah 更多信息请参考canvas文档 
<https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash>
:::