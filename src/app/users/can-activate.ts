import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private authService: AuthorizationService, private router: Router) {

  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
