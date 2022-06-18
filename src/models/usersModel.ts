import { Pool } from 'mysql2/promise';
import { ICreateUser } from '../interfaces/index';
import token from '../tools/token';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create({ username, classe, level, password }: ICreateUser): Promise<string> {
    await this.connection.execute(`INSERT INTO
    Trybesmith.Users (username, classe, level, password)
  VALUES
    (?, ?, ?, ?);`, [username, classe, level, password]);

    return token;
  }

  public async getAll(): Promise<ICreateUser[]> {
    const [users] = await this
      .connection.execute('SELECT * FROM Trybesmith.Users');
    
    return users as ICreateUser[];
  }
}

export default UserModel;
