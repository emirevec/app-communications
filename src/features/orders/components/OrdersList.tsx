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
  const rows = addKeyForMapping(orderListMock)
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