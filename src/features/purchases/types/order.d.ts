import type { Product } from '@features/orders/types/product'

export type Order = {
  id: number,
  date_created: string,
  customer_id: number,
  customer_full_name: string,
  products: Product[],
  total: number,
}