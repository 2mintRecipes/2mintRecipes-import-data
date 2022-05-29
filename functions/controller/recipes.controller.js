/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */

import {db} from '../config/firebase.js';

export const collectionName = 'recipes';

export async function getAllRecipes(req, res) {
  try {
    const allEntries = [];
    const querySnapshot = await db.collection(collectionName).get();
    querySnapshot.forEach( (doc) => allEntries.push(doc.data()));
    return res.status(200).json(allEntries);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}
