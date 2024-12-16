import {Button, Card, CardBody, DateRangePicker, Input} from "@nextui-org/react";
import { ORDER_LABEL } from "@/features/orders/components/config/orderLabel"

export function OrdersFilters(): JSX.Element{
  return(
    <Card className="m-1 mb-4 flex flex-col p-4 gap-4">
      <DateRangePicker className="mb-2" labelPlacement="outside" label="Order date"/>
      <Input className="mb-2"  labelPlacement="outside" label={`${ORDER_LABEL.BILLING_FULL_NAME}`} placeholder="John Doe"/>
      <Input className="mb-2" labelPlacement="outside" label={`${ORDER_LABEL.ORDER_NUMBER}`} placeholder="11321"/>
      <Button>Filter</Button>
    </Card>
  )
}