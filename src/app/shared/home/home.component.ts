import { JwtTokenService } from './../../services/jwt-token.service';
import { FreelancerService } from './../../services/freelancer.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Freelancer } from 'src/app/models/freelancer';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  signUpType: string = "";
  isAppeared:boolean = false;
  isSignedUp:boolean = true;
  freelancerSignUpArr :Freelancer[] = [];
  formGroup: FormGroup;

  constructor( private _formBuilder:FormBuilder,
    private _freelancerService:FreelancerService,
    private router: Router,
    private _jwtTokenService:JwtTokenService) { }

  ngOnInit(): void {
    
    this.formGroup = this._formBuilder.group({
      FirstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      LastName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      Password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
      Email:['',[Validators.required,Validators.minLength(5),Validators.maxLength(30),Validators.email]],
      UserName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
    })

  }
  apperUserName(type){
    this.isAppeared = true;
    this.signUpType = type;
  }

  addNewAccount(firstName, lastName, password, email, username)
  {
    let freelancerSignUp:Freelancer = new Freelancer();
    freelancerSignUp.FirstName = firstName;
    freelancerSignUp.LastName = lastName;
    freelancerSignUp.Email = email;
    freelancerSignUp.Password = password;
    freelancerSignUp.UserName = username;
    this._freelancerService.signUp(freelancerSignUp).subscribe(response => {
      // this.freelancerSignUpArr.push(freelancerSignUp);
      // alert("Add New User is Donee");
      this.loginBtn(email,password);
      this.router.navigateByUrl('/freelancer/getstarted');
      console.log("Response ",response);
    },error =>{
      alert("Sorry error occurred");
    })
  }

 
  loginBtn(email,password)
  {
    let freelancerLogin:Freelancer = new Freelancer();
    freelancerLogin.Email = email;
    freelancerLogin.Password = password;
    this._freelancerService.login(freelancerLogin).subscribe((response:any) => {
      this._jwtTokenService.decodeToken(response.token);
    },error =>{
      alert("Sorry error occurred");
    })
  }

  changeStatus() {
    this.isSignedUp = true;
    // this.statusEvent.emit(this.isSignedUp)
  }
}
