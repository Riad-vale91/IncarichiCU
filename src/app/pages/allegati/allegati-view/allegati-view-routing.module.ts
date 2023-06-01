import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllegatiViewComponent } from './allegati-view.component';

const routes: Routes = [
  {
    path: "", component: AllegatiViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllegatiViewRoutingModule { }
