import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "../../_service/authentication.service";
import {Router} from '@angular/router';
import {LoginRequest} from "../../_model/LoginRequest";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {LoginResponse} from "../../_model/LoginResponse";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginRequest = new LoginRequest();
  loginResponse: LoginResponse | null = new LoginResponse();

  constructor(private authenticationService: AuthenticationService, private router: Router, private toastNotification: ToastrService) {
  }

  onLogin(): void {
    console.log(this.loginRequest)
    this.authenticationService.login(this.loginRequest).subscribe(
      {
        next: (response: HttpResponse<LoginResponse>) => {
          console.log(response);
          this.loginResponse = response.body;
          console.log('loginresponse:', this.loginResponse)
          if (this.loginResponse !== null && this.loginResponse.token != null && this.loginResponse.token != '') {
            this.authenticationService.saveToken(this.loginResponse.token);
            this.router.navigateByUrl('/dashboard');
            this.toastNotification.success("Welcome. " + `${this.loginRequest.username}`);
          }
        },
        error: (errorResponse: HttpErrorResponse) => {
          this.toastNotification.error(" " + errorResponse.error.message);
        }
      })
  }

  ngOnInit(): void {
    this.authenticationService.isUserLoggedIn();
  }

  ngOnDestroy(): void {
  }

}
