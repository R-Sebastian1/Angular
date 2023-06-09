import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { APIResposta } from '../model/movies.model';
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url='https://api.themoviedb.org/3/movie/popular?';
  private key='api_key=02dd4e4bf4792803c07f78fb41cab31b';
  private language='&language=en-US';

  constructor(private http: HttpClient) { }

  public getMovies(page:number): Observable<APIResposta> {
    return this.http.get(this.url + this.key + this.language + '&page=' + page).pipe<APIResposta>(
      map((response: any) => {
        return new APIResposta((response as APIResposta).page,(response as APIResposta).results,(response as APIResposta).total_pages,(response as APIResposta).total_results);
      })
    )
  }
}