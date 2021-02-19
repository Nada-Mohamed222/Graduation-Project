import { AuthService } from './../auth-service/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardedRoutesGuard implements CanActivate {
  constructor(private Router: Router, private _authService: AuthService){}
  isAllowed: boolean= false;
  isLogged = new Subject<Boolean>()

  canActivate(): boolean{
    this._authService.get().subscribe((response: any) => {
        console.log(response.message);
        this.isAllowed = true;
        this.isLogged.next(true)
        return true
    }, (error)=>{
      this.Router.navigateByUrl('/login');
      this.isAllowed = false;
      this.isLogged.next(false)
    }
    )
    return this.isAllowed
  }
}
