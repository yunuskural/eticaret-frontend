import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './authentication/login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './authentication/register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserManagementComponent} from './user-management/user-management.component';
import {OrderComponent} from './order/order.component';
import {ProductComponent} from './product/product.component';
import {ToastNoAnimationModule, ToastrModule} from "ngx-toastr";
import {AuthenticationService} from "./_service/authentication.service";
import {UserService} from "./_service/user.service";
import {OrderService} from "./_service/order.service";
import {ProductService} from "./_service/product.service";
import {AuthInterceptor} from "./interceptor/auth.interceptor";
import {AuthenticationGuard} from "./guard/authentication.guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    DashboardComponent,
    UserManagementComponent,
    OrderComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [AuthenticationGuard, AuthenticationService, UserService, OrderService, ProductService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
