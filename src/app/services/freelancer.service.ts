import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Freelancer } from '../models/freelancer';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private _apiServices:ApiService) { }

  login(freelancer:Freelancer)
  {
    return this._apiServices.post(`talent/login`,freelancer);
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
    return this._apiServices.Patch(`talent/abdoRoshdy`,freelancer)
  }

  get()
  {
    return this._apiServices.get(`freelancer/get`);
  }

  delete(id:number)
  {
    return this._apiServices.delete(`freelancer/delete?id=`+id);
  }
}
