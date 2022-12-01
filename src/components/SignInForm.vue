<script setup lang="ts">
import { ref } from "vue";
const login = ref("");
const password = ref("");
</script>

<template>
  <form class="flex flex-col items-center">
    <input
      v-model="login"
      id="login"
      class="input"
      type="text"
      placeholder="Type in your login"
      required
    />
    <input
      v-model="password"
      type="password"
      id="register"
      class="input block"
      placeholder="Type in your password"
      required
    />
    <div class="flex justify-between w-[100%] mt-20">
      <a href="#" class="font-extralight text-xl hover:text-main-color-darker"
        >Forgot password?</a
      >
      <div class="font-extralight flex items-center">
        <label
          for="rememberMe"
          class="text-xl text-main-color hover:cursor-pointer hover:text-main-color-darker"
          >Remember Me</label
        >
        <input
          class="w-smallest h-smallest ml-3 accent-main-color"
          id="rememberMe"
          type="checkbox"
        />
      </div>
    </div>
    <button class="transition block button button--primary" type="submit">
      Sign In
    </button>
    <button class="transition block button button--secondary" type="button">
      Sign Up
    </button>
  </form>
</template>
