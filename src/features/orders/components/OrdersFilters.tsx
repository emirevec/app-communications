/**
 * @file OrdersFilters Component
 * @module OrdersFilters
 * @description Renders filters for applying to the list of orders.
 */

// Import statements
import {Button, Card, CardBody, DateRangePicker, Input} from "@nextui-org/react";
import { getColumnsLabelObject } from "../util/getColumnsLabel"
import { orderListMock } from "../db/mocks"

/**
 * OrdersFilters Component
 *
 * @description The `OrdersFilters` component generates filter fileds for applying to the list of orders.
 * @returns {JSX.Element} A card containing order filters.
 * 
*/
export function OrdersFilters(): JSX.Element{
  const columns = getColumnsLabelObject(orderListMock)
  //console.log(columns)
  return(
    <Card className="m-1 mb-4 flex flex-col p-4 gap-4">
      <DateRangePicker className="mb-2" labelPlacement="outside" label="Order date"/>
      <Input className="mb-2"  labelPlacement="outside" label={`${columns.billing_full_name}`} placeholder="John Doe"/>
      <Input className="mb-2" labelPlacement="outside" label={`${columns.order_number}`} placeholder="11321"/>
      <Button>Filter</Button>
    </Card>
  )
}