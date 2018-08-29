import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { flatMap, exhaustMap, map, tap, withLatestFrom, debounceTime, filter } from 'rxjs/operators';

import { CoursesService } from './courses-provider.service';
import { CoursesActionTypes, LoadNextPage, PageLoaded, Search, ClearFound, Found } from './courses.reducer';

@Injectable()
export class CoursesEffects {

  @Effect()
  loadNextPage$ = this.actions$.pipe(
    ofType<LoadNextPage>(CoursesActionTypes.LoadNextPage),
    withLatestFrom(this.store$.select('courses')),
    exhaustMap(([action, courses]) => this.coursesService.loadPage(courses.pageNum * courses.itemsPerPage, courses.itemsPerPage).pipe(
      map(data => new PageLoaded({ data }))
    ))
  );

  @Effect()
  Search$ = this.actions$.pipe(
    ofType<Search>(CoursesActionTypes.Search),
    map(action => action.payload.text),
    debounceTime(500),
    filter(text => text.length === 0 || text.length > 2),
    exhaustMap((text) => this.coursesService.search(text).pipe(
      map(data => new Found({ data }))
    ))
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store$: Store<any>
  ) {}

}
