import { environment } from './../../environments/environment';
import { FreelancerService } from './freelancer.service';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient, private _freelancerServices:FreelancerService) { }


  get(url:string){
    return this._httpClient.get(`${environment.apiURL}/${url}`)
  }

  post(url:string,body:any)
  {
    return this._httpClient.post(`${environment.apiURL}/${url}`,body);
  }

  PUT(url:string,body:any)
  {
    return this._httpClient.put(`${environment.apiURL}/${url}`,body);
  }

  delete(url:string)
  {
    return this._httpClient.delete(`${environment.apiURL}/${url}`);
  }

}
