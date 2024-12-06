//Import statement
import type { order } from '../types'

//Functions for validating inputs.
function isObject(value: any){
  return value != null && typeof value === 'object'
}

function validateOrderOrListInput(input: order | order[]): void{
  if(!input){
    throw new Error("Input can't be null")
  }
  if(!Array.isArray(input)){
    if(!isObject(input) || Object.keys(input).length === 0){
      throw new Error("Order listh must be a non-empty object")
    }
    if(Object.keys(input).length !== 5){
      throw new Error("Order must contain 5 properties.")
    }
  } else{
    if(input.length === 0){
      throw new Error ("Orders list must be a non-empty array.")
    }
    if(Object.keys(input[0]).length !== 5){
    throw new Error("Order must be a 5 length array.")}
  }
}

//Function to get columns from an array returning another array.
export function getColumnsLabelArray(ordersList: order[]): Record<string, any>[]{
  validateOrderOrListInput(ordersList)
  const array = Object.keys(ordersList[0]).map((key) => ({
    key: key,
    label: key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
  }))
  return array
}

//Function to get columns from an array returning an object.
export function getColumnsLabelObject(ordersList: order[]): Record<string, any>{
  validateOrderOrListInput(ordersList)
  const aux = getColumnsLabelArray(ordersList)
  const object = aux.reduce((acc, item) => {
    acc[item.key] = item.label;
    return acc;
  }, {})
  return object
}

//Function to get columns from an object returning another object.
export function getColumbsLabelObjectFromObject(order: order): Record<string, any>{
  validateOrderOrListInput(order)
  const array = Object.entries(order).map(([key, value]) => ({
    key,
    value
  }))
  return array
}

//Function to add key values, receiving an array returning another array.
export function addKeyForMapping(ordersList: order[]){
  validateOrderOrListInput(ordersList)
  const newOrdersList = ordersList.map((order) => ({
    ...order,
    key: order.order_number,
    order_total: `$${order.order_total.toFixed(2)}`,
    products: "+"
  }))
  return newOrdersList
}



/* export function getColumnsLabel(input: order | order[]){
  try {
    validateOrderOrListInput(input)
    if(!Array.isArray(input)){
      const array = Object.keys(input).map((key) => ({
        key: key,
        label: key
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      }))
      return array
    } else{
      const aux = getColumnsLabelArray(input)
      const object = aux.reduce((acc, item) => {
        acc[item.key] = item.label;
        return acc;
      }, {})
      return object
    }
  } catch (error) {
    console.error(error)
  }
} */


