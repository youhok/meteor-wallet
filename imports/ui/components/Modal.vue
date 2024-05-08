<template>
  <TransitionRoot as="template" :show="modalProps.modelValue">
    <Dialog as="div" class="fixed inset-0 z-10 overflow-y-auto" @close="closeModal">
      <div class="flex items-center justify-center min-h-screen">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <DialogPanel
            class="relative z-10 w-full max-w-lg p-6 mx-auto my-6 bg-white rounded-lg shadow-xl sm:p-8"
          >
            <div>
              <DialogTitle as="h3" class="text-lg font-medium text-gray-900">
                {{ modalProps.title }}
              </DialogTitle>
              <div class="mt-2">
                <slot name="body">
                  <!-- Render input fields based on isTransferring -->
                  <template v-if="modalProps.isTransferring">
                    <SelectContact
                      :contacts="contacts"
                      @contactSelected="handleContactSelected"
                    />
                  </template>
                  <label
                    for="destinationWallet"
                    class="text-sm font-medium text-gray-900 block mb-2 mt-4"
                    >Amount</label
                  >
                  <input
                    type="number"
                    id="amount"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    v-model="amount"
                  />
                </slot>
              </div>
            </div>
            <div class="mt-4 flex justify-end">
              <button
                type="button"
                class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                @click="closeModal"
              >
                Close
              </button>
              <button
                type="button"
                class="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                @click="save"
              >
                {{ modalProps.isTransferring ? "Transfer" : "Add" }}
              </button>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import SelectContact from "./SelectContact.vue";
import { ref, defineEmits, defineProps } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogOverlay,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";

import { subscribe, autorun } from "vue-meteor-tracker";
import { ContactsCollection } from "../../api/Conllection/ContactCollection";

// Subscribe to contacts data
const isLoading = subscribe("contacts");

// Fetch contacts data
const contacts = autorun(() =>
  ContactsCollection.find(
    { archived: { $ne: true } },
    { sort: { createdAt: -1 } }
  ).fetch()
).result;
// Define selected contact ref
const selectedContact = ref();
const destinationWalletId = ref();
const amount = ref("");
const props = defineProps({
  modalProps: { required: true, type: Object },
});
const emit = defineEmits(["save", "closeModal"]);

const handleContactSelected = (contact) => {
  console.log("Selected Contact:", contact);
  destinationWalletId.value = contact.walletId;
  selectedContact.value = contact;
};

const save = () => {
  emit("save", {
    amount: amount.value,
    selectedContact: selectedContact.value,
    destinationWalletId: destinationWalletId.value,
  });
};
const closeModal = () => {
  emit("closeModal", !props.modalProps.modelValue);
};
</script>

<style scoped>

</style>
