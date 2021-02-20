import { GuardedRoutesGuard } from 'src/app/services/guard/guarded-routes.guard';
import { AuthService } from './../../../services/auth-service/auth.service';
import { Subject } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ClientService } from '../../../services/client-service/client.service';
import { JwtTokenService } from './../../../services/jwt-token.service';
import { FreelancerService } from '../../../services/freelancer-service/freelancer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer';
import { Client } from 'src/app/models/client';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})



export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  userType: string;
  isClientSelected = false;
  isFreeLancerSelcted = false;
  isLoaded: boolean = false;
  wrongType: string = "";
  imgURL: any;
  imgSubject = new Subject<any>()
  checkType: any
  constructor(
    private _formBuilder: FormBuilder,
    private _freelancerService: FreelancerService,
    private _clientService: ClientService,
    private _jwtTokenService: JwtTokenService,
    private router: Router,
    private titleService: Title,
    private _authService: AuthService,
    private _guardedRoutes: GuardedRoutesGuard
  ) {
    this.titleService.setTitle("Upwork - Login");
  }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(16),
        ],
      ],
      UserType: ['', Validators.required],
    });
  }

  LoginService(userLogin, type) {
    this._freelancerService.login(userLogin, type).subscribe(
      (response: any) => {
        this.isLoaded = false;
        this._jwtTokenService.decodeToken(response.token);
        this._freelancerService.getLogin(type).subscribe(
          (response: any) => {
            localStorage.setItem("image", response.ImageURL)
            this.imgURL = localStorage.getItem("image")
            this.imgSubject = this.imgURL;
            console.log(this.imgSubject);
            this._authService.isLogged.next(true);
            localStorage.setItem("Type", response.Type)
            this.checkType = localStorage.getItem("Type")
            this._authService.user.next({ imgURL: this.imgURL, Type: this.checkType })
            if (response.isVerified == true) {
              // -----check user type if verfied
              if (type === 'talent') {
                this.router.navigateByUrl('/freelancer/profile');
              } else {
                this.router.navigateByUrl('/profile/jobs');
              }
              //---------------------------
            } else {
              if (type === 'talent') {
                this.router.navigateByUrl('/freelancer/getstarted');
              } else {
                this.router.navigateByUrl('/post-job/title');
              }
            }
          },
          (error) => {
            console.log("Can't login with this user");
          }
        );
      },
      (error) => {
        this.isLoaded = false;
        if (error.error.message == "Wrong email entered!") {
          this.wrongType = "email";
        }
        if (error.error.message == "Wrong password entered!") {
          this.wrongType = "password";
        }
      }
    );
  }

  Login(email, password) {
    let userLogin: any = {};
    userLogin.Email = email;
    userLogin.Password = password;

    this.isLoaded = true;

    this.LoginService(userLogin, this.userType)

  }

  //--------------------handle type---------------//

  handleUserType(type: string) {
    this.userType = type;
  }
}
