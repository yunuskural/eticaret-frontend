import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";
import {Order} from "../_model/Order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private host = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  getOrders(): Observable<Order> {
    return this.httpClient.get<Order>(`${this.host}/api/order/orders`)
  }

}
