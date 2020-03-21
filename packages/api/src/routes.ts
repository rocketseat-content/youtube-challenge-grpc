import { Router } from 'express';

import UserController from './controllers/UserController';
import PurchaseController from './controllers/PurchaseController';
import SessionController from './controllers/SessionController';

import authMiddleware from './middlewares/auth';

const router = Router();

router.get('/users/:id', UserController.show);
router.post('/users', UserController.store);

router.post('/sessions', SessionController.store);

router.use(authMiddleware);

router.get('/purchases', PurchaseController.index);
router.get('/purchases/:id', PurchaseController.show);
router.post('/purchases', PurchaseController.store);

export default router;
