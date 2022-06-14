import { Router } from 'express';
import UserController from '../../controllers/usersController';

const userRouter = Router();

const User = new UserController();

// POST
userRouter.post('/', User.create);

export default userRouter;
