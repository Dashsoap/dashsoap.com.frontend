import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/bakery/:id',
      component: () => import(/* webpackChunkName: "about" */ './views/Bakery/Bakery.vue')
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login/Login.vue')

    },
    {
      path: '/register',
      component: () => import(/* webpackChunkName: "about" */ './views/Register/Register.vue')

    },
    {
      path: '/cart',
      component: () => import(/* webpackChunkName: "about" */ './views/Cart/Cart.vue')

    },
  ]
})
