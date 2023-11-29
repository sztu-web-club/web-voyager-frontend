import legacy from '@vitejs/plugin-legacy'

export function createLegacyPlugin() {
  return legacy({
    targets: ['>1%', 'last 2 versions', 'not dead'],
  })
}
