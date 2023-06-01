import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatiViewComponent } from './dati-view.component';

const routes: Routes = [
  {
    path: "", component: DatiViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatiViewRoutingModule { }
