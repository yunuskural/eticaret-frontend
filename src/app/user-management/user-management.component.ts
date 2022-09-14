import {Component, OnInit} from '@angular/core';
import {User} from "../_model/User";
import {UserService} from "../_service/user.service";
import {AuthenticationService} from "../_service/authentication.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users: User | undefined;

  constructor(private userService: UserService, private authenticationService: AuthenticationService,private toastService: ToastrService ) { }

  logOut(): void {
    this.authenticationService.logOut();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      {
        next: (response) => {
          console.log(response);
          this.users = response;
          console.log('user',this.users);
          this.toastService.success("user(s) have been successfully loaded" );
        },
        error: (error) => {
          console.log(error.message);
          this.toastService.error(error.message)
        }
      })
  }

  ngOnInit(): void {
    this.authenticationService.havingToken();
    this.getUsers()
  }

}
