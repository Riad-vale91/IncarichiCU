import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncarichiAllegatiRoutingModule } from './incarichi-allegati-routing.module';
import { IncarichiAllegatiComponent } from './incarichi-allegati.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    IncarichiAllegatiComponent
  ],
  imports: [
    CommonModule,
    IncarichiAllegatiRoutingModule,
    MatTableModule
  ],
  exports:
  [
    IncarichiAllegatiComponent,
    
  ]
})
export class IncarichiAllegatiModule { }
