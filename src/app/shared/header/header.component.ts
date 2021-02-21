import { AuthService } from './../../services/auth-service/auth.service';
import { SpinnerService } from './../../services/loader/spinner.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


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
  isVerified: any = false;
  
  constructor(private router:Router, public spinnerService: SpinnerService, public _authService : AuthService) {
  }


  logout(){
    this._authService.logout().subscribe((response)=>{
      localStorage.clear()
      localStorage.setItem("Type", "Guest")
      this.router.navigateByUrl('/')
      this.isLogged = false
    })
  }

  checkUserType(){
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

     this._authService.isVerified.subscribe((response)=>{
       
      this.isVerified= response
    }, (error)=>{
      console.log(error);
    })
    
    this._authService.isLogged.subscribe((response) =>{ 
    localStorage.getItem("isVerified")== 'true' ? this.isVerified = true : this.isVerified= false
      this.isLogged = response   
      
    }, (error)=>{
      console.log(error);
    })
    this._authService.user.subscribe((response)=> {
      this.username = response.Username
      this.image = response.imgURL
      this.checkType = response.Type
      this.checkUserType();
    })
  }
}
