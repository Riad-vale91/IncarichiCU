import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncarichiListRoutingModule } from './incarichi-list-routing.module';
import { IncarichiListComponent } from './incarichi-list.component';


@NgModule({
  declarations: [
    IncarichiListComponent
  ],
  imports: [
    CommonModule,
    IncarichiListRoutingModule
  ]
})
export class IncarichiListModule { }
