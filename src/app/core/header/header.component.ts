import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { AuthActionTypes } from '../../auth/auth.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() title: string;
  public userInfo$: any;

  constructor(private store: Store<any>) {
    this.userInfo$ = this.store.select('auth', 'user').pipe(
      map(data => data ? data.user : null)
    );
  }

  logout() {
    this.store.dispatch({ type: AuthActionTypes.Logout });
  }
}
