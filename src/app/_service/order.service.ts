import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../_model/Order";
import {CustomHttpResponse} from "../_model/CustomHttpResponse";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private host = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.host}/api/order/orders`)
  }

  deleteOrderById(id: number): Observable<CustomHttpResponse | HttpErrorResponse>{
    return this.httpClient.delete<CustomHttpResponse>(`${this.host}/api/order/${id}`)
  }

}
