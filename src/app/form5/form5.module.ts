import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form5RoutingModule } from './form5-routing.module';
import { Form5Component } from './form5/form5.component';


@NgModule({
  declarations: [
    Form5Component
  ],
  imports: [
    CommonModule,
    Form5RoutingModule
  ]
})
export class Form5Module { }
