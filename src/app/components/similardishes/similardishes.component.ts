import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MusicService } from 'src/app/sevice/music.service';

@Component({
  selector: 'app-similardishes',
  templateUrl: './similardishes.component.html',
  styleUrls: ['./similardishes.component.css']
})
export class SimilardishesComponent implements OnInit {

  constructor(private srvices:MusicService,private router:Router) { }
  mydata:any = null
  foodlist:any = null
  ngOnInit(): void {
  }
  serachdish(){
//  console.log(this.mydata)
    this.srvices.showsimilar(this.mydata).subscribe(res=>{
      this.foodlist = res
      // console.log(this.foodlist)
    })
  }
  showrecipe(id:any){
    // console.log('hocche kichu ekta')
    this.router.navigate([`/Similiar/${id}`])
  }

}
