import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DecksView from '../views/DecksView.vue'
import StudyView from '../views/StudyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/decks',
      name: 'decks',
      component: DecksView,
      meta: { requiresAuth: true },
    },
    {
      path: '/study',
      name: 'study',
      component: StudyView,
      meta: { requiresAuth: false },
    },
  ],
})

export default router
