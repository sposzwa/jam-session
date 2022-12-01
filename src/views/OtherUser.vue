<script setup lang="ts">
import UserPhoto from "../components/ui/UserPhoto.vue";
import UserInfo from "../components/ui/UserInfo.vue";
import SocialButtons from "../components/ui/SocialButtons.vue";
import DecorationElement from "../components/elements/DecorationElement.vue";
</script>

<template>
  <div
    class="w-[100vw] h-[100vh] overflow-hidden relative flex flex-col items-center"
  >
    <UserPhoto class="mt-20" />
    <UserInfo class="mt-5 text-center flex flex-col items-center w-96 align" />
    <SocialButtons class="mt-10" />
    <DecorationGroup>
      <DecorationElement
        class="top-[650px] left-[1350px] mix-blend-overlay"
        imagePath="./src/assets/images/deco-1.svg" />
      <DecorationElement
        class="top-[500px] left-[227px]"
        imagePath="./src/assets/images/deco-3.svg"
    /></DecorationGroup>
  </div>
</template>
