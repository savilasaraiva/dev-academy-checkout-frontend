import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/home/Home.vue")
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../pages/checkout/Checkout.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/register/Register.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
