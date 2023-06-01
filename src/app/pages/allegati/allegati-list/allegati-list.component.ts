import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IAllegatiList } from 'src/app/models/IAllegatiList';
import { IncarichiService } from 'src/app/services/incarichi.service';

@Component({
  selector: 'app-allegati-list',
  templateUrl: './allegati-list.component.html',
  styleUrls: ['./allegati-list.component.scss']
})
export class AllegatiListComponent {

  displayedColumns: string[] = ['Keyord', 'contatore', 'desc', 'dataAllegato', 'data_Rientro', 'rientrato'];

  public incarichiSubcription?: Subscription;

  public list: IAllegatiList[] = [];
  public dataSource: MatTableDataSource<IAllegatiList> = new MatTableDataSource<IAllegatiList>([]);
  public backupSelected?: IAllegatiList;

  public isLoading: Boolean = true;

  @ViewChild(MatSort, {static:true}) sort: any;
  @ViewChild(MatPaginator, {static:true}) paginator: any;

  constructor(private router: Router,
    private incarichiService: IncarichiService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,)
  {  }

  ngOnInit(): void {
    this.getAllList();
    this.dataSource.filterPredicate = (data: IAllegatiList, filter: string) => {
      const dataStr = JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filter) != -1;
    };
    
    this.incarichiService.getSearchObservable().subscribe(searchText => {
      this.dataSource.filter = searchText.trim().toLowerCase();
    });
  }
  

  getAllList(){
    this.isLoading = true;
    this.incarichiSubcription = this.incarichiService.getAllegatiList()
      .subscribe((resp: IAllegatiList[])=>{
        this.list = resp;
        this.dataSource = new MatTableDataSource(this.list);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator?.firstPage();
        this.isLoading = false;
        console.log("Allegati-list", this.list);
      },
    );
  }
   applyFilter(event: Event){
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }

}
