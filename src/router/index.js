import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkoutView from '../views/WorkoutView.vue'
import WorkListView from '@/views/WorkListView.vue'
import AnalystView from '@/views/AnalystView.vue'
import BMIView from '@/views/BMIView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/workout',
      name: 'workout',
      component: WorkoutView
    },
    {
      path: '/worklist',
      name: 'worklist',
      component: WorkListView
    },
    {
      path: '/analyst',
      name: 'analyst',
      component: AnalystView
    },
    {
      path: '/bmi',
      name: 'bmi',
      component: BMIView
    }
  ]
})

export default router
