import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
searchResultEvent:EventEmitter<any> = new EventEmitter<any>();

emitSearchResult(searchResult:any){
  this.searchResultEvent.emit(searchResult);
}
}
