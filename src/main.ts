import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/az-style/index.less'
import components from './components'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(components)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
