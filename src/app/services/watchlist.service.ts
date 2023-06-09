import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  
  private armazem='watchlist'
  private watchlist:any[]=[];

  constructor(){

    let watchListArmazenada=localStorage.getItem(this.armazem);
    if(watchListArmazenada){
      this.watchlist=JSON.parse(watchListArmazenada);
    }  
  }

  private armazenarLocal(){
    localStorage.setItem(this.armazem, JSON.stringify(this.watchlist));
  }

  adicionarWatchlist(movie:any){
    this.watchlist.push(movie);
    this.armazenarLocal();
  }

  getWatchlist(){
    return this.watchlist;
  }

  removerWatchlist(movie:any){
    let WatchlistAtualizada = this.watchlist.filter((item) => item.id !== movie.id);
    this.watchlist = WatchlistAtualizada;
    this.armazenarLocal();
  }
  estaFilmeWatchlist(movie:any){
    let index =this.watchlist.findIndex((item)=>item.id===movie.id);
    return index!==-1;
  }
}
