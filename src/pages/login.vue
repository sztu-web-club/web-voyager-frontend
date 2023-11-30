<route lang="yaml">
  meta:
    layout: none
  </route>

<script setup lang='ts'>
const router = useRouter()

const login = async () => {
  await router.push('/home')
}

const signup = async () => {
  await router.push('/signup')
}
</script>

<template>
  <div class="h-100% w-100% flex items-center justify-center">
    <mdui-card
      variant="filled"
      class="mdui-shadow-0 mdui-card-rounded h-105 w-120"
    >
      <div class="h-100% w-100% flex flex-col">
        <div class="mt-3 text-center">
          <h2>
            <span class="text-cyan-300">W</span>
            <span class="text-purple-500">e</span>
            <span class="text-orange-600">b</span>
            开发俱乐部
          </h2>
        </div>
        <div class="p-7 pt-2">
          <mdui-text-field label="输入你的账号~"></mdui-text-field>

          <mdui-text-field
            label="输密码的时候不要让别人看到哦~"
            class="mt-10"
          ></mdui-text-field>
        </div>
        <div class="m-l7">
          <mdui-checkbox>一周免登录</mdui-checkbox>
        </div>
        <div class="text-center">
          <mdui-button @click="login">
            <h3>登录</h3>
          </mdui-button>
          <mdui-button
            class="ml-5"
            @click="signup"
          >
            <h3>注册</h3>
          </mdui-button>
        </div>
        <div class="ml-9 mt-3">
          <span
            class="text-stone-600"
          >@2023-2024</span>
        </div>
      </div>
    </mdui-card>
  </div>
</template>
