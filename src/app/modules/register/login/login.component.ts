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

<<<<<<< HEAD
  userType: string;
  isClientSelected = false;
  isFreeLancerSelcted = false;
  constructor(
    private _formBuilder: FormBuilder,
    private _freelancerService: FreelancerService,
    private _clientService: ClientService,
    private _jwtTokenService: JwtTokenService,
    private router: Router
  ) {}
=======
  formGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,
    private _freelancerService: FreelancerService,
    private _jwtTokenService: JwtTokenService,
    private router: Router,
  ) { }

>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
<<<<<<< HEAD
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

  FreelancerLogin(email, password) {
=======
      Password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    })
  }

  loginBtn(email, password) {
>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
    if (email && password) {
      let freelancerLogin: Freelancer = new Freelancer();
      freelancerLogin.Email = email;
      freelancerLogin.Password = password;
<<<<<<< HEAD

      this._freelancerService.login(freelancerLogin).subscribe(
        (response: any) => {
          this._jwtTokenService.decodeToken(response.token);

          this._freelancerService.get().subscribe(
            (response: any) => {
              if (response.isVerified === true) {
                this.router.navigateByUrl('/freelancer/profile');
              } else {
                this.router.navigateByUrl('/freelancer/getstarted');
              }
            },
            (error) => {
              console.log(error);
              alert('Something broken happened');
            }
          );
        },
        (error) => {
          console.log(error);
          alert('Sorry error occurred');
        }
      );
    } else {
      alert('Please enter your name and password!');
    }
  }
  // -----------------client login----------------------//
  clientLogin(Email: string, Password: string) {
    if (Email && Password) {
      const client = new Client(Password, Email);
      //login
      this._clientService.login(client).subscribe(
        (response: any) => {
          this._jwtTokenService.decodeToken(response.token);

          //get
          this._clientService.getClient().subscribe(
            (response: any) => {
              if (response.isVerified === true) {
                this.router.navigateByUrl('/client/profile');
              } else {
                this.router.navigateByUrl('/post-job/title');
              }
              console.log(response);
            },
            (error) => {
              console.log('ابرروورر');
              console.log(error);
            }
          );
          console.log('client log in successfuly');
        },
        (error) => {
          console.log('ابرروورر');
          console.log(error);
        }
      );
    } else {
      alert('Please enter your name and password!');
=======
      this._freelancerService.login(freelancerLogin, "talent").subscribe((response: any) => {
        // this.parseCookies();
        this._jwtTokenService.decodeToken(response.token);
        this._freelancerService.get().subscribe((response: any) => {
          if (response.isVerified === true) {
            this.router.navigateByUrl('/freelancer/profile');
          }
          else {
            this.router.navigateByUrl('/freelancer/getstarted');
          }
        }, error => {
          alert("Something broken happened")
        })
      }, error => {
        alert("Sorry error occurred");
      })
    }
    else {
      alert("Please enter your name and password!");
>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
    }
  }
  //--------------------handle type---------------//

<<<<<<< HEAD
  handleUserType(type: string) {
    if (type === 'client') {
      this.userType = 'client';
      this.isClientSelected = true;
      this.isFreeLancerSelcted = false;
      console.log('client : انا مضغووووط جدا');
    }
    if (type === 'freelancer') {
      this.isFreeLancerSelcted = true;
      this.isClientSelected = false;
      this.userType = 'freelancer';
      console.log('freelancer: انا مضغووووط جدا ');
    }
  }

  // ------------------login

  login(Email: string, Password: string) {
    if (this.userType === 'client') {
      console.log('client : i am going to log now ');
      this.clientLogin(Email, Password);
    }
    if (this.userType === 'freelancer') {
      console.log('freelncer : i am going to log now ');
      this.FreelancerLogin(Email, Password);
    }
  }
}
=======
}
>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
