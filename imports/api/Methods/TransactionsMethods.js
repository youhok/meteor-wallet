import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check';
import SimpleSchema from 'simpl-schema';
import {
    ADD_TYPE,
    TRANSFER_TYPE,
    TransactionsCollections
} from "../Conllection/TransactionsCollection";
import { WalletRoles } from '../roles/WalletRoles';
import { Roles } from 'meteor/alanning:roles';


Meteor.methods({
    //transactions insert
    'transactions.insert'(args) {
        const { userId } = this;
        if (!userId) {
            throw Meteor.Error('Access denied');
        }
        try {
            const schema = new SimpleSchema({
                isTransferring: {
                    type: Boolean,
                },
                sourceWalletId: {
                    type: String,
                },
                // Optional destinationWalletId only if transferring money
                destinationWalletId: {
                    type: String,
                    optional: args.isTransferring,
                },
                amount: {
                    type: Number,
                    min: 1,
                },
            });

            const cleanArgs = schema.clean(args);
            schema.validate(cleanArgs);

            const { isTransferring, sourceWalletId, destinationWalletId, amount } = cleanArgs;

            // Set destinationWalletId to sourceWalletId if not transferring
            const destWalletId = isTransferring ? destinationWalletId : sourceWalletId;

            const transactionId = TransactionsCollections.insert({
                type: isTransferring ? TRANSFER_TYPE : ADD_TYPE,
                sourceWalletId,
                destinationWalletId: destWalletId,
                amount,
                createdAt: new Date(),
                userId,
            });

            return transactionId;
        } catch (error) {
            console.error("Error in 'transactions.insert' method:", error);
            throw new Meteor.Error("transaction-insert-failed", "Failed to insert transaction", error.message);
        }
    },
    //transactions remove
    'transactions.remove'(transactionId) {
        const { userId } = this;
        if (!userId) {
            throw Meteor.Error('Access denied');
        }
        check(transactionId , String);

        if (!Roles.userIsInRole(userId , WalletRoles.ADMIN)){
            throw new Error ('Permission denied');
        }
        
        return TransactionsCollections.remove(transactionId);
    }
});

