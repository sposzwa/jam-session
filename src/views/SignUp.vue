<script setup lang="ts">
import SignUpForm from "../components/SignUpForm.vue";
import DecorationElement from "../components/elements/DecorationElement.vue";
</script>

<template>
  <div class="flex flex-col items-center w-screen h-screen bg-main-gradient">
    <SignUpForm class="relative z-10 mt-10" />
    <SignUpSocials />
    <DecorationGroup>
      <DecorationElement
        class="top-[224px] left-[400px]"
        imagePath="./src/assets/images/deco-2.svg" />
      <DecorationElement
        class="top-[624px] left-[1300px]"
        imagePath="./src/assets/images/deco-4.svg"
    /></DecorationGroup>
  </div>
</template>
