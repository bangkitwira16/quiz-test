import Quiz from './views/Quiz.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: Quiz, meta: { title: 'Quiz' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]
