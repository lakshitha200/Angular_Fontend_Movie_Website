import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PopularComponent } from './home/popular/popular.component';
import { SigninFormComponent } from './header/signin-form/signin-form.component';
import { SignupFormComponent } from './header/signup-form/signup-form.component';
import { SearchComponent } from './header/search/search.component';
import { MoviesComponent } from './movies/movies.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:"Movie",component:MoviesComponent},
  {path:"Home/Movie-details/:id/:name",component:MovieDetailsComponent},
  {path:"Movie/Movie-details/:id/:name",component:MovieDetailsComponent},
  {path:"Home/Search/Movie-details/:id/:name",component:MovieDetailsComponent},
  {path:"Movie/Movie-details/:id/:name/images",component:ImagesComponent},
  {path:"Home/Movie-details/:id/:name/images",component:ImagesComponent},
  {path:"Home/Search/Movie-details/:id/:name/images",component:ImagesComponent},
  {path:"Home/sign-in",component:SigninFormComponent},
  {path:"Home/sign-up",component:SignupFormComponent},
  {path:"Home/Search",component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
