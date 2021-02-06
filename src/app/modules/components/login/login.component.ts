import { JwtTokenService } from './../../../services/jwt-token.service';
import { FreelancerService } from './../../../services/freelancer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Freelancer } from 'src/app/models/freelancer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  freelancer :Freelancer[] = [];
  formGroup:FormGroup;
  constructor(private _formBuilder:FormBuilder, 
    private _freelancerService:FreelancerService,
    private _jwtTokenService:JwtTokenService) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(16)]],
    })
  }

  parseCookies(cookies = document.cookie) {
    let cookieStore = {};
    if (!!cookies === false) { return; }
    const cookiesArr = cookies.split(';');
    for (const cookie of cookiesArr) {
        const cookieArr = cookie.split('=');
        let token = cookieStore[cookieArr[0].trim()] = cookieArr[1];
        // return token;
        console.log(token);
    }
  }

  loginBtn(email,password)
  {
    if(email && password)
    {
      let freelancerLogin:Freelancer = new Freelancer();
      freelancerLogin.Email = email;
      freelancerLogin.Password = password;
      this._freelancerService.login(freelancerLogin).subscribe((response:any) => {
        this.freelancer.push(freelancerLogin);
        console.log("Response ",response);
        this.parseCookies();
        this._jwtTokenService.decodeToken(response.token);
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
