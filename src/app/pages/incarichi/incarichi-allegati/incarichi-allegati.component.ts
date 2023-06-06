import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IAllegatiList } from 'src/app/models/IAllegatiList';

@Component({
  selector: 'app-incarichi-allegati',
  templateUrl: './incarichi-allegati.component.html',
  styleUrls: ['./incarichi-allegati.component.scss'],
  animations: [
             trigger('detailExpand', [
             state('collapsed', style({ height: '0px', minHeight: '0', display: 'none', visibility: 'hidden'})),
             state('expanded', style({ height: '*', visibility: 'visible' })),
             transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                                      ])
              ]
          })
export class IncarichiAllegatiComponent implements OnInit {
  @Input() allegati: IAllegatiList[] = [];
  @Input() expandedElement: any;

  constructor() { }

  ngOnInit(): void {
  }
  eseguiAzione() {
    console.log("test");
  }

  logDataRientro(allegato: any) {
    console.log(allegato);
  }


}
