import { Router } from 'express';
import ProductsController from '../../controllers/productsController';

const productsRouter = Router();

const Products = new ProductsController();

// GET
productsRouter.get('/', Products.getAll);

export default productsRouter;
