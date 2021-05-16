import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from 'src/app/sevice/music.service';
import { SavedComponent } from '../saved/saved.component';

@Component({
  selector: 'app-randomdetails',
  templateUrl: './randomdetails.component.html',
  styleUrls: ['./randomdetails.component.css']
})
export class RandomdetailsComponent implements OnInit {
  myrecipe:any = null
  constructor(private service:MusicService,private router:Router,private activatedroutes:ActivatedRoute) { }
  mymoney:number = 0
  ngOnInit(): void {
    this.service.getrecipedetails(this.activatedroutes.snapshot.params.id).subscribe(res=>{
    this.myrecipe = res
    this.mymoney = (Math.floor(this.myrecipe.pricePerServing))/100

    })
  }

  gorandom(){
    this.router.navigate(['/Random'])
  }

  showsummary(){
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
