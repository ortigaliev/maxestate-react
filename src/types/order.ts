import { Estate } from "./estate";

export interface OrderItem {
  _id: string;
  item_quantity: number;
  item_price: number;
  order_id: string;
  estate_id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  _id: string;
  order_total_amount: number;
  order_insurance_cost: number;
  order_status: string;
  mb_id: string;
  createdAt: Date;
  updatedAt: Date;
  /**from aggregation */
  order_items: OrderItem[];
  estate_data: Estate[];
}
