<script setup lang='ts'>
import '@mdui/icons/home.js'
import '@mdui/icons/question-mark.js'
import '@mdui/icons/videogame-asset.js'
import '@mdui/icons/manage-accounts.js'
import '@mdui/icons/settings.js'
import '@mdui/icons/people.js'
import '@mdui/icons/menu.js'

const router = useRouter()

const goHome = async () => {
  await router.push('/home')
}

const goProblem = async () => {
  await router.push('/problem')
}

const goContest = async () => {
  await router.push('/contest')
}

const goManage = async () => {
  await router.push('/manage')
}
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

    <mdui-navigation-rail-item @click="goHome">
      <mdui-icon-home slot="icon"></mdui-icon-home>
      Home
    </mdui-navigation-rail-item>
    <mdui-navigation-rail-item @click="goProblem">
      <mdui-icon-question-mark slot="icon"></mdui-icon-question-mark>
      Problem
    </mdui-navigation-rail-item>
    <mdui-navigation-rail-item @click="goContest">
      <mdui-icon-videogame-asset slot="icon"></mdui-icon-videogame-asset>
      Contest
    </mdui-navigation-rail-item>
    <mdui-navigation-rail-item @click="goManage">
      <mdui-icon-manage-accounts slot="icon"></mdui-icon-manage-accounts>
      Manage
    </mdui-navigation-rail-item>
  </mdui-navigation-rail>
</template>

<style>

</style>
