import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { WalletsCollection } from './WalletsCollection';

export const TRANSFER_TYPE = 'TRANSFER';
export const ADD_TYPE = 'ADD';


export const TransactionsCollections = new Mongo.Collection("transactions");

TransactionsCollections.before.insert(function (userId , transactionsDocument){
    if (transactionsDocument.type === TRANSFER_TYPE) {
        // We could also check here if destination wallet exists 
        const sourceWallet = WalletsCollection.findOne(
            transactionsDocument.sourceWalletId
        );
        if (!sourceWallet) {
            throw new Meteor.Error("Source wallet not found.");
        }
        if (sourceWallet.balance < transactionsDocument.amount) {
            throw new Meteor.Error("Insufficient found.");
        }
        WalletsCollection.update(transactionsDocument.sourceWalletId, {
            $inc: {
                balance: -transactionsDocument.amount
            },
        });
        WalletsCollection.update(transactionsDocument.destinationWalletId, {
            $inc: {
                balance: transactionsDocument.amount
            }
        });
    }
    if (transactionsDocument.type === ADD_TYPE){
        const sourceWallet = WalletsCollection.findOne(
            transactionsDocument.sourceWalletId
        );
        if (!sourceWallet) {
            throw new Meteor.Error("Source wallet not found.");
        }
      
        WalletsCollection.update(transactionsDocument.sourceWalletId, {
            $inc: {
                balance: transactionsDocument.amount
            },
        });
    }
})

TransactionsCollections.before.remove(function (userId , transactionsDocument){
    if (transactionsDocument.type === TRANSFER_TYPE) {
        // We could also check here if destination wallet exists 
        const sourceWallet = WalletsCollection.findOne(
            transactionsDocument.sourceWalletId
        );
        if (!sourceWallet) {
            throw new Meteor.Error("Source wallet not found.");
        }
        WalletsCollection.update(transactionsDocument.sourceWalletId, {
            $inc: {balance: transactionsDocument.amount},
        });
    }
    if (transactionsDocument.type === ADD_TYPE){
        const sourceWallet = WalletsCollection.findOne(
            transactionsDocument.sourceWalletId
        );
        if (!sourceWallet) {
            throw new Meteor.Error("Source wallet not found.");
        }
      
        WalletsCollection.update(transactionsDocument.sourceWalletId, {
            $inc: {
                balance: -transactionsDocument.amount
            },
        });
    }
})


const TransactionsSchema = new SimpleSchema({
    type: {
        type: String,
        allowedValues: [TRANSFER_TYPE, ADD_TYPE]
    },
    sourceWalletId: {
        type: String,
    },
    destinationWalletId: {
        type: String,
    },
    amount: {
        type: Number,
        min: 1
    },
    createdAt: {
        type: Date,
    },
    userId: {
        type: String,
    },
});

TransactionsCollections.attachSchema(TransactionsSchema);


// class TransactionsMongoCollection extends Mongo.Collection {
//     insert(transactionsDocument, callback) {
//         if (transactionsDocument.type === TRANSFER_TYPE) {
//             // We could also check here if destination wallet exists 
//             const sourceWallet = WalletsCollection.findOne(
//                 transactionsDocument.sourceWalletId
//             );
//             if (!sourceWallet) {
//                 throw new Meteor.Error("Source wallet not found.");
//             }
//             if (sourceWallet.balance < transactionsDocument.amount) {
//                 throw new Meteor.Error("Insufficient found.");
//             }
//             WalletsCollection.update(transactionsDocument.sourceWalletId, {
//                 $inc: {
//                     balance: -transactionsDocument.amount
//                 },
//             });
//             WalletsCollection.update(transactionsDocument.destinationWalletId, {
//                 $inc: {
//                     balance: transactionsDocument.amount
//                 }
//             });
//         }
//         if (transactionsDocument.type === ADD_TYPE){
//             const sourceWallet = WalletsCollection.findOne(
//                 transactionsDocument.sourceWalletId
//             );
//             if (!sourceWallet) {
//                 throw new Meteor.Error("Source wallet not found.");
//             }
          
//             WalletsCollection.update(transactionsDocument.sourceWalletId, {
//                 $inc: {
//                     balance: transactionsDocument.amount
//                 },
//             });
//         }
//         return super.insert(transactionsDocument, callback)
//     }
// }

// export const TransactionsCollections = new TransactionsMongoCollection("transactions");