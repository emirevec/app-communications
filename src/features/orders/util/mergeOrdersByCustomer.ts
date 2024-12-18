import { Order } from "../types/order";

interface MergeArgs {
  orders: Order[]
}

export function mergeOrdersByCustomer({ orders }: MergeArgs){

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
  
  console.log(result);
}