<script setup lang="ts">
import SendMessageSVG from "../elements/SendMessageSVG.vue";
import AddToFriendsSVG from "../elements/AddToFriendsSVG.vue";
</script>
<template>
  <form class="flex gap-5">
    <div class="flex flex-col items-center">
      <button class="social-button hover:border-[transparent]" type="button">
        <AddToFriendsSVG />
      </button>
      <span class="text-l">Add to friends</span>
    </div>
    <div class="flex flex-col items-center">
      <button class="social-button hover:border-[transparent]" type="button">
        <SendMessageSVG />
      </button>
      <span class="text-l">Send message</span>
    </div>
  </form>
</template>
