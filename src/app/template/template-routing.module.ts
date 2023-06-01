import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template.component';

const routes: Routes = [
{ 
    path: "", component: TemplateComponent,
  children: 
  [
    {
      path: "incarichi",
      loadChildren: () => import("./../pages/incarichi/incarichi-view/incarichi-view.module").then(m => m.IncarichiViewModule)
    },
    {
      path: "allegati",
      loadChildren: () => import("./../pages/allegati/allegati-view/allegati-view.module").then(m => m.AllegatiViewModule)
    },
    {
      path: "dati",
      loadChildren: () => import("./../pages/dati/dati-view/dati-view.module").then(m => m.DatiViewModule)
    },

  ]


}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
