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
    },
    {
      path: '/study',
      name: 'study',
      component: StudyView,
    },
  ],
})

export default router
