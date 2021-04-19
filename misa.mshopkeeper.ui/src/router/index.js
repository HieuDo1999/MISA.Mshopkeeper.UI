import Vue from 'vue'
import VueRouter from 'vue-router'
import StoreList from '../views/StoreList'
import Dashboard from '../views/DashBoard'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'DashBoard',
    component: Dashboard
  },
  {
    path:'/store-list',
    name:'StoreList',
    component: StoreList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
