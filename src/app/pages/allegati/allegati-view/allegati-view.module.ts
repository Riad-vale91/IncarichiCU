import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllegatiViewRoutingModule } from './allegati-view-routing.module';
import { AllegatiViewComponent } from './allegati-view.component';
import { AllegatiListModule } from "../allegati-list/allegati-list.module";
import { AllegatiFilterModule } from '../allegati-filter/allegati-filter.module';


@NgModule({
    declarations: [
        AllegatiViewComponent
    ],
    imports: [
        CommonModule,
        AllegatiViewRoutingModule,
        AllegatiListModule,
        AllegatiFilterModule
    ]
})
export class AllegatiViewModule { }
