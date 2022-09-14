import {User} from "./User";

export class Order{
  id!: number;
  orderNumber!: number;
  cargoPrice!: number;
  totalDiscount!: number;
  totalPrice!: number;
  taxNumber!: number;
  price!: number;
  user!: User;
  currencyCode!: String;
  invoiceFullAddress!: String;
  orderDate!: Date;
  product!: [];
}
