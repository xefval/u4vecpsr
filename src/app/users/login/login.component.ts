import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usrLogin: string;
  public usrPwd: string;
  public err: string;

  constructor(public authService: AuthorizationService, private router: Router) {
    this.usrLogin = undefined;
    this.usrPwd = undefined;
    this.err = undefined;
  }

  ngOnInit() {
  }

  login() {
    if (this.authService.login(this.usrLogin, this.usrPwd)) {
      this.router.navigate(['list']);
    } else {
      this.err = 'Wrong username or password';
    }
  }
}
