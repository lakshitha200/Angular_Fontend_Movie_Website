import { Injectable } from "@angular/core";
import { MovieService } from "./Movie.service";

@Injectable({
    providedIn: "root"
})
export class SearchService{

    constructor(private movieService:MovieService){

    }

    // movieId:number[];
    filterdMoviesList: any[];

    setSearchedMoviesId(inputEl:HTMLInputElement){
        let searchText = inputEl.value.trim().toLowerCase();
        // let id:number[] = [];
        let filterdMovies: any[] =[];
        this.movieService.getMovies().find((movie:any) => {
            for(let x in movie.KeyWords){
              if(searchText == movie.KeyWords[x].replace(/\s/g," ").trim().toLowerCase()){
                console.log(movie.KeyWords[x]); 
                // console.log(movie.id)
                console.log(movie)
                // id.push(movie.id);
                filterdMovies.push(movie);
              }
            }  
         })
        //  this.movieId = id;
         this.filterdMoviesList = filterdMovies;
        // console.log(this.movieId+"In the service");
        // console.log("calling")
    }

    // getSearchedMoviesId(){
    //     return this.movieId;
    // }
    getFiltereddMoviesList(){
          return this.filterdMoviesList;
        
    }

    setFilteredMovies(category:string){
        var filterFromCategory: any[] = [];
        console.log(category)
        var movieList = this.movieService.getMovies().find(movie => {
          if(movie.category.includes(category)){
            filterFromCategory.push(movie)
          }
         })

        this.filterdMoviesList = filterFromCategory;
    }

}