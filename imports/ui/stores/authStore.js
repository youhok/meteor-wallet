import { Meteor } from 'meteor/meteor';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { autorun, subscribe } from 'vue-meteor-tracker';


export const useAuthStore = defineStore('auth', () => {
  // State
  const _user = ref(null);

  // Getter
  const user = computed(() => _user.value);

  // Method to set user data
  const setUser = (userId) => {
    try {
      Meteor.call('acc.findOne', { _id: userId }, (err, res) => {
        if (err) {
          console.log(err.reason);
          return;
        }
        _user.value = res;
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Method to sign in
  const signIn = async (form) => {
    return new Promise((resolve, reject) => {
      const { email, password } = form;
      Meteor.loginWithPassword(email, password, (error) => {
        const userId = Meteor.userId();
        if (userId) {
          setUser(userId);
          resolve(true);
        } else {
          reject(error?.message);
        }
      });
    });
  };

  // Method to sign in with Google
const loginWithGoogle = () => {
    Meteor.loginWithGoogle({ loginStyle: 'redirect' } )
};

  return { user, setUser, signIn, loginWithGoogle };
});

