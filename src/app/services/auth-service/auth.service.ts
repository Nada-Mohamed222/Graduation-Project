import { ApiService } from './../api.service';
import { User } from './../../models/user';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  isLogged= new Subject<boolean>()
  user: BehaviorSubject<{imgURL, Type}> = new BehaviorSubject<any>("")

  constructor(private _apiService: ApiService) {
    this.user.next({imgURL: localStorage.getItem("image"), Type: localStorage.getItem("Type")})
  }
  
  
  get() {
    return this._apiService.get("talent/checklogged/isLogged");
  }

  logout(){
    return this._apiService.post("talent/logout", "");
  }


  // user = new BehaviorSubject<User>(null);
  
}
