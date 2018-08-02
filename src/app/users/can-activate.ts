import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor() {

  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
