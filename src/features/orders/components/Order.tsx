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
import { orderMock } from '../db/mocks/'


/**
 * Order Component
 *
 * @description The `Order` component opens a modal for rendering order's content.
 * @returns {JSX.Element} A modal containing full order details.
 * 
*/
export function Order(orderMock: OrderType): JSX.Element {
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
                <Table className="m-4" aria-label="Example table with dynamic content">
                  <TableHeader>
                    <TableColumn key="Numero de orden">"Numero de orden"</TableColumn>
                    <TableColumn key="Nombre completo">"Nombre completo"</TableColumn>
                    <TableColumn key="Total de la orden">"Total de la orden"</TableColumn>
                  </TableHeader>
                  <TableBody>
                    
                  </TableBody>
                </Table>
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
