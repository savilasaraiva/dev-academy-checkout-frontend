import Vue from 'vue'
import App from './App.vue'
import router from './router'
import filters from './filters'
import store from './store'
import authService from './services/authService'

Vue.config.productionTip = false

authService.authenticate()

filters(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
