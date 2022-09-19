import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../_service/authentication.service";
import {User} from "../../_model/User";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(private authenticationService: AuthenticationService, private router: Router, private notification: ToastrService) {

  }

  ngOnInit(): void {
  }

  onRegister() {
    this.authenticationService.register(this.user).subscribe(
      {
        next: (response: User) => {
          this.notification.success("New user successfully created!")
          console.log(response);
          this.router.navigateByUrl('/login');
        },
        error: (httpError: HttpErrorResponse) => {
          this.notification.error("" + httpError.error.message)
          console.log(httpError.error.message);
        }
      })
  }
}
