import {Authority} from "./Authority";

export interface Role {

  id: number;
  roleName: string;
  authorities: Authority;

}
