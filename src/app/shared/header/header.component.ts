import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isVisited:boolean = true;
  constructor(private url:LocationStrategy) { }

  ngOnInit(): void {
    if((this.url.path().includes('/signup/home') || this.url.path().includes('/freelancer/getstarted') )=== true){
      this.isVisited = false;
      console.log("tfaa")
    }
  }

}
