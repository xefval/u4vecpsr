import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { AuthActionTypes, Login, Logout, LoginSuccess, LoginFailure, UpdateUserInfo } from './auth.reducer';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((auth: any) =>
      this.authService.login(auth.login, auth.pwd).pipe(
        map(user => new LoginSuccess({ user })),
        catchError(error => of(new LoginFailure(error.error)))
      )
    )
  );

  @Effect()
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    exhaustMap(() => this.authService.loadUserInfo().pipe(
      map(user => new UpdateUserInfo({ user }))
    ))
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    tap(() => {
      this.authService.logout();
    })
  );

}
