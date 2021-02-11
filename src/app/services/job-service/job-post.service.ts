import { Job } from '../../models/job';
import { ApiService } from '../api.service';
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
    return this._apiService.post(
      `job/Add-job/${localStorage.getItem('UserName')}`,
      job
    );
  }

  getJobs() {
    console.log(localStorage.getItem('UserName'));

    return this._apiService.get(
      `employer/${localStorage.getItem('UserName')}/jobs`
    );
  }
}
