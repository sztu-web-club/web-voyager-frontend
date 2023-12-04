<script setup lang='ts'>
import '@mdui/icons/search.js'
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
        <div>
          <h2>题库 :</h2>
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
        题目分类
      </mdui-card>
    </div>
  </div>
</template>
