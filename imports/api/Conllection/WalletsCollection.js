import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const WalletsCollection = new Mongo.Collection('wallets');

const WalletSchema = new SimpleSchema({
    balance: {
        type: Number,
        min: 0,
        defaultValue: 0
    },
    currency: {
        type: String,
        allowedValues: ['USD', 'EUR'],
        defaultValue: 'USD',
    },
    createdAt: { type: Date },
    userId: { type: String },
});

WalletsCollection.attachSchema(WalletSchema);
