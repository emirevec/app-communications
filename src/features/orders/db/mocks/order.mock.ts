import type { order } from '@/features/orders/types/orderJson'

export const orderMock: order = {
  order_number: 10921,
  products: [
    {
      seller: "Siempreverde",
      qty: 1,
      product_name: "Bolsón 4/5 kg Agroecológico + Bolsón de Pesada 3 kg + Maple de Huevos de gallinas pastoriles",
      price: 21000.00,
      tags: "Agroecológico,PAC"
    }
  ],
  billing_full_name: "Sylvia Lenzner",
  order_total: 21000.00,
  order_date: "2024-10-30 09:56"
}