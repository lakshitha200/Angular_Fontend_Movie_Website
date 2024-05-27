import { Component} from '@angular/core';
import { CarouselService } from '../services/Carousel.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovieApiService } from '../services/MovieAPi.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  constructor(private carouselService:CarouselService,private movieApiService:MovieApiService){}

  MoviesList:any[]=[];
  isLoading = false;   isLoading2 = true;
  Genre:any;

  customOptions:OwlOptions  = this.carouselService.customOptions;


  ngOnInit(): void {
    this.isLoading = true;
    this.movieApiService.fetchMovies().subscribe(data=>{
      this.isLoading2 = false;
      this.isLoading = false;
      for(let i=0;i<data.length;i++){
        // console.log(data[i].results)
      
        for(let j=0;j<=19;j++){
            this.MoviesList.push(data[i].results[j]);
        }
      }
      // console.log(this.MoviesList)
    });

    this.movieApiService.getGenre().subscribe(data=>{
      
      this.Genre = data.genres;
      // console.log(this.Genre)
    })



  }



}
