import { OrdersFilters, OrdersList } from "@/features/orders/components"
import { fetchWooCommerceOrdersByDate } from "@/features/orders/lib/wooCommerceApi"

export default async function Home() {
  const after = "2024-12-07T00:00:00"
  const before ="2024-12-11T23:59:59"
  const orders = await fetchWooCommerceOrdersByDate({after, before})
  console.log(orders)
  return (
    <>
      <h1>CommunApp</h1>
      <OrdersFilters/>
      <OrdersList orders={orders}/>
    </>
  )
}
