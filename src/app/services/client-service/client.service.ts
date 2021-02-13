import { Client } from 'src/app/models/client';
import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private _apiServices: ApiService) {}

  login(Client: Client) {
    return this._apiServices.Loginpost(`employer/login`, Client);
  }

  signUp(Client: Client) {
    return this._apiServices.post(`employer/signup`, Client);
  }

  create(Client: Client) {
    return this._apiServices.post(`employer/post`, Client);
  }

  update(Client: any) {
    return this._apiServices.Patch(
      `talent/${localStorage.getItem('UserName')}`,
      Client
    );
  }

  getClient() {
    return this._apiServices.get(
      `employer/${localStorage.getItem('UserName')}`
    );
  }

  //

  getJobProposal(jobId?: string) {
    return this._apiServices.get(`job/${jobId}/proposals`);
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
    return this._apiServices.delete(`employer/delete?id=` + id);
  }
}
