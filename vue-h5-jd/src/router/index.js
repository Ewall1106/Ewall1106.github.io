import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "Home",
    component: () => import("@/views/home"),
    meta: {
      title: "首页",
      showTab: true,
    },
  },
  {
    path: "/user",
    name: "User",
    component: () => import("@/views/user"),
    meta: {
      title: "我的",
      showTab: true,
    },
  },
];

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});

export default router;
