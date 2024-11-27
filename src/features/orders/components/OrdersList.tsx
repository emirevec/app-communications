"use client"

import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react"
import { orderListMock } from "../mocks"

export default function OrdersList(){
  const columns = Object.keys(orderListMock[0]).map((key) => ({
    key: key,
    label: key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }))
  const rows = orderListMock.map((order) => ({
    key: order.order_number,
    order_number: order.order_number,
    billing_full_name: order.billing_full_name,
    order_total: `$${order.order_total.toFixed(2)}`,
    order_date: order.order_date,
    products: "+"
  }))
  return (
    <Table aria-label="Example table with dynamic content">
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