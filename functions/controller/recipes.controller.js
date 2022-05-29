/* eslint-disable require-jsdoc */
/* eslint-disable valid-jsdoc */

import {db} from '../config/firebase.js';
import Recipe from '../dto/recipes.dto.js';

export const collectionName = 'recipes';

export async function getAllRecipes(req, res) {
  try {
    const allEntries = [];
    const querySnapshot = await db.collection(collectionName).get();
    querySnapshot.forEach((doc) => {
      var recipe = Recipe.fromJson(doc.data());
      allEntries.push(recipe);
    });
    return res.status(200).json(allEntries);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

export async function addRecipe(req, res) {
  try {
    const creatorRef = db.doc(req.body.creator);
    // const recipeObject = Recipe.fromJson(req.body, creatorRef);
    const recipeObject = {
      creator: creatorRef,
      ...req.body,
    };
    const recipe = db.collection(collectionName).doc();
    recipe.set(recipeObject);

    return res.status(201).json({
      status: 'success',
      message: 'Added successfully',
      data: recipeObject,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
}