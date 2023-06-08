import {animate,state,style,transition,trigger,} from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as saveAs from 'file-saver';
import { Subscription } from 'rxjs';
import { IAllegatiList } from 'src/app/models/IAllegatiList';
import { IncarichiService } from 'src/app/services/incarichi.service';

@Component({
  selector: 'app-incarichi-allegati',
  templateUrl: './incarichi-allegati.component.html',
  styleUrls: ['./incarichi-allegati.component.scss'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({
          height: '0px',
          minHeight: '0',
          display: 'none',
          visibility: 'hidden',
        })
      ),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class IncarichiAllegatiComponent implements OnInit, OnDestroy {
  @Input() allegati: IAllegatiList[] = [];
  @Input() expandedElement: any;

  public incarichiSub: Subscription = new Subscription(); // Inizializza la Subscription

  constructor(private incarichiService: IncarichiService) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.incarichiSub.unsubscribe();
  }

  eseguiAzione(rientro: number, contatore: number) {
    const { key_ord, haccp } = this.incarichiService.getSelectedIncarichiData();
    console.log(
      `Key_ord: ${key_ord}, Haccp: ${haccp}, Contatore: ${contatore}`
    );
    const sub = this.incarichiService
      .getAllegatiData(rientro, key_ord, haccp, contatore)
      .subscribe(
        (response) => {
          const blob = new Blob([response], {
            type: 'application/x-rar-compressed',
          });
          saveAs(blob, 'FileTest.rar');
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    this.incarichiSub.add(sub); // Aggiungi la nuova sottoscrizione all'elenco delle sottoscrizioni
  }
  logDataRientro(allegato: any) {
    console.log(allegato);
  }
}
