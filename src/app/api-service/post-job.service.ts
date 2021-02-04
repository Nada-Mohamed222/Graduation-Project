import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostJob {
  constructor(private _apiService: ApiService) {}

  add(job: string) {
    return this._apiService.post(`task/post`, job);
  }
}
