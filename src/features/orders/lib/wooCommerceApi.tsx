interface FetchByDateArgs {
  after: string; // ISO 8601 date
  before: string; // ISO 8601 date  
}

//WIP
export async function fetchWooCommerceOrdersByDate({ after, before }: FetchByDateArgs) {
  const url: string | undefined = process.env.WOO_COMMERCE_API_URL
  const consumerKey: string | undefined = process.env.WOO_COMMERCE_CONSUMER_KEY
  const consumerSecret: string | undefined = process.env.WOO_COMMERCE_CONSUMER_SECRET

  const endpoint = `${url}/orders?after=${encodeURIComponent(after)}&before=${encodeURIComponent(before)}&include=11515`
  const authHeader = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64")

  try {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Basic ${authHeader}`,
      }
    })

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Error fetching orders: ${response.status} ${response.statusText}. Details: ${errorDetails}`);
    }

    //Filter by child orders and Siempreverde store.
    const orders = await response.json()

    console.log("WooCommerceApi", orders[0])
    //console.log("WooCommerceApi", orders[11])
    //.line_items[0].meta_data

    const ordersChild = await orders.filter((order: any) => /* order.parent_id === 0  && */ order.store.id === 1)
    
    /* orders.map((order: any) => (
      console.log(order.store.id)
    ))
 */
    console.log("WooCommerceApi", ordersChild.length)

    //Build the order list for UI.
    const ordersSV = ordersChild.map((order: any) => {
      const aux = order.line_items.map((line: any) =>({
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

    console.log("WooCommerceApi", ordersSV.length)

    return await ordersSV
  } catch (error) {
    console.error("Error fetching WooCommerce orders:", error);
    throw error;
  }
}
