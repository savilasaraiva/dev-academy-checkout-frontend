import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import filters from "./filters";
import authService from "./services/authService";

Vue.config.productionTip = false;

filters(Vue);

authService.authenticate();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
