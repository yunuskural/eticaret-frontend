import {Component, OnInit} from '@angular/core';
import {UserService} from "../_service/user.service";
import {User} from "../_model/User";
import {AuthenticationService} from "../_service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User = new User();

  constructor(private userService: UserService, private authenticationService: AuthenticationService, private router: Router) {
  }

  logOut(): void {
    this.authenticationService.logOut();
  }

  ngOnInit(): void {
    this.authenticationService.isUserLoggedIn();
  }

}
