# easy-dimension
## 一款基于canvas 的对元素进行标注的插件

## 安装方法

    `npm i easy-dimension -S`

## 使用方法

###### main.js

```javascript
    import easyDimension from 'easy-dimension'

    Vue.use(easyDimension)
```

###### demo.vue

```html
        <div id="easy-easyDimension"></div>
```

```javascript
    mounted() {
        // 初始化实例，easy-easyDimension为元素id
        this.$easyDimension.init('easy-easyDimension')
        // 使用实例方法进行标注，具体的方法和配置项如下
        const option = {
            points: [
                { x: 0, y: 10 },
                { x: 30, y: 20 }
            ],
            lineColor: 'red',
            linewIdth: 2,
            lineDash: []
        }
        this.$easyMark.drawLine(option)
    }
```

## 方法及配置项
| 方法          | 配置项         | 配置参数（默认）                  |
| :-----        | :----        | :----:                           |
| drawLine      | points        | 点序列                           |
                | lineColor     | 线段颜色（red）                   |
                | lineWidth     | 线段宽度（2）                     |
                | lineDash      | 线段类型（[ ]）<br/>具体参考https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash |
|drawCure       | points        |点序列                             |
|               | lineColor     |线段颜色（red）                     |
|               | lineWidth     |线段宽度（2）                       |
|               | lineSmooth    |曲线平滑度，0-1间数值（0.2）         |
|               | lineDash      |线段类型（[ ]）<br/>具体参考https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash  |

