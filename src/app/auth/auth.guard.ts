import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(
    private store: Store<any>
  ) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(select('auth', 'loggedIn'));
  }
}
