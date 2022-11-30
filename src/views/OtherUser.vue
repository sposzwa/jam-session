<script setup lang="ts">
import UserPhoto from "../components/ui/UserPhoto.vue";
import UserInfo from "../components/ui/UserInfo.vue";
import SocialButtons from "../components/ui/SocialButtons.vue";
import Deco1 from "../components/elements/Deco1.vue";
import Deco3 from "../components/elements/Deco3.vue";
</script>

<template>
  <div
    class="w-[100vw] h-[100vh] overflow-hidden relative flex flex-col items-center"
  >
    <UserPhoto />
    <UserInfo class="text-center flex flex-col items-center w-80 align" />
    <SocialButtons />
    <Deco1
      class="absolute top-[650px] left-[1350px] mix-blend-overlay"
      imagePath="src/assets/images/deco-1.svg"
    />
    <Deco3 class="absolute top-[500px] left-[227px]" />
  </div>
</template>
