<template>
  <div class="flex font-sans shadow-md my-10 bg-white">
    <form class="flex-auto p-6">
      <div class="flex flex-wrap" v-if="wallet">
        <div class="w-full flex-none text-sm font-medium text-gray-500">Main account</div>
        <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
          Email:
        </div>
        <h1 class="flex-auto text-lg font-semibold text-gray-700">
          {{ userEmail }}
        </h1>
        <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
          Wallet ID:
        </div>
        <h1 class="flex-auto text-lg font-semibold text-gray-700">
          {{ wallet._id }}
        </h1>
        <div class="text-lg font-semibold text-slate-500">
          {{ wallet.balance }} {{ wallet.currency }}
        </div>
        
      </div>

      <!-- <div v-if="isLoadingWallets">Loading...</div> -->

      <div class="flex space-x-4 mb-6 text-sm font-medium">
        <div class="flex-auto flex space-x-4 mt-4">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            @click="addMoney"
          >
            Add money
          </button>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            @click="transferMoney"
          >
            Transfer money
          </button>
        </div>
      </div>
    </form>

    <Modal
      :modal-props="{
        title: isTransferring ? 'Transferring Money' : 'Add Money',
        modelValue: isOpen,
        isTransferring: isTransferring,
      }"
      @save="save"
      @close-modal="toggleModal"
    />
  </div>
</template>

<script setup>
import Modal from "./Modal.vue";
import { ref ,computed } from "vue";
import { Meteor } from "meteor/meteor";
import { subscribe, autorun } from "vue-meteor-tracker";
import { WalletsCollection } from "../../api/Conllection/WalletsCollection";
import { useAuthStore } from "../stores/authStore";

const authStore = useAuthStore();
const user = computed(() => authStore.user);
const userEmail = computed(() => user.value?.emails[0]?.address);

// Define isOpen and isTransferring variables
const isOpen = ref(false);
const isTransferring = ref(false);

// const Wallet = ref({
//   _id: "123456121",
//   balance: 5,
//   currency: "USD",
// });

const isLoadingWallets = subscribe("myWallets");

const wallet = autorun(() => WalletsCollection.findOne()).result;

// console.log(wallet.value);
const addMoney = (event) => {
  event.preventDefault();
  isTransferring.value = false;
  //toggle modal
  toggleModal(!isOpen.value);
};

const transferMoney = (event) => {
  event.preventDefault();
  isTransferring.value = true;
  //toggle modal
  toggleModal(!isOpen.value);
};

const toggleModal = (value) => {
  isOpen.value = value;
  if (isOpen.value === false) {
    // clearForm();
  }
};

const save = async ({ amount, selectedContact, destinationWalletId }) => {
  console.log("Amount:", amount);
  console.log("Selected Contact:", selectedContact);
  console.log("Destination Wallet ID:", destinationWalletId);

  // Set destinationWalletId to sourceWalletId if not transferring
  const destWalletId = isTransferring.value ? destinationWalletId : wallet.value._id;
  try {
    if (isTransferring.value && !destinationWalletId) {
      throw new Error("Destination wallet ID is required for transfers.");
    }

    await Meteor.call("transactions.insert", {
      isTransferring: isTransferring.value,
      sourceWalletId: wallet.value._id,
      destinationWalletId: destWalletId,
      amount: Number(amount),
    });

    toggleModal(false);
  } catch (error) {
    // Handle validation errors
    if (error.error === "validation-error") {
      const errorMessage = error.message;
      const errorDetails = error.details;
      console.log(errorMessage);
      console.log(errorDetails);
      // Display error message or details to the user as needed
    } else {
      // Handle other errors
      console.error(error);
    }
  }
};
</script>

<style scoped></style>
