import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCss from 'unocss/vite'

import { createAutoImport } from './auto-import'
import { createComponents } from './components'
import { createLayouts } from './layouts'
import { createVueRouter } from './vue-router'
import { createLegacyPlugin } from './legacy'

export function createVitePlugins() {
  const vitePlugins: Array<PluginOption | PluginOption[]> = [
    createVueRouter(),
    createAutoImport(),
    createComponents(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('mdui-'),
        },
      },
    }),
    createLayouts(),
    createLegacyPlugin(),
    UnoCss(),
  ]
  return vitePlugins
}
