"use client";

import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    order_number: "10921",
    billing_full_name: "Sylvia Lenzner",
    order_total: "21000,00",
    order_date: "2024-10-30 09:56"
  },
  {
    key: "2",
    order_number: "10922",
    billing_full_name: "Lucas Guigon",
		order_total: "17310,00",
		order_date: "2024-10-30 10:55"
  },
  {
    key: "3",
    order_number: "10923",
    billing_full_name: "jose olano",
		order_total: "75310,00",
		order_date: "2024-10-30 11:10"
  }
]

const columns = [
  {
    key: "order_number",
    label: "Order number",
  },
  {
    key: "billing_full_name",
    label: "Client name",
  },
  {
    key: "order_total",
    label: "Total order",
  },
  {
    key: "order_date",
    label: "Order date",
  },
]

export default function Receipts() {
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
  );
}