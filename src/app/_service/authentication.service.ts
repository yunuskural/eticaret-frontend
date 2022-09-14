import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Router} from '@angular/router';
import {Observable} from "rxjs";
import {LoginRequest} from "../_model/LoginRequest";
import {JwtHelperService} from "@auth0/angular-jwt";
import {User} from "../_model/User";
import {LoginResponse} from "../_model/LoginResponse";
import {CustomHttpResponse} from "../_model/CustomHttpResponse";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  host = environment.apiUrl;
  private token: string | null = '';
  private loggedInUsername: string | undefined = '';
  private jwtHelper = new JwtHelperService();


  constructor(private http: HttpClient, private router: Router) {
  }

  login(loginRequest: LoginRequest): Observable<HttpResponse<LoginResponse>> {
    return this.http.post<LoginResponse>(`${this.host}/api/auth/authenticate`, loginRequest, {observe: 'response'})
  }

  register(user: User): Observable<CustomHttpResponse | HttpErrorResponse> {
    return this.http.post<CustomHttpResponse | HttpErrorResponse>(`${this.host}/api/user/save`, user)
  }

  logOut(): void {
    this.token = '';
    this.loggedInUsername = '';
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
    this.router.navigateByUrl("/login")

  }

  saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token)

  }

  addUserToLocalCache(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  /*getUserToLocalCache(): User {
    return JSON.parse(localStorage.getItem('user'));
  }*/

  loadToken(): void {
    this.token = localStorage.getItem('token');
  }

  getToken(): string | null {
    return this.token;
  }

  isUserLoggedIn(): boolean {
    if (this.token != null && this.token != '') {
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (!this.jwtHelper.isTokenExpired(this.token)) {
          this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub
          return true;
        }
      }
    } else {
      this.logOut()
      return false;
    }
    return false;
  }

  havingToken(): boolean{
    if(this.isUserLoggedIn()){
      return true;
    }else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
