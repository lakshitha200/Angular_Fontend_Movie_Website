import { Injectable } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { trace } from "node:console";

@Injectable({
    providedIn: "root"
})
export class CarouselService{
    customOptions: OwlOptions = {
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        freeDrag:false,
        dots: false,
        navSpeed: 500,
        navText:['<i class="fa-solid fa-circle-chevron-left"></i>','<i class="fa-solid fa-circle-chevron-right"></i>'],
        slideBy:5,
        lazyLoad:false,
        responsive: {
          0:{
            items:3
          },
          300:{
            items:3
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
        nav: true
      }
    

    customOptions2: OwlOptions = {
      loop: true,
      autoplay:true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
      navText:['<i class="fa-solid fa-circle-chevron-left"></i>','<i class="fa-solid fa-circle-chevron-right"></i>'],
      slideBy:2,
      lazyLoad:true,
      responsive: {
        0:{
          items:1
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
          items:3
        },
        900:{
          items:3,
        },
        
      },
      nav: true
    }
  }