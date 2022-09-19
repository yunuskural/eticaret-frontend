import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../_service/authentication.service";
import {ProductService} from "../../../_service/product.service";
import {Product} from "../../../_model/Product";
import {CustomHttpResponse} from "../../../_model/CustomHttpResponse";
import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-laptop-tablet',
  templateUrl: './laptop-tablet.component.html',
  styleUrls: ['./laptop-tablet.component.css']
})
export class LaptopTabletComponent implements OnInit {

  products: Product[];

  constructor(private authenticationService: AuthenticationService, private productService: ProductService, private notification:ToastrService) {
  }

  logOut(): void {
    this.authenticationService.logOut();
  }

  findAllByProductName() {
    this.productService.findAllByProductName("Laptop").subscribe(
      {
        next: (response: CustomHttpResponse | HttpErrorResponse) => {
          if (!(response instanceof HttpErrorResponse)) {
            this.products = response.data;
            console.log('productss',this.products)
            this.notification.success(response.message)
          }
        },
        error: (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse.error.message);
        }
      });
  }

  ngOnInit(): void {
    this.findAllByProductName();
  }

}
