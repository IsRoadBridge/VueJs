import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const category = () => import('../views/Category')
const Profile = () => import('../views/Profile')
const Home = () => import('../views/Home')
const Shopcar = () => import('../views/Shopcar')


const routes = [
  {
    path: '/',
    redirect:'/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/Shopcar',
    name: 'Shopcar',
    component: Shopcar
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
