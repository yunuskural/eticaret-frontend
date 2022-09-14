import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "../../_service/authentication.service";
import {Router} from '@angular/router';
import {LoginRequest} from "../../_model/LoginRequest";
import {ToastrService} from "ngx-toastr";
import {HttpResponse} from "@angular/common/http";
import {LoginResponse} from "../../_model/LoginResponse";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginRequest = new LoginRequest();

  constructor(private authenticationService: AuthenticationService, private router: Router, private toastNotification: ToastrService) {
  }

  onLogin(): void {
    console.log(this.loginRequest)
    this.authenticationService.login(this.loginRequest).subscribe(
      {
        next: (response: HttpResponse<LoginResponse>) => {
          console.log(response);
          const token = response.body?.token;
          if (token !== null && token != '' && token != undefined) {
            this.authenticationService.saveToken(token);
            this.router.navigateByUrl('/dashboard');
            this.toastNotification.success("Welcome. " + `${this.loginRequest.username}`);
          }
        },
        error: (error) => {
          this.toastNotification.error(" " + error.message);
          console.log('burda', error.message);
        }
      })
  }

  ngOnInit(): void {

    this.authenticationService.havingToken();
  }

  ngOnDestroy(): void {
  }

}
