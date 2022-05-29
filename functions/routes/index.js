/* eslint-disable new-cap */
import express from 'express';
import heroRoutes from './hero.routes.js';
import recipesRoutes from './recipes.routes.js';

const router = express.Router();

/**
 * @openapi
 * '/':
 *  get:
 *     tags:
 *      - Home
 *     description: Returns API operational status
 *     responses:
 *       200:
 *         description: API is  running
 */
router.get('/', (req, res) => res.send('Hello World!').status(200));

router.use(recipesRoutes);
// router.use(heroRoutes);

export default router;
