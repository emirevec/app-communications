//WIP
import type { OrderWooCommerce } from "../types/orderWooCommerce"
import type { Order } from "../types/order"

interface TransformOrdersArgs {
  ordersFromApi: OrderWooCommerce[]
}

export function transformOrders({ ordersFromApi }: TransformOrdersArgs) {
  const aux = ordersFromApi.reduce<Record<number, Order>>((acc, order) => {
    const multipleOrder = Array.isArray(order.store)
    const customerId = order.customer_id

    if (!multipleOrder && !acc[customerId]) {
      acc[customerId] = {
        order_number: order.id,
        order_date: order.date_created,
        order_total: order.total,
        customer_id: order.id,
        billing_full_name: `${order.billing.first_name} ${order.billing.last_name}`,
        products: order.line_items,
        store: order.store.id,
        multple_id: `${order.id}`
      }} else if(!multipleOrder){
        acc[customerId].products.push(...order.products);
        acc[customerId].total += order.total
        acc[customerId].multple_id = acc[customerId].multple_id + " - " + order.id

      }
    

  }, {})

  const ordersForUi = Object.values(aux)

  console.log("transformOrders", ordersForUi[0])

  return ordersForUi


  //Filter by simple orders.
  const simpleOrders = allOrders.filter((order: any) => order.store.length !== 0)
  console.log("Util/file", "Simple orders length " + simpleOrders.length)

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
      order_date: order.date_created,
      multiple_id: ""
    }
  })

  //export function mergeOrdersByCustomer({ orders }: MergeArgs){

  const mergedOrders = orders.reduce((acc, order) => {
    //@ts-ignore
    const customerId = order.customer_id;

    //@ts-ignore
    if (!acc[customerId]) {
      // If customer_id is not already a key in acc, initialize it with the order
      //@ts-ignore
      acc[customerId] = { ...order, products: [...order.products], multple_id: order.id };
    } else {
      // Merge with existing entry for the customer.
      //@ts-ignore
      acc[customerId].products.push(...order.products);
      //@ts-ignore
      acc[customerId].total += order.total; // Add totals together
      //@ts-ignore
      acc[customerId].multple_id = acc[customerId].multple_id + " - " + order.id
    }

    return acc;
  }, {});
  // Convert the grouped object back into an array
  const result = Object.values(mergedOrders);

}