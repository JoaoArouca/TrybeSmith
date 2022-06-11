import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ICreateProduct, IProducts } from '../interfaces/index';

class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise <IProducts[]> {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products');

    return products as IProducts[];
  }

  public async create({ name, amount }: ICreateProduct): Promise<number> {
    const [created] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return created.insertId;
  }
}

export default ProductsModel;
