import { ILogin, ICreateUser } from '../interfaces/index';
import UserModel from '../models/usersModel';
import connection from '../models/connection';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: ICreateUser): Promise <string> {
    const token = await this.model.create(user);

    return token;
  }

  public async login({ username, password }: ILogin): Promise <ILogin[]> {
    const users = await this.model.getAll();
    
    const result = users.filter((user) => user.username === username && user.password === password);
    
    return result;
  } 
}

export default UserService;
