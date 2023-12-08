<script setup lang='ts'>
import '@mdui/icons/search.js'
</script>

<template>
  <div
    class="h-full w-full flex flex-row items-center"
  >
    <div class="m-l-10 m-r-20 h-70vh w-5/8">
      <div class="m-b-10 w-full">
        <mdui-card
          variant="filled"
          class="h-80 w-full"
        >
          <div
            class="m-l-5 m-t-5 w-100%"
          >
            <h3>Your Profile :</h3>
            <mdui-divider></mdui-divider>
          </div>
          <div class="w-80% flex p-2 p-l-10">
            <div class="w-70">
              <mdui-text-field
                label="Username"
                value="用户1"
                readonly
              ></mdui-text-field>
              <mdui-text-field
                label="Student ID"
                value="2018000000"
                class="m-t-5"
              ></mdui-text-field>
            </div>
            <div class="w-100 p-l-50">
              <mdui-text-field
                label="Email"
                helper="Supporting text"
                value="12345678@qq.com"
                helper-on-focus
              ></mdui-text-field>
              <mdui-text-field
                label="Phone Number"
                helper="Supporting text"
                value="1234567890"
                helper-on-focus
              ></mdui-text-field>
              <mdui-text-field
                label="Roles"
                value="Student"
                readonly
              ></mdui-text-field>
            </div>
          </div>
        </mdui-card>
      </div>
      <div class="m-b-10 w-full">
        <mdui-card
          variant="filled"
          class="h-55 w-full"
        >
          <div
            class="m-l-5 m-t-5 w-100%"
          >
            <h3>Change Your Password :</h3>
            <mdui-divider></mdui-divider>
          </div>
          <div class="w-90% flex p-10 p-t-10">
            <mdui-text-field
              label="Old Password"
              class="m-l-20 w-50"
            >
            </mdui-text-field>
            <mdui-text-field
              label="New Password"
              class="m-l-20 w-50"
            >
            </mdui-text-field>
            <mdui-text-field
              label="New Password"
              class="m-l-20 w-50"
            >
            </mdui-text-field>
          </div>
        </mdui-card>
      </div>
      <div class="m-b-10 w-90% flex">
        <mdui-card
          variant="filled"
          class="h-45 w-full"
        >
          <div
            class="m-l-5 m-t-5 w-100%"
          >
            <h3>Change Your Email :</h3>
            <mdui-divider></mdui-divider>
          </div>
          <div class="m-r-30 w-100% p-10 p-t-5">
            <mdui-text-field
              label="Your Email"
              class="m-l-20 w-100"
            >
            </mdui-text-field>
          </div>
        </mdui-card>
        <div>
          <mdui-button
            class="m-l-20 m-t-15"
            raised
          >
            Update All Changes
          </mdui-button>
        </div>
      </div>
    </div>
    <div class="h-70vh w-2/8">
      <mdui-card
        variant="filled"
        class="h-100% w-full"
      >
        <div
          class="m-l-5 m-t-5 h-100% w-100%"
        >
          <div class="m-30">
            avatar
          </div>
          <div class="m-b-10 m-l-30">
            name
          </div>
          <mdui-divider></mdui-divider>
          <div class="m-l-5 m-t-10">
            <div class="">
              <h2>
                Submission :
                <span class="m-l-25">
                  3
                </span>
              </h2>
            </div>
            <div class="m-t-15">
              <h2>
                Solved : <span class="m-l-40">
                  3
                </span>
              </h2>
            </div>
            <div class="m-t-15">
              <h2>
                Competitions : <span class="m-l-20">
                  3
                </span>
              </h2>
            </div>
          </div>
        </div>
      </mdui-card>
    </div>
  </div>
</template>
