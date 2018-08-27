import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AuthActionTypes } from '../../auth/auth.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  public userInfo$: any;

  constructor(private store: Store<any>) {
    this.userInfo$ = store.pipe(select('auth', 'user'));

    store.pipe(select('auth', 'user')).subscribe(
      //x => console.log(x)
    );
  }

  ngOnInit() {}

  logout() {
    this.store.dispatch({ type: AuthActionTypes.Logout });
  }
}
