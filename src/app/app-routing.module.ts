import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./profile/profile.component";
import {UserManagementComponent} from "./user-management/user-management.component";
import {ProductComponent} from "./product/product.component";
import {OrderComponent} from "./order/order.component";
import {ShopCardComponent} from "./order/shop-card/shop-card.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'product', component: ProductComponent},
  { path: 'order', component: OrderComponent},
  { path: 'user-management', component: UserManagementComponent},
  { path: 'shop-card', component: ShopCardComponent},
  { path: '', redirectTo: '/login' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
