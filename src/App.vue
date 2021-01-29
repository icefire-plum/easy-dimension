<template>
  <div id="app">
    <div id="easy-mark" class="easy-mark"> </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      // 初始化dom
      this.$easyDimension.init('easy-mark')
      // 画圆
      const option = {
        points: [
          { x: 30, y: 100 },
          { x: 100, y: 100 },
          { x: 100, y: 200 },
          { x: 30, y: 200 },
        ],
        periphery: {
          show: true,
          lineWidth: 20,
          color: 'green',
          lineDash: [1,5]
        },
        fill: {
          show: true,
          color: 'green'
        }
      }
      this.$easyDimension.drawPolygon(option)


    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.easy-mark {
  width: 1000px;
  height: 1000px;
  background: #ccc;
  border: 1px solid #ccc;
}
</style>
