import {Component, OnInit} from '@angular/core';
import {UserService} from "../_service/user.service";
import {AuthenticationService} from "../_service/authentication.service";
import {ProductService} from "../_service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private userService: UserService,private productService: ProductService, private authenticationService: AuthenticationService ) { }

  logOut(): void {
    this.authenticationService.logOut();
  }

  getProducts(){
    this.productService.getProducts();
  }

  ngOnInit(): void {
    this.authenticationService.havingToken();
    this.getProducts();
  }

}
