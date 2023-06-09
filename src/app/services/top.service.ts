import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { APIResposta } from '../model/movies.model';
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TopService {

  private url='https://api.themoviedb.org/3/movie/top_rated?api_key=02dd4e4bf4792803c07f78fb41cab31b&language=en-US';

  constructor(private http:HttpClient) { }

  public getTopMovie(page:number): Observable<APIResposta>{
    return this.http.get(this.url + '&page=' + page).pipe<APIResposta>(
      map((response :any)=>{
        return new APIResposta((response as APIResposta).page,(response as APIResposta).results,(response as APIResposta).total_pages,(response as APIResposta).total_results);
      })
    )
  }
}
