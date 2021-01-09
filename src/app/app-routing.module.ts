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
    path:'corporates',
    component:HomeComponent,
    canActivate: [AuthGuard],
    loadChildren:()=>import('./corporates/corporates.module').then(m=> m.CorporatesModule)
  },
  {
    path:'school',
    component:HomeComponent,
    canActivate: [AuthGuard],
    loadChildren:()=>import('./school/school.module').then(m=> m.SchoolModule)
  },
  {
    path:'taxi-companies',
    component:HomeComponent,
    canActivate: [AuthGuard],
    loadChildren:()=>import('./taxt-companies/taxt-companies.module').then(m=> m.TaxtCompaniesModule)
  },
  {
    path:'taxi-drivers',
    component:HomeComponent,
    canActivate: [AuthGuard],
    loadChildren:()=>import('./taxt-drivers/taxt-drivers.module').then(m=> m.TaxtDriversModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
