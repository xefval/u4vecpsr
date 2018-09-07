import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { AuthActionTypes } from '../../auth/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public err$: Observable<string>;
  public login = new FormControl();
  public pwd = new FormControl();

  constructor(private store: Store<any>) {
    this.err$ = store.pipe(select('auth', 'err'));
  }

  ngOnInit() {
  }

  onLoginClick() {
    this.store.dispatch({
      type: AuthActionTypes.Login,
      payload: {
        login: this.login.value,
        pwd: this.pwd.value
      }
    });
  }
}
