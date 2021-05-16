import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
// import { HttpModule } from '@angular/http';
import { from } from 'rxjs';
import { MusicService } from './sevice/music.service';
import { BynutritionComponent } from './components/bynutrition/bynutrition.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailnutriComponent } from './components/detailnutri/detailnutri.component';
import { SimilardishesComponent } from './components/similardishes/similardishes.component';
import { DetailsimilarComponent } from './components/detailsimilar/detailsimilar.component';
import { RandomComponent } from './components/random/random.component';
import { RandomdetailsComponent } from './components/randomdetails/randomdetails.component';
import { SavedComponent } from './components/saved/saved.component';
import { SavedetailsComponent } from './components/savedetails/savedetails.component';
import { ResturantComponent } from './components/resturant/resturant.component';
import { ResturantdetailsComponent } from './components/resturantdetails/resturantdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    BynutritionComponent,
    DetailsComponent,
    DetailnutriComponent,
    SimilardishesComponent,
    DetailsimilarComponent,
    RandomComponent,
    RandomdetailsComponent,
    SavedComponent,
    SavedetailsComponent,
    ResturantComponent,
    ResturantdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
