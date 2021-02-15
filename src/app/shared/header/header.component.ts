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
  username:string
  image:string
  constructor(private url:LocationStrategy, public spinnerService: SpinnerService ) {
  }

  ngOnInit(): void {
    this.username =  localStorage.getItem('UserName')
    this.image =  localStorage.getItem('image')
    // console.log(this.spinnerService.isLoading  + "heerererer") 
    if((this.url.path().includes('/signup/home') || this.url.path().includes('/freelancer/getstarted') || this.url.path().includes('/login') )=== true){
      this.isVisited = false;
    }
  }

}
