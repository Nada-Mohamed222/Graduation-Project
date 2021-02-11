import { Client } from '../../models/client';
import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private _apiServices: ApiService) {}

  login(client: Client) {
    return this._apiServices.Loginpost(`employer/login`, client);
  }

  signUp(client: Client) {
    return this._apiServices.post(`employer/signup`, client);
  }

  // create(freelancer: Freelancer) {
  //   return this._apiServices.post(`freelancer/post`, freelancer);
  // }

  // update(freelancer: any) {
  //   return this._apiServices.Patch(
  //     `talent/${localStorage.getItem('UserName')}`,
  //     freelancer
  //   );
  // }

  getClient() {
    return this._apiServices.get(
      `employer/${localStorage.getItem('UserName')}`
    );
  }

  getAllJobs() {
    return this._apiServices.get('job');
  }

  getAJob(id: string) {
    return this._apiServices.get(`job/` + id);
  }

  getAllEmployerJob(UserName: string) {
    return this._apiServices.get(`employer/${UserName}/jobs`);
  }

  delete(id: number) {
    return this._apiServices.delete(`freelancer/delete?id=` + id);
  }
}
