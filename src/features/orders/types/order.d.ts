import type { Product } from "./product"

export interface Order {
  order_number: number,
  order_date: string,
  order_total: number,
  customer_id: number,
  billing_full_name: string,
  products: Product[]
  store: Store,
  multple_id: string
}