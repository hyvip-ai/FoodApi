import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MusicService } from 'src/app/sevice/music.service';
import { SavedComponent } from '../saved/saved.component';

@Component({
  selector: 'app-detailsimilar',
  templateUrl: './detailsimilar.component.html',
  styleUrls: ['./detailsimilar.component.css']
})
export class DetailsimilarComponent implements OnInit {

  constructor(private service:MusicService,private router:Router,private activatedroutes:ActivatedRoute) { }
  myrecipe:any = null
  mymoney:number = 0
  ngOnInit(): void {
    this.service.getrecipedetails(this.activatedroutes.snapshot.params.id).subscribe(res=>{
      console.log(res)
      this.myrecipe = res;
      this.mymoney = (Math.floor(this.myrecipe.pricePerServing))/100
    })
  }

  gosimilar(){
    this.router.navigate(['/Similar'])
  }
  showsummary(){
    document.getElementById('summary')!.style.opacity = "1"
    document.getElementById('summary')!.innerHTML = this.myrecipe.summary
    

  }
myid:any = null
  saverecipe(){
    this.myid = this.activatedroutes.snapshot.params.id
   console.log(this.myid)
   SavedComponent.myrecipeids.push(this.myid);
   console.log(SavedComponent.myrecipeids)
  }
  

  
  }
 
  


