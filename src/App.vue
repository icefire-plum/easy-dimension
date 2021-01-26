<template>
  <div id="app">
    <div id="easy-mark" class="easy-mark"> </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      // 初始化dom
      this.$easyMark.init('easy-mark')
      // 画线
      const lineOption = {
        points: [
          { x: 100, y: 100},
          { x: 200, y: 200},
          { x: 300, y: 300},
          { x: 400, y: 400},
          { x: 500, y: 500}
        ],
        lineDash: [3,3]
      }
      this.$easyMark.drawLine(lineOption)
      // 曲线
      const cureOption = {
        points: [
          { x: 100, y: 100},
          { x: 200, y: 300},
          { x: 320, y: 340},
          { x: 400, y: 200},
          { x: 500, y: 150}
        ],
        lineDash: [3,3]
      }
      this.$easyMark.drawCure(cureOption)



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
  border: 1px solid #ccc;
}
</style>
