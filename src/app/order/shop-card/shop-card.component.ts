import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../_service/authentication.service";
import {Order} from "../../_model/Order";
import {OrderService} from "../../_service/order.service";

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {

  order: Order;

  constructor(private authenticationService: AuthenticationService,private orderService: OrderService ) { }

  logOut(): void {
    this.authenticationService.logOut();
  }

  ngOnInit(): void {
  }

  saveOrder() {
    this.orderService.saveOrder(this.order, this.authenticationService.getUserToLocalCache().id)
  }
}
