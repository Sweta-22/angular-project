import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MymoduleRoutingModule } from './mymodule-routing.module';
import { Mycom4Component } from './mycom4/mycom4.component';


@NgModule({
  declarations: [
    Mycom4Component
  ],
  imports: [
    CommonModule,
    MymoduleRoutingModule
  ]
})
export class MymoduleModule { }
