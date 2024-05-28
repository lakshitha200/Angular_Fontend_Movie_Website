import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../services/MovieAPi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  isLoading=false;
  MoviesList:any[] = [];
  Genre:any[]=[];
  filteredMoviesList:any[]=[];
  selectedButton:any;
  searchValue:string ='';

  constructor(private movieApiService:MovieApiService){}

  ngOnInit(): void {
    this.isLoading = true;
    this.movieApiService.fetchMovies().subscribe(data=>{
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
      // console.log(this.Genre[1].name)
    })

  }



  getMovieCategory(id:any,){
    this.selectedButton = id;
    this.filteredMoviesList.length = 0;
    // console.log(filter)
   this.MoviesList.filter((select)=>{
  
      if(select.genre_ids.includes(id)==true){
          this.isLoading = false;
          this.filteredMoviesList.push(select);
      }
    });
  }


}
