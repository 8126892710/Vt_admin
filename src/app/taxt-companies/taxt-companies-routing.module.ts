import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
} from '../shared-module/index';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'my-account',
    component: MyAccountComponent
  },
  {
    path: 'add-order',
    component: AddOrderComponent
  },
  {
    path: 'assign-order',
    component: AssignOrderComponent
  },
  {
    path: 'order-status',
    component: OrderStatusComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'route-planner',
    component: RoutePlannerComponent
  },
  {
    path: 'create-roaster',
    component: CreateRoasterComponent
  },
  {
    path: 'employee-roaster',
    component: EmployeeRoasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxtCompaniesRoutingModule { }
