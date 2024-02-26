<script setup lang='ts'>
import '@mdui/icons/brightness-7.js'
import '@mdui/icons/brightness-2.js'
import { getTheme, setTheme } from 'mdui'

const router = useRouter()
const title = ref(import.meta.env.VITE_APP_TITLE)
router.afterEach((to) => {
  if (to.meta.title != null)
    title.value = to.meta.title
})

// TODO:待封装风格调整函数

const theme = ref()

theme.value = getTheme()

const isShow: ComputedRef<number> = computed<number>(() => {
  if (theme.value === 'light')
    return 1
  return 0
})

const toggleTheme = () => {
  if (theme.value === 'light') {
    document.body.classList.remove('mdui-theme-light')
    document.body.classList.add('mdui-theme-dark')
    setTheme('dark')
    theme.value = getTheme()
  }
  else if (theme.value === 'dark') {
    document.body.classList.remove('mdui-theme-dark')
    document.body.classList.add('mdui-theme-light')
    setTheme('light')
    theme.value = getTheme()
  }
}
</script>

<template>
  <mdui-top-app-bar>
    <mdui-top-app-bar-title>{{ title }}</mdui-top-app-bar-title>
    <div
      v-if="isShow === 0"
      @click="toggleTheme"
    >
      <mdui-button-icon>
        <mdui-icon-brightness-2></mdui-icon-brightness-2>
      </mdui-button-icon>
    </div>
    <div
      v-if="isShow === 1"
      @click="toggleTheme"
    >
      <mdui-button-icon>
        <mdui-icon-brightness-7></mdui-icon-brightness-7>
      </mdui-button-icon>
    </div>
  </mdui-top-app-bar>
</template>
