import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/sevice/music.service';

@Component({
  selector: 'app-bynutrition',
  templateUrl: './bynutrition.component.html',
  styleUrls: ['./bynutrition.component.css']
})
export class BynutritionComponent implements OnInit {

  constructor(private services:MusicService,private router:Router) { }
  protein:any = null;
  carbs:any = null;
  fat:any = null;
 
  howmany:any = null;
  calories:any = null;
  myrecipes:any = null
  ngOnInit(): void {
  }
  searchnutri(){
    this.services.searchbynutri(this.protein,this.carbs,this.calories,this.fat,this.howmany).subscribe(res=>{
      console.log(res)
      this.myrecipes = res
    })
  }
  showrecipe(id:any){
    this.router.navigate([`/searchnutri/${id}`])
  }
}
