import type { Order } from '@features/purchases/types/order'

interface Customer {
  id: number,
}

interface Vendor {
  id: number,
  trade_name: string,
  orders: string
}

export interface Purchase {
  id: number,
  date: string,
  customer: Customer,
  vendor: Vendor[],
  orders: Order[],
  total: number,
}
