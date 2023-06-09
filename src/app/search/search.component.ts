import { Component} from '@angular/core';
import { SearchService } from '../services/search.service';
import {ElementRef, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../model/movies.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  p: number = 1;
  total: number = 0;

  endereco: string = ("https://image.tmdb.org/t/p/w440_and_h660_face");
  resposta: any;


  constructor(private searchService: SearchService, private elementRef:ElementRef, private router: Router, private renderer:Renderer2) {}

  ngOnInit() {
      this.searchService.searchResultEvent.subscribe((results: any) => {
        this.resposta = results;
        console.log(this.resposta);
      });
  }

  pageChangeEvent(event: number) {
    this.p = event;
  }

  closeModal():void{
    let modalElement: HTMLElement = this.elementRef.nativeElement.querySelector('.modal');
    let modalBackdropElement: HTMLElement = this.elementRef.nativeElement.querySelector('.modal-backdrop');
    
    this.renderer.removeClass(modalElement, 'show');
    this.renderer.removeAttribute(modalElement, 'aria-modal');
    this.renderer.setStyle(modalElement, 'display', 'none');
    
    if (modalBackdropElement && modalBackdropElement.parentNode) {
      modalBackdropElement.parentNode.removeChild(modalBackdropElement);
    }
  }
  goBack(): void {
    this.router.navigate(['/']);
  }
  
  goToDetails(movieId: number) {
    this.router.navigate(['/movies',movieId]);
  }
}
