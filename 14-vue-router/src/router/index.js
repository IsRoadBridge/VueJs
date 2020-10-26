//导入路由
import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About";

//配置路由映射
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

//创建路由，导入规则
const router = createRouter({
  history: createWebHistory(),
  routes
})

//导入配置好的路由
export default router
