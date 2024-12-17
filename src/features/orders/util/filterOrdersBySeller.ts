
//Filter by simple orders.
const simpleOrders = allOrders.filter((order: any) => order.store.length !== 0)
console.log("WooCommerceApi", "Simple orders length " + simpleOrders.length)

//Filter by Siempreverde.
const svOrders = simpleOrders.filter((order: any) => order.store.id === 1)
console.log("WooCommerceApi", "Siempreverde orders length " + svOrders.length)


//Build the order list for UI.
const ordersSV = svOrders.map((order: any) => {
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

console.log("WooCommerceApi", "Returned orders length " + ordersSV.length)