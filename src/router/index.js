import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Rolelist from '../components/power/Rolelist.vue'
import Powerlist from '../components/power/Powerlist.vue'
import Goodslist from '../components/goods/Goodslist.vue'
import Sortlist from '../components/goods/Sortlist.vue'
import Goodssort from '../components/goods/Goodssort.vue'
import Orderlist from '../components/order/Orderlist.vue'
import Data1 from '../components/data/Data1.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/userlist', component: Users },
        { path: '/rolelist', component: Rolelist },
        { path: '/powerlist', component: Powerlist },
        { path: '/goodslist', component: Goodslist },
        { path: '/sortlist', component: Sortlist },
        { path: '/goodssort', component: Goodssort },
        { path: '/orderlist', component: Orderlist },
        { path: '/data1', component: Data1 }
      ]
    }
  ]
})
// 挂载路由导航守卫
// 如果用户没有登录，但是直接通过URL访问特定页面，需要重新导航到登录页面
// router.beforeEach((to, from, next) => {
// to 将要访问得路径
// from 代表从哪个路径调过来
// next 是一个函数，表示放行
// next() 放行    next('/login') 强制跳转
// if (to.path === '/login') return next()
// 获取token
// const tokenStr = window.sessionStorage.getItem('token')
// if (!tokenStr) return next('/login')
// next()
// })

export default router
