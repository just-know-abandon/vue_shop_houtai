import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'

// 导入字体图标
import './assets/fonts/iconfont.css'

// 导入全局样式表
import './assets/css/global.css'

// 手动配置 element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// axios全局配置
// 配置请求的根路径
// axios.defaults.baseURL = 'http://127.0.0.1:80/api/private/v1/'
// 包挂载在vue的原型对象上，每一个vue组件都可以用this直接访问$http发起axios请求
// Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
