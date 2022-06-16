import { Router } from 'express';
import loginRouter from './loginRouter';
import orderRouter from './ordersRouter';
import productsRouter from './productsRouter';
import userRouter from './usersRouter';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);
router.use('/login', loginRouter);

export default router;
