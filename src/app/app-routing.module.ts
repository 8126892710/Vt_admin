import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'', redirectTo:'auth/login', pathMatch:'full'
  },
  {
    path:'auth/login',
    component:LoginComponent
  },
  {
    path:'admin',
    component:HomeComponent,
    loadChildren:()=>import('./admin/admin.module').then(m=> m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
