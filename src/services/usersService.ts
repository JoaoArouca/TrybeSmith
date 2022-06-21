import { ILogin, ICreateUser } from '../interfaces/index';
import UserModel from '../models/usersModel';
import connection from '../models/connection';
import Token from '../tools/token';

class UserService {
  public model: UserModel;

  public token;

  constructor() {
    this.model = new UserModel(connection);
    this.token = new Token();
  }

  public async create(user: ICreateUser): Promise <string> {
    const createdUserId = await this.model.create(user);
    const token = this.token.generateToken(createdUserId.toString());
    
    return token;
  }

  public async login({ username, password }: ILogin): Promise <ILogin[]> {
    const users = await this.model.getAll();
    
    const result = users.filter((user) => user.username === username && user.password === password);
    
    return result;
  } 
}

export default UserService;
