<script setup lang="ts">
import UserPhoto from "../components/ui/UserPhoto.vue";
import UserInfo from "../components/ui/UserInfo.vue";
import UserSettings from "../components/ui/UserSettings.vue";
import DecorationElement from "../components/elements/DecorationElement.vue";
import UserSettingsButtons from "../components/ui/UserSettingsButtons.vue";
</script>

<template>
  <div
    class="w-[100vw] h-[100vh] overflow-hidden relative flex flex-col items-center"
  >
    <UserPhoto class="mt-20" />
    <UserInfo class="mt-5 text-center flex flex-col items-center w-96 align" />
    <UserSettingsButtons />
    <DecorationGroup>
      <DecorationElement
        class="top-[550px] left-[1550px] mix-blend-overlay"
        imagePath="./src/assets/images/deco-3.svg" />
      <DecorationElement
        class="top-[200px] left-[227px]"
        imagePath="./src/assets/images/deco-2.svg"
    /></DecorationGroup>
  </div>
</template>
