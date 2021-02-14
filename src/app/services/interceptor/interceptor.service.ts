import { SpinnerService } from './../loader/spinner.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public _loaderService: SpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loaderService.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(
        ()=>{
          this._loaderService.isLoading.next(false)
        }
      )
    )
  }
}
