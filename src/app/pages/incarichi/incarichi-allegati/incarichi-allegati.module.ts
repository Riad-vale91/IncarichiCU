import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncarichiAllegatiRoutingModule } from './incarichi-allegati-routing.module';
import { IncarichiAllegatiComponent } from './incarichi-allegati.component';


@NgModule({
  declarations: [
    IncarichiAllegatiComponent
  ],
  imports: [
    CommonModule,
    IncarichiAllegatiRoutingModule
  ]
})
export class IncarichiAllegatiModule { }
