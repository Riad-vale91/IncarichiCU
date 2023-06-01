import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllegatiFilterRoutingModule } from './allegati-filter-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AllegatiFilterComponent } from './allegati-filter.component';


@NgModule({
  declarations: [
    AllegatiFilterComponent
  ],
  imports: [
    CommonModule,
    AllegatiFilterRoutingModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    FormsModule
  ],
  exports:
  [
    AllegatiFilterComponent,
  ]
})
export class AllegatiFilterModule { }
