export interface IProducts {
  id: number,
  name: string,
  amount: string,
  orderId: number | null
}

export type CreateProduct = Omit<IProducts, 'id'>;
