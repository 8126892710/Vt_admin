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
import { AddOrderComponent } from './add-order/add-order.component';

@NgModule({
  declarations: [
    DashboardComponent, 
    AssignOrderComponent,
    OrderStatusComponent,
    UserListComponent,
    RoutePlannerComponent,
    CreateRoasterComponent,
    EmployeeRoasterComponent,
    MyAccountComponent,
    AddOrderComponent 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
