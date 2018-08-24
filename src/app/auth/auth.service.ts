import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

    return new Observable((observer) => {
      this.http.post<any>(`${BASE_URL}/login`, body).subscribe(
        (usr: any) => {
          localStorage['usr'] = usr.token;
          observer.next(usr);
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
