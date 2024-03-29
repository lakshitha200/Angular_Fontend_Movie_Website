import { Component, ViewChild } from '@angular/core';
import { CarouselService } from '../../services/Carousel.service';
import { MovieService } from '../../services/Movie.service';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-up-comming',
  templateUrl: './up-comming.component.html',
  styleUrl: './up-comming.component.css'
})
export class UpCommingComponent {
  constructor(private movieService:MovieService,private carouselService:CarouselService){}

  @ViewChild('caro1') caro1:CarouselComponent;
  MoviesList = this.movieService.getMovies();
  customOptions:OwlOptions  = this.carouselService.customOptions;

  nextSlide(cIndex:number){
    if(cIndex==1){
      this.caro1.next();
    }
    
  }
  prevSlide(cIndex:number){
    if(cIndex==1){
      this.caro1.prev();
    }
  }
 
}
