
import {createRouter, createWebHistory} from 'vue-router'
 
const routerHistory = createWebHistory()
 
const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        name: 'Intro',
        component: () => import('../components/Intro.vue')
      },
      {
        path: '/main',
        name: 'Main',
        hidden: true,
        component: () => import('../components/Main.vue')
      }
      
    ]
})

export default router
