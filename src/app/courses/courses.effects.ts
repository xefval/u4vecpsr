import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { flatMap, exhaustMap, map, tap, withLatestFrom } from 'rxjs/operators';

import { CoursesService } from './courses-provider.service';
import { CoursesActionTypes, LoadNextPage, PageLoaded } from './courses.reducer';

@Injectable()
export class CoursesEffects {

  @Effect()
  loadNextPage$ = this.actions$.pipe(
    ofType<LoadNextPage>(CoursesActionTypes.LoadNextPage),
    withLatestFrom(this.store$.select('courses')),
    exhaustMap(([action, courses]) => this.coursesService.loadPage(courses.pageNum, (courses.pageNum + 1) * courses.itemsPerPage).pipe(
      map(data => new PageLoaded({ data }))
    ))
  );
/*
  @Effect()
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    exhaustMap(() => this.authService.loadUserInfo().pipe(
      map(user => new UpdateUserInfo({ user })),
      tap(() => this.router.navigate(['']))
    ))
  );

  @Effect()
  loadToken$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoadToken),
    exhaustMap(() => this.authService.loadUserInfo().pipe(
      map(user => new UpdateUserInfo({ user })),
      tap(() => this.router.navigate(['']))
    ))
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    tap(() => {
      this.authService.logout();
      this.router.navigate(['login']);
    })
  ); */

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store$: Store<any>
  ) {}

}
