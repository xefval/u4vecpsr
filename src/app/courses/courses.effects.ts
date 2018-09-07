import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map, withLatestFrom, debounceTime, filter } from 'rxjs/operators';

import { CoursesService } from './courses.service';
import { CoursesActionTypes, LoadNextPage, PageLoaded, PagesUpdated, Search, Delete, Edit, Found, Create } from './courses.reducer';

@Injectable()
export class CoursesEffects {

  @Effect()
  create$ = this.actions$.pipe(
    ofType<Create>(CoursesActionTypes.Create),
    map(action => action.payload.course),
    exhaustMap((id) => this.coursesService.create(id)),
    withLatestFrom(this.store$.select('courses')),
    exhaustMap(([action, courses]) => this.coursesService.loadPage(0, courses.pageNum * courses.itemsPerPage).pipe(
      map(data => new PagesUpdated({ data }))
    ))
  );

  @Effect()
  loadNextPage$ = this.actions$.pipe(
    ofType<LoadNextPage>(CoursesActionTypes.LoadNextPage),
    withLatestFrom(this.store$.select('courses')),
    exhaustMap(([action, courses]) => this.coursesService.loadPage(courses.pageNum * courses.itemsPerPage, courses.itemsPerPage).pipe(
      map(data => new PageLoaded({ data }))
    ))
  );

  @Effect()
  delete$ = this.actions$.pipe(
    ofType<Delete>(CoursesActionTypes.Delete),
    map(action => action.payload.id),
    exhaustMap((id) => this.coursesService.delete(id)),
    withLatestFrom(this.store$.select('courses')),
    exhaustMap(([action, courses]) => {
      if (courses.searchString) {
        return this.coursesService.search(courses.searchString).pipe(
          map(data => new Found({ data }))
        );
      } else {
        return this.coursesService.loadPage(0, courses.pageNum * courses.itemsPerPage).pipe(
          map(data => new PagesUpdated({ data }))
        );
      }
    })
  );

  @Effect()
  edit$ = this.actions$.pipe(
    ofType<Edit>(CoursesActionTypes.Edit),
    map(action => action.payload.course),
    exhaustMap((id) => this.coursesService.put(id)),
    withLatestFrom(this.store$.select('courses')),
    exhaustMap(([action, courses]) => this.coursesService.loadPage(0, courses.pageNum * courses.itemsPerPage).pipe(
      map(data => new PagesUpdated({ data }))
    ))
  );

  @Effect()
  search$ = this.actions$.pipe(
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
