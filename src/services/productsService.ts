import { IProducts } from '../interfaces';
import ProductsModel from '../models/productsModel';
import connection from '../models/connection';

class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise <IProducts[]> {
    const products = await this.model.getAll();

    return products;
  }
}

export default ProductsService;
