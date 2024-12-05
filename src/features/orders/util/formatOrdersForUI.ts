import type { order } from '../types'

function validateOrdersInput(orderList: order[]): void{
  if(!orderList || !Array.isArray(orderList) || orderList.length === 0){
    throw new Error ("Orders list must be a non-empty array.")
  }
  if (Object.keys(orderList[0]).length !== 5){
    throw new Error("Order must be a 5 length array.")
  }
}

export function getColumnsLabelArray(ordersList: order[]): Record<string, any>[]{
  validateOrdersInput(ordersList)
  const array = Object.keys(ordersList[0]).map((key) => ({
    key: key,
    label: key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
  }))
  return array
}

export function getColumnsLabelObject(ordersList: order[]): Record<string, any>{
  validateOrdersInput(ordersList)
  const aux = getColumnsLabelArray(ordersList)
  const object = aux.reduce((acc, item) => {
    acc[item.key] = item.label;
    return acc;
  }, {})
  return object
}

export function addKeyForMapping(ordersList: order[]){
  validateOrdersInput(ordersList)
  const newOrdersList = ordersList.map((order) => ({
    ...order,
    key: order.order_number,
    order_total: `$${order.order_total.toFixed(2)}`,
    products: "+"
  }))
  return newOrdersList
}