import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NoAuthGuard, AuthGuard } from './_helper';


const routes: Routes = [
  {
    path:'', redirectTo:'auth/login', pathMatch:'full'
  },
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'auth/login',
        component:LoginComponent,
        canActivate: [NoAuthGuard]
      },
      {
        path:'admin',
        component:HomeComponent,
        canActivate: [AuthGuard],
        loadChildren:()=>import('./admin/admin.module').then(m=> m.AdminModule)
      },
      {
        path:'corporate',
        component:HomeComponent,
        canActivate: [AuthGuard],
        loadChildren:()=>import('./corporate/corporate.module').then(m=> m.CorporateModule)
      },
      {
        path:'school',
        component:HomeComponent,
        canActivate: [AuthGuard],
        loadChildren:()=>import('./school/school.module').then(m=> m.SchoolModule)
      },
      {
        path:'company',
        component:HomeComponent,
        canActivate: [AuthGuard],
        loadChildren:()=>import('./company/company.module').then(m=> m.CompanyModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
