import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import '@/stores'

const history = createWebHistory()

export const router = createRouter({
  history,
  extendRoutes: (routes) => {
    const res = setupLayouts(routes)
    console.log(res)
    return res
  },
})

router.beforeEach((_to, _from) => {
  if (_to.path === '/home') {
    return {
      path: '/',
    }
  }
})

router.afterEach((to) => {
  const items = [import.meta.env.VITE_APP_TITLE]
  to.meta.title != null && items.unshift(to.meta.title)
  document.title = items.join(' · ')
})
