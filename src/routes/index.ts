import { Router } from 'express';
import * as homeController from '../controllers/home.controller';
import * as userController from '../controllers/user.controller';
const router = Router();

router.get('/', homeController.index);

router.get('/login', userController.getLogin);

export default router;
