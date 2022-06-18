export interface IProducts {
  id: number,
  name: string,
  amount: string,
  orderId?: number | null
}

export interface ICreateProduct {
  name: string,
  amount: string
}

export interface ICreateUser {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password: string
}

export interface IOrders {
  id?: number,
  userId: number
  productsIds?: number[]
}

export interface ILogin {
  id?: number,
  username: string,
  password: string,
}
