import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';

const BASE_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private users;

  constructor(private http: HttpClient) {}

  isAuthenticated(): string {
    return localStorage.usr;
  }

  getUserInfo(): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/userInfo`, null)
  }

  login(login: string, pwd: string): Observable<any> {
    const body = {
      login: login,
      password: pwd
    };

    return new Observable((observer) => {
      this.http.post<any>(`${BASE_URL}/login`, body).subscribe(
        x => {
          localStorage.usr = x.token;
          observer.next(true); 
        },
        err => {
          observer.error(err)
        },
        () => observer.complete()
      );
    });
  }

  logout() {
    localStorage.removeItem('usr');
  }
}
