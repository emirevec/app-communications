//WIP
import type { OrderWooCommerce } from '@/features/orders/types/orderWooCommerce'
import type { OrderWooCommercePruned } from '@/features/orders/types/orderWooCommercePruned'

interface PruneOrdersArgs {
  ordersFromApi: OrderWooCommerce[]
}

export function removeParentOrdersAndPruneChildOrders({ ordersFromApi }: PruneOrdersArgs): OrderWooCommercePruned[] {

  const chiledOrders = ordersFromApi.filter((order: any) => order.store.length !== 0)
  
  console.log("Order/util/pruneOrder", "Child orders lenght" + chiledOrders.length)

  //Map simple orders to pruned orders
  const prunedOrders = chiledOrders.map((order) => {
    return {
      id: order.id,
      date_created: order.date_created,
      customer_id: order.customer_id,
      billing: {
        first_name: order.billing.first_name,
        last_name: order.billing.last_name,
      },
      line_items: order.line_items.map((lineItem) => ({
        id: lineItem.id,
        name: lineItem.name,
        quantity: lineItem.quantity,
        total: lineItem.total,
        price: lineItem.price,
      })),
      store: {
        id: order.store.id,
        shop_name: order.store.shop_name,
      }
    }
  })
  return prunedOrders
}
