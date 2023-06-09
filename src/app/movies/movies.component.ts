import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {  Movie } from '../model/movies.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  filmes: Movie[] = [];
  endereco: string = (`https://image.tmdb.org/t/p/w440_and_h660_face`);

  p: number = 1;
  total: number = 0;
movie: any;
  constructor(private moviesService: MoviesService, private router:Router) { }

  ngOnInit() {
    this.movieGet();
  }

  movieGet(): void {
    this.moviesService.getMovies(this.p).subscribe({
      next: (response) => {
        this.filmes = response.results;
        console.log(this.filmes);
      },
      error: (err) => {
        if(err.status===404){
          this.router.navigate(['/not-found']);
        }
        console.log(err);
      },
      complete: () => {

      }
    });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.movieGet();
  }
  goToDetails(movieId: number) {
    this.router.navigate(['/movies',movieId]);
  }
}
