/**
 * @file OrdersList Component
 * @module OrdersList
 * @description Renders a dynamic table displaying a list of orders.
 */
"use client"

//Import statements
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react"
import { ORDERSLABELS } from "./config/ordersLabels"
import { OrderDetail } from "./"
import { type order } from '@/features/orders/types/order'

interface OrderListProps {
  orders: order[]
}

/**
 * OrdersList Component
 *
 * @description The `OrdersList` component generates a dynamic table.
 * @returns {JSX.Element} A table containing order details.
 * 
*/
export function OrdersList({orders}: OrderListProps): JSX.Element{
  return (
    <Table className="m-4" aria-label="Example table with dynamic content">
      <TableHeader>
          <TableColumn key={ORDERSLABELS.ORDER_NUMBER}>{ORDERSLABELS.ORDER_NUMBER}</TableColumn>
          <TableColumn key={ORDERSLABELS.PRODUCTS}>{ORDERSLABELS.PRODUCTS}</TableColumn>
          <TableColumn key={ORDERSLABELS.BILLING_FULL_NAME}>{ORDERSLABELS.BILLING_FULL_NAME}</TableColumn>
          <TableColumn key={ORDERSLABELS.ORDER_TOTAL}>{ORDERSLABELS.ORDER_TOTAL}</TableColumn>
          <TableColumn key={ORDERSLABELS.ORDER_DATE}>{ORDERSLABELS.ORDER_DATE}</TableColumn>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.order_number}>
              <TableCell key={order.order_number}>{order.order_number}</TableCell>
              <TableCell key={ORDERSLABELS.PRODUCTS}>
                <OrderDetail order={order}></OrderDetail>
              </TableCell>
              <TableCell key={order.billing_full_name}>{order.billing_full_name}</TableCell>
              <TableCell key={order.order_total}>{order.order_total}</TableCell>
              <TableCell key={order.order_date}>{order.order_date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}