import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private authService: AuthorizationService, private router: Router) {

  }

  canActivate(): Observable<boolean> {
    if (this.authService.isAuthenticated()) {
      return of(true);
    } else {
      this.router.navigate(['login']);
      return of(false);
    }
  }
}
