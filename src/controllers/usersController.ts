import { Request, Response } from 'express';
import UserService from '../services/usersService';
import token from '../tools/token';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    try {
      const result = await this.userService.create(req.body); // retorna o token

      return res.status(201).json({ token: result });
    } catch (error) {
      console.log(error);
    }
  };

  public login = async (req: Request, res: Response) => {
    const result = await this.userService.login(req.body);
    
    if (result.length > 0) {
      return res.status(200).json({ token });
    }
    
    return res.status(401).json({ message: 'Username or password invalid' });
  };
}

export default UserController;
