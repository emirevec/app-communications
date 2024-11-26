import type { product } from "./product"

export interface order {
  order_number: number,
  products: product[]
  billing_full_name: string,
  order_total: number,
  order_date: string
}