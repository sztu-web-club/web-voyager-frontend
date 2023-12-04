<script lang="ts" setup>
import '@mdui/icons/newspaper.js'
import '@mdui/icons/search.js'

const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()

const time = `${year}-${month}-${day}`
</script>

<template>
  <div class="h-full w-full flex flex-col items-center justify-center">
    <mdui-card
      variant="outlined"
      class="h-50vh w-85vw flex flex-col items-center justify-center"
    >
      picture1
    </mdui-card>
    <div
      class="m-t-10 h-100% w-100% flex flex-row items-center justify-center"
    >
      <mdui-card
        variant="filled"
        class="h-83 w-5/8"
      >
        <div class="m-5 m-b-0">
          <h2>
            Announcement :
          </h2>
          <mdui-divider></mdui-divider>
        </div>
        <div class="m-5">
          <mdui-list>
            <mdui-list-item
              v-for="item in 3"
              :key="item"
              class="mdui-ripple"
            >
              <mdui-list-item-content>
                <mdui-list-item description="这是一个公告">
                  <mdui-icon-newspaper
                    slot="icon"
                  ></mdui-icon-newspaper>
                  <div
                    class="flex justify-between"
                  >
                    公告：{{ item }}
                    <div>
                      {{ time }}
                    </div>
                  </div>
                </mdui-list-item>
              </mdui-list-item-content>
            </mdui-list-item>
          </mdui-list>
        </div>
      </mdui-card>
      <mdui-card
        variant="filled"
        class="m-l-15 h-83 w-100"
      >
        <div class="m-5">
          <mdui-text-field label="Search Something">
            <mdui-icon-search slot="icon"></mdui-icon-search>
          </mdui-text-field>
        </div>
      </mdui-card>
    </div>
  </div>
</template>

<style>
</style>
