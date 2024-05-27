import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselService } from '../../services/Carousel.service';
import { MovieApiService } from '../../services/MovieAPi.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent implements OnInit{
  constructor(private movieApiService:MovieApiService,private carouselService:CarouselService){}

  MoviesList:any[]=[];
  Genre:any;
  customOptions:OwlOptions  = this.carouselService.customOptions;
  isLoading = false;


  ngOnInit(): void {
    this.isLoading = true;


    this.movieApiService.fetchMovies().subscribe(data=>{
        this.isLoading = false;
        for(let i=0;i<data.length;i++){
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
