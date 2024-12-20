import type { OrderWooCommerce } from "../types/orderWooCommerce";

interface FetchByDateArgs {
  after: string; // ISO 8601 date
  before: string; // ISO 8601 date  
}

export async function fetchWooCommerceOrdersByDate({ after, before }: FetchByDateArgs): Promise<OrderWooCommerce[]> {
  const url: string | undefined = process.env.WOO_COMMERCE_API_URL
  const consumerKey: string | undefined = process.env.WOO_COMMERCE_CONSUMER_KEY
  const consumerSecret: string | undefined = process.env.WOO_COMMERCE_CONSUMER_SECRET
  const FIELDS: string = "id,customer_id,date_created,total,billing,line_items,store"
  const urlPrefix: string = `${url}/orders?_fields=${FIELDS}&after=${encodeURIComponent(after)}&before=${encodeURIComponent(before)}`
  const authHeader = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64")

  try {
    let page = 1
    let totalPages = 1
    const perPage = 100
    let allOrders: any = []

    while (page <= totalPages) {
      const endpoint = urlPrefix + `&page=${page}&per_page=${perPage}`

      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Basic ${authHeader}`,
        }
      })

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Error fetching orders: ${response.status} ${response.statusText}. Details: ${errorDetails}`);
      }

      const totalPagesHeader = response.headers.get('X-WP-TotalPages')
      if (totalPagesHeader !== null) {
        totalPages = parseInt(totalPagesHeader, 10);
      }

      const orders = await response.json()

      allOrders = allOrders.concat(orders)

      console.log("WooCommerceApi", "Getting page n° " + page + " of " + totalPages)
      console.log("WooCommerceApi", "allOrders length " + allOrders.length)

      page++
    }

    return allOrders

  } catch (error) {
    console.error("Error fetching WooCommerce orders:", error);
    throw error;
  }
}
