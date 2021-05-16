import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/sevice/music.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
 public static myrecipeids:number[] = []
 myresponsearray:any = []
  constructor(private services:MusicService,private router:Router) { }

  ngOnInit(): void {
    // console.log(SavedComponent.myrecipeids);
    for(let i=0;i<SavedComponent.myrecipeids.length;i++){
      this.services.getrecipedetails(SavedComponent.myrecipeids[i]).subscribe(res=>{
       this.myresponsearray.push(res);
        // console.log(this.myresponsearray)
      })
    }
  }

  gotodtails(id:any){
    this.router.navigate([`Saved/${id}`])
  }
 

}
