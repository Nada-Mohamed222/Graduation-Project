import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _httpClient: HttpClient) {}
  // body >> data to be sent
  post(url: string, body: any) {
    //post to api
    return this._httpClient.post(`${environment.apiURL}${url}`, body);

    //post to firebase
    //return this._httpClient.post(`${environment.apiURL}`, body);
  }

  get(url: string) {
    // return this._httpClient.get(`${environment.apiURL}`);
    return this._httpClient.get(`${environment.apiURL}${url}`);
  }
}
