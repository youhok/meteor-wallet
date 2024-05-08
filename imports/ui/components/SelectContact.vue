<template>
  <Listbox as="div" :modelValue="selectedContact" @update:modelValue="selectContact">
    <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">
    </ListboxLabel>
    <div class="relative mt-2">
      <ListboxButton
        class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
      >
        <span class="flex items-center">
          <img
            v-if="selectedContact"
            :src="selectedContact.imageUrl"
            alt=""
            class="h-5 w-5 flex-shrink-0 rounded-full"
          />
          <span v-if="selectedContact" class="ml-3 block truncate">{{
            selectedContact.name
          }}</span>
          <span v-else class="ml-3 block truncate">Select a contact</span>
        </span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
        >
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-for="contact in contacts"
            :key="contact._id"
            :value="contact"
            v-slot="{ active, selected }"
            :class="[
              active ? 'bg-indigo-600 text-white' : 'text-gray-900',
              'relative cursor-default select-none py-2 pl-3 pr-9',
            ]"
          >
            <div class="flex items-center">
              <img
                v-if="selected && selected._id === contact._id"
                :src="contact.imageUrl"
                alt=""
                class="h-5 w-5 flex-shrink-0 rounded-full"
              />
              <span
                :class="[
                  selected && selected._id === contact._id
                    ? 'font-semibold'
                    : 'font-normal',
                  'ml-3 block truncate',
                ]"
                >{{ contact.name }}</span
              >
            </div>

            <span
              v-if="selected && selected._id === contact._id"
              :class="[
                'absolute inset-y-0 right-0 flex items-center pr-4',
                active ? 'text-white' : 'text-indigo-600',
              ]"
            >
              <CheckIcon class="h-5 w-5" aria-hidden="true" />
            </span>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  contacts: { required: true, type: Array },
  modalTitle: String,
});

const emit = defineEmits(["contactSelected"]);
const selectedContact = ref(null);

const selectContact = (contact) => {
  selectedContact.value = contact;
  // Assuming walletId is the property containing the destination wallet ID
  emit("contactSelected", selectedContact.value);
};
</script>
