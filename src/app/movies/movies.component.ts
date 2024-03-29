import { Component, ViewChild } from '@angular/core';
import { MovieService } from '../services/Movie.service';
import { CarouselService } from '../services/Carousel.service';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  constructor(private movieService:MovieService,private carouselService:CarouselService){}

  @ViewChild('caro1') caro1:CarouselComponent;
  @ViewChild('caro2') caro2:CarouselComponent;
  @ViewChild('caro3') caro3:CarouselComponent;
  @ViewChild('caro4') caro4:CarouselComponent;
  @ViewChild('caro5') caro5:CarouselComponent;
  @ViewChild('caro6') caro6:CarouselComponent;
  @ViewChild('caro7') caro7:CarouselComponent;


  MoviesList = this.movieService.getMovies();
  
  customOptions:OwlOptions  = this.carouselService.customOptions;
  
  nextSlide(cIndex:number){
    if(cIndex==1){
      this.caro1.next();
    }
    if(cIndex==2){
      this.caro2.next();
    }
    if(cIndex==3){
      this.caro3.next();
    }
    if(cIndex==4){
      this.caro4.next();
    }
    if(cIndex==5){
      this.caro5.next();
    }
    if(cIndex==6){
      this.caro6.next();
    }
    if(cIndex==7){
      this.caro7.next();
    }
    
  }
  prevSlide(cIndex:number){
    if(cIndex==1){
      this.caro1.prev();
    }
    if(cIndex==2){
      this.caro2.prev();
    }
    if(cIndex==3){
      this.caro3.prev();
    }
    if(cIndex==4){
      this.caro4.prev();
    }
    if(cIndex==5){
      this.caro5.prev();
    }
    if(cIndex==6){
      this.caro6.prev();
    }
    if(cIndex==7){
      this.caro7.prev();
    }
  }

  ngOnInit(): void {

  }

}
