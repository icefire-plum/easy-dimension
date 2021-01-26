import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入easy-mark
import easyDi from '../packages'

Vue.use(easyMark)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
