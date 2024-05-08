<script setup>
import { Meteor } from "meteor/meteor";
import { autorun } from "vue-meteor-tracker";
import navbar from "./components/navbar.vue";
import { useAuthStore } from "./stores/authStore";
import { watch } from "vue";

const authStore = useAuthStore();
const userId = autorun(()=> Meteor.userId()).result;


watch(
  () => userId.value,
  (newUserId) => {
    authStore.setUser(newUserId);
  },
  { immediate: true },
);

</script>

<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<style scoped>

</style>