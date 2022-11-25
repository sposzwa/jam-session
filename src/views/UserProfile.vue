<script setup lang="ts">
import UserPhoto from '../components/ui/UserPhoto.vue'
import UserInfo from '../components/ui/UserInfo.vue'
import UserSettings from '../components/ui/UserSettings.vue'
import Deco3 from '../components/elements/Deco3.vue'
import Deco4 from '../components/elements/Deco4.vue'
</script>

<template>
  <div class="flex flex-col items-center">
    <UserPhoto />
    <UserInfo class="text-center flex flex-col items-center w-80 align" />
    <UserSettings />
    <Deco3 class="top-[778px] left-[137px]" />
    <Deco4 class="top-[223px] left-[1468px]" />
  </div>
</template>
