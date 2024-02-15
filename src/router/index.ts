import { createRouter, createWebHistory } from 'vue-router'
import { loadLayoutMiddleware } from '@/router/middlewares/loadLayoutMiddleware';
// loadLayoutMiddleware
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes

})
// router.beforeEach(loadLayoutMiddleware)

export default router
