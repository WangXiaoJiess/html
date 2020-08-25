import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
<<<<<<< HEAD
    path: '/',
    name: 'sir_2',
    component: () => import('../views/Sir_2.vue')
=======
    path: '/home4',
    name: 'Home4',
    component: () => import('../views/Home4.vue')
  },
  {
    path: '/home15',
    name: 'Home15',
    component: () => import('../views/Home15.vue')
>>>>>>> 41f319240753e9ab761452ed19f4b81bd1aef23b
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
