<script setup lang="ts">
import AppHeader from '../components/layout/AppHeader.vue';
import SessionBrowser from '../components/layout/SessionBrowser.vue';
import AppMap from '../components/layout/AppMap.vue';
</script>
<template>
  <div class="flex flex-col grow-1 h-full">
    <AppHeader />
    <div class="flex justify-between h-[100%]">
      <AppMap class="bg-slate-600 w-[200px] h-full" />
      <SessionBrowser class="w-[45.5rem] bg-white h-[100%]" />
    </div>
  </div>
</template>
