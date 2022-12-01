<script setup lang="ts">
import { ref } from "vue";
import LogoLarge from "../components/common/LogoLarge.vue";
import SignInForm from "../components/SignInForm.vue";
import Deco1 from "../components/elements/Deco1.vue";
import Deco2 from "../components/elements/Deco2.vue";
import DecorationElement from "../components/elements/DecorationElement.vue";
</script>

<template>
  <div class="flex flex-col items-center w-screen h-screen bg-main-gradient">
    <LogoLarge class="relative z-10 mt-[70px]" />
    <SignInForm class="relative z-10" />
    <SignInSocials />
    <DecorationGroup>
      <DecorationElement
        class="top-[110px] left-[1351px] mix-blend-overlay"
        imagePath="./src/assets/images/deco-1.svg" />
      <DecorationElement
        class="top-[624px] left-[200px]"
        imagePath="./src/assets/images/deco-2.svg"
    /></DecorationGroup>
  </div>
</template>
