import { Component} from '@angular/core';
import { SearchService } from '../services/search.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

constructor(private searchService: SearchService, private http:HttpClient){}

search:string='';

fazerSearch(){
      this.http.get('http://api.themoviedb.org/3/search/movie?api_key=02dd4e4bf4792803c07f78fb41cab31b&query='+this.search).subscribe((data:any)=>{
      this.searchService.emitSearchResult(data);
      console.log(this.search);
    });
}
myFunction(){
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
}
