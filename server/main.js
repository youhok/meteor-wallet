// import { Meteor } from 'meteor/meteor'
import '../imports/api/Conllection/ContactCollection.js'
import '../imports/api/Conllection/WalletsCollection.js'
import '../imports/api/Conllection/TransactionsCollection.js'

import '../imports/api/Methods/ContactMethods.js'
import '../imports/api/Methods/TransactionsMethods.js'
import '../imports/api/Methods/AccountMethods.js'

import '../imports/api/publications/ContactPublications.js'
import '../imports/api/publications/WalletsPublications.js'

// import { WalletsCollection } from '../imports/api/Conllection/WalletsCollection.js'
// import SimpleSchema from 'simpl-schema';
import '../infra/CustomError.js'
import '../infra/accounts.js'
import '../imports/api/roles/roles.js'
// import { ContactsCollection } from '../imports/api/ContactCollection.js';
    
// Meteor.publish('contacts', function () {
//     return ContactsCollection.find();
// });

// const currencySchema = new SimpleSchema({
//   balance: { type: Number, min: 0, defaultValue: 0 },
//   currency: {
//     type: String,
//     allowedValues: ['USD' ,'EUR'],
//     defaultValue: 'USD',
//   },
// });


// const walletSchema = new SimpleSchema({

//   currencies: {
//     type: Array
//   },
//   "currencies.$": currencySchema, // Corrected typo here
//   createdAt: { type: Date },
// });

// const walletSchema = new SimpleSchema({
//   balance: { type: Number, min: 0, defaultValue: 0 },
//   currency: {
//     type: String,
//     allowedValues: ['USD' ,'EUR'],
//     defaultValue: 'USD',
//   }, // Corrected typo here
//   createdAt: { type: Date },
// });



// Meteor.startup(async () => {
//   if (WalletsCollection.find().count() === 0){
//     // const walletData = {
//     //   createdAt: new Date()
//     // }
//     // const cleanWallet = walletSchema.clean(walletData)
//     // walletSchema.validate(cleanWallet);
//     WalletsCollection.insert({
//         balance: 0,
//         createdAt: new Date(),
//         currency:"USD"
//     });
//   }
// })


