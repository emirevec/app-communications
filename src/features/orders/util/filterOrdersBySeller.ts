import type { Order } from "../types/order"

interface FilterArgs {
  orders: Order[]
  seller: number
}

export function filterOrdersBySeller({orders, seller}: FilterArgs){
  let aux = orders.filter((order: any) => order.store.id === seller)
  
  if(seller === 1){
    const seres = orders.filter((order: any) => order.store.id === 2)
    aux = aux.concat(seres)
  } 

  console.log("FilterOrdersByseller", "Filtered orders length " + aux.length)
  
  const filteredOrders = aux.map((order: any) => {
    const aux = order.line_items.map((line: any) => ({
      qty: line.quantity,
      product_name: line.name,
      price: line.price
    }))
    return {
      order_number: order.id,
      products: aux,
      billing_full_name: order.billing.first_name + " " + order.billing.last_name,
      order_total: order.total,
      order_date: order.date_created
    }
  })

  return filteredOrders
}
