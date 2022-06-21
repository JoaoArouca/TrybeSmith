import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ICreateUser } from '../interfaces/index';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create({ username, classe, level, password }: ICreateUser): Promise<number> {
    const [data] = await this.connection.execute<ResultSetHeader>(`INSERT INTO
    Trybesmith.Users (username, classe, level, password)
  VALUES
    (?, ?, ?, ?);`, [username, classe, level, password]);
    
    return data.insertId;
  }

  public async getAll(): Promise<ICreateUser[]> {
    const [users] = await this
      .connection.execute('SELECT * FROM Trybesmith.Users');
    
    return users as ICreateUser[];
  }
}

export default UserModel;
