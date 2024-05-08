// server/methods.js
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { WalletsCollection } from '../Conllection/WalletsCollection';

// const getEmailFromUser = user => {
//   if (user.services?.google) {
//     console.log(`user.services?.google`, user.services?.google);

//     return user.services.google.email;
//   }
//   return user.email[0].address;
// }


Accounts.onCreateUser((options, user) => {
  const customizeUser = { ...user }

  console.log('options', options)
  console.log('user', user)

  WalletsCollection.insert({ userId: user._id, createdAt: new Date() })
  // customizeUser.emails = getEmailFromUser(user);
  
  return customizeUser;
});

Meteor.methods({
  'acc.createUser': (form) => {
    const { email, password } = form;
    return Accounts.createUser({ email, password });
  },
  // 'acc.resetPassword': (email) => 
  //     Accounts.forgotPassword({ email })
  // ,
  'acc.resetPassword'(email) {
    // Find the user by email
    const user = Accounts.findUserByEmail(email);

    if (!user) {
      throw new Meteor.Error('user-not-found', 'User not found');
    }

    // Generate a password reset token
    const token = Accounts.generateResetToken(user._id);

    // Send the password reset email
    Accounts.sendResetPasswordEmail(user._id, email, { token });
    return { token, email };
  },

  'acc.findOne': (selector = {}, options = {}) =>
    Meteor.users.findOne(selector, options)
});

