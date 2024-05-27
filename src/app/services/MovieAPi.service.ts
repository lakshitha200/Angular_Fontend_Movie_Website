import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { url } from "inspector";
import { Observable, forkJoin } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class MovieApiService{

    constructor(private http:HttpClient){}

     apiUrl:string = 'https://api.themoviedb.org/3/movie/popular';
     apiKey:string = '8dcdc6e44a29cd78eb9dab997ee0491c';

     MoviesList:any[]=[];


     fetchMovies():Observable<any[]>{
        const requests:any[]= [];
        for(let i=1;i<=20;i++){
            const url = `${this.apiUrl}?api_key=${this.apiKey}&page=${i}`;
            requests.push(this.http.get<any>(url));
        }
        return forkJoin(requests);
        
     }

     getGenre():Observable<any>{
        return this.http.get<any>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`)
     }

     moviesImages(id:any):Observable<any>{
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${this.apiKey}`)
     }

     moviesVideos(id:any):Observable<any>{
      return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}`)
   }

     moviesSimilar(id:any):Observable<any>{
        return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.apiKey}`)
     }

     upcommingMovies():Observable<any>{
      return this.http.get<any>(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}`)
     }
     
}