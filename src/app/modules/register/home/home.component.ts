import { AuthService } from './../../../services/auth-service/auth.service';
// import { User } from './../../../models/user';
import { ClientService } from '../../../services/client-service/client.service';
import { Client } from './../../../models/client';
import { JwtTokenService } from './../../../services/jwt-token.service';
import { FreelancerService } from '../../../services/freelancer-service/freelancer.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Freelancer } from 'src/app/models/freelancer';
import { Router } from '@angular/router';

// import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  signUpType: string = '';
  isAppeared: boolean = false;
  isSignedUp: boolean = true;
  freelancerSignUpArr: Freelancer[] = [];

<<<<<<< HEAD
  formGroup: FormGroup;

  // user observable
  // user = new BehaviorSubject<User>(null);

  constructor(
    private _formBuilder: FormBuilder,
    private _freelancerService: FreelancerService,
    private _clientService: ClientService,
    private router: Router,
    private _jwtTokenService: JwtTokenService
  ) // private _authservice: AuthService
  {}

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      FirstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      LastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      Password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      Email: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
          Validators.email,
        ],
      ],
      UserName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
    });
  }

=======
  signUpType: string = "";
  isAppeared: boolean = false;
  isSignedUp: boolean = true;
  freelancerSignUpArr: Freelancer[] = [];
  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _freelancerService: FreelancerService,
    private router: Router,
    private _jwtTokenService: JwtTokenService) { }

  ngOnInit(): void {

    this.formGroup = this._formBuilder.group({
      FirstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      LastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      Password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      Email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.email, this.cannotContainSpace]],
      UserName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10),this.cannotContainSpace]],
      CheckRules: [false,[Validators.requiredTrue]]   
     })

  }

  cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    if((control.value as string).indexOf(' ') >= 0){
        return {cannotContainSpace: true}
    }

    return null;
}


>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
  apperUserName(type) {
    this.isAppeared = true;
    this.signUpType = type;
  }

<<<<<<< HEAD
  changeStatus() {
    this.isSignedUp = true;
    // this.statusEvent.emit(this.isSignedUp)
  }

  //handling freeLancer
  addNewFreelancer(firstName, lastName, password, email, username) {
=======
  addNewAccount(firstName, lastName, password, email, username) {
>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
    let freelancerSignUp: Freelancer = new Freelancer();
    freelancerSignUp.FirstName = firstName;
    freelancerSignUp.LastName = lastName;
    freelancerSignUp.Email = email;
    freelancerSignUp.Password = password;
    freelancerSignUp.UserName = username;
<<<<<<< HEAD
    this._freelancerService.signUp(freelancerSignUp).subscribe(
      (response) => {
        // this.freelancerSignUpArr.push(freelancerSignUp);
        // alert("Add New User is Donee");
        this.loginBtn(email, password);
        this.router.navigateByUrl('/freelancer/getstarted');
        console.log('Response ', response);
      },
      (error) => {
        alert('Sorry error occurred');
      }
    );
  }

=======
    this._freelancerService.signUp(freelancerSignUp, this.signUpType).subscribe(response => {
      // this.freelancerSignUpArr.push(freelancerSignUp);
      // alert("Add New User is Donee");
      this.loginBtn(email, password);
      if (this.signUpType === "employer") {
        this.router.navigateByUrl('/post-job/title');
      }
      if (this.signUpType === "talent") {
        this.router.navigateByUrl('/freelancer/getstarted');
      }
      console.log("Response ", response);
    }, error => {
      alert("Sorry error occurred");
    })
  }


>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
  loginBtn(email, password) {
    let freelancerLogin: Freelancer = new Freelancer();
    freelancerLogin.Email = email;
    freelancerLogin.Password = password;
<<<<<<< HEAD
    this._freelancerService.login(freelancerLogin).subscribe(
      (response: any) => {
        //fixme:
        this._jwtTokenService.decodeToken(response.token);
      },
      (error) => {
        alert('Sorry error occurred');
      }
    );
=======
    this._freelancerService.login(freelancerLogin, this.signUpType).subscribe((response: any) => {
      this._jwtTokenService.decodeToken(response.token);
    }, error => {
      alert("Sorry error occurred");
    })
>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
  }

  //---------------- handling client signup--------------------//
  addNewClient(
    FirstName: string,
    LastName: string,
    Password: string,
    Email: string,
    UserName: string
  ) {
    const client = new Client(Password, Email, FirstName, LastName, UserName);
    this._clientService.signUp(client).subscribe(
      (response) => {
        //storing the username in the local storage
        // localStorage.setItem('UserName', response.UserName);
        //redirect client to post-job
        this.router.navigateByUrl('/post-job/title');
        //****dev hint
        console.log('client created successfully');
        console.log(response);
        // handling login (login auto if signup done)
        this.clientLogin(Password, Email);
      },
      (error) => {
        console.log('ايروووور يختاااااااي');
        console.log(error);
      }
    );
  }
  //-----------------handling client login
  clientLogin(Password: string, Email: string) {
    const client = new Client(Password, Email);
    this._clientService.login(client).subscribe(
      (response: any) => {
        console.log('client log in successfully');
        this._jwtTokenService.decodeToken(response.token);
        console.log(response);
        //create new user
        // const user = new User(response.token);
        //emit the created user
        // this._authservice.user.next(user);
      },
      (error) => {
        console.log('ايروووور يا مريم ايروووور ');
        console.log(error);
      }
    );
  }

  //------- manage adding client or freelancer

  addNewAccount(
    FirstName: string,
    LastName: string,
    Password: string,
    Email: string,
    UserName: string
  ) {
    if (this.signUpType == 'freelancer') {
      console.log('add new freelancer');
      this.addNewFreelancer(FirstName, LastName, Password, Email, UserName);
    } else if (this.signUpType == 'client') {
      console.log('add new client');
      this.addNewClient(FirstName, LastName, Password, Email, UserName);
    }
  }
}