import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporatesRoutingModule } from './corporates-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CorporatesRoutingModule,
    SharedModuleModule
  ]
})
export class CorporatesModule { }
