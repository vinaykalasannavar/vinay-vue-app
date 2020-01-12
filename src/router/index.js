import Vue from "vue";
import VueRouter from "vue-router";
import PageNotFound from "../views/PageNotFound";

Vue.use(VueRouter);

const parseProps = r => ({ id: parseInt(r.params.id) });

const routes = [
  {
    path: "/",
    redirect: "/orders"
  },
  {
    path: "/orders",
    name: "orders",
    component: () =>
      import(/* webpackChunkName: "bundle-orders" */ "../views/Orders.vue")
  },
  {
    path: "/orders/:id",
    name: "order-detail",
    component: () =>
      import(
        /* webpackChunkName: "bundle-orders" */ "../views/Order-Detail.vue"
      ),
    props: parseProps
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "bundle-about" */ "../views/About.vue")
  },
  {
    path: "/simple-list",
    name: "simple-list",
    // route level code-splitting
    // this generates a separate chunk (Ding.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "SimpleList" */ "../views/SimpleList.vue")
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
