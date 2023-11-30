<script setup lang='ts'>
import '@mdui/icons/menu.js'
import '@mdui/icons/watch-later.js'
import '@mdui/icons/image.js'
import '@mdui/icons/library-music.js'
import '@mdui/icons/settings.js'
import '@mdui/icons/people.js'
</script>

<template>
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
      Home
    </mdui-navigation-rail-item>
    <mdui-navigation-rail-item>
      <mdui-icon-image slot="icon"></mdui-icon-image>
      Problem
    </mdui-navigation-rail-item>
    <mdui-navigation-rail-item>
      <mdui-icon-library-music slot="icon"></mdui-icon-library-music>
      Contest
    </mdui-navigation-rail-item>
  </mdui-navigation-rail>
</template>

<style>

</style>
