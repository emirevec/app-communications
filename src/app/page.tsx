import OrdersFilters from "@/features/orders/components/OrdersFilters"
import OrdersList from "@/features/orders/components/OrdersList"

export default function Home() {
  return (
    <>
      <h1>CommunApp</h1>
      <OrdersFilters/>
      <OrdersList/>
    </>
  )
}
