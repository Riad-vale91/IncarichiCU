import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import * as saveAs from 'file-saver';
import { IAllegatiList } from 'src/app/models/IAllegatiList';
import { IncarichiService } from 'src/app/services/incarichi.service';

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

  constructor(private incarichiService: IncarichiService) { }

  ngOnInit(): void {
  }
  eseguiAzione(rientro: number) {
    this.incarichiService.getAllegatiData(rientro).subscribe(
      response => {
        const blob = new Blob([response], { type: 'application/x-rar-compressed' });
        saveAs(blob, 'FileTest.rar');
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
 /* eseguiAzione() {
    this.incarichiService.getAllegatiData().subscribe(
      response => {
        const blob = new Blob([response], { type: 'application/octet-stream' });

        const reader = new FileReader();
        reader.onloadend = () => {
          Per leggere come una stringa
          const dataAsString = reader.result as string;
          console.log(dataAsString);
        };
       reader.readAsText(blob); // o reader.readAsArrayBuffer(blob) per leggere come array di byte

         Genera un nome file senza estensione
      const filename = 'test';

      Scarica il file
      saveAs(blob, filename);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }*/
  logDataRientro(allegato: any) {
    console.log(allegato);
  }


}
