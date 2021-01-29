# easy-dimension
## 一款基于canvas 的对元素进行标注的插件

## 安装方法

    npm i easy-dimension -S

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
        this.$easyDimension.drawLine(option)
    }
```

## 方法及配置项
| 方法          |描述           | 配置项              | 配置参数（默认）                        | 类型       | 默认值    |
| :-----:        |       :---: | :----             | :----:                                  |   :---:    |   :---:   |
|drawLine       |      线段     | points             | 点序列                                 |Array       |     --    |
|               |              | lineColor          | 线段颜色（red）                         |String      |red       |
|               |              | lineWidth          | 线段宽度（2）                           |Number      |2         |
|               |              | lineDash           | 线段类型（[ ]）<br/>具体参考https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash |Array | []|
|drawCure       |     曲线      | points             |点序列                                   |Array      |--        |
|               |               | lineColor          |线段颜色（red）                           | String  |red        |
|               |               | lineWidth          |线段宽度（2）                             |Number    |2          |
|               |               | lineSmooth         |曲线平滑度，0-1间数值（0.2）               |Number    |0.2        |
|               |               | lineDash           |线段类型（[ ]                             |Array    |[]         |
|drawPie        |   画圆(扇形)   | center             |圆心坐标 , 类似[ 30, 50]                  |Array     |--         |
|               |               | radius             |半径                                      |Number   |--         |
|               |               | startAngle         |起始角，以弧度计算，默认为0                 |Number   |0          |
|               |               | endAngle           |结束角，以弧度计算，默认为Math.PI * 2       |Number   |Math.PI * 2 |
|               |               | clockwise          |圆弧旋转方向，默认逆时针，false 代表顺时针   |Boolean|false     |
|               |               | periphery          |圆周样式                                   |Object   |--          |
|               |               | periphery.show      |是否显示圆周线，布尔值，默认为false         |Boolean  |false      |
|               |               | periphery.color     |圆周线颜色                                |String    |red        |
|               |               | periphery.lineWidth |圆周线宽度                                |Number    |2          |
|               |               | periphery.lineDash  |圆周线类型                                |Array     |[]         |
|               |               | fill                |填充样式                                  |Object    |--         |
|               |               | fill.show           |是否显示实心圆                             |Boolean   |true       |
|               |               | fill.color          |实心圆颜色                                |String     |red      |
|drawPolygon    | 画多变形       | points              |点序列                                    |Array     ||--      |
|               |               | periphery           |多变形外部轮廓样式                         |Object   |--          |
|               |               | periphery.show      |是否显示轮廓，布尔值，默认为false           |Boolean  |false      |
|               |               | periphery.color     |轮廓颜色                                  |String    |red        |
|               |               | periphery.lineWidth |轮廓线宽度                                |Number    |2          |
|               |               | periphery.lineDash  |轮廓线类型                                |Array     |[]         |
|               |               | fill                |填充样式                                  |Object    |--         |
|               |               | fill.show           |是否显示内部填充实体                       |Boolean   |true       |
|               |               | fill.color          |内部填充实体颜色                           |String     |red      |

### TO DO

[√] 画圆，圆环<br/>
[√] 画多变形<br/>
[ ] 画一系列点<br/>
[ ] 画文字标注