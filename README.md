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
## 说明文档详见

<https://icefire-plum.github.io/easy-dimension/>

### TO DO

[√] 画圆，圆环<br/>
[√] 画多变形<br/>
[ ] 画一系列点<br/>
[ ] 画文字标注
[√] 增加例子,使用说明及教程