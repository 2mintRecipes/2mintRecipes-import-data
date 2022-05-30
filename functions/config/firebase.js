/* eslint-disable linebreak-style */

import admin from 'firebase-admin';
// const serviceAccount = require('./serviceAccountKey.json');
import serviceAccount from './serviceAccountKey.js';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
});

const db = admin.firestore();

export {db, admin as firebase};
