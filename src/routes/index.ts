import { Router } from 'express';
import productsRouter from './productsRouter';
import userRouter from './usersRouter';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', userRouter);

export default router;
