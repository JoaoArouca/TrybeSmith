import { Request, Response } from 'express';
import UserService from '../services/usersService';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    try {
      const token = await this.userService.create(req.body);

      return res.status(201).json({ token });
    } catch (error) {
      console.log(error);
    }
  };
}

export default UserController;
