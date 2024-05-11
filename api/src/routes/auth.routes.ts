
import express from 'express'
import 
{
    loginToAccount,
    registerAccount,
} from '../controller/authController';



const router = express.Router();
/**
 * @swagger
 * /api/v1/registerAccount:
 *   post:
 *     tags:
 *       - UserAuth
 *     summary: Register a new account.
 *     description: Register a new user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Account registered successfully.
 *       500:
 *         description: Internal server error.
 */
router.post('/registerAccount', registerAccount);

/**
 * @swagger
 * /api/v1/loginToAccount:
 *   post:
 *     tags:
 *       - UserAuth
 *     summary: Login to an account.
 *     description: Log in to an existing user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful.
 *       401:
 *         description: Unauthorized - Invalid credentials.
 *       500:
 *         description: Internal server error.
 */
router.post('/loginToAccount', loginToAccount);



export default router