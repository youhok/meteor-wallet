import { Meteor } from 'meteor/meteor'
import { WalletsCollection } from "../Conllection/WalletsCollection";

Meteor.publish('myWallets', function () {
    const { userId } = this ;
    if (!userId){
        throw Meteor.Error('Not authorized')
    }
    return WalletsCollection.find({ userId }); //Live Query
});


