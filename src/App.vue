<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import UserProfile from './views/UserProfile.vue'
import OtherUser from './views/OtherUser.vue'
import PasswordReset from './views/PasswordReset.vue'
import MainPage from './views/MainPage.vue'
</script>

<template>
  <div class="w-[100vw] h-[100vh]">
    <MainPage />
  </div>
</template>

<style scoped>
import .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
