import { Component, OnInit } from '@angular/core';
import { TopService } from '../services/top.service';
import { Movie } from '../model/movies.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  filmes: Movie[] = [];
  endereco: string = (`https://image.tmdb.org/t/p/w440_and_h660_face`);

  p: number = 1;
  total: number = 0;
  constructor(private topService: TopService, private router:Router) { }

  ngOnInit() {
    this.topGet();
  }

  topGet(): void {
    this.topService.getTopMovie(this.p).subscribe({
      next: (response) => {
        this.filmes = response.results;
        console.log(this.filmes);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {

      }
    });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.topGet();
  }
  goToDetails(movieId: number) {
    this.router.navigate(['/movies',movieId]);
  }
}
