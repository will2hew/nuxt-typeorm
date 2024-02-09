<template>
  <div>
    <div>Nuxt module playground!</div>
    <button @click="ping">Ping</button>
  </div>
</template>

<script setup lang="ts">
const ping = async () => {
  console.log("calling");
  const res = await $fetch("/api/hello");

  console.log(res);
};
</script>
