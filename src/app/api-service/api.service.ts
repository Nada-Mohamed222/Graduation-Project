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
    return this._httpClient.post(`${environment.apiURL}/${url}`, body);
  }

  // get(url:string)
  //   {
  //     return this._httpClient.get(`${environment.apiURL}/${url}`);
  //   }

  // PUT(url:string,body:any)
  // {
  //   return this._httpClient.put(`${environment.apiURL}/${url}`,body);
  // }

  // delete(url:string)
  // {
  //   return this._httpClient.delete(`${environment.apiURL}/${url}`);
  // }
  // }
}
