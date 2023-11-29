<script setup lang="ts">
import '@mdui/icons/menu.js'
import '@mdui/icons/watch-later.js'
import '@mdui/icons/image.js'
import '@mdui/icons/library-music.js'
import '@mdui/icons/settings.js'
import '@mdui/icons/people.js'

const title = ref(import.meta.env.VITE_APP_TITLE)
const router = useRouter()
router.afterEach((to) => {
  if (to.meta.title != null)
    title.value = to.meta.title
})
</script>

<template>
  <mdui-layout class="h-full w-full">
    <mdui-navigation-rail>
      <mdui-button-icon slot="top">
        <mdui-icon-menu></mdui-icon-menu>
      </mdui-button-icon>
      <mdui-button-icon slot="bottom">
        <mdui-avatar>
          <mdui-icon-people></mdui-icon-people>
        </mdui-avatar>
      </mdui-button-icon>
      <mdui-button-icon slot="bottom">
        <mdui-icon-settings></mdui-icon-settings>
      </mdui-button-icon>

      <mdui-navigation-rail-item>
        <mdui-icon-watch-later slot="icon"></mdui-icon-watch-later>
        Recent
      </mdui-navigation-rail-item>
      <mdui-navigation-rail-item>
        <mdui-icon-image slot="icon"></mdui-icon-image>
        Images
      </mdui-navigation-rail-item>
      <mdui-navigation-rail-item>
        <mdui-icon-library-music slot="icon"></mdui-icon-library-music>
        Library
      </mdui-navigation-rail-item>
    </mdui-navigation-rail>
    <mdui-top-app-bar>
      <mdui-top-app-bar-title>{{ title }}</mdui-top-app-bar-title>
    </mdui-top-app-bar>
    <mdui-layout-main>
      <div class="p-5">
        <RouterView />
      </div>
    </mdui-layout-main>
  </mdui-layout>
</template>
