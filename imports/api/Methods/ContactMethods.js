import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check';
import { ContactsCollection } from "../Conllection/ContactCollection";

Meteor.methods({
  'contacts.find': (selector) => {
    return ContactsCollection.find(selector).fetch();
  },
  //insert Data
  'contacts.insert'({ name, email, imageUrl, walletId }) {
    const { userId } = this;
    if (!userId) {
      throw Meteor.Error('Access denied');
    }
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    check(walletId, String);
    
    if (!name) {
      throw new Meteor.Error("Name is required");
    }
    if (!walletId) {
      throw new Meteor.Error("wallet ID is required");
    }

    const createdAt = new Date(); // Current date and time
    return ContactsCollection.insert({ name, email, imageUrl, walletId, createdAt, userId });
  },
  //Delete Data
  'contacts.remove'({ contactId }) {
    try {
      check(contactId, String)
      // Check if the contactId is provided and valid
      if (!contactId || typeof contactId !== 'string') {
        throw new Meteor.Error('Invalid parameters', 'Contact ID is missing or invalid');
      }
      // Remove the contact with the specified ID
      ContactsCollection.remove(contactId);
      return true; // Indicate successful removal
    } catch (error) {
      console.error('Error removing contact:', error);
      throw new Meteor.Error('Internal server error', 'Failed to remove contact');
    }
  },
  //updata Data
  'contacts.archive'({ contactId }) {
    check(contactId, String);
    return ContactsCollection.update(
      { _id: contactId },
      { $set: { archived: true } },
    );
  },
});