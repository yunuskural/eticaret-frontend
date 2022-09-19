import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../_model/User";
import {AuthenticationService} from "./authentication.service";
import {CustomHttpResponse} from "../_model/CustomHttpResponse";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.host}/api/user/users`)
  }


  getUserByUsername(username: string): Observable<CustomHttpResponse | HttpErrorResponse> {
    return this.http.get<CustomHttpResponse>(`${this.host}/api/user/${username}` )
  }


  deleteUserById(id: number): Observable<CustomHttpResponse | HttpErrorResponse> {
    return this.http.delete<CustomHttpResponse>(`${this.host}/api/user?${id}`)
  }


}
