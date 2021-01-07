import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { 
  DashboardComponent, 
  AssignOrderComponent,
  OrderStatusComponent,
  UserListComponent,
  RoutePlannerComponent,
  CreateRoasterComponent,
  EmployeeRoasterComponent,
  MyAccountComponent 
} from './index';

@NgModule({
  declarations: [
    DashboardComponent, 
    AssignOrderComponent,
    OrderStatusComponent,
    UserListComponent,
    RoutePlannerComponent,
    CreateRoasterComponent,
    EmployeeRoasterComponent,
    MyAccountComponent 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
