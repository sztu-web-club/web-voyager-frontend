<script setup lang='ts'>
import 'mdui/components/button-icon.js'
import '@mdui/icons/brightness-7.js'
import '@mdui/icons/brightness-2.js'
import '@mdui/icons/settings.js'
import '@mdui/icons/home.js'
import { getTheme, setTheme } from 'mdui'

defineOptions({
  inheritAttrs: false,
})
// const emit = defineEmits({
//   myFunction: (arr: string[], value: string) => {
//     return arr.filter(v => v === value).length
//   },
// })

// const sonFunction = () => {
//   emit('myFuntction')
// }

// TODO:待封装风格调整函数
const theme = ref()

theme.value = getTheme()

const isShow: ComputedRef<number> = computed<number>(() => {
  if (theme.value === 'light')
    return 1
  return 0
})

// 利用watch监控
const toggleTheme = () => {
  if (theme.value === 'light') {
    // document.body.classList.remove('mdui-theme-light')
    // document.body.classList.add('mdui-theme-dark')
    setTheme('dark')
    theme.value = getTheme()
  }
  else if (theme.value === 'dark') {
    // document.body.classList.remove('mdui-theme-dark')
    // document.body.classList.add('mdui-theme-light')
    setTheme('light')
    theme.value = getTheme()
  }
}
watch(() => theme.value, (newVal) => {
  if (newVal === 'light') {
    document.body.classList.remove('mdui-theme-dark')
    document.body.classList.add('mdui-theme-light')
    setTheme('dark')
  }
  else if (newVal === 'dark') {
    document.body.classList.remove('mdui-theme-light')
    document.body.classList.add('mdui-theme-dark')
    setTheme('light')
  }
})
</script>

<template>
  <div class="h-15 p-1">
    <div class="h-100% w-100% flex items-center justify-between px-4">
      <div class="text-2xl font-bold">
        Web Voyager Playground
      </div>
      <div class="m-r-5 flex">
        <div class="">
          <mdui-select
            variant="outlined"
            label="Language Version"
            value="item-1"
          >
            <mdui-menu-item value="item-1">
              Version 1
            </mdui-menu-item>
            <mdui-menu-item value="item-2">
              Version 2
            </mdui-menu-item>
          </mdui-select>
        </div>
        <div class="m-l-3 m-r-5">
          <mdui-select
            variant="outlined"
            label="Vue Version"
            value="item-1"
          >
            <mdui-menu-item value="item-1">
              Version 1
            </mdui-menu-item>
            <mdui-menu-item value="item-2">
              Version 2
            </mdui-menu-item>
          </mdui-select>
        </div>
        <div class="flex items-center">
          <mdui-button-icon
            v-if="isShow === 0"
            slot="bottom"
            class="m-r-2"
            v-bind="$attrs"
            @click="toggleTheme"
          >
            <mdui-icon-brightness-2></mdui-icon-brightness-2>
          </mdui-button-icon>
          <mdui-button-icon
            v-if="isShow === 1"
            class="m-r-2"
            v-bind="$attrs"
            @click="toggleTheme"
          >
            <mdui-icon-brightness-7></mdui-icon-brightness-7>
          </mdui-button-icon>
          <mdui-button-icon class="m-r-2">
            <mdui-icon-settings></mdui-icon-settings>
          </mdui-button-icon>
          <mdui-button-icon class="m-r-2">
            <mdui-icon-home></mdui-icon-home>
          </mdui-button-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
