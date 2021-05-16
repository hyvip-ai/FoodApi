import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/sevice/music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  howmany:number = 0
  constructor(private service: MusicService,private router:Router) { }
  mysearch:any = null
  ngOnInit(): void {
    
  }

  myrecipes:any = null

  seraching(){
    // console.log(this.mysearch,this.howmany)
    this.service.searchbyingridient(this.mysearch,this.howmany).subscribe(res=>{
      console.log(res)
      this.myrecipes = res;
    })
  }
  details(id:any){
    
    // console.log(id);
    this.router.navigate([`/Search/${id}`])
  }

}
