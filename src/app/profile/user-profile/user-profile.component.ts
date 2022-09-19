import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../_service/authentication.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }

  logOut(): void {
    this.authenticationService.logOut();
  }

  ngOnInit(): void {
  }

}
