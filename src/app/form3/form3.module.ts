import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form3RoutingModule } from './form3-routing.module';
import { Form3Component } from './form3/form3.component';


@NgModule({
  declarations: [
    Form3Component
  ],
  imports: [
    CommonModule,
    Form3RoutingModule
  ]
})
export class Form3Module { }
