import { Meteor } from 'meteor/meteor'
import { ContactsCollection } from "../Conllection/ContactCollection";

Meteor.publish('allContacts', function () {
    return ContactsCollection.find({}); //Live Query
});


Meteor.publish('myContacts', function () {
    const { userId } = this;
    if (!userId) {
        throw Meteor.Error('Access denied');
    }
    return ContactsCollection.find(
        {
            userId ,     
            archived: { $ne: true }
        }
    );
});
