import { JwtTokenService } from './../../../services/jwt-token.service';
import { FreelancerService } from './../../../services/freelancer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup:FormGroup;
  constructor(private _formBuilder:FormBuilder, 
    private _freelancerService:FreelancerService,
    private _jwtTokenService:JwtTokenService,
    private router: Router,
    ) { }


  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(16)]],
    })
  }

  loginBtn(email,password)
  {
    if(email && password)
    {
      let freelancerLogin:Freelancer = new Freelancer();
      freelancerLogin.Email = email;
      freelancerLogin.Password = password;
      this._freelancerService.login(freelancerLogin, "talent").subscribe((response:any) => {
        // this.parseCookies();
        this._jwtTokenService.decodeToken(response.token);
        this._freelancerService.get().subscribe((response:any)=> {
          if (response.isVerified === true){
            this.router.navigateByUrl('/freelancer/profile');
          } 
          else{
            this.router.navigateByUrl('/freelancer/getstarted');}
        },error => {
          alert("Something broken happened")
        })
      },error =>{
        alert("Sorry error occurred");
      })
    }
    else
    {
      alert("Please enter your name and password!");
    }
  }

}
