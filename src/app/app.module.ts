import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TopComponent } from './top/top.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


const rotas : Routes = [
  {path: '', component: MoviesComponent},
  {path: 'movies/:id', component: MoviedetailsComponent },
  {path: 'top', component: TopComponent},
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TopComponent,
    WatchlistComponent,
    NotFoundComponent,
    NavbarComponent,
    SearchComponent,
    MoviedetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rotas),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    NgxPaginationModule,
    MatTooltipModule,
    MatTabsModule,
    MatProgressBarModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
