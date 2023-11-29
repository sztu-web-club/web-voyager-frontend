import components from 'unplugin-vue-components/vite'

export function createComponents() {
  return components({
    dirs: ['src/components'],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: './src/types/components.d.ts',
  })
}
