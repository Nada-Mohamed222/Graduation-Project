import { ApiService } from './../api.service';
import { User } from './../../models/user';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _apiService: ApiService) {}

  
  get() {
    return this._apiService.get("talent/checklogged/isLogged");
  }

  logout(){
    return this._apiService.post("talent/logout", "");
  }

  // user = new BehaviorSubject<User>(null);
  
}
