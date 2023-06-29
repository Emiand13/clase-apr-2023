import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contador',
      name: 'contador',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Contador.vue')
    },
    {
      path: '/Eminem',
      name: 'Eminem',
      component: () => import('../views/Eminem.vue')
    },
    {
      path: '/Santboi',
      name: 'Santboi',
      component: () => import('../views/Santboi.vue')
    },
 
  ]
})

export default router
