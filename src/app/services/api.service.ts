import { ApiResponse } from '../models/api-response';
import { environment } from './../../environments/environment';
import { FreelancerService } from './freelancer-service/freelancer.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _httpClient: HttpClient) { }

  get(url: string) {
    return this._httpClient.get(`${environment.apiURL}/${url}`, {
      withCredentials: true,
    });
  }

  getJobs(url: string, body: any) {
    return this._httpClient.post(`${environment.apiURL}/${url}`, body, {
      withCredentials: true,
    });
  }

  Loginpost(url: string, body: any) {
    return this._httpClient.post(`${environment.apiURL}/${url}`, body, {
      withCredentials: true,
    });
  }

  post(url: string, body: any) {
    return this._httpClient.post(`${environment.apiURL}/${url}`, body, {
      withCredentials: true,
    });
  }

  Patch(url: string, body: any) {
    return this._httpClient.patch(`${environment.apiURL}/${url}`, body, {
      withCredentials: true,
    });
  }

  delete(url: string) {
    return this._httpClient.delete(`${environment.apiURL}/${url}`, {
      withCredentials: true,
    });
  }

  logout(url: string){
    return this._httpClient.post(`${environment.apiURL}/${url}`,{
      withCredentials: true,
    })
  }
}
