import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { AuthActionTypes } from '../auth/auth.reducer';
import { timeout } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private store: Store<any>,
    private http: HttpClient
  ) {
    const token = this.isAuthenticated();

    if (token) {
      setTimeout(() => {
        this.store.dispatch({
            type: AuthActionTypes.LoadToken,
            payload: { token: token }
          });
      });
    }
  }

  isAuthenticated(): string {
    return localStorage['usr'];
  }

  loadUserInfo(): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/userInfo`, null);
  }

  login(login: string, pwd: string): Observable<any> {
    const body = {
      login: login,
      password: pwd
    };

    return new Observable((observer) => {
      this.http.post<any>(`${BASE_URL}/login`, body).subscribe(
        (usr: any) => {
          localStorage['usr'] = usr.token;
          observer.next(usr.token);
        },
        err => observer.error(err),
        () => observer.complete()
      );
    });
  }

  logout() {
    localStorage.removeItem('usr');
  }
}
