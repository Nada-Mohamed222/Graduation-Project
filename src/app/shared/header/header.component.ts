import { GuardedRoutesGuard } from 'src/app/services/guard/guarded-routes.guard';
import { AuthService } from './../../services/auth-service/auth.service';
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
  isLogged: Boolean =false
  isEmployer: Boolean = false
  isTalent: Boolean = false
  constructor(private router:Router, public spinnerService: SpinnerService, public _authService : AuthService, private _guardedRoutes: GuardedRoutesGuard ) {
  }

  logout(){
    this._authService.logout().subscribe((response)=>{
      console.log(response)
      localStorage.clear()
      this.router.navigateByUrl('/').then(() => {
        window.location.reload();
      });;
    })
  }

  ngOnInit(): void {
    this._guardedRoutes.isLogged.subscribe((response) =>{
      this.isLogged = response
      if(localStorage.getItem("Type")=== "Employer" && response){
        this.isEmployer = true;
      }      
      if(localStorage.getItem("Type")=== "Talent" && response){
        this.isTalent = true;
      }      
    }, (error)=>{
      console.log(error);
    })
    console.log(this._guardedRoutes.canActivate());
    this.username =  localStorage.getItem('UserName')
    this.image =  localStorage.getItem('image')
  }

}
