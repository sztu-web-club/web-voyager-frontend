<script setup lang='ts'>
const router = useRouter()
const title = ref(import.meta.env.VITE_APP_TITLE)
router.afterEach((to) => {
  if (to.meta.title != null)
    title.value = to.meta.title
})
</script>

<template>
  <mdui-top-app-bar>
    <mdui-top-app-bar-title>{{ title }}</mdui-top-app-bar-title>
  </mdui-top-app-bar>
</template>
