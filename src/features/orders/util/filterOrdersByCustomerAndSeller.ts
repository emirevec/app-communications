import { OrderWooCommercePruned } from '@/features/orders/types/orderWooCommercePruned'

interface FilterArgs {
  orders: OrderWooCommercePruned[]
  seller?: number,
  customer?: number
}

export function filterOrdersByCustomerAndSeller({orders, customer, seller }: FilterArgs){
  if (!customer && !seller) return orders
  
  let ordersByClient: OrderWooCommercePruned[] = orders
  let ordersByClientAndSeller: OrderWooCommercePruned[] = []

  if(customer){
    ordersByClient = orders.filter((order: any) => order.customer_id === customer)
  } else if(seller) {
    ordersByClientAndSeller = ordersByClient.filter((order: any) => order.store.id === seller)
    // If the seller is the number 1, we need to add the orders from the other store number 2
    if(seller === 1){
      const seller2Orders = ordersByClient.filter((order: any) => order.store.id === 2)
      ordersByClientAndSeller = ordersByClientAndSeller.concat(seller2Orders)
    } 
  } else {
    ordersByClientAndSeller = ordersByClient
  }

  console.log("FilterOrdersByCustomerAndSeller", "Filtered orders length " + ordersByClientAndSeller.length)

  return ordersByClientAndSeller
}
