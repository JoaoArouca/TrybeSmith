import { Router } from 'express';
import orderRouter from './ordersRouter';
import productsRouter from './productsRouter';
import userRouter from './usersRouter';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);

export default router;
