import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../services/MovieAPi.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselService } from '../../services/Carousel.service';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrl: './upcomming.component.css'
})
export class UpcommingComponent implements OnInit{

  constructor(private moviesApiService:MovieApiService,private carouselService:CarouselService){}

  customOptions:OwlOptions  = this.carouselService.customOptions2;

  dates:any;
  MovieList:any[]=[];

  ngOnInit(): void {
    this.moviesApiService.upcommingMovies().subscribe(data=>{
      this.MovieList = data.results;
      this.dates = data.dates;
      // console.log(this.MovieList)
    })
  }

}
