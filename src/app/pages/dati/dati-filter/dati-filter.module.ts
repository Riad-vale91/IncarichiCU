import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatiFilterRoutingModule } from './dati-filter-routing.module';
import { DatiFilterComponent } from './dati-filter.component';


@NgModule({
  declarations: [
    DatiFilterComponent
  ],
  imports: [
    CommonModule,
    DatiFilterRoutingModule
  ]
})
export class DatiFilterModule { }
