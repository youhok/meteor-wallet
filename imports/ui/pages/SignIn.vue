<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <Alert />
    <!-- Auth Card Container -->
    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
      <!-- Auth Card -->
      <div
        class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg"
      >
        <!-- Card Title -->
        <div class="flex items-center justify-center h-16">
          <div class="p-4">
            <svg
              width="100px"
              height="80px"
              viewBox="0 -194 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
            >
              <g fill-rule="evenodd">
                <g transform="translate(303.542858, 0.000000)" fill="#DF4F4F">
                  <path
                    d="M0.215003261,0.214825175 L107.501631,113.857343 C107.501631,113.857343 111.156686,116.435245 113.951729,113.427692 C116.746771,110.42014 114.596738,107.412587 114.596738,107.412587 L0.215003261,0.214825175 L0.215003261,0.214825175 Z"
                  ></path>
                  <path
                    d="M34.1855185,10.9560839 L115.886758,99.0344057 C115.886758,99.0344057 119.541813,101.612308 122.336856,98.6047551 C125.131898,95.5972028 122.981866,92.5896503 122.981866,92.5896503 L34.1855185,10.9560839 L34.1855185,10.9560839 Z"
                  ></path>
                  <path
                    d="M10.3201565,33.9423777 L92.0213959,122.020699 C92.0213959,122.020699 95.6764514,124.598601 98.4714938,121.591049 C101.266536,118.583496 99.1165037,115.575944 99.1165037,115.575944 L10.3201565,33.9423777 L10.3201565,33.9423777 Z"
                  ></path>
                  <path
                    d="M62.9031778,20.1935664 L119.982956,81.7286308 C119.982956,81.7286308 122.536525,83.5296571 124.489254,81.4284597 C126.441983,79.3272625 124.939884,77.2260651 124.939884,77.2260651 L62.9031778,20.1935664 L62.9031778,20.1935664 Z"
                  ></path>
                  <path
                    d="M18.1824995,60.5806993 L75.2622772,122.115764 C75.2622772,122.115764 77.8158463,123.91679 79.7685754,121.815593 C81.7213047,119.714395 80.2192052,117.613198 80.2192052,117.613198 L18.1824995,60.5806993 L18.1824995,60.5806993 Z"
                  ></path>
                  <path
                    d="M92.2363992,33.5127273 L118.106876,61.4871978 C118.106876,61.4871978 119.370044,62.3311131 120.335995,61.3465453 C121.301947,60.3619777 120.558907,59.3774098 120.558907,59.3774098 L92.2363992,33.5127273 L92.2363992,33.5127273 Z"
                  ></path>
                  <path
                    d="M32.4654926,88.9376223 L58.3359693,116.912093 C58.3359693,116.912093 59.599137,117.756008 60.5650889,116.77144 C61.5310406,115.786873 60.7880008,114.802305 60.7880008,114.802305 L32.4654926,88.9376223 L32.4654926,88.9376223 Z"
                  ></path>
                </g>
                <g transform="translate(0.000000, 44.184078)" fill="#26262C">
                  <path
                    d="M446.171429,2.04554715 L446.171429,77.4792872 L463.238095,77.4792894 L463.238095,53.1466138 L476.038095,53.1466138 L492.495237,77.4792872 L512,77.4792872 L493.714287,51.3216633 C493.714287,51.3216633 509.951998,44.9039221 509.951998,27.4959202 C509.951998,2.91992081 487.619047,2.048 487.619047,2.048 L446.171429,2.04554715 L446.171429,2.04554715 Z M463.238095,16.647604 L463.238095,38.5470099 L485.180953,38.5470099 C485.180953,38.5470099 493.568,38.546038 493.568,27.5963345 C493.568,16.2309483 483.352381,16.647604 483.352381,16.647604 L463.238095,16.647604 L463.238095,16.647604 Z"
                  ></path>
                  <path
                    d="M257.219047,2.048 L257.219047,77.4792872 L314.514287,77.4792872 L314.514287,62.8796832 L274.285713,62.8796832 L274.285713,47.0634455 L309.028571,47.0634455 L309.028571,32.4638415 L274.285713,32.4638415 L274.285713,16.6359099 L314.514287,16.6359099 L314.514287,2.048 L257.219047,2.048 L257.219047,2.048 Z"
                  ></path>
                  <path
                    d="M174.323809,2.048 L174.323809,16.647604 L196.876191,16.647604 L196.876191,77.4792872 L213.942858,77.4792872 L213.942858,16.647604 L236.495237,16.647604 L236.495237,2.048 L174.323809,2.048 L174.323809,2.048 Z"
                  ></path>
                  <path
                    d="M96.3047619,2.048 L96.3047619,77.4792872 L153.6,77.4792872 L153.6,62.8796832 L113.371429,62.8796832 L113.371429,47.0634455 L148.114286,47.0634455 L148.114286,32.4638415 L113.371429,32.4638415 L113.371429,16.6359099 L153.600002,16.6359099 L153.600002,2.048 L96.3047619,2.048 L96.3047619,2.048 Z"
                  ></path>
                  <path
                    d="M1.36420155e-08,2.04609952 L1.36420155e-08,77.4811869 L17.0552418,77.4798395 L17.0552418,30.0286738 L37.7790511,60.4445153 L58.5142864,30.0286728 L58.5142864,77.4811869 L75.5809524,77.4811886 L75.5809524,2.04609865 L58.5142858,2.04609865 L37.7790511,33.070258 L17.0552421,2.04609865 L1.36420155e-08,2.04609952 L1.36420155e-08,2.04609952 Z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>

        <form class="mt-10" @submit.prevent="SignIn">
          <!-- Email Input -->
          <label
            for="email"
            class="block text-xs font-semibold text-gray-600 uppercase"
            >E-mail</label
          >
          <input
            id="email"
            type="email"
            name="email"
            placeholder="e-mail address"
            autocomplete="email"
            class="block w-full py-3 px-1 mt-2 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
            v-model="form.email"
          />

          <!-- Password Input -->
          <label
            for="password"
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >Password</label
          >
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            autocomplete="current-password"
            class="block w-full py-3 px-1 mt-2 mb-4 text-gray-800 appearance-none border-b-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
            v-model="form.password"
          />

          <!-- Auth Buttton -->
          <button
            type="submit"
            class="w-full py-3 mt-10 bg-blue-600 rounded-sm font-medium text-white uppercase focus:outline-none hover:bg-gray-700 hover:shadow-none"
          >
            Login
          </button>

          <!-- Another Auth Routes -->
          <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
            <router-link class="flex-2 underline" :to="{ name: 'sign-up' }">
              Create an Account
            </router-link>

            <p class="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">or</p>
            <router-link
              class="flex-2 underline"
              :to="{ name: 'forget-password' }"
            >
              Forgot Password?
            </router-link>
          </div>
        </form>
        <div class="flex justify-center mt-5">
          <button @click="loginWithGoogle">Login with Google</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Alert from "../components/Alert.vue";
import { reactive } from "vue";
import { push } from "notivue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";

const router = useRouter();
const authStore = useAuthStore();
let form = reactive({ email: "", password: "" });

const loginWithGoogle = async () => {
  try {
    await authStore.loginWithGoogle();
  } catch {
    console.log("error");
  }
};

const SignIn = async () => {
  if (!form.email || !form.password) {
    push.error("Please provide both email and password");
    return;
  } else {
    try {
      await authStore.signIn(form);
      form.email = "";
      form.password = "";
      router.push({ name: "home" });
    } catch (error) {
      console.log(error);
    }
  }
  // Meteor.loginWithPassword(form.email, form.password, (error) => {
  //   if (error) {
  //     console.error("Error creating user", error);
  //     push.error("Invalid email or password"); // Push the error message to notivue
  //   } else {
  //     console.log("Success");
  //     router.push({
  //       path: "/",
  //     });
  //   }
  // });
};
</script>

<style scoped></style>
