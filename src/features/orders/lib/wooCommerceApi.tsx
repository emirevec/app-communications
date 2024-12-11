interface FetchByDateArgs {
  after: string; // ISO 8601 date
  before: string; // ISO 8601 date  
}

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

    return await response.json();
  } catch (error) {
    console.error("Error fetching WooCommerce orders:", error);
    throw error;
  }
}


/* export const ApiDataSource = (): Api => ({
  endpoint: '',
  async getAllProducts () {
      const res = await fetch(`${this.endpoint}/products`)
      const data = await res.json()
      return data
  }
}) */