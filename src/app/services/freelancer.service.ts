import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Freelancer } from '../models/freelancer';
import { HttpHeaders, HttpRequest  } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  
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

  getAllJobs(){
    return this._apiServices.get("job");
  }

  getAJob(id:number){
    return this._apiServices.get(`job/`+id);
  }
  delete(id:number)
  {
    return this._apiServices.delete(`freelancer/delete?id=`+id);
  }
}
