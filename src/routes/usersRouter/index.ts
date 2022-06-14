import { Router } from 'express';
import {
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword }
  from '../../midlewares/validateUser';
import UserController from '../../controllers/usersController';

const userRouter = Router();

const User = new UserController();

// POST
userRouter.post(
  '/', 
  validateUsername, 
  validateClasse,
  validateLevel, 
  validatePassword, 
  User.create,
);

export default userRouter;
