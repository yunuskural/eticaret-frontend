import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../_model/Order";
import {CustomHttpResponse} from "../_model/CustomHttpResponse";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private host = environment.apiUrl + '/api/order';

  constructor(private http: HttpClient) {
  }

  saveOrder(order: Order, id: number): Observable<CustomHttpResponse | HttpErrorResponse> {
    return this.http.post<CustomHttpResponse | HttpErrorResponse>(`${this.host}/save/${id}`,order)
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.host}/orders`)
  }

  deleteOrderById(id: number): Observable<CustomHttpResponse | HttpErrorResponse> {
    return this.http.delete<CustomHttpResponse>(`${this.host}/${id}`)
  }

}
