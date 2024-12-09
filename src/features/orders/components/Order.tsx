/**
 * @file Order Component
 * @module Order
 * @description Modal for rendering order's content.
 */
"use client"

//Import statements.
import { useState } from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react"
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react"
import type { order  } from "../types"

interface OrderProps {
  order: order
}

/**
 * Order Component
 *
 * @description The `Order` component opens a modal for rendering order's content.
 * @returns {JSX.Element} A modal containing full order details.
 * 
*/
export function Order({order: order}: OrderProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("md")

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button key={size} onPress={() => onOpen()}>Order</Button>
      </div>
      <Modal
        size={size}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Order</ModalHeader>
              <ModalBody>
                <p>{order.billing_full_name}</p>
                <p>{order.order_number}</p>
                <Table className="m-4" aria-label="Example table with dynamic content">
                  <TableHeader>
                    <TableColumn key="Cantidad">Cantidad</TableColumn>
                    <TableColumn key="Descripción">Descripción</TableColumn>
                    <TableColumn key="Precio">Precio</TableColumn>
                    <TableColumn key="Subtotal">Subtotal</TableColumn>
                  </TableHeader>
                  <TableBody>
                  {order.products.map((product)=> (
                    <TableRow key={product.product_name}>
                    <TableCell key={product.qty}>{product.qty}</TableCell>
                    <TableCell key={product.product_name}>{product.product_name}</TableCell>
                    <TableCell key={product.price}>{product.price}</TableCell>
                    <TableCell key="Subtotal">{product.price * product.qty}</TableCell>
                    </TableRow>
                  ))}
                  </TableBody>
                </Table>
                <p>{order.order_number}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}


