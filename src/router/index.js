import Vue from 'vue'
import VueRouter from 'vue-router'
import Orders from '../views/Orders'
import OrderDetail from '../views/Order-Detail'

Vue.use(VueRouter)

const parseProps = r => ({ id: parseInt(r.params.id) });

const routes = [
  {
    path: '/',
    redirect: '/orders'
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/orders/:id',
    name: 'order-detail',
    component: OrderDetail,
    props: parseProps
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
