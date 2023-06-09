import { Component } from '@angular/core';
import { WatchlistService } from '../services/watchlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {

  watchlist:any[]=[];

  endereco: string = (`https://image.tmdb.org/t/p/w440_and_h660_face`);

  p: number = 1;
  total: number = 0;

constructor(private watchlistService: WatchlistService, private router:Router){}

ngOnInit(){
  this.watchlist = this.watchlistService.getWatchlist();
}
 goToDetails(movieId: number) {
    this.router.navigate(['/movies',movieId]);
  }
  pageChangeEvent(event: number) {
    this.p = event;
  }
}
