import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { PopularComponent } from './home/popular/popular.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchComponent } from './header/search/search.component';
import { SigninFormComponent } from './header/signin-form/signin-form.component';
import { ProfileComponent } from './header/propile/profile.component';
import { SignupFormComponent } from './header/signup-form/signup-form.component';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';
import { MoviesComponent } from './movies/movies.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { UpCommingComponent } from './home/up-comming/up-comming.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubscribeComponent } from './home/subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    PopularComponent,
    MovieDetailsComponent,
    SearchComponent,
    SigninFormComponent,
    ProfileComponent,
    SignupFormComponent,
    MovieFilterComponent,
    MoviesComponent,
    UpCommingComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
