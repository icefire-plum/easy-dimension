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
      const pieOption = {
        center: [100,100],
        radius: 20,
        periphery: {
          show: true,
          color: 'green',
          lineWidth: 5,
          lineDash: [3,3],
        },
        fill: {
          show: true,
          color: 'green'
        },
        startAngle: Math.PI * 0.5,
        endAngle: Math.PI * 1.5
      }
      this.$easyDimension.drawPie(pieOption)


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
