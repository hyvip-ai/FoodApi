import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';

import { MusicService } from 'src/app/sevice/music.service';
import {SavedComponent} from 'src/app/components/saved/saved.component';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  mymoney:number = 0


  constructor(private router:Router,private service:MusicService,private activatedroutes:ActivatedRoute) { }
  myrecipe:any = null
  myid:any = null
  ngOnInit(): void {
    // console.log(this.activatedroutes.snapshot.params.id)
    this.service.getrecipedetails(this.activatedroutes.snapshot.params.id).subscribe(res=>{
      console.log(res)
      this.myrecipe = res
     console.log(this.myrecipe.image)
     this.mymoney = (Math.floor(this.myrecipe.pricePerServing))/100
    })
   
   
  }
  myrecipearray = []
  showsummary(){
    // console.log(this.myrecipe.summary)
    document.getElementById('summary')!.style.opacity = '1'
    document.getElementById('summary')!.innerHTML = this.myrecipe.summary
  }
  gosearch(){
    this.router.navigate(['/Search'])
  }

  saverecipe(){
    this.myid = this.activatedroutes.snapshot.params.id
   console.log(this.myid)
   SavedComponent.myrecipeids.push(this.myid);
   console.log(SavedComponent.myrecipeids)
  }

}
