import { defineStore } from 'pinia'
import { StyleProvider, Themes } from '@varlet/ui'

const themeMedia = window.matchMedia('(prefers-color-scheme: light)')

export const useThemeStore = defineStore(
  'token',
  {
    state: () => {
      StyleProvider(themeMedia.matches ? Themes.md3Light : Themes.md3Dark)
      return ({
        theme: themeMedia.matches ? 'light' : 'dark',
        followSystem: true,
      })
    },
    actions: {
      setTheme(value: 'light' | 'dark') {
        this.theme = value
        this.followSystem = themeMedia.matches ? this.theme === 'light' : this.theme === 'dark'
      },
      toggleTheme() {
        this.setTheme(this.theme === 'light' ? 'dark' : 'light')
      },
    },
    persist: true,
  },
)
