import { Meteor } from "meteor/meteor";
import { WalletRoles } from "../roles/WalletRoles";
import { Roles } from 'meteor/alanning:roles';


Meteor.methods({
    'roles.isAdmin'(){
        const { userId } = this;
        if(!userId){
            throw new Error ('Access denied');
        }
        Roles.userIsInRole(userId , WalletRoles.ADMIN)
    }
})
