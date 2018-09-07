import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService } from './auth/auth.service';
import { AuthActionTypes } from './auth/auth.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(
    private auth: AuthService,
    private store: Store<any>
  ) {
    this.title = '';
  }

  ngOnInit() {
    this.title = 'Videocourses';
    const token = this.auth.isAuthenticated();

    if (token) {
      this.store.dispatch({
          type: AuthActionTypes.LoadToken,
          payload: { token: token }
        });
    } else {
      this.store.dispatch({
          type: AuthActionTypes.Logout
        });
    }
  }
}
