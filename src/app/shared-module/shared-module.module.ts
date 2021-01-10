import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
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
