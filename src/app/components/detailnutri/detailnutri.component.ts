import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from 'src/app/sevice/music.service';
import { SavedComponent } from '../saved/saved.component';

@Component({
  selector: 'app-detailnutri',
  templateUrl: './detailnutri.component.html',
  styleUrls: ['./detailnutri.component.css']
})
export class DetailnutriComponent implements OnInit {
  mymoney:number = 0
  constructor(private service:MusicService,private router:Router,private activatedroutes:ActivatedRoute) { }
  myrecipe:any = null
  ngOnInit(): void {
    this.service.getrecipedetails(this.activatedroutes.snapshot.params.id).subscribe(res=>{
      
      this.myrecipe = res
      console.log(this.myrecipe)
     this.mymoney = (Math.floor(this.myrecipe.pricePerServing))/100

    })
  }

  gosearch(){
    this.router.navigate(['/searchnutrients'])
  }
    showsummary(){
      document.getElementById('summary')!.style.opacity = '1'
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
