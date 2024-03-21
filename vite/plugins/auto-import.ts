import autoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import { VarletImportResolver } from '@varlet/import-resolver'

export function createAutoImport() {
  return autoImport({
    imports: [
      'vue',
      VueRouterAutoImports,
      'pinia',
    ],
    resolvers: [
      VarletImportResolver({ autoImport: true }),
    ],
    dts: './src/types/auto-imports.d.ts',
    dirs: [],
  })
}
