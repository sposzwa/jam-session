<script setup lang="ts">
import SearchButton from './SearchButton.vue'
</script>

<template>
  <div class="rounded-full flex items-center center gap-7 bg-white">
    <span class="hover:cursor-pointer">Select map area</span>
    <span class="border-[1px] border-main-color border-solid h-10"></span>
    <span class="hover:cursor-pointer">Pick date</span>
    <span class="border-[1px] border-main-color border-solid h-10"></span>
    <span class="hover:cursor-pointer pr-7">Keyboard</span>
    <SearchButton class="p-5 absolute right-0" />
  </div>
</template>
