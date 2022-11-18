<script setup lang="ts">
import SignUpForm from '../components/SignUpForm.vue'
import Deco1 from '../components/elements/Deco1.vue'
import Deco2 from '../components/elements/Deco2.vue'
</script>

<template>
  <div class="flex flex-col items-center w-screen h-screen bg-main-gradient">
    <LogoLarge class="relative z-10 mt-[70px]" />
    <SignUpForm class="relative z-10" />
    <SignUpSocials />
    <Deco2 class="absolute top-[124px] left-[200px] z-0" />
  </div>
</template>
