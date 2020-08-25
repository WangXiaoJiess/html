import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'sir_2',
    component: () => import('../views/Sir_2.vue')
  },
  {
    path: '/home4',
    name: 'Home4',
    component: () => import('../views/Home4.vue')
  },
  {
    path: '/home15',
    name: 'Home15',
    component: () => import('../views/Home15.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
