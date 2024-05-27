import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovieApiService } from '../services/MovieAPi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent implements OnInit{

  @ViewChild('fullImage') fullImage:ElementRef;

  constructor(private movieApiService:MovieApiService,private activeRoute:ActivatedRoute){}
    

  postersList:any[] = []
  url:string;

  ngOnInit(): void {

    const movieId = +this.activeRoute.snapshot.paramMap.get('id');

    this.movieApiService.moviesImages(movieId).subscribe(data=>{
      // this.isLoading2 = false;
      this.postersList = data.backdrops;
      // console.log(this.postersList)
    })
  }

  getfullImage(image:any){
    this.fullImage.nativeElement.style.display = "block";
    this.url = "https://image.tmdb.org/t/p/w500"+image.file_path;
  }

  close(){
    this.fullImage.nativeElement.style.display = "none";
  }


}
