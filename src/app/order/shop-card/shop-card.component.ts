import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../_service/authentication.service";

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css']
})
export class ShopCardComponent implements OnInit {


  constructor(private authenticationService: AuthenticationService ) { }

  logOut(): void {
    this.authenticationService.logOut();
  }

  ngOnInit(): void {
  }

}
