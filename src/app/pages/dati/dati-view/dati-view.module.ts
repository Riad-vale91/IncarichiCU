import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatiViewRoutingModule } from './dati-view-routing.module';
import { DatiViewComponent } from './dati-view.component';
import { DatiListModule } from '../dati-list/dati-list.module';


@NgModule({
  declarations: [
    DatiViewComponent
  ],
  imports: [
    CommonModule,
    DatiViewRoutingModule,
    DatiListModule
  ],
})
export class DatiViewModule { }
