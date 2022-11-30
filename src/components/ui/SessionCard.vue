<script setup lang="ts">
import SocialButtons from './SocialButtons.vue'
</script>

<template>
  <div class="flex flex-col px-10">
    <div class="rounded-lg h-[500px] bg-black">
      <img src="#" alt="user photo" /><img src="#" alt="host" />
    </div>
    <div class="flex justify-between">
      <div class="mt-5 text-2xl leading-10">
        <h3 class="text-4xl">Host: David Baguetta</h3>
        <p class="mt-5">I’m searching for: guitarist, bass player</p>
        <p>I can play: keyboard, vocal</p>
        <p>Adress: Boat City, Fabryczna 5/55</p>
      </div>
      <SocialButtons class="flex flex-col mt-5" />
    </div>
  </div>
</template>
