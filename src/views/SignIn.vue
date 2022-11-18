<script setup lang="ts">
import { ref } from 'vue'
import LogoLarge from '../components/common/LogoLarge.vue'
import SignInForm from '../components/SignInForm.vue'
import Deco1 from '../components/elements/Deco1.vue'
import Deco2 from '../components/elements/Deco2.vue'
const value = ref(0)

function changeValue(this: any) {
  this.value++
}
</script>
<template>
  <div class="flex flex-col items-center w-screen h-screen bg-main-gradient">
    <LogoLarge class="relative z-10 mt-[70px]" />
    <SignInForm class="relative z-10" />
    <SignInSocials />
    <Deco1 class="absolute bg-blend-overlay opacity-10 top-[110px] left-[1351px] z-0" />
    <Deco2 class="absolute top-[624px] left-[200px] z-0" />
  </div>
</template>
