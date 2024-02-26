<script setup lang='ts'>
import { Repl } from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'

function setVH() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
}

window.addEventListener('resize', setVH)
setVH()

const theme = ref({ type: 'dark' })

// const countBy = (arr: string[], value: string) => arr.filter((v) => v === value).length
</script>

<template>
  <!-- <Header :theme="theme" @myFuntction="countBy"/> -->
  <Header :theme="theme" />
  <Repl
    :editor="Monaco"
    :theme="theme.type"
  />
</template>

<style>
*::-webkit-scrollbar {
  display: none;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  margin: 0;

  --base: #444;
  --nav-height: 60px;

  color: var(--color-text);
}

.vue-repl {
  --color-branding: #5580f8 !important;
  --color-branding-dark: #5580f8 !important;

  height: calc(var(--vh) - var(--nav-height)) !important;
}
</style>
