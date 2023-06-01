import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncarichiViewRoutingModule } from './incarichi-view-routing.module';
import { IncarichiViewComponent } from './incarichi-view.component';
import { IncarichiListModule } from '../incarichi-list/incarichi-list.module';
import { IncarichiFilterModule } from '../incarichi-filter/incarichi-filter.module';


@NgModule({
  declarations: [
    IncarichiViewComponent
  ],
  imports: [
    CommonModule,
    IncarichiViewRoutingModule,
    IncarichiListModule,
    IncarichiFilterModule
  ]
})
export class IncarichiViewModule { }
