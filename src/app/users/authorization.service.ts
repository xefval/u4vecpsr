import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private users;
  private genToken = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  constructor() {
    this.users = loadUsersBase();
    console.log(this.users)
  }

  login(login: string, pwd: string) {
    if (this.users[login] && this.users[login].pwd === pwd) {
      const token: string = this.genToken();

      this.users[login].token = token;

      localStorage.user = JSON.stringify({
        name: this.users[login].name,
        login: login,
        token: token,
      });

      updateUsersBase(this.users);

      return true;
    }

    return false;
  }

  logout(): boolean {
    const userInfo = localStorage.user && JSON.parse(localStorage.user);

    if (userInfo && this.users[userInfo.login] && this.users[userInfo.login].token === userInfo.token) {
      this.users[userInfo.login].token = null;
      updateUsersBase(this.users);
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

function loadUsersBase() {
  const newUsers = {
      user: {
        name: 'Test user',
        login: 'user',
        pwd: 'pwd',
        token: null
      },
      user1: {
        name: 'Test user1',
        login: 'user1',
        pwd: 'pwd1',
        token: null
      }
    };

  return localStorage.usersDB ? JSON.parse(localStorage.usersDB) : newUsers;
}

function updateUsersBase(users) {
  localStorage.usersDB = JSON.stringify(users);
}
