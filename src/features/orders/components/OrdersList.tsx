/**
 * @file OrdersList Component
 * @module OrdersList
 * @description Renders a dynamic table displaying a list of orders.
 */
"use client"

//Import statements
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react"
import { orderListMock } from "../db/mocks"

/**
 * OrdersList Component
 *
 * @description The `OrdersList` component generates a dynamic table.
 * @returns {JSX.Element} A table containing order details.
 * 
*/
export function OrdersList(): JSX.Element{
  // Generate column definitions from the mock data keys
  const columns = Object.keys(orderListMock[0]).map((key) => ({
    key: key,
    label: key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }))
  // Format mock data into rows for the table
  const rows = orderListMock.map((order) => ({
    key: order.order_number,
    order_number: order.order_number,
    billing_full_name: order.billing_full_name,
    order_total: `$${order.order_total.toFixed(2)}`,
    order_date: order.order_date,
    products: "+"
  }))
  return (
    <Table className="m-4" aria-label="Example table with dynamic content">
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {rows.map((item) => (
          <TableRow key={item.key}>
            {columns.map((column) => (
              <TableCell key={column.key}>{item[column.key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}