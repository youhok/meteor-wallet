import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
// import { ServiceConfiguration } from "meteor/service-configuration";
// import { googleClientId, googleSecret } from "../imports/private/env/settings.json";
// Configure custom reset password URL function
Accounts.urls.resetPassword = (token) => Meteor.absoluteUrl(`/reset-password/${token}`);

// Meteor.startup(() => {
//     // Check if googleClientId or googleSecret is missing
//     if (!googleClientId || !googleSecret) {
//         throw new Error('googleClientId and googleSecret are required.');
//     }
//     // Set up Google service configuration
//     ServiceConfiguration.configurations.upsert({
//         service: 'google'
//     }, {
//         $set: {
//             service: 'google',
//             clientId: googleClientId,
//             secret: googleSecret
//         }
//     });
// });
