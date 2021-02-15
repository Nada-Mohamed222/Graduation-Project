import { ClientService } from '../../../services/client-service/client.service';
import { JwtTokenService } from './../../../services/jwt-token.service';
import { FreelancerService } from '../../../services/freelancer-service/freelancer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Freelancer } from 'src/app/models/freelancer';
import { Client } from 'src/app/models/client';

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
  constructor(
    private _formBuilder: FormBuilder,
    private _freelancerService: FreelancerService,
    private _clientService: ClientService,
    private _jwtTokenService: JwtTokenService,
    private router: Router
  ) { }

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

  Login(email, password) {
    let userLogin: any = {};
    userLogin.Email = email;
    userLogin.Password = password;

      this.isLoaded = true;
      this._freelancerService.login(userLogin, this.userType).subscribe(
        (response: any) => {
          this.isLoaded = false;
          this._jwtTokenService.decodeToken(response.token);
          console.log(response);
          this._freelancerService.getLogin(this.userType).subscribe(
            (response: any) => {
              localStorage.setItem("image", response.ImageURL )
              if (response.isVerified === true) {
                // -----check user type if verfied
                if (this.userType === 'talent') {
                  this.router.navigateByUrl('/freelancer/profile');
                } else {
                this.router.navigateByUrl('/profile/jobs');
              }
              //---------------------------
            } else {
              if (this.userType === 'talent') {
                this.router.navigateByUrl('/freelancer/getstarted');
              } else {
                console.log(`not verfied ${this.userType}`);
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

  //--------------------handle type---------------//

  handleUserType(type: string) {
    this.userType = type;
    console.log(type);
  }
}
