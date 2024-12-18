import { OrdersFilters } from "@/features/orders/components/OrdersFilters"
import { OrdersList } from "@/features/orders/components/OrdersList"
import { fetchWooCommerceOrdersByDate } from "@/features/orders/lib/wooCommerceApi"
import { filterOrdersBySeller } from "@/features/orders/util/filterOrdersBySeller"

export default async function Home() {
  const after = "2024-12-16T00:00:00"
  const before ="2024-12-18T23:59:59"
  const seller = 1
  const ordersFromWooCommerce = await fetchWooCommerceOrdersByDate({after, before})
  const orders = filterOrdersBySeller({orders: ordersFromWooCommerce, seller})

  return (
    <>
      <h1>CommunApp</h1>
      <OrdersFilters/>
      <OrdersList orders={orders}/>
    </>
  )
}
