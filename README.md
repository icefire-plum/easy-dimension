# easy-dimension
## 一款基于canvas 的对元素进行标注的插件

## 安装方法

    npm i easy-dimension -S

## 使用方法

###### `main.js`

```javascript
   import easyDimension from './mark'
   Vue.use(easyDimension)
```

###### `hello.vue`

```javascript
    mounted() {
        // 初始化实例，easy-easyDimension为元素id
        this.$easyDimension.init('easy-easyDimension')
        // 使用实例方法进行标注，具体的方法和配置项如下
        this.$easyMark.drawLine(option)
    }
```

## 方法及配置项

|文件夹|说明|
|--|--|
|ZBConfigCommon/ |主要基础代码工程。|
|ZbConfigMain/ |主APP工程|
|ZbConfigSetup/ |安装向导，已不再提供 |
|DB/ |用于测试数据库文件夹，默认密码为admin/admin|
|res/ |零碎的参考资源|

