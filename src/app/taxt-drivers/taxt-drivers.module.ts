import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxtDriversRoutingModule } from './taxt-drivers-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaxtDriversRoutingModule,
    SharedModuleModule
  ]
})
export class TaxtDriversModule { }
