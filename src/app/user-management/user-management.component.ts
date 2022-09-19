import {Component, OnInit} from '@angular/core';
import {User} from "../_model/User";
import {UserService} from "../_service/user.service";
import {AuthenticationService} from "../_service/authentication.service";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";
import {Role} from "../_model/Role";
import {CustomHttpResponse} from "../_model/CustomHttpResponse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users: User[] = [];
  roles: Role[] = [];

  constructor(private userService: UserService, private router: Router, private authenticationService: AuthenticationService, private toastService: ToastrService) {
  }

  logOut(): void {
    this.authenticationService.logOut();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      {
        next: (response) => {
          console.log(response);
          this.users = response;
          if (this.users != null) {
            this.toastService.success("user(s) have been successfully loaded");
          }
        },
        error: (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse.error.message);
          this.toastService.error(errorResponse.error.message)
        }
      })
  }

  deleteUserById(id: number) {
    this.userService.deleteUserById(id).subscribe(
      {
        next: (response) => {
          this.toastService.success(response.message)
        },
        error: (errorResponse: HttpErrorResponse) => {
          this.toastService.error(errorResponse.error.message)
        }
      }
    )
  }

  getUserByUsername(username: string) {
    this.userService.getUserByUsername(username).subscribe(
      {
        next: (response: CustomHttpResponse | HttpErrorResponse) => {
          this.toastService.success(response.message);
          this.router.navigateByUrl('/user-profile')
        },
        error: (errorResponse: HttpErrorResponse) => {
          this.toastService.error(errorResponse.error.message)
        }
      }
    )
  }

  ngOnInit(): void {
    this.getUsers()
  }

}
