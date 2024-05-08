<template>
  <div class="mt-5">
    <form @submit.prevent="handleSubmit">
      <div class="mb-6">
        <label for="Name" class="text-sm font-medium text-gray-900 block mb-2"
          >Name</label
        >
        <input
          type="name"
          id="Name"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          v-model="formData.name"
        />
      </div>

      <div class="mb-6">
        <label for="Email" class="text-sm font-medium text-gray-900 block mb-2"
          >Email</label
        >
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          v-model="formData.email"
        />
      </div>
      <div class="mb-6">
        <label for="imageUrl" class="text-sm font-medium text-gray-900 block mb-2"
          >ImageUrl</label
        >
        <input
          type="text"
          id="imageUrl"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          v-model="formData.imageUrl"
        />
      </div>

      <div class="mb-6">
        <label for="imageUrl" class="text-sm font-medium text-gray-900 block mb-2"
          >Wallet ID</label
        >
        <input
          type="text"
          id="walletId"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          v-model="formData.walletId"
        />
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Contect save
      </button>
    </form>
    <Alert />
  </div>
</template>

<script setup>
import Alert from "./Alert.vue";
import { ref } from "vue";
import { Meteor } from "meteor/meteor";
import { push } from "notivue";

const formData = ref({
  name: "",
  email: "",
  imageUrl: "",
  walletId: "",
});

const handleSubmit = async () => {
  try {
    // Insert data into the collection
    await Meteor.call(
      "contacts.insert",
      {
        name: formData.value.name,
        email: formData.value.email,
        imageUrl: formData.value.imageUrl,
        walletId: formData.value.walletId,
      },
      (errorResponse) => {
        if (errorResponse) {
          // alert(errorResponse.error);
          push.error(errorResponse.error);
          console.log(errorResponse.error);
        } else {
          push.success("Insert Successful");
          formData.value = {
            name: "",
            email: "",
            imageUrl: "",
            walletId: "",
          };
        }
      }
    );

    // Reset the form data after successful insertion
    console.log("Data inserted successfully");

    // Optionally, show a success message or navigate to another page
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    // Optionally, show an error message to the user
  }
};
</script>

<style scoped>
/* Add styles as needed */
</style>
