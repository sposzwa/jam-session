<template>
  <div class="w-[100vw] h-[100vh]">
    <div
      :class="show ? ' ' : 'hidden'"
      class="flex flex-col justify-center items-center"
    >
      <div>
        <h1 class="mt-20">Routes</h1>
        <ul class="mt-10">
          <li
            class="text-2xl pb-5"
            @click="show = !show"
            v-for="link in routes"
            v-bind:key="link.path"
          >
            <router-link :to="{ path: link.path }">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { routes } from "./plugins/router";
import { ref } from "vue";
const show = ref(true);
</script>
