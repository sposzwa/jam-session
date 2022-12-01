<script setup lang="ts">
import SignUpForm from "../components/SignUpForm.vue";
import DecorationElement from "../components/elements/DecorationElement.vue";
import UserSettingsForm from "../components/UserSettingsForm.vue";
const data = { name: "Adam" };
</script>

<template>
  <div
    class="flex flex-col items-center w-screen h-auto bg-main-gradient overflow-x-hidden"
  >
    <UserSettingsForm class="relative z-10 mt-10 mb-20" />
    <DecorationGroup>
      <DecorationElement
        class="top-[224px] left-[400px]"
        imagePath="./src/assets/images/deco-3.svg" />
      <DecorationElement
        class="top-[324px] left-[1300px] mix-blend-overlay"
        imagePath="./src/assets/images/deco-1.svg"
    /></DecorationGroup>
  </div>
</template>
