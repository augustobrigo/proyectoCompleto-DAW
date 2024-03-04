import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form4RoutingModule } from './form4-routing.module';
import { Form4Component } from './form4/form4.component';


@NgModule({
  declarations: [
    Form4Component
  ],
  imports: [
    CommonModule,
    Form4RoutingModule
  ]
})
export class Form4Module { }
