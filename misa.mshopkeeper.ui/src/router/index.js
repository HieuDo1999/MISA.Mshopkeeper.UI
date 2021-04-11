import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopList from '../views/ShopList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ShopList',
    component: ShopList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
