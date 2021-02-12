import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';
import { Freelancer } from '../../models/freelancer';
import { HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FreelancerService {
  constructor(private _apiServices: ApiService) {}

  login(user: {}, type?: string) {
    return this._apiServices.Loginpost(`${type}/login`, user);
  }

  signUp(freelancer: Freelancer, type: string) {
    return this._apiServices.post(`${type}/signup`, freelancer);
  }

  update(freelancer: any) {
    return this._apiServices.Patch(
      `talent/${localStorage.getItem('UserName')}`,
      freelancer
    );
  }

  get() {
    return this._apiServices.get(`talent/${localStorage.getItem('UserName')}`);
  }

  getLogin(type: string) {
    return this._apiServices.get(`${type}/${localStorage.getItem('UserName')}`);
  }

  getByUserName(username: string) {
    return this._apiServices.get(`talent/${username}`);
  }

  getAllJobs() {
    return this._apiServices.get('job');
  }

  searchBySkill(skill: string) {
    return this._apiServices.get(`job/search/${skill}`);
  }

  getAJob(id: string) {
    return this._apiServices.get(`job/` + id);
  }
  delete(id: string) {
    return this._apiServices.delete(`freelancer/delete?id=` + id);
  }

  submitForm(id: String, proposal: Object) {
    return this._apiServices.post(
      `job/${id}/${localStorage.getItem('UserName')}/propose`,
      proposal
    );
  }

  getAllProposals() {
    return this._apiServices.get(
      `talent/${localStorage.getItem('UserName')}/proposals`
    );
  }

  getFreelancerProfile(userName: string) {
    return this._apiServices.get(`talent/${userName}`);
  }
}
