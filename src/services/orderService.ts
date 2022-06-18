import { IProducts, IOrders } from '../interfaces/index';
import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import ProductsModel from '../models/productsModel';

class OrderService {
  public model: OrderModel;

  public products: ProductsModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.products = new ProductsModel(connection);
  }

  public async getAll(): Promise <IOrders[]> {
    const products = await this.products.getAll();
    const orders = await this.model.getAll();

    const fullOrders: IOrders[] = orders.map(({ id, userId }) => {
      const returnId = (product: IProducts) => product.id;
      const order = {
        id,
        userId,
        productsIds: products.filter((product: IProducts) => product.orderId === id)
          .map(returnId),
      };
      return order;
    });
    return fullOrders;
  }

  /* public async addOrder(userId: number) :Promise <IOrders[]> {
    const newOrder = await this.model.addOrder(userId);
  } */
}

export default OrderService;
