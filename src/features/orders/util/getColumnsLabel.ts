import type { order } from '../types'

export function getColumnsLabelArray(ordersList: order[]){
  return (Object.keys(ordersList[0]).map((key) => ({
    key: key,
    label: key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
  })))
}

export function getColumnsLabelObject(ordersList: order[]): order{
  const aux = Object.keys(ordersList[0]).map((key) => ({
    key: key,
    label: key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
  }))
  return (aux.reduce((acc, item) => {
    acc[item.key] = item.label;
    return acc;
  }, {})
  )
}

