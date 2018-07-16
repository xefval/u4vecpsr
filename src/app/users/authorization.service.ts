import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private users = {
    user: {
      name: 'Test user',
      login: 'user',
      pwd: 'pwd',
      token: null
    }
  };
  private genToken = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  constructor() { }

  login(login: string, pwd: string) {
    if (this.users[login] && this.users[login].pwd === pwd) {
      const token: string = this.genToken();

      this.users[login].token = token;

      localStorage.user = JSON.stringify({
        name: this.users[login].name,
        login: login,
        token: token,
      });
      return true;
    }

    return false;
  }

  logout(): boolean {
    const userInfo = localStorage.user && JSON.parse(localStorage.user);

    if (userInfo && this.users[userInfo.login] && this.users[userInfo.login].token === userInfo.token) {
      this.users[userInfo.login].token = null;
      localStorage.removeItem('user');
      return true;
    }
    return false;
  }

  isAuthenticated() {
    const userInfo = localStorage.user && JSON.parse(localStorage.user);

    return (userInfo && this.users[userInfo.login] && this.users[userInfo.login].token === userInfo.token) || false;
  }

  getUserInfo() {
    const userInfo = localStorage.user && JSON.parse(localStorage.user);

    return userInfo ? userInfo.name : 'Unauthorised user';
  }
}
