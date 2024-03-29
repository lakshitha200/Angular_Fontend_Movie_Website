import { Injectable } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Injectable({
    providedIn: "root"
})
export class CarouselService{
    customOptions: OwlOptions = {
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 700,
        navText:['',''],
        slideBy:2,
        lazyLoad:true,
        responsive: {
          0:{
            items:2
          },
          300:{
            items:2
          },
          480:{
            items:3
          },
          600:{
            items:3
          },
          700:{
            items:4
          },
          900:{
            items:5,
          },
          1000:{
            items:6
          }
          

          
        },
        nav: false
      }
    }