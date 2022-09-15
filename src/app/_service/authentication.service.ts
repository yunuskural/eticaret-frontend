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
  private loginResponse: LoginResponse = new LoginResponse();
  private loggedInUsername: string | null = '';
  private jwtHelper = new JwtHelperService();


  constructor(private http: HttpClient, private router: Router) {
  }

  login(loginRequest: LoginRequest): Observable<HttpResponse<LoginResponse>> {
    return this.http.post<LoginResponse>(`${this.host}/api/auth/authenticate`, loginRequest, {observe: 'response'})
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.host}/api/user/save`, user)
  }

  logOut(): void {
    this.loginResponse.token = '';
    this.loggedInUsername = '';
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
    this.router.navigateByUrl("/login")

  }

  saveToken(token: string): void {
    this.loginResponse.token = token;
    localStorage.setItem('token', token)

  }

  addUserToLocalCache(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserToLocalCache(): User {
    return JSON.parse(JSON.stringify(localStorage.getItem('user')));
  }

  loadToken(): void {
    this.loginResponse.token = localStorage.getItem('token');
  }

  getToken(): string | null {
    return this.loginResponse.token;
  }

  isUserLoggedIn(): boolean {
    if (this.loginResponse.token != null && this.loginResponse.token != '' && !this.jwtHelper.isTokenExpired(this.loginResponse.token)) {
      return true;
    } else {
      this.logOut()
      return false;
    }
  }
}
