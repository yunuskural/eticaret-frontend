import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../_service/authentication.service";
import {Order} from "../_model/Order";
import {OrderService} from "../_service/order.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order = new Order();

  constructor(private orderService: OrderService, private authenticationService: AuthenticationService, private toastrService: ToastrService) {
  }

  logOut(): void {
    this.authenticationService.logOut();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(
      {
        next: (response) => {
          console.log(response);
          this.orders = response;
          this.toastrService.success("order(s) successfully loaded");
        },
        error: (error) => {
          this.toastrService.error(" " + error.message);
          console.log('burda', error.message);
        }
      })

  }


  ngOnInit(): void {
    this.authenticationService.havingToken();
    this.getOrders()
  }

}
