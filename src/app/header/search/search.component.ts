import { Component } from '@angular/core';
import { SearchService } from '../../services/Search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent{
  constructor(private searchService:SearchService){}

  // selectedMoviesId:number[];
  filteredMoviesList:any[];

  
  
  getSearchValue(inputEl:HTMLInputElement){
    this.getMovieCategory("clear");
    // console.log(inputEl.value);
  
    // set searched Movies ids
    this.searchService.setSearchedMoviesId(inputEl);
    
    // get searched movies Ids
    // this.selectedMoviesId = this.searchService.getSearchedMoviesId();
    // console.log(this.selectedMoviesId);

    //get Filtered movies according to Ids
    this.filteredMoviesList = this.searchService.getFiltereddMoviesList();
    console.log(this.filteredMoviesList);

    
  }


    // search movies using filter buttons 
  Upcomming:string = "Upcomming";
  Popular:string = "Popular";
  Action:string = "Action";
  Adventure:string = "Adventure";
  Fantasy:string = "Fantasy";
  Comedy:string = "Comedy";
  Animation:string = "Animation";


  getMovieCategory(category:string){
    this.searchService.setFilteredMovies(category);

    this.filteredMoviesList = this.searchService.getFiltereddMoviesList();
  }


}
