import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  DashboardComponent, 
  AssignOrderComponent,
  OrderStatusComponent,
  UserListComponent,
  RoutePlannerComponent,
  CreateRoasterComponent,
  EmployeeRoasterComponent,
  MyAccountComponent, 
  AddOrderComponent 
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
    MyAccountComponent,
    AddOrderComponent 
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardComponent, 
    AssignOrderComponent,
    OrderStatusComponent,
    UserListComponent,
    RoutePlannerComponent,
    CreateRoasterComponent,
    EmployeeRoasterComponent,
    MyAccountComponent,
    AddOrderComponent 
  ]
})
export class SharedModuleModule { }
