<script setup lang='ts'>
import '@mdui/icons/search.js'

const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()

const time = `${year}-${month}-${day}`
</script>

<template>
  <div

    class="h-full w-full flex flex-row items-center justify-center"
  >
    <div class="m-r-20 h-70vh w-5/8">
      <mdui-card

        variant="outlined"

        class="h-100% w-100% flex flex-col items-center justify-center"
      >
        <div class="w-100%">
          <div class="m-l-5">
            <h2>题库 :</h2>
          </div>
          <div class="flex justify-between">
            <div class="m-l-5">
              <span class="text-green-50">
                题目编码以及简介</span>
            </div>
            <div class="m-r-16">
              <span class="text-green-50">
                截至时间
              </span>
            </div>
          </div>
        </div>
        <div class="h-85% w-100%">
          <mdui-list>
            <mdui-list-item
              v-for="item in 7"
              :key="item"
              class="mdui-ripple"
            >
              <mdui-list-item-content>
                <mdui-list-item description="题目简介">
                  <mdui-icon-newspaper
                    slot="icon"
                  ></mdui-icon-newspaper>
                  <div
                    class="flex justify-between"
                  >
                    题目:{{ item }}
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
    </div>
    <div class="h-70vh w-2/8">
      <div class="m-b-1">
        <mdui-text-field

          variant="outlined"

          label="Search Something"
        >
          <mdui-icon-search slot="icon"></mdui-icon-search>
        </mdui-text-field>
      </div>
      <mdui-card

        variant="filled"

        class="h-100% w-100% flex flex-col items-center justify-center"
      >
        <div class="h-100% w-100%">
          <div
            class="m-l-5 w-100%"
          >
            <h2>题目分类 :</h2>
          </div>
          <mdui-divider></mdui-divider>
          <div class="h-80% w-100%">
            <mdui-list>
              <mdui-list-item
                v-for="item in 7"
                :key="item"
                class="mdui-ripple"
              >
                <mdui-list-item-content>
                  <mdui-list-item description="题目简介">
                    <mdui-icon-newspaper
                      slot="icon"
                    ></mdui-icon-newspaper>
                    <div
                      class="flex justify-between"
                    >
                      题目:{{ item }}
                      <div>
                        {{ time }}
                      </div>
                    </div>
                  </mdui-list-item>
                </mdui-list-item-content>
              </mdui-list-item>
            </mdui-list>
          </div>
        </div>
      </mdui-card>
    </div>
  </div>
</template>
