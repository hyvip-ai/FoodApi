import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BynutritionComponent } from './components/bynutrition/bynutrition.component';
import { DetailnutriComponent } from './components/detailnutri/detailnutri.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsimilarComponent } from './components/detailsimilar/detailsimilar.component';
import { HomeComponent } from './components/home/home.component';
import { RandomComponent } from './components/random/random.component';
import { RandomdetailsComponent } from './components/randomdetails/randomdetails.component';
import { ResturantComponent } from './components/resturant/resturant.component';
import { SavedComponent } from './components/saved/saved.component';
import { SavedetailsComponent } from './components/savedetails/savedetails.component';
import { SearchComponent } from './components/search/search.component';
import { SimilardishesComponent } from './components/similardishes/similardishes.component';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'Home'
  },
  {
    path:'Home',component:HomeComponent
  }
  ,
  {
    path:'Search',component:SearchComponent
  },
  {
    path:'searchnutrients',component:BynutritionComponent
  },
  {
    path:'Search/:id',component:DetailsComponent
  },
  {
    path:'searchnutri/:id',component:DetailnutriComponent
  },
  {
    path:'Similar',component:SimilardishesComponent
  },
  {
    path:'Similiar/:id',component:DetailsimilarComponent
  },
  {
    path:'Random',component:RandomComponent
  },
  {
    path:'Random/:id',component:RandomdetailsComponent
  },
  {
    path:'SavedRecipes',component:SavedComponent
  },{
    path:'Saved/:id',component:SavedetailsComponent
  },{
    path:'Resturant',component:ResturantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
