import { Request, Response } from 'express';
import OrderService from '../services/orderService';

class OrderController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  public getAll = async (_req: Request, res: Response) => {
    try {
      const orders = await this.orderService.getAll();

      return res.status(200).json(orders);
    } catch (error) {
      console.log(error);
    }
  };

  public addOrder = async (req: Request, res: Response) => {
    try {
      const { productsIds, user } = req.body;
      
      await this.orderService.addOrder(user, productsIds);

      return res.status(201).json({ userId: Number(user), productsIds });
    } catch (error) {
      console.log(error);
    }
  };
}

export default OrderController;
