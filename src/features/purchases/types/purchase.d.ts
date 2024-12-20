import type { Customer } from '@features/purchases/types/customer'
import type { Vendor } from '@features/purchases/types/vendor'
import type { Order } from '@features/purchases/types/order'

export interface Purchase {
  id: number,
  date: string,
  customer: Customer,
  vendor: Vendor[],
  orders: Order[],
  total: number,
}
