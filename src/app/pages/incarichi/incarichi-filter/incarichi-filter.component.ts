import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IIncarichi } from 'src/app/models/IIncarichi';
import { IncarichiService } from 'src/app/services/incarichi.service';

@Component({
  selector: 'app-incarichi-filter',
  templateUrl: './incarichi-filter.component.html',
  styleUrls: ['./incarichi-filter.component.scss']
})
export class IncarichiFilterComponent implements OnInit{
  searchText = '';
  incarichi: string = "";
  filteredItems: IIncarichi[] = [];

  constructor(private incarichiService: IncarichiService){}

  ngOnInit() {
    // this.incarichiService.UpdateIncarichiCombo().subscribe(resp => {
    //   this.filteredItems = resp;
    //   this.incarichi = this.filteredItems;
    // });
  }
  onSearchTextChanged(searchText: string) {
    this.incarichiService.updateSearch(searchText);
  }

}
