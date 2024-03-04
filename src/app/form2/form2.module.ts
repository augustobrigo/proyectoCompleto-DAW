import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form2RoutingModule } from './form2-routing.module';
import { Form2Component } from './form2/form2.component';


@NgModule({
  declarations: [
    Form2Component
  ],
  imports: [
    CommonModule,
    Form2RoutingModule
  ]
})
export class Form2Module { }
