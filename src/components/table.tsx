"use client";

import { Table } from "flowbite-react";

import orders from '../mock/orders-2024-11-08-11-54-34.json'

export function ReceiptsTable() {
  console.log(orders)
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Order Number</Table.HeadCell>
          <Table.HeadCell>Client Name</Table.HeadCell>
          <Table.HeadCell>Order Total</Table.HeadCell>
          <Table.HeadCell>Order dat</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
      {orders.map((order) => (
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {order.order_number}
            </Table.Cell>
            <Table.Cell>{order.billing_full_name}</Table.Cell>
            <Table.Cell>{order.order_total}</Table.Cell>
            <Table.Cell>{order.order_date}</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
      ))}
        </Table.Body>
      </Table>
    </div>
  );
}
