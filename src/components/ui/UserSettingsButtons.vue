<script setup lang="ts">
import axios from "axios";
const message = axios({
  method: "get",
  url: "https://catfact.ninja/fact",
}).then((response) => {
  console.log(response.data.fact);
  return response.data.fact;
});

const data = "Data";
</script>

<template>
  <form class="mt-10 flex flex-col">
    <button class="button button-secondary transition" type="button">
      View user settings
    </button>
    <button class="button button--secondary transition" type="button">
      Sign out
    </button>
  </form>
</template>
