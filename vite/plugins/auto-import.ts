import autoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

export function createAutoImport() {
  return autoImport({
    imports: [
      'vue',
      VueRouterAutoImports,
      'pinia',
    ],
    dts: './src/types/auto-imports.d.ts',
    dirs: [],
  })
}
