import {User} from "./User";
import {Product} from "./Product";

export interface Order{
  id: number;
  orderNumber: number;
  cargoPrice: number;
  totalDiscount: number;
  totalPrice: number;
  taxNumber: number;
  price: number;
  user: User;
  currencyCode: String;
  invoiceFullAddress: String;
  orderDate: Date;
  products: Product[];
}
