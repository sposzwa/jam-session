<script setup lang="ts">
const props = defineProps({
  imagePath: String,
});
</script>
<template>
  <img :src="props.imagePath" alt="" class="absolute z-0" />
</template>
