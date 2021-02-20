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


  isVisited:boolean;
  username:string
  image:any = ""
  isLogged: Boolean =false
  isEmployer: Boolean = false
  isTalent: Boolean = false
  checkType: String = ""

  
  constructor(private router:Router, public spinnerService: SpinnerService, public _authService : AuthService, private _guardedRoutes: GuardedRoutesGuard ) {
  }


  logout(){
    this._authService.logout().subscribe((response)=>{
      console.log(response)
      localStorage.clear()
      localStorage.setItem("Type", "Guest")
      this.router.navigateByUrl('/')
      this.isLogged = false
    })
  }

  checkUserType(){
       console.log(this.checkType);
      if(this.checkType === "Employer")
      {
        this.isEmployer = true;
        this.isTalent = false;
      }
      else if(this.checkType === "Talent")
       {
        this.isTalent = true;
        this.isEmployer = false;
      }

      else {
        this.isTalent = false;
        this.isEmployer = false;
        localStorage.setItem("Type", "Guest")
      }
  }



  ngOnInit(): void {
    this._authService.isLogged.subscribe((response) =>{ 
      this.isLogged = response   
    }, (error)=>{
      console.log(error);
    })
    this.username =  localStorage.getItem('UserName')
    this._authService.user.subscribe((response)=> {
      this.image = response.imgURL
      this.checkType = response.Type
      console.log(response);
      this.checkUserType();
    })
  }
}
