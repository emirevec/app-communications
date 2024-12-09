/**
 * @file OrdersList Component
 * @module OrdersList
 * @description Renders a dynamic table displaying a list of orders.
 */
"use client"

//Import statements
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react"
import { orderListMock } from "../db/mocks"
import { getColumnsLabelArray, addKeyForMapping } from "../util/formatOrdersForUI"
import { OrderDetail } from "./"

/**
 * OrdersList Component
 *
 * @description The `OrdersList` component generates a dynamic table.
 * @returns {JSX.Element} A table containing order details.
 * 
*/
export function OrdersList(): JSX.Element{
  // Generate column definitions from the data keys.
  const columns = getColumnsLabelArray(orderListMock)
  // Format data into rows for the table.
  const orderListWithKey = addKeyForMapping(orderListMock)
  return (
    <Table className="m-4" aria-label="Example table with dynamic content">
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {orderListWithKey.map((order) => (
          <TableRow key={order.key}>
              <TableCell key={order.order_number}>{order.order_number}</TableCell>
              <TableCell key="Products detail">
                <OrderDetail order={order}></OrderDetail>
              </TableCell>
              <TableCell key={order.billing_full_name}>{order.billing_full_name}</TableCell>
              <TableCell key={order.order_total}>{`$${order.order_total.toFixed(2)}`}</TableCell>
              <TableCell key={order.order_date}>{order.order_date}</TableCell>
              
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}