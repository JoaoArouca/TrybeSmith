import { Pool } from 'mysql2/promise';
import { IProducts } from '../interfaces';

class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise <IProducts[]> {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products');

    return products as IProducts[];
  }
}

export default ProductsModel;
