import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from 'src/app/sevice/music.service';

@Component({
  selector: 'app-savedetails',
  templateUrl: './savedetails.component.html',
  styleUrls: ['./savedetails.component.css']
})
export class SavedetailsComponent implements OnInit {
  myrecipe:any = null
  mymoney:any = null
  constructor(private router:Router,private service:MusicService,private activatedroutes:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getrecipedetails(this.activatedroutes.snapshot.params.id).subscribe(res=>{
      
      this.myrecipe = res
      // console.log(this.myrecipe)
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

}
