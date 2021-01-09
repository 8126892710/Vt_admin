import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolRoutingModule } from './school-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    SharedModuleModule
  ]
})
export class SchoolModule { }
