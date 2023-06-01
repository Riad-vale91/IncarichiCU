import { Component, OnInit, ViewChild } from '@angular/core';
import { IncarichiService } from 'src/app/services/incarichi.service';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription, of } from 'rxjs';
import { startWith, debounceTime, switchMap, map } from 'rxjs/operators';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IIncarichi } from 'src/app/models/IIncarichi';
import { MatTableDataSource } from '@angular/material/table';
import { IAllegatiList } from 'src/app/models/IAllegatiList';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-incarichi-list',
  templateUrl: './incarichi-list.component.html',
  styleUrls: ['./incarichi-list.component.scss'],
  animations: [
    trigger('detailExpand', [
    state('collapsed', style({ height: '0px', minHeight: '0', display: 'none', visibility: 'hidden'})),
        state('expanded', style({ height: '*', visibility: 'visible' })),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]

})
export class IncarichiListComponent implements OnInit {


  displayedColumns: string[] = ['codiceMago', 'ragSociale', 'prov', 'cap', 'comune', 'indirizzo', 'key_ord', 'servizio', 'eseguito',
  'annullato', 'dataFattTecnico', 'haccp'];
  displayedColumnsAllegati: string[] = ['Keyord','contatore','desc','DataAllegato','Data_Rientro','Rientrato']

  public incarichiSubcription?: Subscription;

  public listAllegati:IAllegatiList[] = [];
  public list: IIncarichi[] = [];
  public selectedAllegati: IAllegatiList[] = [];
  public dataSource: MatTableDataSource<IIncarichi> = new MatTableDataSource<IIncarichi>([]);
  public backupSelected?: IIncarichi;
  public expandedElement!: IIncarichi | null;
  isExpansionDetailRow = (index: number, row: any) => row.hasOwnProperty('detailRow');

  public isLoading: Boolean = true;

  @ViewChild(MatSort, {static:true}) sort: any;
  @ViewChild(MatPaginator, {static:true}) paginator: any;

  constructor(private router: Router,
    private incarichiService: IncarichiService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,)
  {  }

  ngOnInit(): void {
    // this.incarichiService.getAllegati("201376070010", 0).subscribe(resp=>{
    //   console.log(resp);
    //   debugger;
    // })
    this.getAllList();
    this.dataSource.filterPredicate = (data: IIncarichi, filter: string) => {
      const dataStr = JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filter) != -1;
    };

    this.incarichiService.getSearchObservable().subscribe(searchText => {
      this.dataSource.filter = searchText.trim().toLowerCase();
    });
  }


  getAllList(){
    this.isLoading = true;
    this.incarichiSubcription = this.incarichiService.getIncarichi()
      .subscribe((resp: IIncarichi[])=>{
        this.list = resp;
        this.dataSource = new MatTableDataSource(this.list);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator?.firstPage();
        this.isLoading = false;
        console.log("incarichi", this.list);
      },
    );
  }
   applyFilter(event: Event){
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }

  onRowClicked(incarichi: IIncarichi) {
  // console.log("Row clicked: ", incarichi);
  // if (this.expandedElement === incarichi) {
  //   this.expandedElement = null; // Se la riga è già espansa, contrai il dettaglio
  // } else {
  //   this.incarichiService.getAllegati(incarichi.key_ord).subscribe((resp: IAllegatiList[]) => {
  //     this.selectedAllegati = resp;
  //     this.expandedElement = incarichi; // Altrimenti, espandi il dettaglio della riga cliccata
  //   });
  console.log("keyord", incarichi.key_ord,"haccp",incarichi.haccp)
  this.incarichiService.getAllegati(incarichi.key_ord,incarichi.haccp).subscribe(resp=>{
    console.log("onRowClicked",resp)
    this.listAllegati = resp;
  })
}
toggleExpandedElement(row: IIncarichi) {
  this.expandedElement = this.expandedElement === row ? null : row;

 }




}
