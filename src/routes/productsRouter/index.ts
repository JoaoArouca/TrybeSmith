import { Router } from 'express';
import { validateAmount, validateName } from '../../midlewares/validateProduct';
import ProductsController from '../../controllers/productsController';

const productsRouter = Router();

const Products = new ProductsController();

// GET
productsRouter.get('/', Products.getAll);

// POST
productsRouter.post('/', validateAmount, validateName, Products.create);

export default productsRouter;
