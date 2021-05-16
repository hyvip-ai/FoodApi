import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  search(){
    this.router.navigate(['/Search'])
  }
  searchnutrients(){
    this.router.navigate(['/searchnutrients'])
  }
  gosimilar(){
    this.router.navigate(['/Similar'])
  }
  gorandom(){
    this.router.navigate(['/Random'])
  }

  gores(){
    this.router.navigate(['/Resturant'])
  }

}
