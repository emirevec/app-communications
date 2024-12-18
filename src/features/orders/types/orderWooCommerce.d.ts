export interface OrderWooCommerce {
  id: number;
  parent_id: number;
  status: string;
  currency: string;
  version: string;
  prices_include_tax: boolean;
  date_created: string;
  date_modified: string;
  discount_total: string;
  discount_tax: string;
  shipping_total: string;
  shipping_tax: string;
  cart_tax: string;
  total: string;
  total_tax: string;
  customer_id: number;
  order_key: string;
  billing: BillingDetails;
  shipping: ShippingDetails;
  payment_method: string;
  payment_method_title: string;
  transaction_id: string;
  customer_ip_address: string;
  customer_user_agent: string;
  created_via: string;
  customer_note: string;
  date_completed: string | null;
  date_paid: string | null;
  cart_hash: string;
  number: string;
  meta_data: MetaData[];
  line_items: LineItem[];
  tax_lines: TaxLine[];
  shipping_lines: ShippingLine[];
  fee_lines: FeeLine[];
  coupon_lines: CouponLine[];
  refunds: Refund[];
  payment_url: string;
  is_editable: boolean;
  needs_payment: boolean;
  needs_processing: boolean;
  date_created_gmt: string;
  date_modified_gmt: string;
  date_completed_gmt: string | null;
  date_paid_gmt: string | null;
  currency_symbol: string;
  stores: Store[];
  store: Store;
  _links: Links;
}

interface BillingDetails {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
}

interface ShippingDetails {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  phone: string;
}

interface MetaData {
  id: number;
  key: string;
  value: string;
  display_key?: string;
  display_value?: string;
}

interface LineItem {
  id: number;
  name: string;
  product_id: number;
  variation_id: number;
  quantity: number;
  tax_class: string;
  subtotal: string;
  subtotal_tax: string;
  total: string;
  total_tax: string;
  taxes: Tax[];
  meta_data: MetaData[];
  sku: string;
  price: number;
  image?: Image;
  parent_name: string | null;
}

interface Tax {
  id: number;
  total: string;
  subtotal: string;
}

interface Image {
  id: string;
  src: string;
}

interface TaxLine {
  id?: number;
  rate_id?: number;
  code?: string;
  title?: string;
  total?: string;
  total_tax?: string;
  taxes?: Tax[];
  meta_data?: MetaData[];
}

interface ShippingLine {
  id?: number;
  method_title?: string;
  method_id?: string;
  total?: string;
  total_tax?: string;
  taxes?: Tax[];
  meta_data?: MetaData[];
}

interface FeeLine {
  id?: number;
  name?: string;
  tax_class?: string;
  tax_status?: string;
  total?: string;
  total_tax?: string;
  taxes?: Tax[];
  meta_data?: MetaData[];
}

interface CouponLine {
  id?: number;
  code?: string;
  discount?: string;
  discount_tax?: string;
  meta_data?: MetaData[];
}

interface Refund {
  id?: number;
  reason?: string;
  total?: string;
}

interface Store {
  id: number;
  name: string;
  shop_name: string;
  url: string;
  address: Address;
}

interface Address {
  street_1: string;
  street_2: string;
  city: string;
  zip: string;
  country: string;
  state: string;
}

interface Links {
  self: Link[];
  collection: Link[];
  customer: Link[];
  up?: Link[];
}

interface Link {
  href: string;
  targetHints?: {
    allow: string[];
  };
}
