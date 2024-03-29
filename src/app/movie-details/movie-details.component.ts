import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/Movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
  constructor(private activeRoute:ActivatedRoute,private movieService:MovieService,private elementRef:ElementRef){}
  

  selectedMovie:any;
  ngOnInit(){

    const movieId = +this.activeRoute.snapshot.paramMap.get('id');
    const findMovie = this.movieService.getMovies().find(movie => movie.id == movieId);
    this.selectedMovie = findMovie;
    console.log(this.selectedMovie);
  }

}
