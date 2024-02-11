<template>
  <div>
    <div>Nuxt module playground!</div>

    <input v-model="firstName" type="text" placeholder="First Name" />
    <input v-model="lastName" type="text" placeholder="Last Name" />

    <button @click="add">Add</button>
    <button @click="getUsers">Get Users</button>
  </div>
  <NuxtPage />
</template>

<script setup lang="ts">
const firstName = ref("");
const lastName = ref("");

const add = async () => {
  const res = await $fetch("/api/users", {
    method: "post",
    body: {
      firstName: firstName.value,
      lastName: lastName.value,
    },
  });

  console.log(res);
};

const getUsers = async () => {
  const res = await $fetch("/api/users", {
    method: "get",
  });

  console.log(res);
};
</script>
