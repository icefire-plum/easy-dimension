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
        center: [100, 100],
        distance: 100,
        peak: 3,
        startAngel: Math.PI * 0.25,
        periphery: {
          show: true,
          lineWidth: 1,
          color: 'red',
          lineDash: []
        },
        fill: {
          show: false,
          color: 'green'
        }
      }
      this.$easyDimension.drawEqlPolygon(option)

      this.$easyDimension.drawPie({
        center: [100, 100],
        radius: 2,
      })

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
