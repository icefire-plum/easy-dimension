import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/style/reset.css';

// 引入easy-mark
import easyDimension from '../packages'

Vue.use(easyDimension)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
