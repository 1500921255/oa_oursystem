import ElementUI from 'element-ui' // 新添加
import 'element-ui/lib/theme-chalk/index.css' // 新添加，避免后期打包样式不同，要放在import App from './App';之前
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from '../node_modules/axios'
import qs from 'qs'
import store from './store'
import moment from 'moment'

Vue.prototype.$moment = moment;
Vue.use(ElementUI)
Vue.use(store)
Vue.prototype.axios = axios
Vue.config.productionTip = false
// Loading.service(options);

new Vue({
  render: h => h(App),
  router,
  axios,
  qs,
  store,
  moment,
  method: {
  }
}).$mount('#app')


