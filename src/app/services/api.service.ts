import { ApiResponse } from '../models/api-response';
import { environment } from './../../environments/environment';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
import { FreelancerService } from './freelancer-service/freelancer.service';
import { HttpClient} from '@angular/common/http';
>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _httpClient: HttpClient) {}

<<<<<<< HEAD
  get(url: string) {
    return this._httpClient.get(`${environment.apiURL}/${url}`);
=======
  constructor(private _httpClient:HttpClient) { }

  get(url:string){
    return this._httpClient.get(`${environment.apiURL}/${url}`,{withCredentials:true})
>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
  }

  Loginpost(url: string, body: any) {
    return this._httpClient.post(`${environment.apiURL}/${url}`, body, {
      withCredentials: true,
    });
  }

<<<<<<< HEAD
  post(url: string, body: any) {
    return this._httpClient.post(`${environment.apiURL}/${url}`, body, {
      withCredentials: true,
    });
=======
  post(url:string,body:any)
  {
    return this._httpClient.post(`${environment.apiURL}/${url}`,body,{withCredentials:true});
>>>>>>> 1ac3843f8d2dddca8e8bb87f444211384526ffb8
  }

  Patch(url: string, body: any) {
    return this._httpClient.patch(`${environment.apiURL}/${url}`, body, {
      withCredentials: true,
    });
  }

  delete(url: string) {
    return this._httpClient.delete(`${environment.apiURL}/${url}`);
  }
}

//   get(url: string) {
//     return this._httpClient.get(`${environment.apiURL}/${url}`);
//   }

//   Loginpost(url: string, body: any) {
//     return this._httpClient.post(`${environment.apiURL}/${url}`, body, {
//       withCredentials: true,
//     });
//   }

//   post(url: string, body: any) {
//     return this._httpClient.post(
//       `${environment.apiURL}/${url}`,
//       body,

//       { withCredentials: true }
//     );
//   }

//   Patch(url: string, body: any) {
//     return this._httpClient.patch(`${environment.apiURL}/${url}`, body, {
//       withCredentials: true,
//     });
//   }

//   delete(url: string) {
//     return this._httpClient.delete(`${environment.apiURL}/${url}`);
//   }
// }
