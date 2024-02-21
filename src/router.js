import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Difficulty from './views/Difficulty.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: Home,
      path: '/',
      name: 'Home'
    },
    {
      component: Difficulty,
      path: '/difficulty',
      name: 'Difficulty'
    }
  ]
})
