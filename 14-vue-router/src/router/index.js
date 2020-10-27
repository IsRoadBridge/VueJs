//导入路由
import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
/*import Home from '../views/Home.vue'
import About from "../views/About";
import User  from "../views/User";*/

//通过箭头函数实现路由懒加载，使得打包后每一个模块生成一个js文件，用到时再加载，提高用户体验
const Profile = () => import('../views/Profile')
const Home = () => import('../views/Home')
const HomeNews = () => import('../views/HomeNews')
const HomeMessages = () => import('../views/HomeMessage')
const User = () => import('../views/User')
//配置路由映射
const routes = [
  {
    path: '/profile',
    name: '档案',
    component: Profile
  },
  {
    path: '/home',
    name: '首页',
    component: Home,
    children: [
      {
        path: 'news',
        name: '新闻',
        component: HomeNews
      },
      {
        path: 'messages',
        name: '信息',
        component: HomeMessages
      }
    ]
  },
  {
    path: '/user',
    name: '用户',
    component: User
  }

]

//创建路由，导入规则
const router = createRouter({
  history: createWebHistory(),
  routes
})

//router的前置守卫，可以用来在路由跳转前做一些操作，还有后置守卫等
router.beforeEach((to,from,next) =>{
  //从from跳到to,to代表当前路由
  document.title = to.name  //跳到哪个路由，页面title就变成谁
  next()
})
//导入配置好的路由
export default router
