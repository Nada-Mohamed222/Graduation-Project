// import { AuthService } from './auth.service';
// import {
//   HttpHandler,
//   HttpHeaders,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { exhaustMap, take } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthInterceptorsService implements HttpInterceptor {
//   constructor(private _authService: AuthService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     return this._authService.user.pipe(
//       take(1),
//       exhaustMap((user) => {
//         if (!user) {
//           return next.handle(req);
//         }
//         const authnicatedReq = req.clone({
//           headers: req.headers.append('auth', user.token),
//         });
//         return next.handle(authnicatedReq);
//       })
//     );
//   }
// }
