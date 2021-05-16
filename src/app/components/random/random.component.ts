
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/sevice/music.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  diet:any = 'gluten free'
  cuisine:any = "Chinese"
  dishtype:any = "snacks"
  mydishes:any = null
  constructor(private services:MusicService,private router:Router) { }
  numberofdish:any = null
  ngOnInit(): void {
  }
  Generate(){
    this.services.generaterandom(this.numberofdish,this.cuisine,this.dishtype,this.diet).subscribe(res=>{
      console.log(res);
      this.mydishes = res
    })
  }
  randomdetail(id:any){
    this.router.navigate([`/Random/${id}`]);
  }

}
