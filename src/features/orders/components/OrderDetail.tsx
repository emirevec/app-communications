/**
 * @file OrderDetail Component
 * @module OrderDetail
 * @description Modal for rendering order's content.
 */
"use client"

//Import statements.
import { useState } from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react"
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react"
import { getColumnsLabelArray } from "../util/formatOrdersForUI"
import type { order } from "../types"

interface OrderProps {
  order: order
}

/**
 * OrderDetail Component
 *
 * @description The `Order` component opens a modal for rendering order's content.
 * @returns {JSX.Element} A modal containing full order details.
 * 
*/
export function OrderDetail({ order: order }: OrderProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("xl")
  const columns = getColumnsLabelArray(order.products)

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button key={size} onPress={() => onOpen()}>Detail</Button>
      </div>
      <Modal
        size={size}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Detail</ModalHeader>
              <ModalBody>
                <p>{order.billing_full_name}</p>
                <p>{order.order_number}</p>
                <Table className="m-4" aria-label="Example table with dynamic content">
                  <TableHeader>
                      <TableColumn key={"Quantity"}>{"Quantity"}</TableColumn>
                      <TableColumn key={"Product"}>{"Product"}</TableColumn>
                      <TableColumn key={"Price"}>{"Price"}</TableColumn>
                      <TableColumn key={"Sub-total"}>{"Sub-total"}</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {order.products.map((product) => (
                      <TableRow key={product.product_name}>
                        <TableCell key={product.qty}>{product.qty}</TableCell>
                        <TableCell key={product.product_name}>{product.product_name}</TableCell>
                        <TableCell key={product.price}>{`$ ${product.price.toFixed(2)}`}</TableCell>
                        <TableCell key="Subtotal">{product.price * product.qty}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <p>{`$ ${order.order_total.toFixed(2)}`}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Send
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}


