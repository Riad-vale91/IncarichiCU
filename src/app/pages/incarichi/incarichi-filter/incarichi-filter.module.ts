import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncarichiFilterRoutingModule } from './incarichi-filter-routing.module';
import { IncarichiFilterComponent } from './incarichi-filter.component';


@NgModule({
  declarations: [
    IncarichiFilterComponent
  ],
  imports: [
    CommonModule,
    IncarichiFilterRoutingModule
  ]
})
export class IncarichiFilterModule { }
