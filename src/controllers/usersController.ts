import { Request, Response } from 'express';
import UserService from '../services/usersService';
import Token from '../tools/token';

class UserController {
  public token;

  constructor(private userService = new UserService()) { 
    this.token = new Token();
  }

  public create = async (req: Request, res: Response) => {
    try {
      const result = await this.userService.create(req.body); // retorna o token

      return res.status(201).json({ token: result });
    } catch (error) {
      console.log(error);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const result = await this.userService.login(req.body);
      if (result.length > 0) {
        const userId = JSON.stringify(result[0].id);
        console.log(typeof userId);
        
        const token = this.token.generateToken(userId);
        /* return res.status(200).json({ token: `${userId}/${token}` }); */
        return res.status(200).json({ token });
      }
      return res.status(401).json({ message: 'Username or password invalid' });
    } catch (error) {
      console.log(error);
    }
  };
}

export default UserController;
