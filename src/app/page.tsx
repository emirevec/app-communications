import { OrdersFilters, OrdersList } from "@/features/orders/components"

export default function Home() {
  return (
    <>
      <h1>CommunApp</h1>
      <OrdersFilters/>
      <OrdersList/>
    </>
  )
}
