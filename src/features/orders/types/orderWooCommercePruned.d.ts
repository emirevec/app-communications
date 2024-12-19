interface BillingDetails {
  first_name: string;
  last_name: string;
}

interface LineItem {
  id: number;
  name: string;
  quantity: number;
  total: string;
  price: number;
}

interface Store {
  id: number;
  shop_name: string;
}

export interface OrderWooCommercePruned {
  id: number;
  date_created: string;
  customer_id: number;
  billing: BillingDetails;
  line_items: LineItem[];
  store: Store;
}
