import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public getAll = async (_req: Request, res: Response) => {
    try {
      const products = await this.productsService.getAll();

      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  };

  public create = async (req: Request, res: Response) => {
    try {
      const created = await this.productsService.create(req.body);

      return res.status(201).json(created);
    } catch (error) {
      console.log(error);
    }
  };
}

export default ProductsController;
