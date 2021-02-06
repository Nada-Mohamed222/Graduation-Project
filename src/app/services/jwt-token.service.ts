import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  jwtToken: string;
  decodedToken: { [key: string]: string } ;

  constructor() { }

  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken(token:any) {
    let decodedToken:any = jwt_decode(token);
    localStorage.setItem("UserName",decodedToken.Username);
    console.log(decodedToken);
  }
}
