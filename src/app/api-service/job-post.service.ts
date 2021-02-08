import { Job } from '../models/job';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobPost {
  constructor(private _apiService: ApiService) {}

  postJob(job: Job) {
    //post job to firebase
    // return this._apiService.post(``, job);

    //post job to api
    return this._apiService.post(`job/Add-job/employer1`, job);
  }

  getJobs() {
    return this._apiService.get(`employer/employer1/jobs`);
  }
}
