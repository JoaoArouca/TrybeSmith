import { ICreateProduct, IProducts } from '../interfaces/index';
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

  public async create(product: ICreateProduct): Promise <IProducts> {
    const created = await this.model.create(product); // retorna o id do produto criado

    return { id: created, ...product };
  }
}

export default ProductsService;
