<template>
  <div class="min-h-full">
    <div class="max-w-4xl mx-auto p-2">
      <Wallet />
      <ContactsFrom />
      <contactList />
    </div>
  </div>
</template>

<script setup>
import contactList from "../components/contactList.vue";
import ContactsFrom from "../components/ContactsFrom.vue";
import Wallet from "../components/Wallet.vue";
</script>
