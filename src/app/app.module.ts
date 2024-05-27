import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { PopularComponent } from './home/popular/popular.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchComponent } from './header/search/search.component';
import { SigninFormComponent } from './header/signin-form/signin-form.component';
import { ProfileComponent } from './header/propile/profile.component';
import { SignupFormComponent } from './header/signup-form/signup-form.component';
import { MoviesComponent } from './movies/movies.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubscribeComponent } from './home/subscribe/subscribe.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagesComponent } from './images/images.component';
import { UpcommingComponent } from './home/upcomming/upcomming.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    PopularComponent,
    UpcommingComponent,
    MovieDetailsComponent,
    SearchComponent,
    SigninFormComponent,
    ProfileComponent,
    SignupFormComponent,
    MoviesComponent,
    SubscribeComponent,
    ImagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
