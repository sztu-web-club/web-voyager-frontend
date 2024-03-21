<script setup lang="ts">
import { useThemeStore } from '../stores/theme'

const title = import.meta.env.VITE_APP_TITLE
const theme = useThemeStore()
const weather = ref(theme.theme === 'dark' ? 'weather-night' : 'weather-sunny')
theme.$subscribe(() => {
  weather.value = theme.theme === 'dark' ? 'weather-night' : 'weather-sunny'
})
</script>

<template>
  <div
    class="h-screen"
    style="background-color: var(--color-body);"
  >
    <header class="h-0">
      <var-app-bar
        safe-area-top
        :title="title"
        color="var(--color-body)"
        text-color="var(--color-text)"
        :elevation="false"
      >
        <template #left>
          <var-button
            color="transparent"
            round
            text
          >
            <var-icon
              name="menu"
              :size="24"
            />
          </var-button>
        </template>

        <template #right>
          <var-menu>
            <var-button
              color="transparent"
              round
              text
              @click="() => theme.toggleTheme()"
            >
              <var-icon
                :name="weather"
                :size="24"
              />
            </var-button>
          </var-menu>
        </template>
      </var-app-bar>
    </header>
    <div class="mt-[var(--app-bar-height)] h-[calc(100%-var(--app-bar-height))] flex">
      <div class="h-full w-50px flex flex-col pl-2 pr-2">
        <icon-button
          name="checkbox-marked-circle"
          content="aaa"
        />
        <div class="mb-2 mt-auto">
          aaa
        </div>
      </div>
      <router-view class="w-full pb-2 pl-2 pr-2" />
    </div>
  </div>
</template>
