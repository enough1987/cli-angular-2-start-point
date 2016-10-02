import { Component } from '@angular/core';


import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    SearchService
  ]
})
export class SearchComponent {

  constructor( private searchService: SearchService ){}

  send_search (search){
       this.searchService.send(search);
  };

}
