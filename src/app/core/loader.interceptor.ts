import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { LoaderService } from './loader/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(public loader: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loader.show();

    return next.handle(req).pipe(
      finalize(
        () => this.loader.hide())
    );
  }
}
