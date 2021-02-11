import { ApiService } from '../api.service';
import { Injectable } from '@angular/core';
import { Freelancer } from '../../models/freelancer';
import { HttpHeaders, HttpRequest } from '@angular/common/http';

<<<<<<< HEAD
@Injectable({
  providedIn: 'root',
})
export class FreelancerService {
  constructor(private _apiServices: ApiService) {}

  login(freelancer: Freelancer) {
    return this._apiServices.Loginpost(`talent/login`, freelancer);
  }

  signUp(freelancer: Freelancer) {
    return this._apiServices.post(`talent/signup`, freelancer);
  }

  create(freelancer: Freelancer) {
    return this._apiServices.post(`talent/post`, freelancer);
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

  getFreelancerProfile(userName: string) {
    return this._apiServices.get(`talent/${userName}`);
  }
  getAllJobs() {
    return this._apiServices.get('job');
=======


@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private _apiServices: ApiService) { }

  login(freelancer: Freelancer, type: string) {
    return this._apiServices.Loginpost(`${type}/login`, freelancer);
  }

  signUp(freelancer: Freelancer, type: string) {
    return this._apiServices.post(`${type}/signup`, freelancer);
  }

  update(freelancer: any) {
    return this._apiServices.Patch(`talent/${localStorage.getItem("UserName")}`, freelancer)
  }

  get() {
    return this._apiServices.get(`talent/${localStorage.getItem("UserName")}`);
  }
  
  getByUserName(username:string) {
    return this._apiServices.get(`talent/${username}`);
  }

  getAllJobs() {
    return this._apiServices.get("job");
>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
  }

  searchBySkill(skill: string) {
    return this._apiServices.get(`job/search/${skill}`);
  }

  getAJob(id: string) {
    return this._apiServices.get(`job/` + id);
  }
<<<<<<< HEAD
  delete(id: number) {
    return this._apiServices.delete(`freelancer/delete?id=` + id);
  }
=======
  delete(id: string) {
    return this._apiServices.delete(`freelancer/delete?id=` + id);
  }

  submitForm(id: String, proposal: Object){
    return this._apiServices.post(`job/${id}/${localStorage.getItem("UserName")}/propose`, proposal)
  }

  getAllProposals(){
    return this._apiServices.get(`talent/${localStorage.getItem("UserName")}/proposals`)
  }
>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
}
