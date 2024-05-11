
import express from 'express'
import { addImageController } from '../controller/imageController/add-image-controller';
import { userAuthenication } from '../middleware/authenticate-user';
import { getAllImageController } from '../controller/imageController/get-all-image-controller';



const router = express.Router();
/**
 * @swagger
 * /api/v1/image:
 *   post:
 *     tags:
 *       - Image
 *     summary: Add image
 *     description: Add image
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *               longitude:
 *                 type: number
 *               latitude:
 *                 type: number
 * 
 * 
 */


router.post('/image', addImageController);

/**
 * @swagger
 * /api/v1/image:
 *   get:
 *     tags:
 *       - Image
 *     summary: Get all image
 *     description: Get all image
 *     responses:
 *       200:
 *         description: Get all image
 */

router.get('/image', getAllImageController)

export default router