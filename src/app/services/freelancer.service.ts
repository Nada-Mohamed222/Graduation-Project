import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Freelancer } from '../models/freelancer';
import { HttpHeaders, HttpRequest  } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  
  // options = new HttpHeaders({'Content-Type': 'application/json', 'Content-Length': '99999' });
  // options = new HttpHeaders().set('Content-Type', 'application/json').set();
  // options3 = new HttpHeaders().set('withCredentials', true);


  // headers = new HttpHeaders();
  // options = this.headers.set('Content-Type', 'application/json', 'Content-Length', 99999,'withCredentials', true );
  
  constructor(private _apiServices:ApiService) { }

  login(freelancer:Freelancer)
  {
    return this._apiServices.Loginpost(`talent/login`,freelancer);
  }

  signUp(freelancer:Freelancer)
  {
    return this._apiServices.post(`talent/signup`,freelancer);
  }

  create(freelancer:Freelancer)
  {
    return this._apiServices.post(`freelancer/post`,freelancer);
  }

  update(freelancer:any)
  {
    return this._apiServices.Patch(`talent/${localStorage.getItem("UserName")}`,freelancer)
  }

  get()
  {
    return this._apiServices.get(`talent/${localStorage.getItem("UserName")}`);
  }

  delete(id:number)
  {
    return this._apiServices.delete(`freelancer/delete?id=`+id);
  }
}
