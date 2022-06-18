import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  public async addOrder(userId: number) :Promise <number> {
    const [newOrderId] = await this.connection
      .execute<ResultSetHeader>('INSERT INTO Trybesmith.Orders (userId) VALUES (?)', [userId]);
    
    return newOrderId.insertId;
  }
}

export default OrderModel;
