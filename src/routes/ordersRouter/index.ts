import { Router } from 'express';
import OrderController from '../../controllers/ordersController';
import validateProductId from '../../midlewares/validateProductsId';
import Decode from '../../midlewares/validateToken';

const orderRouter = Router();

const orders = new OrderController();

// GET
orderRouter.get('/', orders.getAll);

// POST
orderRouter.post('/', Decode, validateProductId, orders.addOrder);

export default orderRouter;