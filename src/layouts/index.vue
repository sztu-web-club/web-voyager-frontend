<script setup lang="ts">
import navgtrail from './navgtrail.vue'
import topbar from './topbar.vue'
</script>

<template>
  <mdui-layout class="h-full w-full">
    <navgtrail />
    <topbar />
    <mdui-layout-main>
      <div class="p-5">
        <RouterView />
      </div>
    </mdui-layout-main>
  </mdui-layout>
</template>
