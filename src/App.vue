<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <section class="body">
      <Menu class="menu"/>
      <router-view class="content"></router-view>
    </section>
  </div>
</template>

<script>
  import Header from './views/header/index'
  import Menu from './views/menu'
  export default {
    components: {
      Header,
      Menu
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
header {
  width: 100%;
  height: 100px;
}
.body {
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
}
.menu {
  width: 200px;
  height: 100%;
}
.content {
  width: calc(100% - 200px);
  height: 100%;
}
</style>
