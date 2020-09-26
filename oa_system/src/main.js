import ElementUI from 'element-ui' // 新添加
import 'element-ui/lib/theme-chalk/index.css' // 新添加，避免后期打包样式不同，要放在import App from './App';之前
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from '../node_modules/axios'
import qs from 'qs'

Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  axios,
  qs
}).$mount('#app')
