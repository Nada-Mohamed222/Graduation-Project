import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';
import { Freelancer } from '../../models/freelancer';
import { HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FreelancerService {
  constructor(private _apiServices: ApiService) { }

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

  getFreelancerPublic(UserName: string) {
    return this._apiServices.get(`talent/${UserName}`);
  }

  getFreelancerAuth() {
    return this._apiServices.get(`talent/auth/${localStorage.getItem('UserName')}`);
  }


  getFreelancerJobsPublic(UserName: string) {
    return this._apiServices.get(`talent/${UserName}/jobs`);
  }


  getLogin(type: string) {
    return this._apiServices.get(`${type}/auth/${localStorage.getItem('UserName')}`);
  }

  getByUserName(username: string) {
    return this._apiServices.get(`talent/${username}`);
  }

  getAllJobs(PageNumber: object) {
    return this._apiServices.getJobs('job', PageNumber);
  }

  getAllJobsAuth(Status: String) {
    return this._apiServices.get(`talent/auth/${localStorage.getItem('UserName')}/jobs/${Status}`);
  }

  getAllSavedJobsAuth() {
    return this._apiServices.get(`talent/${localStorage.getItem('UserName')}/saved-jobs`);
  }

  searchBySkill(skill: string, PageNumber: object) {
    return this._apiServices.post(`job/${skill}`, PageNumber);
  }

  getAJob(id: string) {
    return this._apiServices.get(`job/` + id);
  }
  delete(id: string) {
    return this._apiServices.delete(`freelancer/delete?id=` + id);
  }

  submitProposal(id: String, proposal: Object) {
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

  saveNewJob(JobID: String) {
    return this._apiServices.post(`talent/${localStorage.getItem('UserName')}/${JobID}/save`, "");
  }

  removeSavedJob(JobID: String) {
    return this._apiServices.delete(`talent/${localStorage.getItem('UserName')}/${JobID}/save`);
  }
}
