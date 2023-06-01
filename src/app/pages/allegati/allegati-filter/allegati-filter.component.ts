import { Component } from '@angular/core';
import { IAllegatiList } from 'src/app/models/IAllegatiList';
import { IncarichiService } from 'src/app/services/incarichi.service';

@Component({
  selector: 'app-allegati-filter',
  templateUrl: './allegati-filter.component.html',
  styleUrls: ['./allegati-filter.component.scss']
})
export class AllegatiFilterComponent {
  searchText = '';
  incarichi: string = "";
  filteredItems: IAllegatiList[] = [];

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
