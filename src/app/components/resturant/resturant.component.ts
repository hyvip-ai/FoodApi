import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/sevice/music.service';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.css']
})
export class ResturantComponent implements OnInit {
  num:any = null
  food:any = null
  myresponsearray:any = null
  constructor(private router:Router,private service:MusicService) { }

  ngOnInit(): void {
  }

  getdetails(){
    this.service.findformresturant(this.food,this.num).subscribe(res=>{
      this.myresponsearray = res;
      console.log(this.myresponsearray)
    })
  }

  gotodtails(id:any){
    
  }

}
