import { AuthService } from './../auth-service/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardedRoutesGuard implements CanActivate {
  constructor(private Router: Router, private _authService: AuthService){}


  checkType(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this._authService.isLogged) 
    {
      const userRole = localStorage.getItem("Type")
      console.log(userRole)
      if (route.data.role && route.data.role.indexOf(userRole) === -1) {
        this.Router.navigate(['/']);
        return false;
      }
      return true;
    }

    this.Router.navigate(['/']);
    return false;
  }

  

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    this._authService.get().subscribe((response: any) => {
        console.log(response.message);
        this._authService.isLogged.next(true)
    }, (error)=>{
      this._authService.isLogged.next(false)
    }
    )
    let url: string = state.url;
    return this.checkType(next, url);
  }
}

  