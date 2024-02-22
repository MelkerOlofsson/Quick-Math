import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Difficulty from './views/Difficulty.vue'
import Category from './views/Category.vue'
import Question from './views/Question.vue'
import Result from './views/Result.vue'

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
    },
    {
      component: Category,
      path: '/category',
      name: 'Category'
    },
    {
      component: Question,
      path: '/question',
      name: 'Question'
    },
    {
      component: Result,
      path: '/result',
      name: 'Result',
    }
  ]
})
