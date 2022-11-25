<script setup lang="ts">
/*export interface Props {
  msg?: string
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
})*/

const props = defineProps({
  imagePath: String,
})
</script>
<template><img class="z-0 absolute" :src="props.imagePath" /></template>
