import { Router } from 'express';
import * as homeController from '../controllers/home.controller';
import * as userController from '../controllers/user.controller';
const router = Router();

router.get('/', homeController.index);

router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);

export default router;
