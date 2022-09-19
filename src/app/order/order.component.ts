import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../_service/authentication.service";
import {Order} from "../_model/Order";
import {OrderService} from "../_service/order.service";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService, private authenticationService: AuthenticationService, private toastrService: ToastrService) {
  }

  logOut(): void {
    this.authenticationService.logOut();
  }


  deleteOrderById(id: number) {
    this.orderService.deleteOrderById(id).subscribe(
      {
        next: (response) => {
          this.toastrService.success(response.message)
        },
        error: (httpError: HttpErrorResponse) => {
          console.log(httpError.error.message);
          this.toastrService.error(httpError.error.message)
        }
      })
  }

  getOrders() {
    this.orderService.getOrders().subscribe(
      {
        next: (response) => {
          console.log(response);
          this.orders = response;
          if (this.orders !== null) {
            this.toastrService.success("order(s) successfully loaded");
          }

        },
        error: (errorResponse: HttpErrorResponse) => {
          this.toastrService.error(" " + errorResponse.error.message);
          console.log(errorResponse.error.message);
        }
      })

  }


  ngOnInit(): void {
    this.getOrders()
  }

}
