import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../_model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private host = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  getProducts(): Observable<Product | HttpErrorResponse> {
    return this.httpClient.get<Product>(`${this.host}/api/product/products`)
  }

}
