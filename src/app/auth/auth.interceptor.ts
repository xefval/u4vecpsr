import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Store, select } from '@ngrx/store';
import { first, flatMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: Store<any>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select('auth', 'token').pipe(
      first(),
      flatMap(token => {
        const authReq = !!token ? req.clone({
          setHeaders: { Authorization: token },
        }) : req;
        return next.handle(authReq);
      }),
    );
  }
}
