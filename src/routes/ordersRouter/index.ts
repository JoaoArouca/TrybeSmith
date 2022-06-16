import { Router } from 'express';
import OrderController from '../../controllers/ordersController';

const orderRouter = Router();

const orders = new OrderController();

// GET
orderRouter.get('/', orders.getAll);

export default orderRouter;