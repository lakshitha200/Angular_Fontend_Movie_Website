import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Filmo';

  constructor(private router:Router){

  }
  ngOnInit(): void {
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        window.scrollTo(0,0);
      }
    })
  }


}
