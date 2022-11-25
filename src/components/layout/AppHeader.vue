<script setup lang="ts">
import LogoSmall from '../common/LogoSmall.vue'
import SearchBar from '../ui/SearchBar.vue'
import UserIcon from '../ui/UserIcon.vue'
</script>
<template>
  <nav class="w-[100vw] flex items-center justify-between p-5">
    <LogoSmall class="ml-20 h-10" />
    <SearchBar class="absolute py-6 px-20 left-[50%] translate-x-[-50%]" />
    <UserIcon class="h-20 mr-10" />
  </nav>
</template>
