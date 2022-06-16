import { Router } from 'express';
import UserController from '../../controllers/usersController';
import validateUsernameLogin from '../../midlewares/validateLogin';

const loginRouter = Router();

const user = new UserController();

loginRouter.post('/', validateUsernameLogin, user.login);

export default loginRouter;
