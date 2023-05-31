import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncarichiViewRoutingModule } from './incarichi-view-routing.module';
import { IncarichiViewComponent } from './incarichi-view.component';


@NgModule({
  declarations: [
    IncarichiViewComponent
  ],
  imports: [
    CommonModule,
    IncarichiViewRoutingModule
  ]
})
export class IncarichiViewModule { }
