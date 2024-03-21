import components from 'unplugin-vue-components/vite'
import { VarletImportResolver } from '@varlet/import-resolver'

export function createComponents() {
  return components({
    dirs: ['src/ui/components'],
    resolvers: [VarletImportResolver()],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: './src/types/components.d.ts',
  })
}
