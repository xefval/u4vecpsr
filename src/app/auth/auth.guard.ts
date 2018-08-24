import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

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
