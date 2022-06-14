import { Pool } from 'mysql2/promise';
import { IOrders } from '../interfaces/index';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise <IOrders[]> {
    const [orders] = await this.connection.execute('SELECT * FROM Trybesmith.Orders;');

    return orders as IOrders[];
  }
}

export default OrderModel;
