import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../../services/Movie.service';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselService } from '../../services/Carousel.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent implements OnInit{
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
  ngOnInit(): void {
    // console.log(this.customOptions)
  }

  

  
}
