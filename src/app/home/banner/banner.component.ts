import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../../services/Movie.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit{
  constructor(private movieService:MovieService){}
 
  @ViewChild('forActive')BannerComponent:ElementRef;
  MoviesList = this.movieService.getMovies();

  

  ngOnInit(): void {

  }

  

}
