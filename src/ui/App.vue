<script setup lang="ts">
import { StyleProvider, Themes } from '@varlet/ui'
import { useThemeStore } from './stores/theme'

const theme = useThemeStore()
theme.$subscribe(() => {
  StyleProvider(theme.theme === 'dark' ? Themes.md3Dark : Themes.md3Light)
})
</script>

<template>
  <var-watermark
    :width="150"
    :height="150"
    :offset-y="10"
    content="SZTU Web Club © 2023.11"
  >
    <router-view class="color-[var(--color-text)]" />
  </var-watermark>
</template>
