import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

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

    return this.http.post<any>(`${BASE_URL}/login`, body).pipe(
      map((usr: any) => usr.token),
      tap(token => localStorage['usr'] = token)
    );
  }

  logout() {
    localStorage.removeItem('usr');
  }
}
