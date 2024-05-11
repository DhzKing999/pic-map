
import express from 'express'
import authRoute from './auth.routes'
import imageRoute from './image.routes'
import { userAuthenication } from '../middleware/authenticate-user';

const router = express.Router();

router.use('/', authRoute)
router.use('/', userAuthenication, imageRoute)



export default router