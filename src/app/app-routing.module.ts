import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./profile/profile.component";
import {UserManagementComponent} from "./user-management/user-management.component";
import {ProductComponent} from "./product/product.component";
import {OrderComponent} from "./order/order.component";
import {ShopCardComponent} from "./order/shop-card/shop-card.component";
import {AuthenticationGuard} from "./guard/authentication.guard";
import {LaptopTabletComponent} from "./category/tecnology/laptop-tablet/laptop-tablet.component";
import {UserProfileComponent} from "./profile/user-profile/user-profile.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthenticationGuard]},
  {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthenticationGuard]},
  {path: 'product', component: ProductComponent, canActivate: [AuthenticationGuard]},
  {path: 'order', component: OrderComponent, canActivate: [AuthenticationGuard]},
  {path: 'user-management', component: UserManagementComponent, canActivate: [AuthenticationGuard]},
  {path: 'shop-card', component: ShopCardComponent, canActivate: [AuthenticationGuard]},
  {path: 'category/tecnology/laptop-tablet', component: LaptopTabletComponent, canActivate: [AuthenticationGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
