import { Component, OnInit } from '@angular/core';
import {UserService} from "../_service/user.service";
import {AuthenticationService} from "../_service/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private authenticationService: AuthenticationService ) { }

  logOut(): void {
    this.authenticationService.logOut();
  }

  ngOnInit(): void {
    this.authenticationService.isUserLoggedIn();
  }

}
