import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const ContactsCollection = new Mongo.Collection('contacts');

const ContactsSchema = new SimpleSchema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    imageUrl: { 
        type: String,
        optional:true
     },
     walletId:{
        type:String,

     },
     createdAt:{
        type:Date,
     },
     archived: { // Add this field to the schema
        type: Boolean,
        optional: true // Optional if you want to allow documents without the archived field
    },
    userId:{
        type:String,
     },
});

ContactsCollection.attachSchema(ContactsSchema);