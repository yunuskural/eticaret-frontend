import {User} from "./User";

export interface Product{
  id: number;
  user: User;
  stockQuantity: number;
  productDescription: String;
  productName: String;
  brand: String;
  price: number;
}
