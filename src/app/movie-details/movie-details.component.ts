import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiService } from '../services/MovieAPi.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselService } from '../services/Carousel.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{

  @ViewChild('traiolr') traiolr:ElementRef;
  @ViewChild('fullImage') fullImage:ElementRef;
  constructor(private activeRoute:ActivatedRoute,private movieApiService:MovieApiService
    ,private sanitizer:DomSanitizer, private carouselService:CarouselService,private router:Router){}
    
  customOptions:OwlOptions  = this.carouselService.customOptions;
  MoviesList:any[]=[];
  selectedMovie:any;
  imgurl = "https://image.tmdb.org/t/p/w500";
  fullImageUrl:string;
  postersList:any[]=[];
  similar:any[]=[];
  isLoading1= false; isLoading2 =false; isLoading3 =false;isLoading4 =false;
  videos:any[]=[];
  teasersArray:any[]=[];
  Trailor:SafeResourceUrl;
  Teaser1:SafeResourceUrl;
  Teaser2:SafeResourceUrl;
  Teaser3:SafeResourceUrl;
  Teaser4:SafeResourceUrl;
  videoUrl:string = "https://www.youtube.com/embed/";

  videoKey="tgbNymZ7vqY";
  ngOnInit(){
    this.isLoading1 = true;
    this.isLoading2 = true;
    this.isLoading3 = true;

    this.movieApiService.fetchMovies().subscribe(data=>{
      this.isLoading3 = false;
      for(let i=0;i<data.length;i++){
        // console.log(data[i].results)
        for(let j=0;j<=19;j++){
            this.MoviesList.push(data[i].results[j]);
        }
      }
      // console.log(this.MoviesList)
      this.selecteMovie();
    });

   

   
    
  }

  selecteMovie(){
    const movieId = +this.activeRoute.snapshot.paramMap.get('id');
    const findMovie = this.MoviesList.find(movie => movie.id == movieId);
    this.selectedMovie = findMovie;
    // console.log(this.selectedMovie);

    this.movieApiService.moviesImages(this.selectedMovie.id).subscribe(data=>{
      this.isLoading2 = false;
      this.postersList = data.backdrops;
      // console.log(this.postersList)
    })

    this.movieApiService.moviesSimilar(this.selectedMovie.id).subscribe(data=>{
      // console.log(data.results)
      this.similar = data.results;
    })


    this.movieApiService.moviesVideos(this.selectedMovie.id).subscribe(data=>{
      this.isLoading1 = false;
      this.videos = data.results;
      data.results.filter((select: any)=>{
        if(select.type == "Trailer"){
          // console.log(select)
          this.Trailor = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl+select.key) ;
       } })
       this.filterTeasers();
    })
 


  }

  filterTeasers(){

    // console.log(this.videos)
    this.videos.filter((s:any)=>{
        if(s.type == "Teaser"){
          this.teasersArray.push(s)
        }
     
     })
       this.Teaser1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl+this.teasersArray[0].key)
        this.Teaser2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl+this.teasersArray[1].key)
        this.Teaser3 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl+this.teasersArray[2].key)
        this.Teaser4 = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl+this.teasersArray[3].key)
        
    //  console.log(this.teasersArray[3])

  }

  getfullImage(image:any){
    this.fullImage.nativeElement.style.display = "block";
    this.fullImageUrl = "https://image.tmdb.org/t/p/w500"+image.file_path;
  }

  close(){
    this.fullImage.nativeElement.style.display = "none";
  }

  navigate(id:number,title:string){
    this.isLoading4 = true;
    // console.log(`Movies/Movie-details/${id}/${title}`)
    this.router.navigateByUrl(`Movie/Movie-details/${id}/${title}`)
    .then(()=>{
      window.location.reload();
      this.isLoading1 = false;
    });
  }

}
