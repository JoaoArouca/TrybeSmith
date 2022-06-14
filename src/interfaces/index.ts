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
  username: string,
  classe: string,
  level: number,
  password: string
}
