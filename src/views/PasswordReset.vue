<script setup lang="ts">
import DecorationElement from "../components/elements/DecorationElement.vue";
import { ref } from "vue";
const message = ref("");
</script>

<template>
  <div class="flex flex-col items-center">
    <h2 class="text-6xl mt-40 mb-6">Password reset</h2>
    <p class="text-2xl mb-5">Please enter your email</p>
    <p class="text-2xl italic font-light h-10">{{ message }}</p>
    <form class="flex flex-col mt-20">
      <input type="text" class="input block" placeholder="Your email" />
      <button
        type="submit"
        class="button transition mt-10"
        value="Send verification email"
      >
        Send email
      </button>
      <button
        type="button"
        class="button transition"
        value="Send verification email"
      >
        Get back
      </button>
    </form>
    <DecorationGroup>
      <DecorationElement
        imagePath="./src/assets/images/deco-1.svg"
        class="top-[200px] right-[200px] mix-blend-overlay"
      />
      <DecorationElement
        imagePath="./src/assets/images/deco-2.svg"
        class="bottom-[100px] left-[200px]"
      />
    </DecorationGroup>
  </div>
</template>
