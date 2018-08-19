import { Injectable } from '@angular/core';
import { Observable, throwError, Subject, BehaviorSubject, observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';

const BASE_URL = 'http://localhost:3004/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public userInfo: Subject<any>;

  constructor(private http: HttpClient) {
    this.userInfo = new BehaviorSubject(null);

    setTimeout(() => {
      this.updateUserInfo();
    }, 1000);
  }

  isAuthenticated(): string {
    return localStorage.usr;
  }

  updateUserInfo(): void {
    this.http.post<any>(`${BASE_URL}/userInfo`, null).subscribe(
      user => this.userInfo.next(user)
    );
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
          this.updateUserInfo();
          observer.next(true);
        },
        err => observer.error(err),
        () => observer.complete()
      );
    });
  }

  logout() {
    localStorage.removeItem('usr');
    this.userInfo.next(null);
  }
}
