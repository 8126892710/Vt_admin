import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxtCompaniesRoutingModule } from './taxt-companies-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaxtCompaniesRoutingModule,
    SharedModuleModule
  ]
})
export class TaxtCompaniesModule { }
