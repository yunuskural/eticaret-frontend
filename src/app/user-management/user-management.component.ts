import {Component, OnInit} from '@angular/core';
import {User} from "../_model/User";
import {UserService} from "../_service/user.service";
import {AuthenticationService} from "../_service/authentication.service";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";
import {Role} from "../_model/Role";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users: User[] = [];
  roles: Role[] = [];

  constructor(private userService: UserService, private authenticationService: AuthenticationService, private toastService: ToastrService) {
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

  ngOnInit(): void {
    this.getUsers()
  }

}
