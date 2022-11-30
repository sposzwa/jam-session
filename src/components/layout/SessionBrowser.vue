<script setup lang="ts">
import SessionCard from '../ui/SessionCard.vue';
</script>

<template>
  <div class="flex flex-col">
    <div class="flex justify-between py-4 items-center">
      <div class="ml-20 text-xl outline outline-main-color outline-2 py-2 px-5 rounded-xl hover:outline-0 hover:cursor-pointer hover:bg-main-color hover:text-white">Filters</div>
      <span class="mr-20 text-xl">Matching results: 31</span>
    </div>
    <div clas="flex flex-col">
      <SessionCard />
    </div>
  </div>
</template>
