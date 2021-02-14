import { SpinnerService } from './../../services/loader/spinner.service';
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
  constructor(private url:LocationStrategy, public spinnerService: SpinnerService ) {
    console.log("tfaaaaaaaaaaaaaaaaa")
   }

  ngOnInit(): void {
    if((this.url.path().includes('/signup/home') || this.url.path().includes('/freelancer/getstarted') || this.url.path().includes('/login') )=== true){
      this.isVisited = false;
      console.log("tfaa")
    }
  }

}
