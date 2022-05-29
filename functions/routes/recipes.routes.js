/* eslint-disable new-cap */
import express from 'express';
import {
  getAllRecipes,
  collectionName,
} from '../controller/recipes.controller.js';

const recipesRoutes = express.Router();

/**
 * @openapi
 * '/api/recipes':
 *  get:
 *     tags:
 *     - Recipes
 *     summary: Get all recipes
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  id:
 *                    type: number
 *                  name:
 *                    type: string
 *       400:
 *         description: Bad request
 */
recipesRoutes.get(
    `/api/recipes`,
    getAllRecipes,
);

/**
 * @openapi
 * '/api/hero':
 *  post:
 *     tags:
 *     - Hero
 *     summary: Create a hero
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *              - name
 *            properties:
 *              id:
 *                type: number
 *                default: 2
 *              name:
 *                type: string
 *                default: New Hero Name
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 */
// heroRoutes.post('/api/hero', addHeroHandler);

/**
 * @openapi
 * '/api/hero':
 *  put:
 *     tags:
 *     - Hero
 *     summary: Modify a hero
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - id
 *              - name
 *            properties:
 *              id:
 *                type: number
 *                default: 1
 *              name:
 *                type: string
 *                default: Hulk
 *     responses:
 *      200:
 *        description: Modified
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
// heroRoutes.put('/api/hero', editHeroHandler);

/**
 * @openapi
 * '/api/hero/{id}':
 *  delete:
 *     tags:
 *     - Hero
 *     summary: Remove hero by id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique id of the hero
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 */
// heroRoutes.delete('/api/hero/:id', deleteHeroHandler);

export default recipesRoutes;
