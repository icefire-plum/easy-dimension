import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index'
import menu from '@/util/menu';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

// 根据munu菜单成出路由
const route = menu.map(item => {
  return {
    path: '/' + item.route,
    name: item.component.charAt(0).toUpperCase() + item.component.slice(1),
    component: () => import(`../views/demo/${item.component}`)
  }
})
routes.push(...route)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
