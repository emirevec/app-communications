interface FetchByDateArgs {
  after: string; // ISO 8601 date
  before: string; // ISO 8601 date  
}

//WIP
export async function fetchWooCommerceOrdersByDate({after, before}: FetchByDateArgs) {
  const url: string | undefined = process.env.WOO_COMMERCE_API_URL
  const consumerKey: string | undefined = process.env.WOO_COMMERCE_CONSUMER_KEY
  const consumerSecret: string | undefined = process.env.WOO_COMMERCE_CONSUMER_SECRET

  const endpoint = `${url}/orders?after=${encodeURIComponent(after)}&before=${encodeURIComponent(before)}`
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

    //Filter by child orders.
    const orders = await response.json()
    console.log("WooCommerceApi", orders.length)
    const ordersChild = orders.filter((order: any) => order.parent_id !== 0)
    //console.log(ordersChild)

    //Filter by Siempreverde.
    //order.store.id === 1

    //Build the order list for UI.
    const ordersSV = ordersChild.map((order: any)=>({
      order_number: order.id,
      //Return only the mocked product for the moment. Fix it latter.
      products: [
        {
          seller: "Siempreverde",
          qty: 1,
          product_name: "Bolsón 4/5 kg Agroecológico + Bolsón de Pesada 3 kg + Maple de Huevos de gallinas pastoriles",
          price: 21000.00,
          tags: "Agroecológico,PAC"
        }
      ],
      billing_full_name: order.billing.first_name + " " + order.billing.last_name,
      order_total: order.total,
      order_date: order.date_created
    }))

    return await ordersSV
  } catch (error) {
    console.error("Error fetching WooCommerce orders:", error);
    throw error;
  }
}
