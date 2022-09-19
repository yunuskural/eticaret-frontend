import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../_model/Product";
import {CustomHttpResponse} from "../_model/CustomHttpResponse";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private host = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  getProducts(): Observable<CustomHttpResponse | HttpErrorResponse> {
    return this.httpClient.get<CustomHttpResponse>(`${this.host}/api/product/products`)
  }

  findAllByProductName(productName: String): Observable<CustomHttpResponse | HttpErrorResponse> {
    return this.httpClient.get<CustomHttpResponse | HttpErrorResponse>(`${this.host}/api/product/products/${productName}`)
  }

}
