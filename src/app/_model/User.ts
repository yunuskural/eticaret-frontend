import {Role} from "./Role";
import {Order} from "./Order";

export interface User {

  id : number;
  username : string;
  name : string;
  email : string;
  password : string;
  lastLoginDate : Date;
  joinDate : Date;
  roles : Role[];
  isActive : boolean;
  isNotLocked : boolean;
  address: string;
  orders : Order[];
}
