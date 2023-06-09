import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { WatchlistService } from '../services/watchlist.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent {

  movie: any;
  endereco='https://www.themoviedb.org/t/p/w440_and_h660_face';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private location:Location, private watchlistService:WatchlistService) { }

  ngOnInit() {
    let movieId = this.route.snapshot.params['id'];
    this.getMovieDetails(movieId);
  }

  getMovieDetails(movieId: number) {
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=02dd4e4bf4792803c07f78fb41cab31b&language=en-US`;
    this.http.get(url).subscribe((response: any) => {
      this.movie = response;
    });
  }
  paginaInicial(){
    this.location.back();
  }

  paginaWatchlist(){
    this.router.navigate(['/watchlist']);;
  }

  toggleWatchlist(movie: any) {
    if (this.estaFilmeWatchlist(movie)) {
      this.watchlistService.removerWatchlist(movie);
    } else {
      this.watchlistService.adicionarWatchlist(movie);
    }
  }

  estaFilmeWatchlist(movie: any): boolean {
    const watchlist = this.watchlistService.getWatchlist();
    return watchlist.some((item) => item.id === movie.id);
  }
}
