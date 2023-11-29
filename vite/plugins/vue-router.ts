import VueRouter from 'unplugin-vue-router/vite'

export function createVueRouter() {
  return VueRouter({
    dts: './src/types/typed-router.d.ts',
  })
}
