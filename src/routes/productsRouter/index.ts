import { Router } from 'express';

const productsRouter = Router();

// GET
productsRouter.get('/', () => {
  console.log('cheguei');
});

export default productsRouter;
