import { Router } from 'express';

const orderRouter = Router();

// GET
orderRouter.get('/', () => console.log('cheguei'));

export default orderRouter;